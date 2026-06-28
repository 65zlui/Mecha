// ==================== i18n ====================
const LOCALES = [
    { code: 'zh', name: '中文', dir: 'ltr' },
    { code: 'en', name: 'English', dir: 'ltr' },
    { code: 'ja', name: '日本語', dir: 'ltr' },
    { code: 'ko', name: '한국어', dir: 'ltr' },
    { code: 'fr', name: 'Français', dir: 'ltr' },
    { code: 'es', name: 'Español', dir: 'ltr' },
    { code: 'sv', name: 'Svenska', dir: 'ltr' },
    { code: 'nb', name: 'Norsk', dir: 'ltr' },
    { code: 'nl', name: 'Nederlands', dir: 'ltr' },
    { code: 'it', name: 'Italiano', dir: 'ltr' },
    { code: 'tr', name: 'Türkçe', dir: 'ltr' },
    { code: 'da', name: 'Dansk', dir: 'ltr' },
    { code: 'ru', name: 'Русский', dir: 'ltr' },
    { code: 'ar', name: 'العربية', dir: 'rtl' },
    { code: 'ug', name: 'ئۇيغۇرچە', dir: 'rtl' },
];

const I18N = {
zh:{title:'⚔️ 像素机甲对战 ⚔️',subtitle:'选择你的机甲，征服战场！',startGame:'🎮 开始游戏',instructions:'📖 游戏说明',selectMech:'选择你的机甲战士',player:'玩家',notSelected:'未选择',selectCharFor:'玩家 {n} 请选择角色',nextScene:'下一步：选择场景 →',backToMenu:'← 返回主菜单',selectBattleScene:'选择战斗场景',startBattle:'⚔️ 开始战斗！',backToChar:'← 返回角色选择',instructionsTitle:'📖 游戏说明',controlsTitle:'🎮 操作方式',p1Controls:'WASD 移动，F 攻击，G 防御',p2Controls:'方向键 移动，. 攻击，/ 防御',battleRules:'⚔️ 战斗规则',rule1:'靠近对手后使用攻击键造成伤害',rule2:'防御可以减少 50% 受到的伤害',rule3:'每个角色有不同的属性和特色',rule4:'先将对方血量降为 0 的一方获胜',up:'上',down:'下',left:'左',right:'右',attack:'攻击',defend:'防御',statAttack:'攻击',statDefense:'防御',statSpeed:'速度',winText:'🎉 {name} 获胜！🎉',rematch:'🔄 再来一局',homeBtn:'🏠 返回主菜单',language:'🌐 语言','char.crimson.name':'赤焰战神','char.crimson.desc':'来自熔岩星球的战士，攻击力极强','char.frost.name':'霜冻守卫','char.frost.desc':'极寒之地的守护者，防御力惊人','char.shadow.name':'暗影刺客','char.shadow.desc':'神秘的暗杀者，速度无人能及','char.titan.name':'泰坦重甲','char.titan.desc':'重装型机甲，攻守兼备','char.venom.name':'毒液猎手','char.venom.desc':'使用生化武器的致命猎手','char.thunder.name':'雷霆战将','char.thunder.desc':'掌控雷电的战场霸主','char.crystal.name':'水晶法师','char.crystal.desc':'操控水晶能量的神秘法师','char.steel.name':'钢铁先锋','char.steel.desc':'机械帝国的精英战士','char.nature.name':'自然之灵','char.nature.desc':'森林的守护者，与自然共生','char.void.name':'虚空行者','char.void.desc':'来自虚空维度的神秘存在','scene.dojo.name':'武道道场','scene.dojo.desc':'传统的战斗场地，平衡的地形','scene.volcano.name':'熔岩炼狱','scene.volcano.desc':'炽热的火山地带，充满危险','scene.cyber.name':'赛博都市','scene.cyber.desc':'未来科技感十足的竞技场','scene.forest.name':'远古森林','scene.forest.desc':'神秘的原始森林','scene.space.name':'星际战场','scene.space.desc':'在宇宙深处的零重力战场'},
en:{title:'⚔️ Pixel Mech Battle ⚔️',subtitle:'Choose your mech, conquer the battlefield!',startGame:'🎮 Start Game',instructions:'📖 Instructions',selectMech:'Select Your Mech Warrior',player:'Player',notSelected:'Not Selected',selectCharFor:'Player {n}, choose your character',nextScene:'Next: Select Scene →',backToMenu:'← Back to Menu',selectBattleScene:'Select Battle Scene',startBattle:'⚔️ Start Battle!',backToChar:'← Back to Characters',instructionsTitle:'📖 Instructions',controlsTitle:'🎮 Controls',p1Controls:'WASD to move, F to attack, G to defend',p2Controls:'Arrow keys to move, . to attack, / to defend',battleRules:'⚔️ Battle Rules',rule1:'Get close to your opponent and use attack to deal damage',rule2:'Defending reduces incoming damage by 50%',rule3:'Each character has unique stats and abilities',rule4:"The first to reduce the opponent's HP to 0 wins",up:'Up',down:'Down',left:'Left',right:'Right',attack:'ATK',defend:'DEF',statAttack:'ATK',statDefense:'DEF',statSpeed:'SPD',winText:'🎉 {name} Wins! 🎉',rematch:'🔄 Rematch',homeBtn:'🏠 Back to Menu',language:'🌐 Language','char.crimson.name':'Crimson Warlord','char.crimson.desc':'A warrior from the lava planet, devastating attack power','char.frost.name':'Frost Guardian','char.frost.desc':'Guardian of the frozen lands, incredible defense','char.shadow.name':'Shadow Assassin','char.shadow.desc':'A mysterious killer with unmatched speed','char.titan.name':'Titan Armor','char.titan.desc':'Heavy mech with balanced offense and defense','char.venom.name':'Venom Hunter','char.venom.desc':'A deadly hunter using biochemical weapons','char.thunder.name':'Thunder General','char.thunder.desc':'Battlefield overlord wielding lightning','char.crystal.name':'Crystal Mage','char.crystal.desc':'A mysterious mage channeling crystal energy','char.steel.name':'Steel Vanguard','char.steel.desc':'Elite warrior of the mechanical empire','char.nature.name':'Nature Spirit','char.nature.desc':'Guardian of the forest, one with nature','char.void.name':'Void Walker','char.void.desc':'A mysterious entity from the void dimension','scene.dojo.name':'Battle Dojo','scene.dojo.desc':'Traditional battleground with balanced terrain','scene.volcano.name':'Lava Inferno','scene.volcano.desc':'Scorching volcanic zone full of danger','scene.cyber.name':'Cyber City','scene.cyber.desc':'Futuristic high-tech arena','scene.forest.name':'Ancient Forest','scene.forest.desc':'A mysterious primordial forest','scene.space.name':'Stellar Battlefield','scene.space.desc':'Zero-gravity battlefield deep in space'},
ja:{title:'⚔️ ピクセルメカバトル ⚔️',subtitle:'メカを選んで、戦場を制覇せよ！',startGame:'🎮 ゲーム開始',instructions:'📖 遊び方',selectMech:'メカウォリアーを選択',player:'プレイヤー',notSelected:'未選択',selectCharFor:'プレイヤー{n}、キャラクターを選択',nextScene:'次へ：ステージ選択 →',backToMenu:'← メニューに戻る',selectBattleScene:'バトルステージを選択',startBattle:'⚔️ 戦闘開始！',backToChar:'← キャラ選択に戻る',instructionsTitle:'📖 遊び方',controlsTitle:'🎮 操作方法',p1Controls:'WASD 移動、F 攻撃、G 防御',p2Controls:'矢印キー 移動、. 攻撃、/ 防御',battleRules:'⚔️ バトルルール',rule1:'相手に近づいて攻撃キーでダメージ',rule2:'防御で被ダメージを50%軽減',rule3:'各キャラに異なる属性と特性',rule4:'先に相手のHPを0にした方が勝ち',up:'上',down:'下',left:'左',right:'右',attack:'攻撃',defend:'防御',statAttack:'攻撃',statDefense:'防御',statSpeed:'速度',winText:'🎉 {name} の勝利！🎉',rematch:'🔄 リマッチ',homeBtn:'🏠 メニュー','char.crimson.name':'紅炎の戦神','char.crimson.desc':'溶岩惑星の戦士','char.frost.name':'凍結の守護者','char.frost.desc':'極寒の地の守護者','char.shadow.name':'影の暗殺者','char.shadow.desc':'謎めいた殺し屋','char.titan.name':'タイタン重装','char.titan.desc':'攻守兼備の重装メカ','char.venom.name':'毒液の狩人','char.venom.desc':'生化兵器を使う狩人','char.thunder.name':'雷鳴の将軍','char.thunder.desc':'雷を操る覇者','char.crystal.name':'水晶の法師','char.crystal.desc':'水晶エネルギーの法師','char.steel.name':'鋼鉄の先鋒','char.steel.desc':'機械帝国のエリート','char.nature.name':'自然の精霊','char.nature.desc':'森の守護者','char.void.name':'虚空の行者','char.void.desc':'虚空次元の存在','scene.dojo.name':'武道道場','scene.dojo.desc':'伝統的な戦場','scene.volcano.name':'溶岩地獄','scene.volcano.desc':'灼熱の火山地帯','scene.cyber.name':'サイバーシティ','scene.cyber.desc':'未来的ハイテク競技場','scene.forest.name':'古代の森','scene.forest.desc':'神秘的な原始森林','scene.space.name':'星間戦場','scene.space.desc':'宇宙深部の無重力戦場'},
ko:{title:'⚔️ 픽셀 메카 배틀 ⚔️',subtitle:'메카를 선택하고 전장을 정복하세요!',startGame:'🎮 게임 시작',instructions:'📖 게임 설명',selectMech:'메카 워리어 선택',player:'플레이어',notSelected:'미선택',selectCharFor:'플레이어 {n}, 캐릭터를 선택하세요',nextScene:'다음: 장면 선택 →',backToMenu:'← 메뉴로 돌아가기',selectBattleScene:'배틀 장면 선택',startBattle:'⚔️ 전투 시작!',backToChar:'← 캐릭터 선택으로',instructionsTitle:'📖 게임 설명',controlsTitle:'🎮 조작법',p1Controls:'WASD 이동, F 공격, G 방어',p2Controls:'방향키 이동, . 공격, / 방어',battleRules:'⚔️ 배틀 규칙',rule1:'상대에게 다가가 공격키로 데미지',rule2:'방어 시 받는 데미지 50% 감소',rule3:'각 캐릭터마다 다른 속성',rule4:'상대 HP를 먼저 0으로 만드는 쪽이 승리',up:'위',down:'아래',left:'왼쪽',right:'오른쪽',attack:'공격',defend:'방어',statAttack:'공격',statDefense:'방어',statSpeed:'속도',winText:'🎉 {name} 승리! 🎉',rematch:'🔄 재대결',homeBtn:'🏠 메뉴','char.crimson.name':'홍염의 전쟁신','char.crimson.desc':'용암 행성의 전사','char.frost.name':'서리 수호자','char.frost.desc':'극한의 수호자','char.shadow.name':'그림자 암살자','char.shadow.desc':'신비한 암살자','char.titan.name':'타이탄 중장','char.titan.desc':'공수 겸비 중장 메카','char.venom.name':'독액 사냥꾼','char.venom.desc':'생화학 무기의 사냥꾼','char.thunder.name':'뇌명 장군','char.thunder.desc':'번개를 다루는 패자','char.crystal.name':'수정 마법사','char.crystal.desc':'수정 에너지의 마법사','char.steel.name':'강철 선봉','char.steel.desc':'기계 제국의 정예','char.nature.name':'자연의 정령','char.nature.desc':'숲의 수호자','char.void.name':'공허 방랑자','char.void.desc':'공허 차원의 존재','scene.dojo.name':'무도 도장','scene.dojo.desc':'전통적인 전장','scene.volcano.name':'용암 지옥','scene.volcano.desc':'뜨거운 화산 지대','scene.cyber.name':'사이버 시티','scene.cyber.desc':'미래적 아레나','scene.forest.name':'고대 숲','scene.forest.desc':'신비한 원시림','scene.space.name':'성간 전장','scene.space.desc':'무중력 전장'},
fr:{title:'⚔️ Bataille de Méca Pixel ⚔️',subtitle:'Choisissez votre méca !',startGame:'🎮 Commencer',instructions:'📖 Instructions',selectMech:'Sélectionnez Votre Méca',player:'Joueur',notSelected:'Non sélectionné',selectCharFor:'Joueur {n}, choisissez',nextScene:'Suivant : Scène →',backToMenu:'← Retour',selectBattleScene:'Sélectionnez la Scène',startBattle:'⚔️ Combat !',backToChar:'← Personnages',instructionsTitle:'📖 Instructions',controlsTitle:'🎮 Contrôles',p1Controls:'WASD bouger, F attaquer, G défendre',p2Controls:'Flèches bouger, . attaquer, / défendre',battleRules:'⚔️ Règles',rule1:'Approchez et attaquez',rule2:'Défense réduit dégâts de 50%',rule3:'Chaque personnage a des stats uniques',rule4:'Réduisez les PV adverses à 0',up:'Haut',down:'Bas',left:'Gauche',right:'Droite',attack:'ATQ',defend:'DÉF',statAttack:'ATQ',statDefense:'DÉF',statSpeed:'VIT',winText:'🎉 {name} Gagne ! 🎉',rematch:'🔄 Revanche',homeBtn:'🏠 Menu','char.crimson.name':'Seigneur Cramoisi','char.crimson.desc':'Guerrier de lave','char.frost.name':'Gardien du Givre','char.frost.desc':'Gardien des terres gelées','char.shadow.name':'Assassin de l\'Ombre','char.shadow.desc':'Tueur mystérieux','char.titan.name':'Armure Titan','char.titan.desc':'Méca lourd équilibré','char.venom.name':'Chasseur Venimeux','char.venom.desc':'Chasseur mortel','char.thunder.name':'Général Tonnerre','char.thunder.desc':'Seigneur de la foudre','char.crystal.name':'Mage de Cristal','char.crystal.desc':'Mage cristallin','char.steel.name':'Avant-garde d\'Acier','char.steel.desc':'Guerrier d\'élite','char.nature.name':'Esprit de la Nature','char.nature.desc':'Gardien de la forêt','char.void.name':'Marcheur du Vide','char.void.desc':'Entité du vide','scene.dojo.name':'Dojo','scene.dojo.desc':'Champ de bataille traditionnel','scene.volcano.name':'Enfer Volcanique','scene.volcano.desc':'Zone volcanique','scene.cyber.name':'Cité Cyber','scene.cyber.desc':'Arène futuriste','scene.forest.name':'Forêt Ancestrale','scene.forest.desc':'Forêt primitive','scene.space.name':'Champ Stellaire','scene.space.desc':'Champ de bataille spatial'},
es:{title:'⚔️ Batalla Mecha Píxel ⚔️',subtitle:'¡Elige tu mecha!',startGame:'🎮 Iniciar',instructions:'📖 Instrucciones',selectMech:'Selecciona Tu Mecha',player:'Jugador',notSelected:'No seleccionado',selectCharFor:'Jugador {n}, elige',nextScene:'Siguiente: Escena →',backToMenu:'← Volver',selectBattleScene:'Seleccionar Escena',startBattle:'⚔️ ¡Batalla!',backToChar:'← Personajes',instructionsTitle:'📖 Instrucciones',controlsTitle:'🎮 Controles',p1Controls:'WASD mover, F atacar, G defender',p2Controls:'Flechas mover, . atacar, / defender',battleRules:'⚔️ Reglas',rule1:'Acércate y ataca',rule2:'Defensa reduce daño 50%',rule3:'Cada personaje tiene stats únicas',rule4:'Reduce a 0 los PV del rival',up:'Arr',down:'Abj',left:'Izq',right:'Der',attack:'ATQ',defend:'DEF',statAttack:'ATQ',statDefense:'DEF',statSpeed:'VEL',winText:'🎉 ¡{name} Gana! 🎉',rematch:'🔄 Revancha',homeBtn:'🏠 Menú','char.crimson.name':'Señor Carmesí','char.crimson.desc':'Guerrero de lava','char.frost.name':'Guardián Helado','char.frost.desc':'Guardián gélido','char.shadow.name':'Asesino Sombrío','char.shadow.desc':'Asesino misterioso','char.titan.name':'Armadura Titán','char.titan.desc':'Mecha pesado','char.venom.name':'Cazador Venenoso','char.venom.desc':'Cazador letal','char.thunder.name':'General Trueno','char.thunder.desc':'Señor del trueno','char.crystal.name':'Mago de Cristal','char.crystal.desc':'Mago cristalino','char.steel.name':'Vanguardia de Acero','char.steel.desc':'Guerrero élite','char.nature.name':'Espíritu Natural','char.nature.desc':'Guardián del bosque','char.void.name':'Caminante del Vacío','char.void.desc':'Entidad del vacío','scene.dojo.name':'Dojo','scene.dojo.desc':'Campo tradicional','scene.volcano.name':'Infierno Volcánico','scene.volcano.desc':'Zona volcánica','scene.cyber.name':'Ciudad Cyber','scene.cyber.desc':'Arena futurista','scene.forest.name':'Bosque Ancestral','scene.forest.desc':'Bosque primitivo','scene.space.name':'Campo Estelar','scene.space.desc':'Campo espacial'},
sv:{title:'⚔️ Pixel Mekastrid ⚔️',subtitle:'Välj din meka!',startGame:'🎮 Starta',instructions:'📖 Instruktioner',selectMech:'Välj Din Meka',player:'Spelare',notSelected:'Ej vald',selectCharFor:'Spelare {n}, välj',nextScene:'Nästa: Scen →',backToMenu:'← Tillbaka',selectBattleScene:'Välj Scen',startBattle:'⚔️ Strid!',backToChar:'← Karaktärer',instructionsTitle:'📖 Instruktioner',controlsTitle:'🎮 Kontroller',p1Controls:'WASD flytta, F attackera, G försvara',p2Controls:'Pilar flytta, . attackera, / försvara',battleRules:'⚔️ Regler',rule1:'Gå nära och attackera',rule2:'Försvar minskar skada 50%',rule3:'Unika egenskaper',rule4:'Sänk HP till 0',up:'Upp',down:'Ner',left:'Vänster',right:'Höger',attack:'ATK',defend:'FÖR',statAttack:'ATK',statDefense:'FÖR',statSpeed:'HST',winText:'🎉 {name} Vinner! 🎉',rematch:'🔄 Retur',homeBtn:'🏠 Meny','char.crimson.name':'Karmosin','char.crimson.desc':'Krigare från lava','char.frost.name':'Frostväktare','char.frost.desc':'Väktare av kyla','char.shadow.name':'Skuggassassin','char.shadow.desc':'Mystisk mördare','char.titan.name':'Titanrustning','char.titan.desc':'Tung meka','char.venom.name':'Giftjägare','char.venom.desc':'Dödlig jägare','char.thunder.name':'Åskgeneralen','char.thunder.desc':'Blixtens herre','char.crystal.name':'Kristallmagiker','char.crystal.desc':'Kristallenergi','char.steel.name':'Stålvangard','char.steel.desc':'Elitekrigare','char.nature.name':'Naturande','char.nature.desc':'Skogens väktare','char.void.name':'Tomrumsvandrare','char.void.desc':'Tomrumsvarelse','scene.dojo.name':'Dojo','scene.dojo.desc':'Traditionellt slagfält','scene.volcano.name':'Lavahelvete','scene.volcano.desc':'Vulkanisk zon','scene.cyber.name':'Cyberstad','scene.cyber.desc':'Futuristisk arena','scene.forest.name':'Urgammal Skog','scene.forest.desc':'Mystisk urskog','scene.space.name':'Stjärnslagfält','scene.space.desc':'Tyngdlöst slagfält'},
nb:{title:'⚔️ Piksel Meka Kamp ⚔️',subtitle:'Velg din meka!',startGame:'🎮 Start',instructions:'📖 Instruksjoner',selectMech:'Velg Din Meka',player:'Spiller',notSelected:'Ikke valgt',selectCharFor:'Spiller {n}, velg',nextScene:'Neste: Scene →',backToMenu:'← Tilbake',selectBattleScene:'Velg Scene',startBattle:'⚔️ Kamp!',backToChar:'← Karakterer',instructionsTitle:'📖 Instruksjoner',controlsTitle:'🎮 Kontroller',p1Controls:'WASD flytt, F angrip, G forsvar',p2Controls:'Piler flytt, . angrip, / forsvar',battleRules:'⚔️ Regler',rule1:'Gå nær og angrip',rule2:'Forsvar reduserer skade 50%',rule3:'Unike egenskaper',rule4:'Senk HP til 0',up:'Opp',down:'Ned',left:'Venstre',right:'Høyre',attack:'ANG',defend:'FOR',statAttack:'ANG',statDefense:'FOR',statSpeed:'HST',winText:'🎉 {name} Vinner! 🎉',rematch:'🔄 Omkamp',homeBtn:'🏠 Meny','char.crimson.name':'Karmosin','char.crimson.desc':'Lavakriger','char.frost.name':'Frostvokter','char.frost.desc':'Frosset vokter','char.shadow.name':'Skyggeassassin','char.shadow.desc':'Mystisk snikmorder','char.titan.name':'Titanrustning','char.titan.desc':'Tung meka','char.venom.name':'Giftjeger','char.venom.desc':'Dødelig jeger','char.thunder.name':'Tordengeneralen','char.thunder.desc':'Lynets herre','char.crystal.name':'Krystallmagiker','char.crystal.desc':'Krystallenergi','char.steel.name':'Stålvangard','char.steel.desc':'Elitekriger','char.nature.name':'Naturånd','char.nature.desc':'Skogens vokter','char.void.name':'Tomromvandre','char.void.desc':'Tomromvesen','scene.dojo.name':'Dojo','scene.dojo.desc':'Tradisjonell slagmark','scene.volcano.name':'Lavahelvete','scene.volcano.desc':'Vulkansk sone','scene.cyber.name':'Cyberby','scene.cyber.desc':'Futuristisk arena','scene.forest.name':'Eldgammel Skog','scene.forest.desc':'Mystisk urskog','scene.space.name':'Stjerneslagmark','scene.space.desc':'Vektløst slagfelt'},
nl:{title:'⚔️ Pixel Mecha Gevecht ⚔️',subtitle:'Kies je mecha!',startGame:'🎮 Start',instructions:'📖 Instructies',selectMech:'Kies Je Mecha',player:'Speler',notSelected:'Niet geselecteerd',selectCharFor:'Speler {n}, kies',nextScene:'Volgende: Scène →',backToMenu:'← Terug',selectBattleScene:'Kies Scène',startBattle:'⚔️ Gevecht!',backToChar:'← Personages',instructionsTitle:'📖 Instructies',controlsTitle:'🎮 Besturing',p1Controls:'WASD bewegen, F aanvallen, G verdedigen',p2Controls:'Pijlen bewegen, . aanvallen, / verdedigen',battleRules:'⚔️ Regels',rule1:'Ga dichtbij en val aan',rule2:'Verdedigen vermindert schade 50%',rule3:'Unieke eigenschappen',rule4:'Breng HP naar 0',up:'Omhoog',down:'Omlaag',left:'Links',right:'Rechts',attack:'AAN',defend:'VER',statAttack:'AAN',statDefense:'VER',statSpeed:'SNH',winText:'🎉 {name} Wint! 🎉',rematch:'🔄 Herkansing',homeBtn:'🏠 Menu','char.crimson.name':'Karmozijn','char.crimson.desc':'Lavakrijger','char.frost.name':'Vorstbewaker','char.frost.desc':'Bevroren bewaker','char.shadow.name':'Schaduwmoordenaar','char.shadow.desc':'Mysterieuze moordenaar','char.titan.name':'Titanenpantser','char.titan.desc':'Zware mecha','char.venom.name':'Gifjager','char.venom.desc':'Dodelijke jager','char.thunder.name':'Dondergeneraal','char.thunder.desc':'Bliksemheerser','char.crystal.name':'Kristalmagiër','char.crystal.desc':'Kristalenergie','char.steel.name':'Staalgarde','char.steel.desc':'Elitekrijger','char.nature.name':'Natuurgeest','char.nature.desc':'Bosbewaker','char.void.name':'Leegte Wandelaar','char.void.desc':'Leegte wezen','scene.dojo.name':'Dojo','scene.dojo.desc':'Traditioneel slagveld','scene.volcano.name':'Lavahel','scene.volcano.desc':'Vulkanische zone','scene.cyber.name':'Cyberstad','scene.cyber.desc':'Futuristische arena','scene.forest.name':'Oeroud Woud','scene.forest.desc':'Mysterieus oerbos','scene.space.name':'Sterrenslagveld','scene.space.desc':'Gewichtloos slagveld'},
it:{title:'⚔️ Battaglia Mecha Pixel ⚔️',subtitle:'Scegli il tuo mecha!',startGame:'🎮 Inizia',instructions:'📖 Istruzioni',selectMech:'Seleziona Il Tuo Mecha',player:'Giocatore',notSelected:'Non selezionato',selectCharFor:'Giocatore {n}, scegli',nextScene:'Avanti: Scena →',backToMenu:'← Indietro',selectBattleScene:'Seleziona Scena',startBattle:'⚔️ Battaglia!',backToChar:'← Personaggi',instructionsTitle:'📖 Istruzioni',controlsTitle:'🎮 Comandi',p1Controls:'WASD muovi, F attacca, G difendi',p2Controls:'Frecce muovi, . attacca, / difendi',battleRules:'⚔️ Regole',rule1:'Avvicinati e attacca',rule2:'Difesa riduce danno 50%',rule3:'Statistiche uniche',rule4:'Porta PV a 0',up:'Su',down:'Giù',left:'Sin',right:'Des',attack:'ATT',defend:'DIF',statAttack:'ATT',statDefense:'DIF',statSpeed:'VEL',winText:'🎉 {name} Vince! 🎉',rematch:'🔄 Rivincita',homeBtn:'🏠 Menu','char.crimson.name':'Signore Cremisi','char.crimson.desc':'Guerriero lavico','char.frost.name':'Guardiano del Gelo','char.frost.desc':'Guardiano gelato','char.shadow.name':'Assassino Ombra','char.shadow.desc':'Assassino misterioso','char.titan.name':'Armatura Titano','char.titan.desc':'Mecha pesante','char.venom.name':'Cacciatore Velenoso','char.venom.desc':'Cacciatore letale','char.thunder.name':'Generale Tuono','char.thunder.desc':'Signore del fulmine','char.crystal.name':'Mago di Cristallo','char.crystal.desc':'Mago cristallino','char.steel.name':'Avanguardia d\'Acciaio','char.steel.desc':'Guerriero élite','char.nature.name':'Spirito Naturale','char.nature.desc':'Guardiano foresta','char.void.name':'Viandante del Vuoto','char.void.desc':'Entità del vuoto','scene.dojo.name':'Dojo','scene.dojo.desc':'Campo tradizionale','scene.volcano.name':'Inferno Vulcanico','scene.volcano.desc':'Zona vulcanica','scene.cyber.name':'Città Cyber','scene.cyber.desc':'Arena futuristica','scene.forest.name':'Foresta Ancestrale','scene.forest.desc':'Foresta primordiale','scene.space.name':'Campo Stellare','scene.space.desc':'Campo spaziale'},
tr:{title:'⚔️ Piksel Meka Savaşı ⚔️',subtitle:'Mekani seç!',startGame:'🎮 Başla',instructions:'📖 Talimatlar',selectMech:'Mekani Seç',player:'Oyuncu',notSelected:'Seçilmedi',selectCharFor:'Oyuncu {n}, seç',nextScene:'İleri: Sahne →',backToMenu:'← Geri',selectBattleScene:'Sahne Seç',startBattle:'⚔️ Savaş!',backToChar:'← Karakterler',instructionsTitle:'📖 Talimatlar',controlsTitle:'🎮 Kontroller',p1Controls:'WASD hareket, F saldırı, G savunma',p2Controls:'Oklar hareket, . saldırı, / savunma',battleRules:'⚔️ Kurallar',rule1:'Yaklaş ve saldır',rule2:'Savunma hasarı %50 azaltır',rule3:'Benzersiz özellikler',rule4:'CP\'yi 0\'a indir',up:'Yukarı',down:'Aşağı',left:'Sol',right:'Sağ',attack:'SAL',defend:'SAV',statAttack:'SAL',statDefense:'SAV',statSpeed:'HIZ',winText:'🎉 {name} Kazandı! 🎉',rematch:'🔄 Rövanş',homeBtn:'🏠 Menü','char.crimson.name':'Kızıl Savaş Lordu','char.crimson.desc':'Lav gezegeni savaşçısı','char.frost.name':'Buz Muhafızı','char.frost.desc':'Donmuş topraklar','char.shadow.name':'Gölge Suikastçı','char.shadow.desc':'Gizemli katil','char.titan.name':'Titan Zırhı','char.titan.desc':'Ağır meka','char.venom.name':'Zehir Avcısı','char.venom.desc':'Ölümcül avcı','char.thunder.name':'Yıldırım Generali','char.thunder.desc':'Yıldırım gücü','char.crystal.name':'Kristal Büyücü','char.crystal.desc':'Kristal enerjisi','char.steel.name':'Çelik Öncü','char.steel.desc':'Elit savaşçı','char.nature.name':'Doğa Ruhu','char.nature.desc':'Orman koruyucusu','char.void.name':'Boşluk Gezgini','char.void.desc':'Boşluk varlığı','scene.dojo.name':'Dojo','scene.dojo.desc':'Geleneksel alan','scene.volcano.name':'Lav Cehennemi','scene.volcano.desc':'Volkanik bölge','scene.cyber.name':'Siber Şehir','scene.cyber.desc':'Fütüristik arena','scene.forest.name':'Kadim Orman','scene.forest.desc':'İlkel orman','scene.space.name':'Yıldız Alanı','scene.space.desc':'Uzay savaş alanı'},
da:{title:'⚔️ Pixel Meka Kamp ⚔️',subtitle:'Vælg din meka!',startGame:'🎮 Start',instructions:'📖 Instruktioner',selectMech:'Vælg Din Meka',player:'Spiller',notSelected:'Ikke valgt',selectCharFor:'Spiller {n}, vælg',nextScene:'Næste: Scene →',backToMenu:'← Tilbage',selectBattleScene:'Vælg Scene',startBattle:'⚔️ Kamp!',backToChar:'← Karakterer',instructionsTitle:'📖 Instruktioner',controlsTitle:'🎮 Kontroller',p1Controls:'WASD flyt, F angrib, G forsvar',p2Controls:'Piler flyt, . angrib, / forsvar',battleRules:'⚔️ Regler',rule1:'Gå nær og angrib',rule2:'Forsvar reducerer skade 50%',rule3:'Unikke egenskaber',rule4:'Sænk HP til 0',up:'Op',down:'Ned',left:'Venstre',right:'Højre',attack:'ANG',defend:'FOR',statAttack:'ANG',statDefense:'FOR',statSpeed:'HST',winText:'🎉 {name} Vinder! 🎉',rematch:'🔄 Omkamp',homeBtn:'🏠 Menu','char.crimson.name':'Karmoisin','char.crimson.desc':'Lavakriger','char.frost.name':'Frostvogter','char.frost.desc':'Frossen vogter','char.shadow.name':'Skyggeassassin','char.shadow.desc':'Mystisk snigmorder','char.titan.name':'Titanrustning','char.titan.desc':'Tung meka','char.venom.name':'Giftjæger','char.venom.desc':'Dødelig jæger','char.thunder.name':'Tordengeneral','char.thunder.desc':'Lynets herre','char.crystal.name':'Krystalmagiker','char.crystal.desc':'Krystalenergi','char.steel.name':'Stålvangard','char.steel.desc':'Elitekriger','char.nature.name':'Naturånd','char.nature.desc':'Skovens vogter','char.void.name':'Tomrumsvandrer','char.void.desc':'Tomrumsvæsen','scene.dojo.name':'Dojo','scene.dojo.desc':'Traditionel slagmark','scene.volcano.name':'Lavahelvede','scene.volcano.desc':'Vulkansk zone','scene.cyber.name':'Cyberby','scene.cyber.desc':'Futuristisk arena','scene.forest.name':'Urgammel Skov','scene.forest.desc':'Mystisk urskov','scene.space.name':'Stjerneslagmark','scene.space.desc':'Vægtløst slagfelt'},
ru:{title:'⚔️ Пиксельная Меха Битва ⚔️',subtitle:'Выбери меху!',startGame:'🎮 Начать',instructions:'📖 Инструкции',selectMech:'Выберите Меху',player:'Игрок',notSelected:'Не выбрано',selectCharFor:'Игрок {n}, выберите',nextScene:'Далее: Сцена →',backToMenu:'← Назад',selectBattleScene:'Выберите Сцену',startBattle:'⚔️ Бой!',backToChar:'← Персонажи',instructionsTitle:'📖 Инструкции',controlsTitle:'🎮 Управление',p1Controls:'WASD движение, F атака, G защита',p2Controls:'Стрелки движение, . атака, / защита',battleRules:'⚔️ Правила',rule1:'Подойдите и атакуйте',rule2:'Защита снижает урон на 50%',rule3:'Уникальные характеристики',rule4:'Обнулите ОЗ противника',up:'Вверх',down:'Вниз',left:'Влево',right:'Вправо',attack:'АТК',defend:'ЗАЩ',statAttack:'АТК',statDefense:'ЗАЩ',statSpeed:'СКР',winText:'🎉 {name} Побеждает! 🎉',rematch:'🔄 Реванш',homeBtn:'🏠 Меню','char.crimson.name':'Багровый Воитель','char.crimson.desc':'Воин лавы','char.frost.name':'Ледяной Страж','char.frost.desc':'Страж льда','char.shadow.name':'Теневой Убийца','char.shadow.desc':'Таинственный убийца','char.titan.name':'Титановая Броня','char.titan.desc':'Тяжёлый мех','char.venom.name':'Ядовитый Охотник','char.venom.desc':'Смертоносный охотник','char.thunder.name':'Громовой Генерал','char.thunder.desc':'Властелин молнии','char.crystal.name':'Кристальный Маг','char.crystal.desc':'Маг кристаллов','char.steel.name':'Стальной Авангард','char.steel.desc':'Элитный воин','char.nature.name':'Дух Природы','char.nature.desc':'Дух леса','char.void.name':'Странник Пустоты','char.void.desc':'Сущность пустоты','scene.dojo.name':'Додзё','scene.dojo.desc':'Традиционное поле','scene.volcano.name':'Лавовый Ад','scene.volcano.desc':'Вулканическая зона','scene.cyber.name':'Кибер Город','scene.cyber.desc':'Футуристическая арена','scene.forest.name':'Древний Лес','scene.forest.desc':'Первобытный лес','scene.space.name':'Звёздное Поле','scene.space.desc':'Космическое поле боя'},
ar:{title:'⚔️ معركة الآلي بكسل ⚔️',subtitle:'اختر آليّك!',startGame:'🎮 ابدأ',instructions:'📖 التعليمات',selectMech:'اختر الآلي',player:'اللاعب',notSelected:'غير محدد',selectCharFor:'اللاعب {n}، اختر',nextScene:'التالي: المشهد →',backToMenu:'← رجوع',selectBattleScene:'اختر المشهد',startBattle:'⚔️ معركة!',backToChar:'← الشخصيات',instructionsTitle:'📖 التعليمات',controlsTitle:'🎮 التحكم',p1Controls:'WASD تحرك، F هجوم، G دفاع',p2Controls:'الأسهم تحرك، . هجوم، / دفاع',battleRules:'⚔️ القواعد',rule1:'اقترب وهاجم',rule2:'الدفاع يقلل الضرر 50%',rule3:'إحصائيات فريدة',rule4:'أوصل صحة الخصم إلى 0',up:'أعلى',down:'أسفل',left:'يسار',right:'يمين',attack:'هجوم',defend:'دفاع',statAttack:'هجوم',statDefense:'دفاع',statSpeed:'سرعة',winText:'🎉 {name} يفوز! 🎉',rematch:'🔄 إعادة',homeBtn:'🏠 القائمة','char.crimson.name':'أمير الحرب القرمزي','char.crimson.desc':'محارب الحمم','char.frost.name':'حارس الجليد','char.frost.desc':'حارس متجمد','char.shadow.name':'قاتل الظل','char.shadow.desc':'قاتل غامض','char.titan.name':'درع التايتان','char.titan.desc':'آلي ثقيل','char.venom.name':'صياد السموم','char.venom.desc':'صياد مميت','char.thunder.name':'جنرال الرعد','char.thunder.desc':'سيد البرق','char.crystal.name':'ساحر الكريستال','char.crystal.desc':'ساحر كريستالي','char.steel.name':'طليعة الفولاذ','char.steel.desc':'محارب نخبة','char.nature.name':'روح الطبيعة','char.nature.desc':'حارس الغابة','char.void.name':'سائر الفراغ','char.void.desc':'كيان الفراغ','scene.dojo.name':'دوجو','scene.dojo.desc':'ساحة تقليدية','scene.volcano.name':'جحيم الحمم','scene.volcano.desc':'منطقة بركانية','scene.cyber.name':'المدينة الإلكترونية','scene.cyber.desc':'ساحة مستقبلية','scene.forest.name':'الغابة القديمة','scene.forest.desc':'غابة بدائية','scene.space.name':'ساحة النجوم','scene.space.desc':'ساحة فضائية'},
ug:{title:'⚔️ پىكسېل ماشىنا ئۇرۇشى ⚔️',subtitle:'ماشىنىڭىزنى تاللاڭ!',startGame:'🎮 باشلاش',instructions:'📖 چۈشەندۈرۈش',selectMech:'ماشىنا تاللاش',player:'ئويۇنچى',notSelected:'تاللانمىدى',selectCharFor:'ئويۇنچى {n}، تاللاڭ',nextScene:'كېيىنكى: مەنزىرە →',backToMenu:'← قايتىش',selectBattleScene:'مەنزىرە تاللاش',startBattle:'⚔️ جەڭ!',backToChar:'← ئوبرازلار',instructionsTitle:'📖 چۈشەندۈرۈش',controlsTitle:'🎮 كونترول',p1Controls:'WASD يۆتكىلىش، F ھۇجۇم، G مۇداپىئە',p2Controls:'يا ئوقلار يۆتكىلىش، . ھۇجۇم، / مۇداپىئە',battleRules:'⚔️ قائىدىلەر',rule1:'يېقىنلىشىپ ھۇجۇم قىلىڭ',rule2:'مۇداپىئە زىياننى 50% ئازايتىدۇ',rule3:'ئالاھىدە خاسلىقلار',rule4:'سالامەتلىكنى 0 گە يەتكۈزۈڭ',up:'ئۈستى',down:'ئاستى',left:'سول',right:'ئوڭ',attack:'ھۇجۇم',defend:'مۇداپىئە',statAttack:'ھۇجۇم',statDefense:'مۇداپىئە',statSpeed:'سۈرئەت',winText:'🎉 {name} غالىب! 🎉',rematch:'🔄 قايتا',homeBtn:'🏠 تىزىملىك','char.crimson.name':'قىزىل جەڭ ئاغا','char.crimson.desc':'لاۋا جەڭچىسى','char.frost.name':'مۇز ساقچىسى','char.frost.desc':'مۇزلاپ كەتكەن ساقچى','char.shadow.name':'سايە قاتىل','char.shadow.desc':'سىرلىق قاتىل','char.titan.name':'تىتان ساۋۇت','char.titan.desc':'ئېغىر ماشىنا','char.venom.name':'زەھەر ئوۋچىسى','char.venom.desc':'ئۆلۈملۈك ئوۋچى','char.thunder.name':'گۈلدۈرامما گېنېرال','char.thunder.desc':'چاقماق كۈچى','char.crystal.name':'كرىستال سېھىرگەر','char.crystal.desc':'كرىستال ئېنېرگىيىسى','char.steel.name':'پولات ئاۋانگارد','char.steel.desc':'ئېلىت جەڭچى','char.nature.name':'تەبىئەت روھى','char.nature.desc':'ئورمان ساقچىسى','char.void.name':'بوشلۇق سەييارەتچىسى','char.void.desc':'بوشلۇق مەۋجۇتى','scene.dojo.name':'دوجو','scene.dojo.desc':'ئەنئەنىۋى مەيدان','scene.volcano.name':'لاۋا دوزاخى','scene.volcano.desc':'ۋولكان رايونى','scene.cyber.name':'كىبېر شەھەر','scene.cyber.desc':'كېلەچەك ئارېنا','scene.forest.name':'قەدىمكى ئورمان','scene.forest.desc':'ئىپتىدائىي ئورمان','scene.space.name':'يۇلتۇز مەيدانى','scene.space.desc':'ئالەم بوشلۇقى مەيدانى'},
};

