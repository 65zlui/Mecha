import { Character } from '../models/Character';
import { Scene } from '../models/Scene';
import { SelectionViewModel } from '../viewmodels/SelectionViewModel';
import { I18nService } from '../i18n/I18nService';

export class SelectionView {
    private viewModel: SelectionViewModel;
    private onProceedToScene: () => void;
    private onStartGame: () => void;

    constructor(viewModel: SelectionViewModel, onProceedToScene: () => void, onStartGame: () => void) {
        this.viewModel = viewModel;
        this.onProceedToScene = onProceedToScene;
        this.onStartGame = onStartGame;
    }

    public renderCharacterSelection(): void {
        const characters = this.viewModel.getCharacters();
        const grid = document.getElementById('characterGrid')!;
        
        const t = (key: string) => I18nService.t(key);
        grid.innerHTML = characters.map((char, index) => `
            <div class="character-card ${this.viewModel.getSelectedP1() === char ? 'selected' : ''} ${this.viewModel.getSelectedP2() === char ? 'selected-p2' : ''}" 
                 onclick="selectionView.selectCharacter(${index})"
                 id="char-${index}">
                <div class="character-icon" style="background: ${char.color}20;">
                    ${char.emoji}
                </div>
                <div class="character-name" style="color: ${char.color};">${t('char.' + char.id + '.name')}</div>
                <div class="character-desc">${t('char.' + char.id + '.desc')}</div>
                <div class="character-stats">
                    <div class="stat-bar">
                        <span class="stat-label">${t('statAttack')}</span>
                        <div class="stat-fill">
                            <div class="stat-fill-inner" style="width: ${char.stats.attack}%; background: #ff6b6b;"></div>
                        </div>
                    </div>
                    <div class="stat-bar">
                        <span class="stat-label">${t('statDefense')}</span>
                        <div class="stat-fill">
                            <div class="stat-fill-inner" style="width: ${char.stats.defense}%; background: #4ecdc4;"></div>
                        </div>
                    </div>
                    <div class="stat-bar">
                        <span class="stat-label">${t('statSpeed')}</span>
                        <div class="stat-fill">
                            <div class="stat-fill-inner" style="width: ${char.stats.speed}%; background: #ffd700;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        this.updateSelectionInfo();
    }

    public selectCharacter(index: number): void {
        this.viewModel.selectCharacter(index);
        this.renderCharacterSelection();

        if (this.viewModel.canProceedToSceneSelection()) {
            (document.getElementById('toSceneBtn') as HTMLButtonElement).disabled = false;
        }
    }

    private updateSelectionInfo(): void {
        const t = (key: string, params?: Record<string, string>) => I18nService.t(key, params);
        const p1Char = this.viewModel.getSelectedP1();
        const p2Char = this.viewModel.getSelectedP2();
        const p1Name = p1Char ? t('char.' + p1Char.id + '.name') : t('notSelected');
        const p2Name = p2Char ? t('char.' + p2Char.id + '.name') : t('notSelected');
        
        document.getElementById('p1Selected')!.textContent = p1Name;
        document.getElementById('p2Selected')!.textContent = p2Name;
        document.getElementById('turnIndicator')!.textContent = 
            t('selectCharFor', { n: String(this.viewModel.getSelectingFor()) });
    }

    public renderSceneSelection(): void {
        const scenes = this.viewModel.getScenes();
        const grid = document.getElementById('sceneGrid')!;
        
        const t = (key: string) => I18nService.t(key);
        grid.innerHTML = scenes.map((scene, index) => `
            <div class="scene-card ${this.viewModel.getCurrentScene() === scene ? 'selected' : ''}" 
                 onclick="selectionView.selectScene(${index})"
                 id="scene-${index}">
                <div class="scene-preview" style="background: linear-gradient(to bottom, ${scene.bgColor1}, ${scene.bgColor2});"></div>
                <div class="scene-name">${t('scene.' + scene.id + '.name')}</div>
                <div class="scene-desc">${t('scene.' + scene.id + '.desc')}</div>
            </div>
        `).join('');
    }

    public selectScene(index: number): void {
        this.viewModel.selectScene(index);
        this.renderSceneSelection();
        (document.getElementById('startGameBtn') as HTMLButtonElement).disabled = false;
    }

    public getSelectedP1(): Character | null {
        return this.viewModel.getSelectedP1();
    }

    public getSelectedP2(): Character | null {
        return this.viewModel.getSelectedP2();
    }

    public getCurrentScene(): Scene | null {
        return this.viewModel.getCurrentScene();
    }

    public reset(): void {
        this.viewModel.reset();
    }
}
