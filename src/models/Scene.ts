export interface Scene {
    id: string;
    name: string;
    desc: string;
    bgColor1: string;
    bgColor2: string;
    groundColor: string;
    skyColor: string;
}

export const SCENES: Scene[] = [
    {
        id: 'dojo',
        name: '武道道场',
        desc: '传统的战斗场地，平衡的地形',
        bgColor1: '#2d3436',
        bgColor2: '#636e72',
        groundColor: '#4a4a4a',
        skyColor: '#1a1a2e'
    },
    {
        id: 'volcano',
        name: '熔岩炼狱',
        desc: '炽热的火山地带，充满危险',
        bgColor1: '#5c1a1a',
        bgColor2: '#8b4513',
        groundColor: '#3d1f1f',
        skyColor: '#2d1810'
    },
    {
        id: 'cyber',
        name: '赛博都市',
        desc: '未来科技感十足的竞技场',
        bgColor1: '#0a0a2e',
        bgColor2: '#1a1a4e',
        groundColor: '#0f0f3a',
        skyColor: '#050520'
    },
    {
        id: 'forest',
        name: '远古森林',
        desc: '神秘的原始森林',
        bgColor1: '#1a3d1a',
        bgColor2: '#2d5a2d',
        groundColor: '#1f4a1f',
        skyColor: '#0f2d0f'
    },
    {
        id: 'space',
        name: '星际战场',
        desc: '在宇宙深处的零重力战场',
        bgColor1: '#0a0a15',
        bgColor2: '#1a1a3e',
        groundColor: '#2d2d4a',
        skyColor: '#050510'
    }
];
