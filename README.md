# ⚔️ Pixel Mech Battle - Ultimate Edition | 像素机甲对战 - 终极版

> **EN:** A retro pixel-style two-player battle game with 10 unique characters and 5 battle scenes!  
> **中:** 一款复古像素风格的双人对战游戏，支持10个独特角色和5个战斗场景！

---

## 🌐 Language | 语言

- [**English Version**](#english)
- [**中文版本**](#chinese)

---

## <span id="english">English</span>

### 🎮 Game Overview

A retro pixel-style two-player battle game built with HTML5 Canvas and JavaScript, featuring MVVM architecture for clean and maintainable code.

### ✨ Features

- **10 Unique Mech Characters** - Each with different stats and special abilities
- **5 Battle Scenes** - From martial arts dojo to space battlefield, each with unique visuals
- **Special Ability System** - Fire, ice, poison, healing and more combat experiences
- **Complete Game Flow** - Main Menu → Character Selection → Scene Selection → Battle
- **MVVM Architecture** - Modern engineering design, easy to maintain and extend

### 🕹️ Controls

**Player 1 (Green)**
- **W** - Move Up
- **S** - Move Down
- **A** - Move Left
- **D** - Move Right
- **F** - Attack
- **G** - Defend

**Player 2 (Purple)**
- **↑** - Move Up
- **↓** - Move Down
- **←** - Move Left
- **→** - Move Right
- **.** (Period) - Attack
- **/** (Slash) - Defend

### 🤖 Available Characters (10)

| Character | Icon | Role | Special Ability |
|-----------|------|------|-----------------|
| Crimson Warlord | 🔥 | Attack Type | Flame Burst: 30% chance for double damage |
| Frost Guardian | ❄️ | Defense Type | Ice Shield: Complete immunity when defending |
| Shadow Assassin | 🗡️ | Speed Type | Shadow Step: 50% movement speed boost |
| Titan Armor | 🛡️ | Tank Type | Iron Wall: Max health increased to 150 |
| Venom Hunter | ☠️ | DoT Type | Poison: Attack causes continuous damage |
| Thunder General | ⚡ | Balanced Type | Lightning Chain: Attack affects nearby enemies |
| Crystal Mage | 💎 | Magic Type | Crystal Shield: Periodic shield regeneration |
| Steel Vanguard | ⚙️ | Mechanical Type | Repair: Slowly regenerates health |
| Spirit of Nature | 🌿 | Healer Type | Regeneration: Faster healing at low health |
| Void Walker | 🌑 | Evasion Type | Void Dodge: 25% chance to dodge attacks |

### 🌍 Battle Scenes (5)

1. **Martial Arts Dojo** - Traditional battle arena with balanced terrain
2. **Volcanic Inferno** - Scorching volcanic terrain, full of dangers
3. **Cyber City** - Futuristic tech-themed arena
4. **Ancient Forest** - Mysterious primeval forest
5. **Space Battlefield** - Zero-gravity battlefield in the depths of space

### ⚔️ Battle Rules

- Get close to your opponent and use the attack key to deal damage
- Defending reduces damage taken by 50% (some characters have special defense effects)
- Each character has different stats and special abilities
- The player who reduces the opponent's health to 0 first wins
- Click "Rematch" for a quick restart

### 🚀 Quick Start

**Method 1: Direct Open**
Simply open `index.html` in your browser to play.

**Method 2: Local Server**
```bash
# Python 3
python3 -m http.server 8080
# Then visit http://localhost:8080/index.html
```

**Method 3: Node.js**
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 📁 Project Structure

```
pixel-mech-battle/
├── index.html                    # Main page
├── README.md                     # This file (bilingual)
├── README.html                   # Interactive bilingual README
├── src/
│   ├── game.js                  # Complete game logic (MVVM architecture)
│   ├── App.ts                   # Application entry (TypeScript version)
│   ├── models/                  # Data models layer
│   │   ├── Character.ts         # Character data model
│   │   ├── Scene.ts             # Scene data model
│   │   ├── Mech.ts              # Mech data model
│   │   └── index.ts             # Model exports
│   ├── viewmodels/              # View models layer
│   │   ├── SelectionViewModel.ts # Selection logic
│   │   ├── GameViewModel.ts     # Game logic
│   │   └── index.ts             # ViewModel exports
│   ├── views/                   # Views layer
│   │   ├── SelectionView.ts     # Character/Scene selection UI
│   │   ├── GameView.ts          # Game rendering UI
│   │   └── index.ts             # View exports
│   ├── services/                # Services layer
│   │   ├── InputService.ts      # Keyboard input handling
│   │   ├── RenderService.ts     # Canvas rendering
│   │   └── index.ts             # Service exports
│   └── core/                    # Core engine
│       ├── GameEngine.ts        # Game core logic
│       └── index.ts             # Core exports
└── .trae/documents/             # Design documents
    ├── prd.md                   # Product Requirements Document
    └── arch.md                  # Technical Architecture Document
```

### 🎯 Technical Features

- Pure HTML5 Canvas + JavaScript implementation, no frameworks needed
- MVVM architecture pattern with clear separation of concerns
- Model layer: Pure data structures and interfaces
- ViewModel layer: Business logic and state management
- View layer: UI rendering and user interaction
- Service layer: Singleton services for input and rendering
- Core layer: Game engine with collision detection and ability system
- Pixel-style rendering with character facing flip support
- Responsive interface design with smooth 60fps game loop
- TypeScript type support (optional)

### 💡 Extension Suggestions

Due to the MVVM architecture, you can easily add:

- **AI Battle** - Create AIViewModel to handle computer control
- **Online Mode** - Implement network communication through Service layer
- **Audio System** - Add AudioService for sound effects and music
- **Achievement System** - Add statistics tracking in ViewModel layer
- **Animation System** - Extend RenderService for complex animations
- **Save/Load System** - Add persistence through local storage
- **Mobile Support** - Add touch controls in InputService

### 🤝 Contributing

Feel free to submit Issues and Pull Requests! Let's make this game better together!

---

## <span id="chinese">中文</span>

### 🎮 游戏概述

一款使用 HTML5 Canvas 和 JavaScript 构建的复古像素风格双人对战游戏，采用 MVVM 架构实现清晰易维护的代码结构。

### ✨ 游戏特色

- **10个独特机甲角色** - 每个角色都有不同的属性和特殊能力
- **5个战斗场景** - 从武道道场到星际战场，各具特色视觉风格
- **特殊能力系统** - 火焰、冰霜、毒素、治疗等多样化战斗体验
- **完整的游戏流程** - 主菜单 → 角色选择 → 场景选择 → 战斗
- **MVVM架构** - 现代化工程化设计，易于维护和扩展

### 🕹️ 操作方式

**玩家 1 (绿色)**
- **W** - 向上移动
- **S** - 向下移动
- **A** - 向左移动
- **D** - 向右移动
- **F** - 攻击
- **G** - 防御

**玩家 2 (紫色)**
- **↑** - 向上移动
- **↓** - 向下移动
- **←** - 向左移动
- **→** - 向右移动
- **.** (句点) - 攻击
- **/** (斜杠) - 防御

### 🤖 可选角色 (10个)

| 角色 | 图标 | 定位 | 特殊能力 |
|------|------|------|----------|
| 赤焰战神 | 🔥 | 攻击型 | 火焰爆发：30%概率造成双倍伤害 |
| 霜冻守卫 | ❄️ | 防御型 | 冰冻护盾：防御时完全免疫伤害 |
| 暗影刺客 | 🗡️ | 速度型 | 瞬影：移动速度提升50% |
| 泰坦重甲 | 🛡️ | 坦克型 | 铁壁：血量上限提升至150 |
| 毒液猎手 | ☠️ | 持续伤害 | 毒素：攻击使对手持续掉血 |
| 雷霆战将 | ⚡ | 平衡型 | 闪电链：攻击可波及周围敌人 |
| 水晶法师 | 💎 | 魔法型 | 水晶护盾：周期性获得护盾 |
| 钢铁先锋 | ⚙️ | 机械型 | 修复：缓慢恢复生命值 |
| 自然之灵 | 🌿 | 恢复型 | 再生：生命值越低恢复越快 |
| 虚空行者 | 🌑 | 闪避型 | 虚空闪避：25%概率闪避攻击 |

### 🌍 战斗场景 (5个)

1. **武道道场** - 传统的战斗场地，平衡的地形
2. **熔岩炼狱** - 炽热的火山地带，充满危险
3. **赛博都市** - 未来科技感十足的竞技场
4. **远古森林** - 神秘的原始森林
5. **星际战场** - 在宇宙深处的零重力战场

### ⚔️ 战斗规则

- 靠近对手后使用攻击键造成伤害
- 防御可以减少 50% 受到的伤害（部分角色有特殊防御效果）
- 每个角色有不同的属性和特色能力
- 先将对方血量降为 0 的一方获胜
- 点击"再来一局"可以快速重赛

### 🚀 快速开始

**方法一：直接打开**
直接在浏览器中打开 `index.html` 文件即可游玩。

**方法二：使用本地服务器**
```bash
# Python 3
python3 -m http.server 8080
# 然后在浏览器中访问 http://localhost:8080/index.html
```

**方法三：使用 Node.js**
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 📁 项目结构

```
pixel-mech-battle/
├── index.html                    # 主页面
├── README.md                     # 本文档（双语）
├── README.html                   # 交互式双语README
├── src/
│   ├── game.js                  # 完整游戏逻辑（MVVM架构）
│   ├── App.ts                   # 应用入口（TypeScript版本）
│   ├── models/                  # 数据模型层
│   │   ├── Character.ts         # 角色数据模型
│   │   ├── Scene.ts             # 场景数据模型
│   │   ├── Mech.ts              # 机甲数据模型
│   │   └── index.ts             # 模型导出
│   ├── viewmodels/              # 视图模型层
│   │   ├── SelectionViewModel.ts # 选择界面逻辑
│   │   ├── GameViewModel.ts     # 游戏逻辑
│   │   └── index.ts             # ViewModel导出
│   ├── views/                   # 视图层
│   │   ├── SelectionView.ts     # 角色/场景选择UI
│   │   ├── GameView.ts          # 游戏渲染UI
│   │   └── index.ts             # 视图导出
│   ├── services/                # 服务层
│   │   ├── InputService.ts      # 键盘输入处理
│   │   ├── RenderService.ts     # Canvas渲染
│   │   └── index.ts             # 服务导出
│   └── core/                    # 核心引擎
│       ├── GameEngine.ts        # 游戏核心逻辑
│       └── index.ts             # 核心导出
└── .trae/documents/             # 设计文档
    ├── prd.md                   # 产品需求文档
    └── arch.md                  # 技术架构文档
```

### 🎯 技术特点

- 纯 HTML5 Canvas + JavaScript 实现，无需任何框架
- MVVM 架构模式，关注点清晰分离
- 模型层：纯数据结构和接口
- 视图模型层：业务逻辑和状态管理
- 视图层：UI 渲染和用户交互
- 服务层：单例模式管理输入和渲染
- 核心层：游戏引擎包含碰撞检测和技能系统
- 像素风格渲染，支持角色朝向翻转
- 响应式界面设计，流畅的 60fps 游戏循环
- TypeScript 类型支持（可选）

### 💡 扩展建议

由于采用了 MVVM 架构，后续可以轻松添加：

- **AI对战** - 创建 AIViewModel 处理电脑控制
- **联机模式** - 通过 Service 层实现网络通信
- **音效系统** - 添加 AudioService 管理音效和音乐
- **成就系统** - 在 ViewModel 层添加统计追踪
- **动画系统** - 扩展 RenderService 支持复杂动画
- **存档系统** - 通过本地存储实现持久化
- **移动端支持** - 在 InputService 中添加触摸控制

### 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！让我们一起让这个游戏变得更好！

---

## 📖 完整文档 | Full Documentation

查看包含所有角色、场景、规则的详细交互文档：

**[README.html](./README.html)** - 支持一键切换中英文！

View the detailed interactive documentation with all characters, scenes, and rules:

**[README.html](./README.html)** - One-click language switching!

---

<p align="center">
  <strong>祝您游戏愉快！⚔️</strong><br>
  <strong>Enjoy the game! ⚔️</strong><br><br>
  <em>选择您最喜欢的机甲，征服战场！</em><br>
  <em>Choose your favorite mech and conquer the battlefield!</em>
</p>

## 📄 License | 许可证

This project is licensed under the MIT License.

本项目采用 MIT 许可证。
