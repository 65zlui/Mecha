import { Mech } from '../models/Mech';
import { Character } from '../models/Character';
import { Scene } from '../models/Scene';
import { InputState } from './InputService';

export interface GameEngineEvents {
    onGameOver: (winner: number) => void;
    onHealthUpdate: (p1Health: number, p2Health: number) => void;
}

export class GameEngine {
    private mech1: Mech | null = null;
    private mech2: Mech | null = null;
    private gameOver: boolean = false;
    private winner: number | null = null;
    private events: GameEngineEvents;

    constructor(events: GameEngineEvents) {
        this.events = events;
    }

    public initialize(p1Character: Character, p2Character: Character): void {
        this.mech1 = new Mech(100, 280, p1Character, true);
        this.mech2 = new Mech(450, 280, p2Character, false);
        this.gameOver = false;
        this.winner = null;
        this.notifyHealthUpdate();
    }

    public update(input1: InputState, input2: InputState): void {
        if (this.gameOver || !this.mech1 || !this.mech2) return;

        const now = Date.now();

        this.updateMech(this.mech1, input1, this.mech2, now);
        this.updateMech(this.mech2, input2, this.mech1, now);

        this.checkGameOver();
        this.notifyHealthUpdate();
    }

    private updateMech(mech: Mech, input: InputState, otherMech: Mech, now: number): void {
        mech.updateTimers();

        if (mech.poisonTicks > 0 && now % 60 === 0) {
            mech.applyDamage(2);
            mech.poisonTicks--;
        }

        if (mech.charId === 'steel' && now - mech.lastRegen > 2000) {
            mech.heal(3);
            mech.lastRegen = now;
        }

        if (mech.charId === 'nature') {
            const healthPercent = mech.health / mech.maxHealth;
            if (healthPercent < 0.5 && now % 1000 < 20) {
                mech.heal(2);
            }
        }

        const speed = mech.speed;
        if (input.up) mech.y = Math.max(200, mech.y - speed);
        if (input.down) mech.y = Math.min(340 - mech.height, mech.y + speed);
        if (input.left) {
            mech.x = Math.max(0, mech.x - speed);
            mech.facingRight = false;
        }
        if (input.right) {
            mech.x = Math.min(600 - mech.width, mech.x + speed);
            mech.facingRight = true;
        }

        if (input.attack && mech.attackCooldown === 0 && !mech.isDefending) {
            mech.isAttacking = true;
            mech.attackTimer = 15;
            mech.attackCooldown = 40;

            const attackRange = 80;
            const attackX = mech.facingRight ? mech.x + mech.width : mech.x - attackRange;

            if (attackX < otherMech.x + otherMech.width &&
                attackX + attackRange > otherMech.x &&
                mech.y < otherMech.y + otherMech.height &&
                mech.y + mech.height > otherMech.y) {

                if (otherMech.charId === 'void' && Math.random() < 0.25) {
                    return;
                }

                let damage = 15;

                if (mech.charId === 'crimson' && Math.random() < 0.3) {
                    damage *= 2;
                }

                if (otherMech.isDefending) {
                    if (otherMech.charId === 'frost') {
                        damage = 0;
                    } else {
                        damage = Math.floor(damage * 0.5);
                    }
                }

                otherMech.applyDamage(damage);

                if (mech.charId === 'venom') {
                    otherMech.poisonTicks = 5;
                }
            }
        }

        if (input.defend && !mech.isAttacking) {
            mech.isDefending = true;
            mech.defendTimer = 20;
        }
    }

    private checkGameOver(): void {
        if (this.mech1!.health <= 0) {
            this.gameOver = true;
            this.winner = 2;
            this.events.onGameOver(2);
        } else if (this.mech2!.health <= 0) {
            this.gameOver = true;
            this.winner = 1;
            this.events.onGameOver(1);
        }
    }

    private notifyHealthUpdate(): void {
        if (this.mech1 && this.mech2) {
            this.events.onHealthUpdate(this.mech1.health, this.mech2.health);
        }
    }

    public getMech1(): Mech | null {
        return this.mech1;
    }

    public getMech2(): Mech | null {
        return this.mech2;
    }

    public isGameOver(): boolean {
        return this.gameOver;
    }

    public getWinner(): number | null {
        return this.winner;
    }

    public reset(): void {
        this.mech1 = null;
        this.mech2 = null;
        this.gameOver = false;
        this.winner = null;
    }
}
