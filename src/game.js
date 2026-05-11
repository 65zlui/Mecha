// ==================== Models ====================
const Character = {
    CHARACTERS: [
        { id: 'crimson', name: '赤焰战神', emoji: '🔥', color: '#ff4444', darkColor: '#cc3333', lightColor: '#ff6666', desc: '来自熔岩星球的战士，攻击力极强', stats: { attack: 95, defense: 40, speed: 60 }, ability: '火焰爆发：攻击时有概率造成双倍伤害' },
        { id: 'frost', name: '霜冻守卫', emoji: '❄️', color: '#44aaff', darkColor: '#3388cc', lightColor: '#66ccff', desc: '极寒之地的守护者，防御力惊人', stats: { attack: 50, defense: 95, speed: 45 }, ability: '冰冻护盾：防御时完全免疫伤害' },
        { id: 'shadow', name: '暗影刺客', emoji: '🗡️', color: '#8844ff', darkColor: '#6633cc', lightColor: '#aa66ff', desc: '神秘的暗杀者，速度无人能及', stats: { attack: 75, defense: 35, speed: 95 }, ability: '瞬影：移动速度提升50%' },
        { id: 'titan', name: '泰坦重甲', emoji: '🛡️', color: '#ffaa44', darkColor: '#cc8833', lightColor: '#ffcc66', desc: '重装型机甲，攻守兼备', stats: { attack: 70, defense: 70, speed: 50 }, ability: '铁壁：血量上限提升至150' },
        { id: 'venom', name: '毒液猎手', emoji: '☠️', color: '#44ff44', darkColor: '#33cc33', lightColor: '#66ff66', desc: '使用生化武器的致命猎手', stats: { attack: 80, defense: 45, speed: 70 }, ability: '毒素：攻击使对手持续掉血' },
        { id: 'thunder', name: '雷霆战将', emoji: '⚡', color: '#ffff44', darkColor: '#cccc33', lightColor: '#ffff66', desc: '掌控雷电的战场霸主', stats: { attack: 85, defense: 50, speed: 75 }, ability: '闪电链：攻击可波及周围敌人' },
        { id: 'crystal', name: '水晶法师', emoji: '💎', color: '#ff88ff', darkColor: '#cc66cc', lightColor: '#ffaaff', desc: '操控水晶能量的神秘法师', stats: { attack: 90, defense: 40, speed: 55 }, ability: '水晶护盾：周期性获得护盾' },
        { id: 'steel', name: '钢铁先锋', emoji: '⚙️', color: '#888888', darkColor: '#666666', lightColor: '#aaaaaa', desc: '机械帝国的精英战士', stats: { attack: 65, defense: 80, speed: 55 }, ability: '修复：缓慢恢复生命值' },
        { id: 'nature', name: '自然之灵', emoji: '🌿', color: '#88ff88', darkColor: '#66cc66', lightColor: '#aaffaa', desc: '森林的守护者，与自然共生', stats: { attack: 60, defense: 60, speed: 80 }, ability: '再生：生命值越低恢复越快' },
        { id: 'void', name: '虚空行者', emoji: '🌑', color: '#4444ff', darkColor: '#3333cc', lightColor: '#6666ff', desc: '来自虚空维度的神秘存在', stats: { attack: 85, defense: 55, speed: 70 }, ability: '虚空闪避：有概率闪避攻击' }
    ]
};

const Scene = {
    SCENES: [
        { id: 'dojo', name: '武道道场', desc: '传统的战斗场地，平衡的地形', bgColor1: '#2d3436', bgColor2: '#636e72', groundColor: '#4a4a4a', skyColor: '#1a1a2e' },
        { id: 'volcano', name: '熔岩炼狱', desc: '炽热的火山地带，充满危险', bgColor1: '#5c1a1a', bgColor2: '#8b4513', groundColor: '#3d1f1f', skyColor: '#2d1810' },
        { id: 'cyber', name: '赛博都市', desc: '未来科技感十足的竞技场', bgColor1: '#0a0a2e', bgColor2: '#1a1a4e', groundColor: '#0f0f3a', skyColor: '#050520' },
        { id: 'forest', name: '远古森林', desc: '神秘的原始森林', bgColor1: '#1a3d1a', bgColor2: '#2d5a2d', groundColor: '#1f4a1f', skyColor: '#0f2d0f' },
        { id: 'space', name: '星际战场', desc: '在宇宙深处的零重力战场', bgColor1: '#0a0a15', bgColor2: '#1a1a3e', groundColor: '#2d2d4a', skyColor: '#050510' }
    ]
};

