const BATTLECRUISER_PROPERTIES = {
    name: 'battlecruiser',
    path: './img/defenders/battlecruiser/',
    sprites: ['portrait.png', 'idle.png', 'dummy.png', 'projectile.png'],
    hotkey: 'b',
    description: 'The battlecruiser is a type of terran capital ship employed in the Koprulu Sector. ' +
        'As a ship, it can <b>move</b> freely to any empty ground on the map and target both <b>ground and air</b> enemies with <b>high amount of damage</b>. ' +
        'Its specialized weapons can <b>shoot through the thick armor</b> of the Zerg.',
    portrait: {
        frameWidth: 173,
        frameHeight: 185,
        sheetWidth: 75,
        frames: 75,
        frameDuration: 0.12,
        loop: true,
        scale: 1
    },
    idle: {
        frameWidth: 114,
        frameHeight: 114,
        sheetWidth: 32,
        frames: 32,
        frameDuration: 0.1,
        loop: true,
        scale: .5
    },
    dummy: {
        frameWidth: 114,
        frameHeight: 114,
        sheetWidth: 32,
        frames: 32,
        frameDuration: 0.15,
        loop: true,
        scale: .7,
        xOffset: 56,
        yOffset: 53
    },
    projectile: {
        //todo
    },
    stats: {
        cost: 300,
        range: 3,
        cooldown: 3,
        damage: 275,
        isAoe: false,
        isArmorPiercing: true,
        isAntiGround: true,
        isAntiAir: false,
    }
};

const FIREBAT_PROPERTIES = {
    name: 'firebat',
    path: './img/defenders/firebat/',
    sprites: ['portrait.png', 'idle.png', 'dummy.png', 'shoot.png', 'projectile.png'],
    hotkey: 'f',
    description: 'The firebat is a type of terran infantry specialized for close-quarters combat. He makes up for his <b>low range</b> with the ability to do <b>area of effect (AOE)</b> damage to <b>ground</b> enemies.',
    portrait: {
        frameWidth: 173,
        frameHeight: 185,
        sheetWidth: 65,
        frames: 65,
        frameDuration: 0.11,
        loop: true,
        scale: 1
    },
    idle: {
        frameWidth: 32,
        frameHeight: 32,
        sheetWidth: 32,
        frames: 32,
        frameDuration: 0.1,
        loop: true,
        scale: 1.2
    },
    dummy: {
        frameWidth: 32,
        frameHeight: 32,
        sheetWidth: 32,
        frames: 32,
        frameDuration: 0.1,
        loop: true,
        scale: 1.2,
        xOffset: 16,
        yOffset: 30
    },
    shoot: {
        frameWidth: 31,
        frameHeight: 31,
        sheetWidth: 16,
        frames: 16,
        frameDuration: 0.1,
        loop: true,
        scale: 1.2
    },
    projectile: {
        frameWidth: 70,
        frameHeight: 70,
        sheetWidth: 16,
        frames: 224,
        frameDuration: 0.1,
        loop: true,
        scale: 0.5,
    },
    stats: {
        cost: 100,
        range: 2,
        cooldown: 0,
        damage: 50,
        isAoe: true,
        isArmorPiercing: false,
        isAntiGround: true,
        isAntiAir: false
    }
};

const GHOST_PROPERTIES = {
    name: "ghost",
    path: './img/defenders/ghost/',
    sprites: ['portrait.png', 'idle.png', 'dummy.png', 'shoot.png'],
    hotkey: 'g',
    description: 'Ghosts are feared terran covert operatives known for their assassination skills. ' +
        'They can take out both <b>ground and air</b> target from <b>long range</b> and <b>penetrate any protected armor</b>.',
    portrait: {
        frameWidth: 224,
        frameHeight: 240,
        sheetWidth: 71,
        frames: 71,
        frameDuration: 0.115,
        loop: true,
        scale: 1
    },
    idle: {
        frameWidth: 40,
        frameHeight: 36,
        sheetWidth: 16,
        frames: 16,
        frameDuration: 0.1,
        loop: true,
        scale: 1.2
    },
    dummy: {
        frameWidth: 40,
        frameHeight: 36,
        sheetWidth: 16,
        frames: 16,
        frameDuration: 0.2,
        loop: true,
        scale: 1.4,
        xOffset: 23,
        yOffset: 30
    },
    shoot: {
        frameWidth: 40,
        frameHeight: 36,
        sheetWidth: 29,
        frames: 29,
        frameDuration: 0.1,
        loop: true,
        scale: 1.2
    },
    stats: {
        cost: 150,
        range: 10,
        cooldown: 7,
        damage: 35,
        isAoe: false,
        isArmorPiercing: true,
        isAntiGround: true,
        isAntiAir: true
    }
};