let currentLocale = 'zh';
function detectSystemLanguage() {
    const langs = navigator.languages || [navigator.language || navigator.userLanguage || ''];
    for (const lang of langs) {
        const code = lang.split('-')[0].toLowerCase();
        if (I18N[code]) return code;
    }
    // Fallback: try matching full locale like zh-TW -> zh
    for (const lang of langs) {
        const full = lang.toLowerCase();
        for (const key of Object.keys(I18N)) {
            if (full.startsWith(key)) return key;
        }
    }
    return 'en';
}
function initLocale() {
    const saved = localStorage.getItem('mecha-locale');
    if (saved && I18N[saved]) {
        currentLocale = saved;
    } else {
        currentLocale = detectSystemLanguage();
    }
}
function t(key, params) {
    let text = I18N[currentLocale]?.[key] || I18N['en']?.[key] || key;
    if (params) { for (const [k, v] of Object.entries(params)) text = text.replace(`{${k}}`, v); }
    return text;
}
function switchLanguage(locale) {
    currentLocale = locale;
    localStorage.setItem('mecha-locale', locale);
    const info = LOCALES.find(l => l.code === locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = info?.dir || 'ltr';
    applyTranslations();
    if (window.app) {
        if (document.getElementById('characterSelection')?.classList.contains('active')) window.app.selectionView.renderCharacterSelection();
        if (document.getElementById('sceneSelection')?.classList.contains('active')) window.app.selectionView.renderSceneSelection();
    }
}
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
    document.title = t('title');
    const options = LOCALES.map(l => `<option value="${l.code}" ${l.code === currentLocale ? 'selected' : ''}>${l.name}</option>`).join('');
    const select = document.getElementById('langSelect');
    if (select) select.innerHTML = options;
    const btnContainer = document.getElementById('menuLangButtons');
    if (btnContainer) {
        btnContainer.innerHTML = LOCALES.map(l =>
            `<button class="lang-btn ${l.code === currentLocale ? 'active' : ''}" onclick="switchLanguage('${l.code}')">${l.name}</button>`
        ).join('');
    }
}
function toggleLangPanel() {
    const panel = document.getElementById('langPanel');
    if (panel) panel.classList.toggle('open');
}

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
                <div class="character-name" style="color: ${char.color};">${t('char.' + char.id + '.name')}</div>
                <div class="character-desc">${t('char.' + char.id + '.desc')}</div>
                <div class="character-stats">
                    <div class="stat-bar">
                        <span class="stat-label">${t('statAttack')}</span>
                        <div class="stat-fill"><div class="stat-fill-inner" style="width: ${char.stats.attack}%; background: #ff6b6b;"></div></div>
                    </div>
                    <div class="stat-bar">
                        <span class="stat-label">${t('statDefense')}</span>
                        <div class="stat-fill"><div class="stat-fill-inner" style="width: ${char.stats.defense}%; background: #4ecdc4;"></div></div>
                    </div>
                    <div class="stat-bar">
                        <span class="stat-label">${t('statSpeed')}</span>
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
        const p1Char = this.viewModel.getSelectedP1();
        const p2Char = this.viewModel.getSelectedP2();
        const p1Name = p1Char ? t('char.' + p1Char.id + '.name') : t('notSelected');
        const p2Name = p2Char ? t('char.' + p2Char.id + '.name') : t('notSelected');
        
        document.getElementById('p1Selected').textContent = p1Name;
        document.getElementById('p2Selected').textContent = p2Name;
        document.getElementById('turnIndicator').textContent = 
            t('selectCharFor', { n: String(this.viewModel.getSelectingFor()) });
    }

    renderSceneSelection() {
        const scenes = this.viewModel.getScenes();
        const grid = document.getElementById('sceneGrid');
        
        grid.innerHTML = scenes.map((scene, index) => `
            <div class="scene-card ${this.viewModel.getCurrentScene() === scene ? 'selected' : ''}" 
                 onclick="selectionView.selectScene(${index})">
                <div class="scene-preview" style="background: linear-gradient(to bottom, ${scene.bgColor1}, ${scene.bgColor2});"></div>
                <div class="scene-name">${t('scene.' + scene.id + '.name')}</div>
                <div class="scene-desc">${t('scene.' + scene.id + '.desc')}</div>
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

        const p1Name = t('char.' + p1Character.id + '.name');
        const p2Name = t('char.' + p2Character.id + '.name');
        document.getElementById('p1Name').textContent = p1Name;
        document.getElementById('p2Name').textContent = p2Name;
        document.getElementById('p1ControlName').textContent = p1Name;
        document.getElementById('p2ControlName').textContent = p2Name;
        document.getElementById('gameOver').style.display = 'none';

        this.viewModel.startGame(p1Character, p2Character, scene);
    }

    updateHealthBars(p1, p2) {
        const maxHealth1 = this.p1Character.id === 'titan' ? 150 : 100;
        const maxHealth2 = this.p2Character.id === 'titan' ? 150 : 100;

        document.getElementById('health1').style.width = (p1 / maxHealth1 * 100) + '%';
        document.getElementById('health2').style.width = (p2 / maxHealth2 * 100) + '%';
    }

    handleGameOver(winner) {
        const winnerChar = winner === 1 ? this.p1Character : this.p2Character;
        const winnerName = t('char.' + winnerChar.id + '.name');
        document.getElementById('winnerText').textContent = t('winText', { name: winnerName });
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
initLocale();
window.app = new App();
window.selectionView = window.app.selectionView;
applyTranslations();

// 全局函数
window.showMainMenu = () => window.app.showScreen('mainMenu');
window.showInstructions = () => window.app.showScreen('instructions');
window.showCharacterSelection = () => window.app.showScreen('characterSelection');
window.showSceneSelection = () => window.app.selectionViewModel.canProceedToSceneSelection() && window.app.showScreen('sceneSelection');
window.startGame = () => window.app.startGame();
window.backToMenu = () => window.app.backToMenu();
window.rematch = () => window.app.rematch();
