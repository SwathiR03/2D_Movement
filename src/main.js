import { k } from "./kaboomCtx";

k.loadSprite("spritesheet", "./spritesheet.png", {
    sliceX:39,
    sliceY:31,
    anims: {
        "idle-down":960,
        "walk-down":{from: 960, to: 963, loop:true, speed:7},
        "idle-side-right":999,
        "walk-side-right":{from:999, to:1002, loop:true, speed:7},
        "idle-up":1038,
        "walk-up":{from:1038, to:1041, loop:true, speed:7},
        "idle-side-left":1077,
        "walk-side-left":{from:1077, to:1080, loop:true, speed:7},
    },
});
k.loadSprite("map", "./map.png");

k.setBackground(k.Color.fromHex("#041E42"));