// ==================== Services ====================
class InputService {
    static instance;
    keys = {};

    static getInstance() {
        if (!InputService.instance) {
            InputService.instance = new InputService();
        }
        return InputService.instance;
    }

    constructor() {
        document.addEventListener('keydown', (e) => {
            this.keys[e.key.toLowerCase()] = true;
            this.keys[e.key] = true;
        });
        document.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
            this.keys[e.key] = false;
        });
    }

    getPlayer1Input() {
        return {
            up: !!this.keys['w'],
            down: !!this.keys['s'],
            left: !!this.keys['a'],
            right: !!this.keys['d'],
            attack: !!this.keys['f'],
            defend: !!this.keys['g']
        };
    }

    getPlayer2Input() {
        return {
            up: !!this.keys['ArrowUp'],
            down: !!this.keys['ArrowDown'],
            left: !!this.keys['ArrowLeft'],
            right: !!this.keys['ArrowRight'],
            attack: !!this.keys['.'],
            defend: !!this.keys['/']
        };
    }
}

class RenderService {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBackground(scene) {
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

    drawPixelRect(x, y, w, h, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(Math.floor(x), Math.floor(y), w, h);
    }

    drawMech(mech) {
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

        this.ctx.restore();
    }
}

// ==================== Core ====================
class GameEngine {
    constructor(events) {
        this.events = events;
        this.mech1 = null;
        this.mech2 = null;
        this.gameOver = false;
        this.winner = null;
    }

    initialize(p1Character, p2Character) {
        this.mech1 = this.createMech(100, 280, p1Character, true);
        this.mech2 = this.createMech(450, 280, p2Character, false);
        this.gameOver = false;
        this.winner = null;
        this.events.onHealthUpdate(this.mech1.health, this.mech2.health);
    }

    createMech(x, y, character, facingRight) {
        const maxHealth = character.id === 'titan' ? 150 : 100;
        const speed = character.id === 'shadow' ? 4.5 : 3;
        
        return {
            x, y,
            width: 50,
            height: 60,
            health: maxHealth,
            maxHealth,
            color: character.color,
            darkColor: character.darkColor,
            lightColor: character.lightColor,
            emoji: character.emoji,
            charId: character.id,
            isAttacking: false,
            isDefending: false,
            attackCooldown: 0,
            facingRight,
            attackTimer: 0,
            defendTimer: 0,
            speed,
            poisonTicks: 0,
            shieldActive: false,
            lastRegen: 0
        };
    }

    update(input1, input2) {
        if (this.gameOver || !this.mech1 || !this.mech2) return;

        const now = Date.now();
        this.updateMech(this.mech1, input1, this.mech2, now);
        this.updateMech(this.mech2, input2, this.mech1, now);
        this.checkGameOver();
        this.events.onHealthUpdate(this.mech1.health, this.mech2.health);
    }

