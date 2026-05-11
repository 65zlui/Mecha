export interface CharacterStats {
    attack: number;
    defense: number;
    speed: number;
}

export interface Character {
    id: string;
    name: string;
    emoji: string;
    color: string;
    darkColor: string;
    lightColor: string;
    desc: string;
    stats: CharacterStats;
    ability: string;
}

export const CHARACTERS: Character[] = [
    {
        id: 'crimson',
        name: '赤焰战神',
        emoji: '🔥',
        color: '#ff4444',
        darkColor: '#cc3333',
        lightColor: '#ff6666',
        desc: '来自熔岩星球的战士，攻击力极强',
        stats: { attack: 95, defense: 40, speed: 60 },
        ability: '火焰爆发：攻击时有概率造成双倍伤害'
    },
    {
        id: 'frost',
        name: '霜冻守卫',
        emoji: '❄️',
        color: '#44aaff',
        darkColor: '#3388cc',
        lightColor: '#66ccff',
        desc: '极寒之地的守护者，防御力惊人',
        stats: { attack: 50, defense: 95, speed: 45 },
        ability: '冰冻护盾：防御时完全免疫伤害'
    },
    {
        id: 'shadow',
        name: '暗影刺客',
        emoji: '🗡️',
        color: '#8844ff',
        darkColor: '#6633cc',
        lightColor: '#aa66ff',
        desc: '神秘的暗杀者，速度无人能及',
        stats: { attack: 75, defense: 35, speed: 95 },
        ability: '瞬影：移动速度提升50%'
    },
    {
        id: 'titan',
        name: '泰坦重甲',
        emoji: '🛡️',
        color: '#ffaa44',
        darkColor: '#cc8833',
        lightColor: '#ffcc66',
        desc: '重装型机甲，攻守兼备',
        stats: { attack: 70, defense: 70, speed: 50 },
        ability: '铁壁：血量上限提升至150'
    },
    {
        id: 'venom',
        name: '毒液猎手',
        emoji: '☠️',
        color: '#44ff44',
        darkColor: '#33cc33',
        lightColor: '#66ff66',
        desc: '使用生化武器的致命猎手',
        stats: { attack: 80, defense: 45, speed: 70 },
        ability: '毒素：攻击使对手持续掉血'
    },
    {
        id: 'thunder',
        name: '雷霆战将',
        emoji: '⚡',
        color: '#ffff44',
        darkColor: '#cccc33',
        lightColor: '#ffff66',
        desc: '掌控雷电的战场霸主',
        stats: { attack: 85, defense: 50, speed: 75 },
        ability: '闪电链：攻击可波及周围敌人'
    },
    {
        id: 'crystal',
        name: '水晶法师',
        emoji: '💎',
        color: '#ff88ff',
        darkColor: '#cc66cc',
        lightColor: '#ffaaff',
        desc: '操控水晶能量的神秘法师',
        stats: { attack: 90, defense: 40, speed: 55 },
        ability: '水晶护盾：周期性获得护盾'
    },
    {
        id: 'steel',
        name: '钢铁先锋',
        emoji: '⚙️',
        color: '#888888',
        darkColor: '#666666',
        lightColor: '#aaaaaa',
        desc: '机械帝国的精英战士',
        stats: { attack: 65, defense: 80, speed: 55 },
        ability: '修复：缓慢恢复生命值'
    },
    {
        id: 'nature',
        name: '自然之灵',
        emoji: '🌿',
        color: '#88ff88',
        darkColor: '#66cc66',
        lightColor: '#aaffaa',
        desc: '森林的守护者，与自然共生',
        stats: { attack: 60, defense: 60, speed: 80 },
        ability: '再生：生命值越低恢复越快'
    },
    {
        id: 'void',
        name: '虚空行者',
        emoji: '🌑',
        color: '#4444ff',
        darkColor: '#3333cc',
        lightColor: '#6666ff',
        desc: '来自虚空维度的神秘存在',
        stats: { attack: 85, defense: 55, speed: 70 },
        ability: '虚空闪避：有概率闪避攻击'
    }
];
