"use strict";

const fill = document.getElementById("fill");
const label = document.getElementById("label");
const title = document.getElementById("title");

let percent = 0;

const timer = setInterval(function () {
	percent = percent + 1;
	fill.style.width = percent + "%";
	label.textContent = percent + "%";
    if (percent >= 100) {
	clearInterval(timer);
	finishLoading();
}
}, 50);


function finishLoading() {
	let name = "";
	while (name === null || name === "") {
		name = prompt("Ładowanie zakończone! Jak masz na imię?");
	}

    const start = confirm("Witaj, " + name + "! Chcesz wejść do gry?");
if (start) {
	title.textContent = "Miłej gry, " + name + "!";
    requestAnimationFrame(moveBalls);
    
} else {
	title.textContent = "Do zobaczenia, " + name + "!";
}

clearInterval(titleTimer);
}

//Balls

const screen = document.getElementById("screen");
const balls = [];
let paused = false;

for (let i = 0; i < 5; i = i + 1) {
	const ball = document.createElement("div");
	ball.className = "ball";
	ball.style.background = "hsl(" + Math.floor(Math.random() * 360) + ", 80%, 65%)";
	screen.appendChild(ball);
	const b = { el: ball, x: 0, y: 0, vx: 2 + i, vy: 1 + i };
	balls.push(b);
	
	b.el.addEventListener("mouseover", function () {
		b.el.style.transform = "scale(2)";
	});
	b.el.addEventListener("mouseout", function () {
		b.el.style.transform = "scale(1)";
	});
}

function moveBalls() {
	if (!paused) {
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
	}
	requestAnimationFrame(moveBalls);
	moveFollower();
}

//Stars
let s = 0;
while (s < 40) {
	const star = document.createElement("div");
	star.className = "star";
	star.style.position = "absolute";
	star.style.width = "3px";
	star.style.height = "3px";
	star.style.backgroundColor = "white";
	star.style.left = Math.random() * window.innerWidth + "px";
	star.style.top = Math.random() * window.innerHeight + "px";
	screen.appendChild(star);
	s = s + 1;
}


//Dots...
let dots = 0;
const titleTimer = setInterval(function () {
	dots = (dots + 1) % 4;
	title.textContent = "Trwa ładowanie" + ".".repeat(dots);
}, 400);


//mouseover
const follower = document.createElement("div");
follower.className = "ball";
screen.appendChild(follower);

let followerX = window.innerWidth / 2;
let followerY = window.innerHeight / 2;
let targetX = followerX;
let targetY = followerY;

screen.addEventListener("mousemove", function (e) {
	targetX = e.clientX - 10;
	targetY = e.clientY - 10;
});

// Dodaj do moveBalls, aby piłka powoli podążała za kursorem
function moveFollower() {
	followerX += (targetX - followerX) * 0.1;
	followerY += (targetY - followerY) * 0.1;
	follower.style.left = followerX + "px";
	follower.style.top = followerY + "px";
}


//dblclick
screen.addEventListener("dblclick", function (e) {
	const ball = document.createElement("div");
	ball.className = "ball";
	screen.appendChild(ball);
	const b = {
		el: ball,
		x: e.clientX - 10,
		y: e.clientY - 10,
		vx: Math.floor(Math.random() * 9) - 4,
		vy: Math.floor(Math.random() * 9) - 4
	};
	balls.push(b);
});


//click
for (let i = 0; i < balls.length; i = i + 1) {
	balls[i].el.addEventListener("click", function (e) {
		e.stopPropagation();
		changeColor(balls[i]);
	});
}

//changeColor
function changeColor(ball) {
	ball.el.style.background = "hsl(" + Math.floor(Math.random() * 360) + ", 80%, 65%)";
}

//keydown
document.addEventListener("keydown", function (e) {
	if (e.code === "Space") {
		e.preventDefault();
		paused = !paused;
	}
});