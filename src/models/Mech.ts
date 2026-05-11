import { Character } from './Character';

export interface MechState {
    x: number;
    y: number;
    width: number;
    height: number;
    health: number;
    maxHealth: number;
    color: string;
    darkColor: string;
    lightColor: string;
    emoji: string;
    charId: string;
    isAttacking: boolean;
    isDefending: boolean;
    attackCooldown: number;
    facingRight: boolean;
    attackTimer: number;
    defendTimer: number;
    speed: number;
    poisonTicks: number;
    shieldActive: boolean;
    lastRegen: number;
}

export class Mech {
    public x: number;
    public y: number;
    public width: number = 50;
    public height: number = 60;
    public health: number;
    public maxHealth: number;
    public color: string;
    public darkColor: string;
    public lightColor: string;
    public emoji: string;
    public charId: string;
    public isAttacking: boolean = false;
    public isDefending: boolean = false;
    public attackCooldown: number = 0;
    public facingRight: boolean = true;
    public attackTimer: number = 0;
    public defendTimer: number = 0;
    public speed: number;
    public poisonTicks: number = 0;
    public shieldActive: boolean = false;
    public lastRegen: number = 0;

    constructor(x: number, y: number, character: Character, facingRight: boolean) {
        this.x = x;
        this.y = y;
        this.color = character.color;
        this.darkColor = character.darkColor;
        this.lightColor = character.lightColor;
        this.emoji = character.emoji;
        this.charId = character.id;

        this.maxHealth = character.id === 'titan' ? 150 : 100;
        this.health = this.maxHealth;
        this.speed = character.id === 'shadow' ? 4.5 : 3;
        this.facingRight = facingRight;
    }

    public toState(): MechState {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            health: this.health,
            maxHealth: this.maxHealth,
            color: this.color,
            darkColor: this.darkColor,
            lightColor: this.lightColor,
            emoji: this.emoji,
            charId: this.charId,
            isAttacking: this.isAttacking,
            isDefending: this.isDefending,
            attackCooldown: this.attackCooldown,
            facingRight: this.facingRight,
            attackTimer: this.attackTimer,
            defendTimer: this.defendTimer,
            speed: this.speed,
            poisonTicks: this.poisonTicks,
            shieldActive: this.shieldActive,
            lastRegen: this.lastRegen
        };
    }

    public updateTimers(): void {
        if (this.attackCooldown > 0) this.attackCooldown--;
        if (this.attackTimer > 0) {
            this.attackTimer--;
            if (this.attackTimer === 0) this.isAttacking = false;
        }
        if (this.defendTimer > 0) {
            this.defendTimer--;
            if (this.defendTimer === 0) this.isDefending = false;
        }
    }

    public applyDamage(amount: number): void {
        this.health = Math.max(0, this.health - amount);
    }

    public heal(amount: number): void {
        this.health = Math.min(this.maxHealth, this.health + amount);
    }
}
