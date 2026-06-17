"use strict";
alert("JavaScript działa!");


//Balls mini-game
const screen = document.getElementById("screen");
const balls = [];

for (let i = 0; i < 5; i = i + 1) {
	const ball = document.createElement("div");
	ball.className = "ball";
	screen.appendChild(ball);
	balls.push({ el: ball, x: 0, y: 0, vx: 2 + i, vy: 1 + i });
}

function moveBalls() {
	for (let i = 0; i < balls.length; i = i + 1) {
		const b = balls[i];
		b.x = b.x + b.vx;
		b.y = b.y + b.vy;
		if (b.x < 0 || b.x > window.innerWidth - 20) {
			b.vx = -b.vx;
		}
		if (b.y < 0 || b.y > window.innerHeight - 20) {
			b.vy = -b.vy;
		}
		b.el.style.left = b.x + "px";
		b.el.style.top = b.y + "px";
	}
	requestAnimationFrame(moveBalls);
}

// requestAnimationFrame(moveBalls);