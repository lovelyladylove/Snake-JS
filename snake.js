const canvas = document.getElementById('snake');
const context = canvas.getContext('2d');

// create the Unit
const box = 32;

// load images
const groundImg = new Image();
groundImg.src = './img/ground.png';

const foodImg = new Image();
foodImg.src = './img/food.png';

// create snake
let snake = [];
snake[0] = {
	x: 9 * box,
	y: 10 * box
};

// create food
let food = {
	x: Math.floor(Math.random() * 17 + 1) * box,
	y: Math.floor(Math.random() * 15 + 3) * box
};

// create the score
let score = 0;

// draw everything to canvas
function draw() {
	context.drawImage(groundImg, 0, 0);

	for (let i = 0; i < snake.length; i++) {
		context.fillStyle = i == 0 ? 'green' : 'white'; // if statement if i=0 turn green, if not then white
		context.fillRect(snake[i].x, snake[i].y, box, box); // filling the square, body of the snake

		context.strokeStyle = 'red';
		context.strokeRect(snake[i].x, snake[i].y, box, box);
	}

	context.drawImage(foodImg, food.x, food.y);
}

// call draw function every 100ms
let game = setInterval(draw, 100);
