// var cvs = document.getElementById("canvas");
// var ctx = cvs.getContext("2d");

// cvs.width = window.innerWidth;
// cvs.height = window.innerHeight;

// window.addEventListener('resize', resizeCanvas, false);

// function resizeCanvas() {
//     cvs.width = window.innerWidth;
//     cvs.height = window.innerHeight;

// }
// resizeCanvas();

// var bg = new Image();
// var Hero = new Image();
// var Hero_bullet = new Image();

// bg.src = "css_files/css_images/bg.png";
// Hero.src = "css_files/css_images/Hero.png";
// Hero_bullet.src = "css_files/css_images/bulletHero.png";

// var xPos = 10;
// var yPos = 150;
// var playerLives = 3;
// var score = 0;
// var scoreHelp = 0;
// var scoreNoHelp = 0;
// var scoreTotal = 0;
// class Sprite {
//     constructor (x, y, speed, image, distance) {
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         this.image = new Image();

//         this.image.src = image;
//         this.distance = distance;
//     }
// }

// let Player = new Sprite(10, 150, 100, "css_files/css_images/Hero.png", 0);
// var moveBg = [];

// moveBg[0] = {
//     x: 0,
//     y: 0
// }

// var pressedKeys = {};
// document.onkeydown = function(event) {
//     pressedKeys[event.keyCode] = true;
//     ctx.clearRect(0,0, cvs.width, cvs.height);
    
//     Object.keys(pressedKeys).forEach(key => {
//         if (!pressedKeys[key]) {
//             return;
//         } 
//         if (key == 37 && (Player.x - Player.speed > 0)) {
//             Player.x -= Player.speed;
//         } 
//         if (key == 38 && (Player.y - Player.speed > 0)) {
//             Player.y -= Player.speed;
//         } 
//         if (key == 39 && (Player.x + 149 + Player.speed < cvs.width)) {
//             Player.x += Player.speed;
//         } 
//         if (key == 40) {
//             Player.y += Player.speed;
//         }
//         if (key == 32) {
//             if (sos) {
//                 drawBullet();
//             }
//         }
//     });
// }

// document.onkeyup = function(event) {
// pressedKeys[event.keyCode] = false;
// }

// var sos = true;
// var bullets = [];


// setInterval(function drawObstacle() {
//     let Obstacle_1 = new Sprite(cvs.width, Math.floor(Math.random() * ((cvs.height - 384) - 0 + 1)) + 0, 20, "css_files/css_images/obstacle_1.png", 0);
//     proc_obstacle();
//     function proc_obstacle() {
//         ctx.drawImage(Obstacle_1.image, Obstacle_1.x, Obstacle_1.y);
//         Obstacle_1.x -= Obstacle_1.speed;
//         if (Obstacle_1.x < -612) {
//             score --;
//             return;
//         }
//         if ((Player.x + 149 >= Obstacle_1.x && (Player.x  < (Obstacle_1.x + 612))) && ((Player.y + 112 >= Obstacle_1.y) &&  (Player.y  <= (Obstacle_1.y + 384)))) {
//             playerLives --;
//             return;
//         }
//         for (var i = 0; i < bullets.length; i++) {
//             if ((bullets[i][0] >= Obstacle_1.x && bullets[i][0] <= (Obstacle_1.x + 612)) && (bullets[i][1] >= Obstacle_1.y && bullets[i][1] <= (Obstacle_1.y + 384))) {
//                 score ++;
//                 sos = true;
//                 if (score > scoreTotal) {
//                     scoreTotal++;
//                 }
//                 return;
//             }
//         }
//         requestAnimationFrame(proc_obstacle);
//     }
// }, Math.floor(Math.random() * (7777 - 6666 + 1)) + 6666);

