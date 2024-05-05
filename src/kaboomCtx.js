import kaboom from "kaboom";

export const k= kaboom({ //Kaboom context object 
    global: false,
    touchtoMouse: true,
    canvas: document.getElementById("game"),
}) 