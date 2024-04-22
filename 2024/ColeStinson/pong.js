const canvas = document.getElementById('pongCanvas');
const context = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

let paddleWidth = 10, paddleHeight = 100, ballRadius = 10;
let playerY = (canvas.height - paddleHeight) / 2, computerY = (canvas.height - paddleHeight) / 2;
let ballX = canvas.width / 2, ballY = canvas.height / 2, ballXVelocity = 5, ballYVelocity = 5;
let playerScore = 0, computerScore = 0;
let upArrowPressed = false, downArrowPressed = false;

function drawPaddle(x, y) {
  context.fillStyle = 'white';
  context.fillRect(x, y, paddleWidth, paddleHeight);
}

function drawBall() {
  context.beginPath();
  context.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
  context.fillStyle = 'white';
  context.fill();
  context.closePath();
}

function drawScore() {
  context.font = '32px Arial';
  context.fillStyle = 'white';
  context.fillText(`${playerScore} - ${computerScore}`, canvas.width / 2 - 50, 50);
}

function draw() {
  // Clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw paddles, ball, and score
  drawPaddle(0, playerY);
  drawPaddle(canvas.width - paddleWidth, computerY);
  drawBall();
  drawScore();
  
  // Update player paddle position
  if (upArrowPressed && playerY > 0) {
    playerY -= 10;
  } else if (downArrowPressed && playerY < canvas.height - paddleHeight) {
    playerY += 10;
  }
  
  // Move the ball
  ballX += ballXVelocity;
  ballY += ballYVelocity;
  
  // Computer paddle AI (slightly harder version)
  if (computerY + paddleHeight / 2 < ballY) {
    computerY += 2.5;
  } else {
    computerY -= 2.5;
  }
  
  // Ball collision with top/bottom walls
  if (ballY - ballRadius <= 0 || ballY + ballRadius >= canvas.height) {
    ballYVelocity = -ballYVelocity;
  }
  
  // Ball collision with paddles
  if (ballX - ballRadius <= paddleWidth && ballY > playerY && ballY < playerY + paddleHeight || 
      ballX + ballRadius >= canvas.width - paddleWidth && ballY > computerY && ballY < computerY + paddleHeight) {
    ballXVelocity = -ballXVelocity;
  }
  
  // Scoring
  if (ballX - ballRadius < 0) {
    computerScore++;
    if (computerScore === 10) {
      alert('You Lose!');
      document.location.reload();
    } else {
      resetBall();
    }
  } else if (ballX + ballRadius > canvas.width) {
    playerScore++;
    if (playerScore === 10) {
      alert('You Win!');
      document.location.reload();
    } else {
      resetBall();
    }
  }

  requestAnimationFrame(draw);
}

function resetBall() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballXVelocity = -ballXVelocity;
  ballYVelocity = 5;
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') upArrowPressed = true;
  if (event.key === 'ArrowDown') downArrowPressed = true;
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowUp') upArrowPressed = false;
  if (event.key === 'ArrowDown') downArrowPressed = false;
});

draw();