// function drawBullet() {
//     let Player_bullet = new Sprite(Player.x + 151, Player.y + 10, 10, "css_files/css_images/bulletHero.png", 0);
//     proc();
//     function proc() {
//         ctx.drawImage(Player_bullet.image, Player_bullet.x, Player_bullet.y);
//         Player_bullet.x += Player_bullet.speed;
//         Player_bullet.distance += Player_bullet.speed;
//         bullets.push([Player_bullet.x, Player_bullet.y, Player_bullet.image]);
//         sos = false;
//         for (var i = 0; i < bullets.length; i++) {
//             if (bullets[i][0] > (cvs.width + cvs.width / 2)) {
//                 bullets.splice(0, bullets.length);
//                 sos = true;
//                 return;
//             }
//         }
//         requestAnimationFrame(proc);
//     }   
// }

// setInterval(function drawEnemy() { 
//     let Enemy_1 = new Sprite(cvs.width, Math.floor(Math.random() * ((cvs.height - 500) - 100 + 1)) + 100, 5, "css_files/css_images/Enemy_1.png", 0);
//     proc_enemy();
//     function proc_enemy() {
//         ctx.drawImage(Enemy_1.image, Enemy_1.x, Enemy_1.y);
//         let Enemy_1_bullet = new Sprite(Enemy_1.x + 151, Enemy_1.y + 10, 10, "css_files/css_images/bulletHero.png", 0);
//         setInterval(function a() {
//                 ctx.drawImage(Enemy_1_bullet.image, Enemy_1_bullet.x, Enemy_1_bullet.y);
//                 Enemy_1_bullet.x -= Enemy_1_bullet.speed;
//                 requestAnimationFrame(a);
//         }, 5000);
//         Enemy_1.x -= Enemy_1.speed;
//         if (Enemy_1.x < -226) {
//             score --;
//             return;
//         }
//         if ((Player.x + 149 >= Enemy_1.x && (Player.x  < (Enemy_1.x + 226))) && ((Player.y + 112 >= Enemy_1.y) &&  (Player.y  <= (Enemy_1.y + 202)))) {
//             playerLives --;
//             return;
//         }
//         for (var i = 0; i < bullets.length; i++) {
//             if ((bullets[i][0] >= Enemy_1.x && bullets[i][0] <= (Enemy_1.x + 226)) && (bullets[i][1] >= Enemy_1.y && bullets[i][1] <= (Enemy_1.y + 202))) {
//                 score ++;
//                 sos = true;
//                 if (score > scoreTotal) {
//                     scoreTotal++;
//                 }
//                 return;
//             }
//         }
//         requestAnimationFrame(proc_enemy);
//     }

// }, Math.floor(Math.random() * (2500 - 1500 + 1)) + 1500);

// function info() {
//     if (score == (scoreHelp + 100)) {
//         playerLives++;
//         scoreHelp = score;
//     }
//     if (score == (scoreNoHelp - 10)) {
//         playerLives--;
//         scoreNoHelp = score;
//     }

//     ctx.fillStyle = "white";
//     ctx.font = "32.2px Verdana";
//     ctx.fillText("Счет: " + score, 10, 50);
//     ctx.fillStyle = "blue";
//     ctx.fillText("Лучший счет: " + scoreTotal, 10, 100);
//     ctx.fillStyle = "red";
//     ctx.fillText("Очко: x" + playerLives, 10, 150);
// }

// function draw() {
//     for (var i = 0; i < moveBg.length; i++) {
//         ctx.drawImage(bg, moveBg[i].x, moveBg[i].y);
//         moveBg[i].x--;
//         if(moveBg[i].x == -1) {
//             moveBg.push({
//                 x: cvs.width,
//                 y: 0
//             });
//         }
//     }
//     ctx.drawImage(Player.image, Player.x, Player.y);
//     info();
//     requestAnimationFrame(draw);
// }

// draw();

let mouseUse = false;
let keyboardUse = false;
let touchUse = false;

