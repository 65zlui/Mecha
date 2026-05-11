import { GameEngine } from '../core/GameEngine';
import { Character } from '../models/Character';
import { Scene } from '../models/Scene';
import { InputService } from '../services/InputService';
import { RenderService } from '../services/RenderService';
import { Mech } from '../models/Mech';

export class GameViewModel {
    private gameEngine: GameEngine;
    private inputService: InputService;
    private renderService: RenderService;
    private scene: Scene | null = null;
    private animationFrameId: number | null = null;

    constructor(
        private canvas: HTMLCanvasElement,
        private onHealthUpdate: (p1: number, p2: number) => void,
        private onGameOver: (winner: number) => void
    ) {
        this.renderService = new RenderService(canvas);
        this.inputService = InputService.getInstance();
        this.gameEngine = new GameEngine({
            onGameOver: this.onGameOver,
            onHealthUpdate: this.onHealthUpdate
        });
    }

    public startGame(p1Character: Character, p2Character: Character, scene: Scene): void {
        this.scene = scene;
        this.gameEngine.initialize(p1Character, p2Character);
        this.startGameLoop();
    }

    private startGameLoop(): void {
        const loop = () => {
            this.update();
            this.render();
            this.animationFrameId = requestAnimationFrame(loop);
        };
        loop();
    }

    private update(): void {
        const input1 = this.inputService.getPlayer1Input();
        const input2 = this.inputService.getPlayer2Input();
        this.gameEngine.update(input1, input2);
    }

    private render(): void {
        if (!this.scene) return;

        this.renderService.clear();
        this.renderService.drawBackground(this.scene);

        const mech1 = this.gameEngine.getMech1();
        const mech2 = this.gameEngine.getMech2();

        if (mech1) {
            this.renderService.drawMech(mech1.toState());
        }
        if (mech2) {
            this.renderService.drawMech(mech2.toState());
        }
    }

    public stopGame(): void {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        this.gameEngine.reset();
        this.scene = null;
    }

    public rematch(p1Character: Character, p2Character: Character): void {
        this.gameEngine.initialize(p1Character, p2Character);
    }

    public isGameOver(): boolean {
        return this.gameEngine.isGameOver();
    }

    public getWinner(): number | null {
        return this.gameEngine.getWinner();
    }
}