    updateMech(mech, input, otherMech, now) {
        if (mech.attackCooldown > 0) mech.attackCooldown--;
        if (mech.attackTimer > 0) {
            mech.attackTimer--;
            if (mech.attackTimer === 0) mech.isAttacking = false;
        }
        if (mech.defendTimer > 0) {
            mech.defendTimer--;
            if (mech.defendTimer === 0) mech.isDefending = false;
        }

        if (mech.poisonTicks > 0 && now % 60 === 0) {
            mech.health = Math.max(0, mech.health - 2);
            mech.poisonTicks--;
        }

        if (mech.charId === 'steel' && now - mech.lastRegen > 2000) {
            mech.health = Math.min(mech.maxHealth, mech.health + 3);
            mech.lastRegen = now;
        }

        if (mech.charId === 'nature') {
            const healthPercent = mech.health / mech.maxHealth;
            if (healthPercent < 0.5 && now % 1000 < 20) {
                mech.health = Math.min(mech.maxHealth, mech.health + 2);
            }
        }

        if (input.up) mech.y = Math.max(200, mech.y - mech.speed);
        if (input.down) mech.y = Math.min(340 - mech.height, mech.y + mech.speed);
        if (input.left) {
            mech.x = Math.max(0, mech.x - mech.speed);
            mech.facingRight = false;
        }
        if (input.right) {
            mech.x = Math.min(600 - mech.width, mech.x + mech.speed);
            mech.facingRight = true;
        }

        if (input.attack && mech.attackCooldown === 0 && !mech.isDefending) {
            mech.isAttacking = true;
            mech.attackTimer = 15;
            mech.attackCooldown = 40;

            const attackRange = 80;
            const attackX = mech.facingRight ? mech.x + mech.width : mech.x - attackRange;

            if (attackX < otherMech.x + otherMech.width &&
                attackX + attackRange > otherMech.x &&
                mech.y < otherMech.y + otherMech.height &&
                mech.y + mech.height > otherMech.y) {

                if (otherMech.charId === 'void' && Math.random() < 0.25) return;

                let damage = 15;
                if (mech.charId === 'crimson' && Math.random() < 0.3) damage *= 2;

                if (otherMech.isDefending) {
                    damage = otherMech.charId === 'frost' ? 0 : Math.floor(damage * 0.5);
                }

                otherMech.health = Math.max(0, otherMech.health - damage);
                if (mech.charId === 'venom') otherMech.poisonTicks = 5;
            }
        }

        if (input.defend && !mech.isAttacking) {
            mech.isDefending = true;
            mech.defendTimer = 20;
        }
    }

    checkGameOver() {
        if (this.mech1.health <= 0) {
            this.gameOver = true;
            this.winner = 2;
            this.events.onGameOver(2);
        } else if (this.mech2.health <= 0) {
            this.gameOver = true;
            this.winner = 1;
            this.events.onGameOver(1);
        }
    }

    getMech1() { return this.mech1; }
    getMech2() { return this.mech2; }
    isGameOver() { return this.gameOver; }
    getWinner() { return this.winner; }
    reset() {
        this.mech1 = null;
        this.mech2 = null;
        this.gameOver = false;
        this.winner = null;
    }
}

// ==================== ViewModels ====================
class SelectionViewModel {
    constructor() {
        this.selectedP1 = null;
        this.selectedP2 = null;
        this.currentScene = null;
        this.selectingFor = 1;
    }

    getCharacters() { return Character.CHARACTERS; }
    getScenes() { return Scene.SCENES; }

    selectCharacter(index) {
        if (this.selectingFor === 1) {
            this.selectedP1 = index;
            this.selectingFor = 2;
        } else {
            this.selectedP2 = index;
            this.selectingFor = 1;
        }
    }

    selectScene(index) { this.currentScene = index; }

    getSelectedP1() { return this.selectedP1 !== null ? Character.CHARACTERS[this.selectedP1] : null; }
    getSelectedP2() { return this.selectedP2 !== null ? Character.CHARACTERS[this.selectedP2] : null; }
    getCurrentScene() { return this.currentScene !== null ? Scene.SCENES[this.currentScene] : null; }
    getSelectingFor() { return this.selectingFor; }
    canProceedToSceneSelection() { return this.selectedP1 !== null && this.selectedP2 !== null; }
    canStartGame() { return this.currentScene !== null; }

    reset() {
        this.selectedP1 = null;
        this.selectedP2 = null;
        this.currentScene = null;
        this.selectingFor = 1;
    }
}

class GameViewModel {
    constructor(canvas, onHealthUpdate, onGameOver) {
        this.renderService = new RenderService(canvas);
        this.inputService = InputService.getInstance();
        this.scene = null;
        this.animationFrameId = null;
        
        this.gameEngine = new GameEngine({
            onGameOver,
            onHealthUpdate
        });
    }

    startGame(p1Character, p2Character, scene) {
        this.scene = scene;
        this.gameEngine.initialize(p1Character, p2Character);
        this.startGameLoop();
    }