let Score = 0;
let scoreHelp = 0;
let scoreNoHelp = 0;
let scoreTotal = 0;
document.body.onload = load();
function game() {
    let gayme = new Audio();
    gayme.src = 'css_files/audio/The-Stooges_-_I-Wanna-Be-Your-Dog_sonq.ru.mp3';
    gayme.volume = 0.1;
    gayme.play();
    Score = 0;
    let cvs = document.getElementById("canvas");
    let ctx = cvs.getContext("2d");
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;

    var height = cvs.height;
    var width = cvs.width;

    const playerXSize = 149;
    const playerYSize = 112;

    class Player{
        constructor(x, y, speed){
            this.x = x;
            this.y = y;
            this.speed = speed;
            this.img = new Image();
            this.img.src = 'css_files/css_images/Hero.png';
            this.lives = 3;
            this.damaged = false;
            this.dmgTimer = 0;
        }
    } 

    class Bullet{
        constructor(x, y, speed){
            this.x = x;
            this.y = y;
            this.speed = speed;
            this.sizeX = 37;
            this.sizeY = 13;
            this.img = new Image();
            this.img.src = 'css_files/css_images/bulletHero.png';
            this.coordinates = new Array();

            while(this.x < width){
                this.coordinates.push(this.x);
                this.x += this.speed;
            }
        }
    }

    class Obstacle{
        constructor() {
            this.x = width;
            this.y = Math.floor(Math.random() * ((cvs.height - 384) - 0 + 1)) + 0;
            this.speed = 20;
            this.img = new Image();
            this.img.src = 'css_files/css_images/Obstacle_1.png';
        }
    }


    class Enemy{
        constructor(){
            this.x = width;
            this.y = Math.floor(Math.random() * ((cvs.height - 500) - 100 + 1)) + 100;
            this.speed = 5;
            this.img = new Image();
            this.img.src = 'css_files/css_images/Enemy_1.png';
            this.sizeX = 120;
            this.sizeY = 120;
        }
    }

    class EnemyBullet {
        constructor(x, y){
            this.x = x - 10;
            this.y = y + 60;
            this.speed = 10;
            this.sizeX = 37;
            this.sizeY = 13;
            this.img = new Image();
            this.img.src = 'css_files/css_images/bulletHero.png';
            this.coordinates = new Array();

            while(this.x > -37){
                this.coordinates.push(this.x);
                this.x -= this.speed;
            }
        }
    }

    class Boss {
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.speed = 5;
            this.img = new Image();
            this.img.src = 'css_files/css_images/Boss_1.png';
            this.dist = 0;
            this.sizeX = 552;
            this.sizeY = 552;
            
        }
    }

    class BossBullet {
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.speed = 10;
            this.sizeX = 94;
            this.sizeY = 94;
            this.img = new Image();
            this.img.src = 'css_files/css_images/bossBullet.png';
            this.coordinates = new Array();

            while(this.x > -94){
                this.coordinates.push(this.x);
                this.x -= this.speed;
            }
        }
    }

    let plr = new Player(10, 150, 50);
    let boss = new Boss(width - width / 3, 0);

    let arrayOfBullets = new Array();
    let arrayOfEnemies = new Array();
    let arrayOfEnemyBullets = new Array();
    let arrayOfObstacles = new Array();
    let arrayOfBossBullets = new Array();

    // function drawHero(){
    //     ctx.drawImage(plr.img, plr.x, plr.y, playerXSize, playerYSize);
    //     requestAnimationFrame(drawHero);
    // }

    if (mouseUse == true) {
        document.onclick = function () {
            arrayOfBullets.push(new Bullet(plr.x + 149, plr.y + 10, 30));
        }
        document.onmousedown = function () {    
            mousedownTimeout = window.setInterval(() => {
                arrayOfBullets.push(new Bullet(plr.x + 149, plr.y + 10, 30));
            }, 322);
        }
        document.onmouseup = function() {
            window.clearTimeout(mousedownTimeout);
        }
        document.onmousemove = function (event) {
           plr.x = event.offsetX - 75;
           plr.y = event.offsetY - 56;
        }
        
    }

    if (keyboardUse == true) {

        var pressedKeys = {};
        document.onkeydown = function(event) {
            pressedKeys[event.keyCode] = true;
            
            Object.keys(pressedKeys).forEach(key => {
                if (!pressedKeys[key]) {
                    return;
                } 
                if (key == 37) {
                    plr.x -= plr.speed;
                } 
                if (key == 38) {
                    plr.y -= plr.speed;
                } 
                if (key == 39) {
                    plr.x += plr.speed;
                } 
                if (key == 40) {
                    plr.y += plr.speed;
                } 
                if (key == 32) {
                    arrayOfBullets.push(new Bullet(plr.x + 149, plr.y + 10, 30));
                }
            })
        }

        document.onkeyup = function(event) {
        pressedKeys[event.keyCode] = false;
        }
    }

    if (touchUse == true) {
        var ongoingTouches = [];
        function copyTouch({ identifier, pageX, pageY }) {
            return { identifier, pageX, pageY };
        }
        document.ontouchstart = function (event) {
            event.preventDefault();
            var touches = event.changedTouches;
            ongoingTouches.push(copyTouch(touches[0]));
            last_x = ongoingTouches[0].pageX;
            last_y = ongoingTouches[0].pageY;
        }
        document.ontouchmove = function (evt) {
            evt.preventDefault(); 
            let touches = evt.changedTouches;
            moveTouch = touches[0];
            plr.x = -last_x + moveTouch.pageX;
            plr.y = -last_y + moveTouch.pageY;
            last_x = moveTouch.pageX;
            last_y = moveTouch.pageY;  
        }
        document.ontouchend = function (ev) {
            evt.preventDefault();
            var touches = evt.changedTouches;
            for (var i = 0; i < touches.length; i++) {
                var idx = ongoingTouchIndexById(touches[i].identifier);
                if (idx >= 0) {
                    ongoingTouches.splice(idx, 1); // remove it; we're done
                }
            }
        }
        document.ontouchcancel = function (et) {
            evt.preventDefault();
            var touches = evt.changedTouches;
            for (var i = 0; i < touches.length; i++) {
                var idx = ongoingTouchIndexById(touches[i].identifier);
                ongoingTouches.splice(idx, 1); // remove it; we're done
            }
        }        
        function ongoingTouchIndexById(idToFind) {
            for (var i = 0; i < ongoingTouches.length; i++) {
                var id = ongoingTouches[i].identifier;
                if (id == idToFind) {
                    return i;
                }
            }
            return -1; // not found
        }
    }

    var moveBg = [];
    var a = true;
    var bossHit = 0;
    moveBg[0] = {
        x: 0,
        y: 0
    }

    var bg = new Image();

    bg.src = "css_files/css_images/bg.png";


    function info() {
        if (Score >= (scoreHelp + 50)) {
            plr.lives++;
            scoreHelp = Score;
        }
        if (Score <= (scoreNoHelp - 10)) {
            plr.lives--;
            scoreNoHelp = Score;
        }

        ctx.fillStyle = "white";
        ctx.font = "32.2px Verdana";
        ctx.fillText("Счет: " + Score, 10, 50);
        ctx.fillStyle = "blue";
        ctx.fillText("Лучший счет: " + scoreTotal, 10, 100);
        ctx.fillStyle = "red";
        ctx.fillText("Очко: x" + plr.lives, 10, 150);
    }

    function draw(){
        ctx.clearRect(0, 0, width, height);
        for (var i = 0; i < moveBg.length; i++) {
            ctx.drawImage(bg, moveBg[i].x, moveBg[i].y);
            moveBg[i].x--;
            if(moveBg[i].x == -1) {
                moveBg.push({
                    x: cvs.width,
                    y: 0
                });
            }
        }
        info();
        ctx.drawImage(plr.img, plr.x, plr.y);
        if (plr.damaged == true) {
            plr.dmgTimer++;
        }
        if(plr.dmgTimer == 333 && plr.damaged == true) {
            plr.damaged = false;
            plr.dmgTimer = 0;
        }
        if(plr.lives <= 0 || score <= -200){
            gayme.pause();
            clearInterval(mainInterval);
            showMenu();
        }

        if ((Score >= 10 && Score < 13) || Score > 20) {
            ctx.drawImage(boss.img, boss.x, boss.y);
            if((boss.y + 552) < height && a == true) {
                boss.y += boss.speed;
                boss.dist += boss.speed;
            }
            if ((boss.y + 552) >= height) {
                a = false;
            }
            if (a == false) {
                boss.y -= boss.speed;
                boss.dist += boss.speed;
            }
            if (boss.y <= 0 && a == false) {
                a = true;
            }
            if(boss.dist % 100 == 0){
                arrayOfBossBullets.push(new BossBullet(boss.x - 5, boss.y + boss.sizeY / 10));
                arrayOfBossBullets.push(new BossBullet(boss.x - 5, boss.y + boss.sizeY + boss.sizeY / 5));
            }
            arrayOfBossBullets.forEach(bossBullet => {
                if(arrayOfBossBullets.length != 0){                
                    ctx.drawImage(bossBullet.img, bossBullet.coordinates[0], bossBullet.y);
                    bossBullet.coordinates.splice(0, 1);
                }
                if ((bossBullet.coordinates[0] + 94 > plr.x) && (bossBullet.coordinates[0] < (plr.x + playerXSize)) && (bossBullet.y + 94 > plr.y) && (bossBullet.y < (plr.y + playerYSize))) {
                    if(plr.damaged == false){
                        plr.lives -= 3;
                        plr.damaged = true;
                    }
                    arrayOfBossBullets.splice(arrayOfBossBullets.indexOf(bossBullet), 1);
                    ctx.clearRect(0, 0, width, height);
                }
            });
            if ((boss.x + boss.sizeX > plr.x) && (boss.x < (plr.x + playerXSize)) && (boss.y + boss.sizeY > plr.y) && (boss.y < (plr.y + playerYSize))) {
                if(!plr.damaged){
                    plr.lives -= 3;
                    plr.damaged = true;
                }
            }
            arrayOfBullets.forEach(bullet => {
                if(bullet.coordinates.length != 0) {
                    if((bullet.coordinates[0] > boss.x) && (bullet.coordinates[0] < (boss.x + 552)) && (bullet.y > boss.y) && (bullet.y < (boss.y + 552))) {
                        arrayOfBullets.splice(arrayOfBullets.indexOf(bullet), 1);
                        ctx.clearRect(bullet.coordinates[0], bullet.y, 37, 13);
                        bossHit += 1;
                        if (bossHit > 11) {
                            plr.lives++;
                            delete boss;
                            Score += 3;
                            if (Score > scoreTotal) {
                                scoreTotal += 3;
                            }
                            bossHit = 0;
                        }
                    }
                    ctx.drawImage(bullet.img, bullet.coordinates[0], bullet.y, bullet.sizeX, bullet.sizeY);
                    bullet.coordinates.splice(0, 1);
                }
                else{
                    arrayOfBullets.splice(arrayOfBullets.indexOf(bullet), 1);
                }
            });

        }


        if(arrayOfEnemies.length != 0){
            arrayOfEnemies.forEach(enemy => {
                ctx.drawImage(enemy.img, enemy.x -= enemy.speed, enemy.y, enemy.sizeX, enemy.sizeY);
                if(enemy.x % 91 == 0){
                    arrayOfEnemyBullets.push(new EnemyBullet(enemy.x, enemy.y));
                }
                if ((enemy.x + enemy.sizeX > plr.x) && (enemy.x < (plr.x + playerXSize)) && (enemy.y + enemy.sizeY > plr.y) && (enemy.y < (plr.y + playerYSize))) {
                    if(!plr.damaged){
                        plr.lives --;
                        plr.damaged = true;
                    }
                    arrayOfEnemies.splice(arrayOfEnemies.indexOf(enemy), 1)
                    ctx.clearRect(0, 0, width, height)
                }
            });
        }

        if(arrayOfObstacles.length != 0){
            arrayOfObstacles.forEach(obstacle => {
                ctx.drawImage(obstacle.img, obstacle.x -= obstacle.speed, obstacle.y);
                if ((obstacle.x + 612 > plr.x) && (obstacle.x < (plr.x + playerXSize)) && (obstacle.y + 384 > plr.y) && (obstacle.y < (plr.y + playerYSize))) {
                    if(!plr.damaged){
                        plr.lives --;
                        plr.damaged = true;
                    }
                    arrayOfObstacles.splice(arrayOfObstacles.indexOf(obstacle), 1)
                    ctx.clearRect(0, 0, width, height)
                }

            });
        }

        arrayOfEnemyBullets.forEach(enemybullet => {
            if(arrayOfEnemyBullets.length != 0){
                ctx.drawImage(enemybullet.img, enemybullet.coordinates[0], enemybullet.y, enemybullet.sizeX, enemybullet.sizeY);
                enemybullet.coordinates.splice(0, 1);

                if ((enemybullet.coordinates[0] + 37 > plr.x) && (enemybullet.coordinates[0] < (plr.x + playerXSize)) && (enemybullet.y + 13 > plr.y) && (enemybullet.y < (plr.y + playerYSize))) {
                    if(plr.damaged == false){
                        plr.lives --;
                        plr.damaged = true;
                    }
                    arrayOfEnemyBullets.splice(arrayOfEnemyBullets.indexOf(enemybullet), 1);
                    ctx.clearRect(0, 0, width, height);
                }
            }
        });

        arrayOfBullets.forEach(bullet => {
            if(bullet.coordinates.length != 0) {
                arrayOfEnemies.forEach(enemy => {
                    if((bullet.coordinates[0] > enemy.x) && (bullet.coordinates[0] < (enemy.x + enemy.sizeX)) && (bullet.y > enemy.y) && (bullet.y < (enemy.y + enemy.sizeY))) {
                        arrayOfEnemies.splice(arrayOfEnemies.indexOf(enemy), 1);
                        arrayOfBullets.splice(arrayOfBullets.indexOf(bullet), 1);
                        ctx.clearRect(bullet.coordinates[0], bullet.y, 37, 13);
                        Score ++;
                        if (Score > scoreTotal) {
                            scoreTotal ++;
                        }
                    }
                });
                ctx.drawImage(bullet.img, bullet.coordinates[0], bullet.y, bullet.sizeX, bullet.sizeY);
                bullet.coordinates.splice(0, 1);
            }
            else{
                arrayOfBullets.splice(arrayOfBullets.indexOf(bullet), 1);
            }
        });
        
    }




    //drawHero()

    setInterval(() => {
        if(Score < 10 || Score >= 13) {
            arrayOfEnemies.push(new Enemy());
            arrayOfEnemies.forEach(enemy => {
                if(enemy.x < 0) {
                    arrayOfEnemies.splice(arrayOfEnemies.indexOf(enemy), 1);
                    Score -= 10;
                }
            }); 
        }
    }, 1000);


    setInterval(()=> {
        arrayOfObstacles.push(new Obstacle());
        arrayOfObstacles.forEach(obstacle => {
            if(obstacle.x < 0) {
                arrayOfObstacles.splice(arrayOfObstacles.indexOf(obstacle), 1);
            }
        }); 
    }, Math.floor(Math.random() * (15000 - 10000 + 1)) + 10000);

    let mainInterval = setInterval(() => {
        draw();
    }, 10);


}

