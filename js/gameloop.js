var canvas;
var context;
var player;
var timer;
var interval = 1000/60


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject(50,canvas.height/2,5,100,"#ff0000");
player.vx=0;
player.vy=0;

player2 = new GameObject(950,canvas.height/2,5,100,"#00ff00");
player2.vx=0;
player2.vy=0;

npc0 = new GameObject(canvas.width/2,canvas.height/2,100,100,"#6200ff");
npc0.vx=-4;
npc0.vy=0;

npc1 = new GameObject(300,canvas.height/2,100,100,"#00ddff")
npc2 = new GameObject(600,canvas.height/2,100,100,"#0000ff")
npc3 = new GameObject(900,canvas.height/2,100,100,"#FF00ff")


timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0,0,canvas.width,canvas.height);
    
    if (d)
    {
        player.x += 4
    }
    if (a)
    {
        player.x -= 4
    }
    if (s)
    {
        player.y += 8
    }
    if (w)
    {
        player.y -= 8
    }

    if (ArrowRight)
    {
        player2.x += 4
    }
    if (ArrowLeft)
    {
        player2.x -= 4
    }
    if (ArrowDown)
    {
        player2.y += 8
    }
    if (ArrowUp)
    {
        player2.y -= 8
    }

    player.move();
    if (player.x > canvas.width + player.width/2)
        {
            //player.vx=-4
            //player.color = "#ffff00"
            player.x = -player.width/2
        }
        else if (player.x < -player.width/2)
        {
            //player.vx=4
            //player.color = "#0000ff"
            player.x = canvas.width + player.width/2
        }
        if (player.y > canvas.height - player.height/2)
        {
            //splayer.vy=-4
            //player.color = "#00ff00"
            player.y = canvas.height -player.height/2
        }
        else if (player.y < player.height/2)
        {
            //player.vy=4
            //player.color = "#ff0000" 
            player.y = player.height/2
        }

        player2.move();
        if (player2.x > canvas.width + player2.width/2)
        {
            //player2.vx=-4
            //player2.color = "#ffff00"
            player2.x = -player2.width/2
        }
        else if (player2.x < -player2.width/2)
        {
            //player2.vx=4
            //player2.color = "#0000ff"
            player2.x = canvas.width + player2.width/2
        }
        if (player2.y > canvas.height - player2.height/2)
        {
            //player2.vy=-4
            //player2.color = "#00ff00"
            player2.y = canvas.height -player2.height/2
        }
        else if (player2.y < player2.height/2)
        {
            //player2.vy=4
            //player2.color = "#ff0000" 
            player2.y = player2.height/2
        }
        
       // npc0 collision
       npc0.move();
        if (npc0.collisionCheck(player))
        {
            if(npc0.y < player.y - player.height/6)
            {
                npc0.vx = Math.abs(npc0.vx);
                npc0.vy = -Math.abs(npc0.vx);
            }
            else if(npc0.y > player.y + player.height/6)
            {
                npc0.vx = Math.abs(npc0.vx);
                npc0.vy = Math.abs(npc0.vx);
            }
            else
            {
                npc0.vx = -npc0.vx;
            }
            npc0.x = player.right() + npc0.width/2;
            npc0.color = "#ff8800";
        }
        else if (npc0.collisionCheck(player2))
        {
            if(npc0.y < player2.y - player2.height/6)
            {
                npc0.vx = -Math.abs(npc0.vx);
                npc0.vy = -Math.abs(npc0.vx);
            }
            else if(npc0.y > player2.y + player2.height/6)
            {
                npc0.vx = -Math.abs(npc0.vx);
                npc0.vy = Math.abs(npc0.vx);
            }
            else
            {
                npc0.vx = -npc0.vx;
            }
            npc0.x = player2.left() - npc0.width/2;
            npc0.color = "#6200ff";
        }
        else if (npc0.y < npc0.height/2)
        {
            npc0.vy = -npc0.vy;
            npc0.y = npc0.height/2;
        }
        else if (npc0.y > canvas.height - npc0.height/2)
        {
            npc0.vy = -npc0.vy;
            npc0.y = canvas.height - npc0.height/2;
        }
        else if (npc0.x < -npc0.width/2)
        {
            npc0.x = canvas.width/2;
            npc0.y = canvas.height/2;
            npc0.vy = 0;
            player.y = canvas.height/2;
        }
        else if (npc0.x > canvas.width + npc0.width/2)
        {
            npc0.x = -canvas.width/2;
            npc0.y = canvas.height/2;
            npc0.vy = 0;
            player2.y = canvas.height/2;

        }
        
       // NPC1 collision
    if (npc1.collisionCheck(player))
        {
            npc1.color = "#ffff00"
        }
    else
        {
            npc1.color = "#00ff00"
        }
    // NPC2 collision
     if (npc2.collisionCheck(player))
        {
        }
        // NPC3 collision
     if (npc3.collisionCheck(player))
        {
            //player.x = player.prevX
            //player.y = player.prevY
        }
        else
        {
            //player.prevX = player.x;
           // player.prevY = player.y;
        }

    player.drawRect();
    player2.drawRect();
    npc0.drawCircle();
    //npc1.drawCircle();  
    //npc2.drawCircle();  
    //npc3.drawRect();  


}

