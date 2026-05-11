import { Character } from '../models/Character';
import { Scene } from '../models/Scene';
import { GameViewModel } from '../viewmodels/GameViewModel';

export class GameView {
    private viewModel: GameViewModel;
    private p1Character: Character | null = null;
    private p2Character: Character | null = null;

    constructor(private canvas: HTMLCanvasElement) {
        this.viewModel = new GameViewModel(
            canvas,
            (p1, p2) => this.updateHealthBars(p1, p2),
            (winner) => this.handleGameOver(winner)
        );
    }

    public startGame(p1Character: Character, p2Character: Character, scene: Scene): void {
        this.p1Character = p1Character;
        this.p2Character = p2Character;

        document.getElementById('p1Name')!.textContent = p1Character.name;
        document.getElementById('p2Name')!.textContent = p2Character.name;
        document.getElementById('p1ControlName')!.textContent = p1Character.name;
        document.getElementById('p2ControlName')!.textContent = p2Character.name;
        document.getElementById('gameOver')!.style.display = 'none';

        this.viewModel.startGame(p1Character, p2Character, scene);
    }

    private updateHealthBars(p1: number, p2: number): void {
        const mech1 = this.viewModel.getWinner() !== null ? 
            (this.p1Character!.id === 'titan' ? 150 : 100) : p1;
        const mech2 = this.viewModel.getWinner() !== null ? 
            (this.p2Character!.id === 'titan' ? 150 : 100) : p2;

        document.getElementById('health1')!.style.width = (p1 / mech1 * 100) + '%';
        document.getElementById('health2')!.style.width = (p2 / mech2 * 100) + '%';
    }

    private handleGameOver(winner: number): void {
        const winnerName = winner === 1 ? this.p1Character!.name : this.p2Character!.name;
        document.getElementById('winnerText')!.textContent = '🎉 ' + winnerName + ' 获胜！🎉';
        document.getElementById('gameOver')!.style.display = 'block';
    }

    public rematch(): void {
        if (this.p1Character && this.p2Character) {
            document.getElementById('gameOver')!.style.display = 'none';
            this.viewModel.rematch(this.p1Character, this.p2Character);
        }
    }

    public stopGame(): void {
        this.viewModel.stopGame();
        this.p1Character = null;
        this.p2Character = null;
    }
}
