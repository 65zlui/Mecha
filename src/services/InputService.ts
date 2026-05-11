export interface InputState {
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
    attack: boolean;
    defend: boolean;
}

export class InputService {
    private keys: { [key: string]: boolean } = {};
    private static instance: InputService;

    private constructor() {
        this.setupListeners();
    }

    public static getInstance(): InputService {
        if (!InputService.instance) {
            InputService.instance = new InputService();
        }
        return InputService.instance;
    }

    private setupListeners(): void {
        document.addEventListener('keydown', (e) => {
            this.keys[e.key.toLowerCase()] = true;
            this.keys[e.key] = true;
        });

        document.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
            this.keys[e.key] = false;
        });
    }

    public getPlayer1Input(): InputState {
        return {
            up: !!this.keys['w'],
            down: !!this.keys['s'],
            left: !!this.keys['a'],
            right: !!this.keys['d'],
            attack: !!this.keys['f'],
            defend: !!this.keys['g']
        };
    }

    public getPlayer2Input(): InputState {
        return {
            up: !!this.keys['ArrowUp'],
            down: !!this.keys['ArrowDown'],
            left: !!this.keys['ArrowLeft'],
            right: !!this.keys['ArrowRight'],
            attack: !!this.keys['.'],
            defend: !!this.keys['/']
        };
    }

    public clearAll(): void {
        this.keys = {};
    }
}
