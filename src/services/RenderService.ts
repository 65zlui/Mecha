import { Scene } from '../models/Scene';
import { MechState } from '../models/Mech';

export class RenderService {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')!;
    }

    public clear(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public drawBackground(scene: Scene): void {
        const gradient = this.ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, scene.skyColor);
        gradient.addColorStop(0.5, scene.bgColor1);
        gradient.addColorStop(1, scene.bgColor2);
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, 600, 400);

        this.ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 30; i++) {
            const starX = (i * 73) % 600;
            const starY = (i * 37) % 150;
            const starSize = (i % 3) + 1;
            this.ctx.fillRect(starX, starY, starSize, starSize);
        }

        this.ctx.fillStyle = scene.bgColor1;
        this.ctx.fillRect(0, 150, 600, 50);

        this.ctx.fillStyle = scene.groundColor;
        this.ctx.fillRect(0, 340, 600, 60);

        this.ctx.fillStyle = 'rgba(255,255,255,0.1)';
        for (let i = 0; i < 600; i += 20) {
            this.ctx.fillRect(i, 340, 10, 3);
        }
    }

    public drawPixelRect(x: number, y: number, w: number, h: number, color: string): void {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(Math.floor(x), Math.floor(y), w, h);
    }

    public drawMech(mech: MechState): void {
        const x = mech.x;
        const y = mech.y;
        const bounce = Math.sin(Date.now() / 150) * 2;

        this.ctx.save();

        if (!mech.facingRight) {
            this.ctx.translate(x + mech.width, 0);
            this.ctx.scale(-1, 1);
            this.ctx.translate(-x, 0);
        }

        this.drawPixelRect(x + 10, y + 20 + bounce, 30, 30, mech.color);
        this.drawPixelRect(x + 15, y + 5 + bounce, 20, 18, mech.color);
        this.drawPixelRect(x + 25, y + 10 + bounce, 8, 6, '#ffff00');
        this.drawPixelRect(x + 5, y + 25 + bounce, 8, 20, mech.darkColor);
        this.drawPixelRect(x + 37, y + 25 + bounce, 8, 20, mech.darkColor);

        if (mech.isAttacking) {
            this.drawPixelRect(x + 37, y + 20 + bounce, 30, 10, mech.lightColor);
            this.drawPixelRect(x + 62, y + 17 + bounce, 8, 16, '#ffd700');
        } else {
            this.drawPixelRect(x + 40, y + 30 + bounce, 8, 15, mech.darkColor);
        }

        this.drawPixelRect(x + 12, y + 50 + bounce, 10, 10, mech.darkColor);
        this.drawPixelRect(x + 28, y + 50 + bounce, 10, 10, mech.darkColor);

        if (mech.isDefending) {
            this.ctx.fillStyle = 'rgba(255, 215, 0, 0.4)';
            this.ctx.fillRect(x - 5, y - 5 + bounce, mech.width + 10, mech.height + 10);
            this.ctx.strokeStyle = '#ffd700';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(x - 5, y - 5 + bounce, mech.width + 10, mech.height + 10);
        }

        if (mech.poisonTicks > 0) {
            this.ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
            this.ctx.fillRect(x, y + bounce, mech.width, mech.height);
        }

        // 水晶护盾视觉效果：粉色发光圆形护盾
        if (mech.shieldActive) {
            const cx = x + mech.width / 2;
            const cy = y + mech.height / 2 + bounce;
            const radius = mech.width * 0.8;
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(255, 136, 255, 0.2)';
            this.ctx.fill();
            this.ctx.strokeStyle = '#ff88ff';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            // 护盾内光点
            const pulse = Math.sin(Date.now() / 200) * 0.3 + 0.5;
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, radius * 0.5, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 200, 255, ${pulse * 0.3})`;
            this.ctx.fill();
        }

        this.ctx.restore();
    }
}