    startGameLoop() {
        const loop = () => {
            this.update();
            this.render();
            this.animationFrameId = requestAnimationFrame(loop);
        };
        loop();
    }

    update() {
        const input1 = this.inputService.getPlayer1Input();
        const input2 = this.inputService.getPlayer2Input();
        this.gameEngine.update(input1, input2);
    }

    render() {
        if (!this.scene) return;
        this.renderService.clear();
        this.renderService.drawBackground(this.scene);

        const mech1 = this.gameEngine.getMech1();
        const mech2 = this.gameEngine.getMech2();
        if (mech1) this.renderService.drawMech(mech1);
        if (mech2) this.renderService.drawMech(mech2);
    }

    stopGame() {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        this.gameEngine.reset();
        this.scene = null;
    }

    rematch(p1Character, p2Character) {
        this.gameEngine.initialize(p1Character, p2Character);
    }

    isGameOver() { return this.gameEngine.isGameOver(); }
    getWinner() { return this.gameEngine.getWinner(); }
}

// ==================== Views ====================
class SelectionView {
    constructor(viewModel, onProceedToScene, onStartGame) {
        this.viewModel = viewModel;
        this.onProceedToScene = onProceedToScene;
        this.onStartGame = onStartGame;
    }

    renderCharacterSelection() {
        const characters = this.viewModel.getCharacters();
        const grid = document.getElementById('characterGrid');
        
        grid.innerHTML = characters.map((char, index) => `
            <div class="character-card ${this.viewModel.getSelectedP1() === char ? 'selected' : ''} ${this.viewModel.getSelectedP2() === char ? 'selected-p2' : ''}" 
                 onclick="selectionView.selectCharacter(${index})">
                <div class="character-icon" style="background: ${char.color}20;">${char.emoji}</div>
                <div class="character-name" style="color: ${char.color};">${char.name}</div>
                <div class="character-desc">${char.desc}</div>
                <div class="character-stats">
                    <div class="stat-bar">
                        <span class="stat-label">攻击</span>
                        <div class="stat-fill"><div class="stat-fill-inner" style="width: ${char.stats.attack}%; background: #ff6b6b;"></div></div>
                    </div>
                    <div class="stat-bar">
                        <span class="stat-label">防御</span>
                        <div class="stat-fill"><div class="stat-fill-inner" style="width: ${char.stats.defense}%; background: #4ecdc4;"></div></div>
                    </div>
                    <div class="stat-bar">
                        <span class="stat-label">速度</span>
                        <div class="stat-fill"><div class="stat-fill-inner" style="width: ${char.stats.speed}%; background: #ffd700;"></div></div>
                    </div>
                </div>
            </div>
        `).join('');

        this.updateSelectionInfo();
    }

    selectCharacter(index) {
        this.viewModel.selectCharacter(index);
        this.renderCharacterSelection();
        if (this.viewModel.canProceedToSceneSelection()) {
            document.getElementById('toSceneBtn').disabled = false;
        }
    }

    updateSelectionInfo() {
        const p1Name = this.viewModel.getSelectedP1()?.name || '未选择';
        const p2Name = this.viewModel.getSelectedP2()?.name || '未选择';
        
        document.getElementById('p1Selected').textContent = p1Name;
        document.getElementById('p2Selected').textContent = p2Name;
        document.getElementById('turnIndicator').textContent = 
            this.viewModel.getSelectingFor() === 1 ? '玩家 1 请选择角色' : '玩家 2 请选择角色';
    }

    renderSceneSelection() {
        const scenes = this.viewModel.getScenes();
        const grid = document.getElementById('sceneGrid');
        
        grid.innerHTML = scenes.map((scene, index) => `
            <div class="scene-card ${this.viewModel.getCurrentScene() === scene ? 'selected' : ''}" 
                 onclick="selectionView.selectScene(${index})">
                <div class="scene-preview" style="background: linear-gradient(to bottom, ${scene.bgColor1}, ${scene.bgColor2});"></div>
                <div class="scene-name">${scene.name}</div>
                <div class="scene-desc">${scene.desc}</div>
            </div>
        `).join('');
    }

