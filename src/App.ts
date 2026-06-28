import { SelectionViewModel } from './viewmodels/SelectionViewModel';
import { SelectionView } from './views/SelectionView';
import { GameView } from './views/GameView';
import { I18nService, Locale } from './i18n/I18nService';

export class App {
    private selectionViewModel: SelectionViewModel;
    private selectionView: SelectionView;
    private gameView: GameView;
    private currentScreen: string = 'mainMenu';

    constructor() {
        const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
        
        // Initialize i18n
        I18nService.loadSavedLocale();
        this.populateLanguageSelector();
        this.applyTranslations();

        this.selectionViewModel = new SelectionViewModel();
        this.selectionView = new SelectionView(
            this.selectionViewModel,
            () => this.showScreen('sceneSelection'),
            () => this.startGame()
        );
        this.gameView = new GameView(canvas);

        this.setupEventListeners();
    }

    private populateLanguageSelector(): void {
        const select = document.getElementById('langSelect') as HTMLSelectElement;
        if (!select) return;
        select.innerHTML = I18nService.getAvailableLocales()
            .map(l => `<option value="${l.code}" ${l.code === I18nService.getLocale() ? 'selected' : ''}>${l.name}</option>`)
            .join('');
    }

    public switchLanguage(locale: string): void {
        I18nService.setLocale(locale as Locale);
        this.applyTranslations();
        // Re-render current screen if in character/scene selection
        if (this.currentScreen === 'characterSelection') {
            this.selectionView.renderCharacterSelection();
        } else if (this.currentScreen === 'sceneSelection') {
            this.selectionView.renderSceneSelection();
        }
    }

    private applyTranslations(): void {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n')!;
            el.textContent = I18nService.t(key);
        });
        document.title = I18nService.t('title');
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
            (document.getElementById('toSceneBtn') as HTMLButtonElement).disabled = true;
            this.selectionView.renderCharacterSelection();
        } else if (screenId === 'sceneSelection') {
            (document.getElementById('startGameBtn') as HTMLButtonElement).disabled = true;
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
        (document.getElementById('toSceneBtn') as HTMLButtonElement).disabled = true;
        (document.getElementById('startGameBtn') as HTMLButtonElement).disabled = true;
        this.showScreen('mainMenu');
    }

    public rematch(): void {
        this.gameView.rematch();
    }
}

(window as any).app = new App();

function switchLanguage(locale: string) {
    (window as any).app.switchLanguage(locale);
}

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
(window as any).switchLanguage = switchLanguage;
