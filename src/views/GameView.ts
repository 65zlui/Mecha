import { Character } from '../models/Character';
import { Scene } from '../models/Scene';
import { GameViewModel } from '../viewmodels/GameViewModel';
import { I18nService } from '../i18n/I18nService';

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

        const p1Name = I18nService.t('char.' + p1Character.id + '.name');
        const p2Name = I18nService.t('char.' + p2Character.id + '.name');
        document.getElementById('p1Name')!.textContent = p1Name;
        document.getElementById('p2Name')!.textContent = p2Name;
        document.getElementById('p1ControlName')!.textContent = p1Name;
        document.getElementById('p2ControlName')!.textContent = p2Name;
        document.getElementById('gameOver')!.style.display = 'none';

        this.viewModel.startGame(p1Character, p2Character, scene);
    }

    private updateHealthBars(p1: number, p2: number): void {
        const maxHealth1 = this.p1Character!.id === 'titan' ? 150 : 100;
        const maxHealth2 = this.p2Character!.id === 'titan' ? 150 : 100;

        document.getElementById('health1')!.style.width = (p1 / maxHealth1 * 100) + '%';
        document.getElementById('health2')!.style.width = (p2 / maxHealth2 * 100) + '%';
    }

    private handleGameOver(winner: number): void {
        const winnerChar = winner === 1 ? this.p1Character! : this.p2Character!;
        const winnerName = I18nService.t('char.' + winnerChar.id + '.name');
        document.getElementById('winnerText')!.textContent = I18nService.t('winText', { name: winnerName });
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