const MARINE_PROPERTIES = {
    name: 'marine',
    path: './img/defenders/marine/',
    sprites: ['portrait.png', 'idle.png', 'dummy.png', 'shoot.png'],
    hotkey: 'm',
    description: '<b>Marines</b> are a type of terran soldier compose the bulk of most terran front-line forces. ' +
        'Their <b>rapid-fire</b> C-14 rifles are powerful weapons against <b>ground</b> enemies.',
    portrait: {
        frameWidth: 180,
        frameHeight: 193,
        sheetWidth: 76,
        frames: 76,
        frameDuration: 0.11,
        loop: true,
        scale: 1
    },
    idle: {
        frameWidth: 64,
        frameHeight: 64,
        sheetWidth: 32,
        frames: 32,
        frameDuration: 0.1,
        loop: true,
        scale: 1.3
    },
    dummy: {
        frameWidth: 64,
        frameHeight: 64,
        sheetWidth: 32,
        frames: 32,
        frameDuration: 0.1,
        loop: true,
        scale: 1.3,
        xOffset: 33,
        yOffset: 42
    },
    shoot: {
        frameWidth: 64,
        frameHeight: 64,
        sheetWidth: 32,
        frames: 32,
        frameDuration: 0.1,
        loop: true,
        scale: 1.2
    },
    stats: {
        cost: 50,
        range: 4,
        cooldown: 0.2,
        damage: 13,
        isAoe: false,
        isArmorPiercing: false,
        isAntiGround: true,
        isAntiAir: false
    }
};

const SCV_PROPERTIES = {
    name: 'scv',
    path: './img/defenders/scv/',
    sprites: ['portrait.png', 'idle.png'],
    hotkey: 's',
    description: 'The T-280 space construction vehicle (or SCV) is a type of terran general-purpose engineering vehicle. ' +
        'Its purpose is to mine the mineral patches to <b>generate more resources</b>.',
    portrait: {
        frameWidth: 180,
        frameHeight: 193,
        sheetWidth: 75,
        frames: 75,
        frameDuration: 0.11,
        loop: true,
        scale: 1
    },
    idle: {
        frameWidth: 40,
        frameHeight: 42,
        sheetWidth: 1,
        frameDuration: 0.1,
        frames: 1,
        loop: true,
        scale: 1,
        gatherTime: 2.8
    },
    stats: {
        cost: 50,
        range: 0,
        cooldown: 1,
        damage: 0,
        isAoe: false,
        isArmorPiercing: false,
        isAntiGround: false,
        isAntiAir: false,
        mineralAmount: 25
    }
}

const TURRET_PROPERTIES = {
    name: 'turret',
    path: './img/defenders/turret/',
    sprites: ['portrait.png', 'idle.png', 'dummy.png', 'projectile.png'],
    hotkey: 't',
    description: 'The missile <b>turret</b> is a terran defense building designed to destroy <b>air</b> units.',
    portrait: {
        frameWidth: 180,
        frameHeight: 193,
        sheetWidth: 75,
        frames: 75,
        frameDuration: 0.11,
        loop: true,
        scale: 1
    },
    idle: {
        frameWidth: 55,
        frameHeight: 55,
        sheetWidth: 16,
        frames: 16,
        frameDuration: 0.1,
        loop: true,
        scale: 1
    },
    dummy: {
        frameWidth: 55,
        frameHeight: 55,
        sheetWidth: 16,
        frames: 16,
        frameDuration: 0.1,
        loop: true,
        scale: 1,
        xOffset: 23,
        yOffset: 47
    },
    projectile: {
        frameWidth: 48,
        frameHeight: 48,
        sheetWidth: 16,
        frames: 16,
        frameDuration: 0.1,
        loop: true,
        scale: 0.4,
    },
    stats: {
        cost: 150,
        range: 5,
        cooldown: 0.55,
        damage: 60,
        isArmorPiercing: false,
        isAntiGround: false,
        isAntiAir: true
    }
};

const DEFENDER_PROPERTIES = [BATTLECRUISER_PROPERTIES, FIREBAT_PROPERTIES, GHOST_PROPERTIES, MARINE_PROPERTIES, SCV_PROPERTIES, TURRET_PROPERTIES];