    selectScene(index) {
        this.viewModel.selectScene(index);
        this.renderSceneSelection();
        document.getElementById('startGameBtn').disabled = false;
    }

    getSelectedP1() { return this.viewModel.getSelectedP1(); }
    getSelectedP2() { return this.viewModel.getSelectedP2(); }
    getCurrentScene() { return this.viewModel.getCurrentScene(); }
    reset() { this.viewModel.reset(); }
}

class GameView {
    constructor(canvas) {
        this.canvas = canvas;
        this.p1Character = null;
        this.p2Character = null;
        this.viewModel = new GameViewModel(
            canvas,
            (p1, p2) => this.updateHealthBars(p1, p2),
            (winner) => this.handleGameOver(winner)
        );
    }

    startGame(p1Character, p2Character, scene) {
        this.p1Character = p1Character;
        this.p2Character = p2Character;

        document.getElementById('p1Name').textContent = p1Character.name;
        document.getElementById('p2Name').textContent = p2Character.name;
        document.getElementById('p1ControlName').textContent = p1Character.name;
        document.getElementById('p2ControlName').textContent = p2Character.name;
        document.getElementById('gameOver').style.display = 'none';

        this.viewModel.startGame(p1Character, p2Character, scene);
    }

    updateHealthBars(p1, p2) {
        const mech1 = this.viewModel.getWinner() !== null ? 
            (this.p1Character.id === 'titan' ? 150 : 100) : p1;
        const mech2 = this.viewModel.getWinner() !== null ? 
            (this.p2Character.id === 'titan' ? 150 : 100) : p2;

        document.getElementById('health1').style.width = (p1 / mech1 * 100) + '%';
        document.getElementById('health2').style.width = (p2 / mech2 * 100) + '%';
    }

    handleGameOver(winner) {
        const winnerName = winner === 1 ? this.p1Character.name : this.p2Character.name;
        document.getElementById('winnerText').textContent = '🎉 ' + winnerName + ' 获胜！🎉';
        document.getElementById('gameOver').style.display = 'block';
    }

    rematch() {
        if (this.p1Character && this.p2Character) {
            document.getElementById('gameOver').style.display = 'none';
            this.viewModel.rematch(this.p1Character, this.p2Character);
        }
    }

    stopGame() {
        this.viewModel.stopGame();
        this.p1Character = null;
        this.p2Character = null;
    }
}

// ==================== App (Controller) ====================
class App {
    constructor() {
        const canvas = document.getElementById('gameCanvas');
        this.selectionViewModel = new SelectionViewModel();
        this.selectionView = new SelectionView(
            this.selectionViewModel,
            () => this.showScreen('sceneSelection'),
            () => this.startGame()
        );
        this.gameView = new GameView(canvas);
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');

        if (screenId === 'characterSelection') {
            this.selectionViewModel.reset();
            document.getElementById('toSceneBtn').disabled = true;
            this.selectionView.renderCharacterSelection();
        } else if (screenId === 'sceneSelection') {
            document.getElementById('startGameBtn').disabled = true;
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

    startGame() {
        const p1 = this.selectionView.getSelectedP1();
        const p2 = this.selectionView.getSelectedP2();
        const scene = this.selectionView.getCurrentScene();

        if (p1 && p2 && scene) {
            this.showScreen('gameScreen');
        }
    }

    backToMenu() {
        this.gameView.stopGame();
        this.selectionViewModel.reset();
        document.getElementById('toSceneBtn').disabled = true;
        document.getElementById('startGameBtn').disabled = true;
        this.showScreen('mainMenu');
    }

    rematch() {
        this.gameView.rematch();
    }
}

// 全局实例
window.app = new App();
window.selectionView = window.app.selectionView;

// 全局函数
window.showMainMenu = () => window.app.showScreen('mainMenu');
window.showInstructions = () => window.app.showScreen('instructions');
window.showCharacterSelection = () => window.app.showScreen('characterSelection');
window.showSceneSelection = () => window.app.selectionViewModel.canProceedToSceneSelection() && window.app.showScreen('sceneSelection');
window.startGame = () => window.app.startGame();
window.backToMenu = () => window.app.backToMenu();
window.rematch = () => window.app.rematch();
