import { Character } from '../models/Character';
import { Scene } from '../models/Scene';
import { SelectionViewModel } from '../viewmodels/SelectionViewModel';

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
        
        grid.innerHTML = characters.map((char, index) => `
            <div class="character-card ${this.viewModel.getSelectedP1() === char ? 'selected' : ''} ${this.viewModel.getSelectedP2() === char ? 'selected-p2' : ''}" 
                 onclick="selectionView.selectCharacter(${index})"
                 id="char-${index}">
                <div class="character-icon" style="background: ${char.color}20;">
                    ${char.emoji}
                </div>
                <div class="character-name" style="color: ${char.color};">${char.name}</div>
                <div class="character-desc">${char.desc}</div>
                <div class="character-stats">
                    <div class="stat-bar">
                        <span class="stat-label">攻击</span>
                        <div class="stat-fill">
                            <div class="stat-fill-inner" style="width: ${char.stats.attack}%; background: #ff6b6b;"></div>
                        </div>
                    </div>
                    <div class="stat-bar">
                        <span class="stat-label">防御</span>
                        <div class="stat-fill">
                            <div class="stat-fill-inner" style="width: ${char.stats.defense}%; background: #4ecdc4;"></div>
                        </div>
                    </div>
                    <div class="stat-bar">
                        <span class="stat-label">速度</span>
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
            document.getElementById('toSceneBtn')!.disabled = false;
        }
    }

    private updateSelectionInfo(): void {
        const p1Name = this.viewModel.getSelectedP1()?.name || '未选择';
        const p2Name = this.viewModel.getSelectedP2()?.name || '未选择';
        
        document.getElementById('p1Selected')!.textContent = p1Name;
        document.getElementById('p2Selected')!.textContent = p2Name;
        document.getElementById('turnIndicator')!.textContent = 
            this.viewModel.getSelectingFor() === 1 ? '玩家 1 请选择角色' : '玩家 2 请选择角色';
    }

    public renderSceneSelection(): void {
        const scenes = this.viewModel.getScenes();
        const grid = document.getElementById('sceneGrid')!;
        
        grid.innerHTML = scenes.map((scene, index) => `
            <div class="scene-card ${this.viewModel.getCurrentScene() === scene ? 'selected' : ''}" 
                 onclick="selectionView.selectScene(${index})"
                 id="scene-${index}">
                <div class="scene-preview" style="background: linear-gradient(to bottom, ${scene.bgColor1}, ${scene.bgColor2});"></div>
                <div class="scene-name">${scene.name}</div>
                <div class="scene-desc">${scene.desc}</div>
            </div>
        `).join('');
    }

    public selectScene(index: number): void {
        this.viewModel.selectScene(index);
        this.renderSceneSelection();
        document.getElementById('startGameBtn')!.disabled = false;
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