function load(){
    let canvas = document.getElementById('canvas');
    canvas.style.display = 'none';
    
    let h1 = document.createElement('h1');
    h1.innerHTML = 'MAIN MENU';
    h1.style.textAlign = 'center';
    h1.style.fontSize = '70px';

    h1.setAttribute('id', 'head');

    let score = document.createElement('h2');
    score.innerHTML = `BEST SCORE = ${scoreTotal}`;
    score.style.textAlign = 'center';
    score.style.fontSize = '60px';

    score.setAttribute('id', 'score');

    var startButton =  document.createElement('button');
    startButton.innerHTML = 'START';
    startButton.style.fontSize = '10px';
    startButton.setAttribute('id', 'start');

    let p = document.createElement('p');
    p.setAttribute('id', 'p');

    let mouseButton = document.createElement('button');
    mouseButton.innerHTML = 'Mouse';
    mouseButton.style.fontSize = '10px';
    mouseButton.setAttribute('id', 'mouse');

    let p_1 = document.createElement('p');
    p_1.setAttribute('id', 'p_1');

    let keyboardButton = document.createElement('button');
    keyboardButton.innerHTML = 'Keyboard';
    keyboardButton.style.fontSize = '10px';
    keyboardButton.setAttribute('id', 'keyboard');

    let p_2 = document.createElement('p');
    p_2.setAttribute('id', 'p_2');

    let touchButton = document.createElement('button');
    touchButton.innerHTML = 'Touch';
    touchButton.style.fontSize = '10px';
    touchButton.setAttribute('id', 'touch');

    canvas.after(h1);
    h1.after(score);
    score.after(startButton);
    startButton.after(p);
    p.after(mouseButton);
    mouseButton.after(p_1);
    p_1.after(keyboardButton);
    keyboardButton.after(p_2);
    p_2.after(touchButton);

}

