import { Mech } from '../models/Mech';
import { Character } from '../models/Character';
import { Scene } from '../models/Scene';
import { InputState } from '../services/InputService';

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

        // 毒素伤害：每 1000ms 触发一次，共 poisonTicks 次
        if (mech.poisonTicks > 0) {
            if (mech.lastPoisonTick === 0) {
                mech.lastPoisonTick = now;
            }
            if (now - mech.lastPoisonTick >= 1000) {
                mech.applyDamage(2);
                mech.poisonTicks--;
                mech.lastPoisonTick = now;
            }
        }

        // 钢铁先锋：每 2000ms 恢复 3 点生命
        if (mech.charId === 'steel') {
            if (mech.lastRegen === 0) {
                mech.lastRegen = now;
            }
            if (now - mech.lastRegen >= 2000) {
                mech.heal(3);
                mech.lastRegen = now;
            }
        }

        // 自然之灵：血量低于50%时，每 1000ms 恢复 2 点生命
        if (mech.charId === 'nature') {
            const healthPercent = mech.health / mech.maxHealth;
            if (healthPercent < 0.5) {
                if (mech.lastNatureHeal === 0) {
                    mech.lastNatureHeal = now;
                }
                if (now - mech.lastNatureHeal >= 1000) {
                    mech.heal(2);
                    mech.lastNatureHeal = now;
                }
            } else {
                mech.lastNatureHeal = 0;
            }
        }

        // 水晶法师：每 8000ms 获得一次护盾（可抵挡一次攻击）
        if (mech.charId === 'crystal') {
            if (mech.lastShieldGain === 0) {
                mech.lastShieldGain = now;
            }
            if (!mech.shieldActive && now - mech.lastShieldGain >= 8000) {
                mech.shieldActive = true;
                mech.lastShieldGain = now;
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

                // 虚空行者：25%概率闪避攻击
                if (otherMech.charId === 'void' && Math.random() < 0.25) {
                    return;
                }

                // 基础伤害基于攻击属性计算：attackStat=50→~14, 70→~16, 95→~18
                const baseDamage = 15;
                let damage = Math.round(baseDamage * (0.6 + mech.attack / 150));

                // 赤焰战神：30%概率双倍伤害
                if (mech.charId === 'crimson' && Math.random() < 0.3) {
                    damage *= 2;
                }

                // 雷霆战将：闪电链额外伤害（攻击属性的30%）
                if (mech.charId === 'thunder') {
                    damage += Math.round(baseDamage * (mech.attack / 150) * 0.3);
                }

                // 水晶护盾：完全抵挡一次攻击并消耗护盾
                if (otherMech.shieldActive) {
                    otherMech.shieldActive = false;
                    otherMech.lastShieldGain = Date.now();
                    damage = 0;
                }

                // 防御减伤
                if (otherMech.isDefending) {
                    if (otherMech.charId === 'frost') {
                        // 霜冻守卫：防御时完全免疫
                        damage = 0;
                    } else {
                        // 基础减伤50%，防御属性额外提供减伤
                        // defenseStat=35→~57%, 70→~64%, 95→~74%
                        const defenseReduction = 0.5 + (otherMech.defense / 400);
                        damage = Math.floor(damage * (1 - defenseReduction));
                    }
                } else {
                    // 未防御时，防御属性也提供少量减伤
                    // defenseStat=35→~14%, 70→~28%, 95→~38%
                    const passiveDefense = otherMech.defense / 250;
                    damage = Math.floor(damage * (1 - passiveDefense));
                }

                damage = Math.max(1, damage); // 保证最少1点伤害
                otherMech.applyDamage(damage);

                // 毒液猎手：攻击附加毒素（持续5秒）
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
