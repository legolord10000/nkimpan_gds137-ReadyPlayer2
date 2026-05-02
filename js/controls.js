// controls


var a = false;
var d = false;
var w = false;
var s = false;
var ArrowLeft = false;
var ArrowRight = false;
var ArrowUp = false;
var ArrowDown = false;

document.addEventListener("keydown", press);
document.addEventListener("keyup", release);


function press(e)
{
    // First player controls (WASD)
    
    if (e.keyCode == 87) { // W
        w = true;
    }
    if (e.keyCode == 83) { // S
        s = true;
    }
    //console.log("Pressed "+ e.keycode);
    // if (e.keyCode == 65) { // A
    //     a = true;
    // }
    // if (e.keyCode == 68) { // D
    //     d = true;
    // }

    // Second player controls (Arrow keys)
   
    if (e.keyCode == 38) { // Up arrow
        ArrowUp = true;
    }
    if (e.keyCode == 40) { // Down arrow
        ArrowDown = true;
    }
    //console.log("Pressed "+ e.keycode);
    // if (e.keyCode == 37) { // Left arrow
    //     ArrowLeft = true;
    // }
    // if (e.keyCode == 39) { // Right arrow
    //     ArrowRight = true;
    // }
    
}
function release(e)
{
    // First player controls (WASD)
    if (e.keyCode == 87) { // W
        w = false;
    }
    if (e.keyCode == 83) { // S
        s = false;
    }
    //console.log("Pressed "+ e.keycode);
    // if (e.keyCode == 65) { // A
    //     a = false;
    // }
    // if (e.keyCode == 68) { // D
    //     d = false;
    // }

    // Second player controls (Arrow keys)
    
    if (e.keyCode == 38) { // Up arrow
        ArrowUp = false;
    }
    if (e.keyCode == 40) { // Down arrow
        ArrowDown = false;
    }
    //console.log("Pressed "+ e.keycode);
    // if (e.keyCode == 37) { // Left arrow
    //     ArrowLeft = false;
    // }
    // if (e.keyCode == 39) { // Right arrow
    //     ArrowRight = false;
    // }
    
   
}





