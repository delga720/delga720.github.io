var isGameOver;
var enemy, enemy2, enemy3;

function setup() {

    createCanvas(600, 400);

    player = createSprite(width/2, height-25, 50, 50);
    enemy = createSprite(width/1, random(5, height-5), 30,30);
    enemy2 = createSprite(width/1, random(5, height-5), 30,30);
    enemy3 = createSprite (width/1, random(5, height-5), 30,30):
    isGameOver = false;
    enemy.rotationSpeed = 4.0;
    enemy2.rotationSpeed = 4.0;
    enemy3.rotationSpeed = 4.0;
}

function draw(){
    background(0, 0, 100);
    player.velocity.y = player.velocity.y + 0.05;
    drawSprites();
    
     if (isGameOver) 
    {
        gameOver();
    } else {
        if (enemy.overlap(player)) {
            isGameOver = true;
        }
        if (enemy2.overlap(player)) {
            isGameOver = true;
        }
        if (enemy3.overlap(player)) {
            isGameOver = true;
        
        }
        
        
    }
    
    
    if (player.position.y > height-25){
        player.position.y = height-25;
        player.velocity.y = 0;
    }
    if (keyDown(RIGHT_ARROW) && player.position.x <width-25) {
        player.position.x = player.position.x + 1.5;
    }
    if (keyDown(LEFT_ARROW) && player.position.x >25) {
        player.position.x = player.position.x - 1.5;
    }

    if (keyDown(UP_ARROW)){
        player.position.y = player.position.y - 5;
    }

    enemy.position.x = enemy.position.x -2;
    if (enemy.position.x <0) {
        enemy.position.x = width;
        enemy.position.y = random(5,height-5)
    }
    enemy2.position.x = enemy2.position.x -2.5;
    if (enemy2.position.x <0) {
        enemy2.position.x = width;
        enemy2.position.y = random(5, height-5)
    }
    enemy3.position.x = enemy3.position.x -2.5;
    if (enemy3.position.x <0){
        enemy3.position.x = width;
        enemy3.position.y = random (5, height-5)
    }
    
}
function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white")
    text("GameOver!", width/2,height/2);
    text("Click Anywhere To Try Again.", width/2, 3*height/4);
}

function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height-25;
        enemy.position.x = width/1;
        enemy.position.y = random(5, height-5);
        enemy2.position.x = width/1
        enemy2.position.y - random(5, height-5)
    }
}