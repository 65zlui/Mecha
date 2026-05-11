import { Character, CHARACTERS } from '../models/Character';
import { Scene, SCENES } from '../models/Scene';

export type ScreenType = 'mainMenu' | 'characterSelection' | 'sceneSelection' | 'instructions' | 'gameScreen';

export class SelectionViewModel {
    private selectedP1: number | null = null;
    private selectedP2: number | null = null;
    private currentScene: number | null = null;
    private selectingFor: 1 | 2 = 1;

    public getCharacters(): Character[] {
        return CHARACTERS;
    }

    public getScenes(): Scene[] {
        return SCENES;
    }

    public selectCharacter(index: number): void {
        if (this.selectingFor === 1) {
            this.selectedP1 = index;
            this.selectingFor = 2;
        } else {
            this.selectedP2 = index;
            this.selectingFor = 1;
        }
    }

    public selectScene(index: number): void {
        this.currentScene = index;
    }

    public getSelectedP1(): Character | null {
        return this.selectedP1 !== null ? CHARACTERS[this.selectedP1] : null;
    }

    public getSelectedP2(): Character | null {
        return this.selectedP2 !== null ? CHARACTERS[this.selectedP2] : null;
    }

    public getCurrentScene(): Scene | null {
        return this.currentScene !== null ? SCENES[this.currentScene] : null;
    }

    public getSelectingFor(): 1 | 2 {
        return this.selectingFor;
    }

    public canProceedToSceneSelection(): boolean {
        return this.selectedP1 !== null && this.selectedP2 !== null;
    }

    public canStartGame(): boolean {
        return this.currentScene !== null;
    }

    public reset(): void {
        this.selectedP1 = null;
        this.selectedP2 = null;
        this.currentScene = null;
        this.selectingFor = 1;
    }
}
