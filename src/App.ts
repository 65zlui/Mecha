import { SelectionViewModel } from './viewmodels/SelectionViewModel';
import { SelectionView } from './views/SelectionView';
import { GameView } from './views/GameView';

export class App {
    private selectionViewModel: SelectionViewModel;
    private selectionView: SelectionView;
    private gameView: GameView;
    private currentScreen: string = 'mainMenu';

    constructor() {
        const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
        
        this.selectionViewModel = new SelectionViewModel();
        this.selectionView = new SelectionView(
            this.selectionViewModel,
            () => this.showScreen('sceneSelection'),
            () => this.startGame()
        );
        this.gameView = new GameView(canvas);

        this.setupEventListeners();
    }

    private setupEventListeners(): void {
        (window as any).selectionView = this.selectionView;
        
        document.getElementById('resetBtn')?.addEventListener('click', () => this.backToMenu());
    }

    public showScreen(screenId: string): void {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId)?.classList.add('active');
        this.currentScreen = screenId;

        if (screenId === 'characterSelection') {
            this.selectionViewModel.reset();
            document.getElementById('toSceneBtn')!.disabled = true;
            this.selectionView.renderCharacterSelection();
        } else if (screenId === 'sceneSelection') {
            document.getElementById('startGameBtn')!.disabled = true;
            this.selectionView.renderSceneSelection();
        } else if (screenId === 'gameScreen') {
            const p1 = this.selectionView.getSelectedP1();
            const p2 = this.selectionView.getSelectedP2();
            const scene = this.selectionView.getCurrentScene();
            
            if (p1 && p2 && scene) {
                this.gameView.startGame(p1, p2, scene);
            }
        }
    }

    public startGame(): void {
        const p1 = this.selectionView.getSelectedP1();
        const p2 = this.selectionView.getSelectedP2();
        const scene = this.selectionView.getCurrentScene();

        if (p1 && p2 && scene) {
            this.showScreen('gameScreen');
        }
    }

    public backToMenu(): void {
        this.gameView.stopGame();
        this.selectionViewModel.reset();
        document.getElementById('toSceneBtn')!.disabled = true;
        document.getElementById('startGameBtn')!.disabled = true;
        this.showScreen('mainMenu');
    }

    public rematch(): void {
        this.gameView.rematch();
    }
}

(window as any).app = new App();

function showMainMenu() {
    (window as any).app.showScreen('mainMenu');
}

function showInstructions() {
    (window as any).app.showScreen('instructions');
}

function showCharacterSelection() {
    (window as any).app.showScreen('characterSelection');
}

function showSceneSelection() {
    const app = (window as any).app;
    if (app.selectionViewModel.canProceedToSceneSelection()) {
        app.showScreen('sceneSelection');
    }
}

function startGame() {
    const app = (window as any).app;
    if (app.selectionView.canProceedToSceneSelection && app.selectionView.getCurrentScene()) {
        app.startGame();
    }
}

function backToMenu() {
    (window as any).app.backToMenu();
}

function rematch() {
    (window as any).app.rematch();
}

(window as any).showMainMenu = showMainMenu;
(window as any).showInstructions = showInstructions;
(window as any).showCharacterSelection = showCharacterSelection;
(window as any).showSceneSelection = showSceneSelection;
(window as any).startGame = startGame;
(window as any).backToMenu = backToMenu;
(window as any).rematch = rematch;