function doAfterLoad(){
    let ar = document.getElementsByTagName('button');

    function doIfButtonClicked(){
        var canvas = document.getElementById('canvas');
            canvas.style.display = 'block';
        var h1 = document.getElementById('head');
            h1.style.display = 'none';
        var h2 = document.getElementById('score');
            h2.style.display = 'none';
        var startButton = document.getElementById('start');
            startButton.style.display = 'none';
        var p = document.getElementById('p');
            p.style.display = 'none';
        var p_1 = document.getElementById('p_1');
            p_1.style.display = 'none';
        var p_2 = document.getElementById('p_2');
            p_2.style.display = 'none';
        var mouse = document.getElementById('mouse');
            mouse.style.display = 'none';
        var keyboard = document.getElementById('keyboard');
            keyboard.style.display = 'none';
        var touch = document.getElementById('touch');
            touch.style.display = 'none';
    }

    ar[3].onclick = () => {
        touchUse = true;
        mouseUse = false;
        keyboardUse = false;
        doIfButtonClicked();
        game();
    }
    ar[2].onclick = () => {
        keyboardUse = true;
        mouseUse = false;
        touchUse = false;
        doIfButtonClicked();
        game();
    }
    ar[1].onclick = () => {
        mouseUse = true;
        keyboardUse = false;
        touchUse = false;
        doIfButtonClicked();
        game();
    }
}

function showMenu(){
    function dos(){
        var canvas = document.getElementById('canvas');
            canvas.style.display = 'none';

        var h1 = document.getElementById('head');
            h1.style.display = 'block';

        var h2 = document.getElementById('score');
            h2.style.display = 'block';
            h2.innerHTML = `BEST SCORE = ${scoreTotal}`;
            h2.style.textAlign = 'center';

        var startButton = document.getElementById('start');
            startButton.style.display = 'block';

        var p = document.getElementById('p');
            p.style.display = 'block';

        var p_1 = document.getElementById('p_1');
            p_1.style.display = 'block';

        var p_2 = document.getElementById('p_2');
            p_2.style.display = 'block';

        var mouse = document.getElementById('mouse');
            mouse.style.display = 'block';

        var keyboard = document.getElementById('keyboard');
            keyboard.style.display = 'block';

        var touch = document.getElementById('touch');
            touch.style.display = 'block';
    }
    
    mouseUse = false;
    keyboardUse = false;
    touchUse = false;

    dos();

}

doAfterLoad();
