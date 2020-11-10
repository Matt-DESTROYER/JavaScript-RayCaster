var $ = function(id) {
	return document.getElementById(id);
};
var dc = function(tag) {
	return document.createElement(tag);
};
var level1 = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 3, 5, 3, 0, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1],
	[1, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	[1, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 4, 0, 0, 4, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 4, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 4, 3, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
var player = {
	x: 16,
	y: 10,
	dir: 0,
	dirY: 0,
	rot: 0,
	speed: 0,
	strafe: 0,
	moveSpeed: 0.18,
	rotSpeed: 6 * Math.PI / 180
}
var mapWidth = 0;
var mapHeight = 0;
var miniMapScale = 8;
var screenWidth = 320;
var screenHeight = 200;
var stripWidth = 1;
var fov = 60 * Math.PI / 180;
var numRays = Math.ceil(screenWidth / stripWidth);
var fovHalf = fov / 2;
var viewDist = (screenWidth / 2) / Math.tan((fov / 2));
var twoPI = Math.PI * 2;
var numTextures = 4;
let average = 0;
let placeholder1 = 0;
let placeholder2 = 0;
let avFPS = [];
let deg90 = 90 * (Math.PI / 180)
let level = 1;

function init() {
	mapWidth = level1[0].length;
	mapHeight = level1.length;
	initScreen();
	drawMiniMap();
	bindKeys();
	gameCycle();
}
var screenStrips = [];

function initScreen() {
	var screen = $("screen");
	for (var i = 0; i < screenWidth; i += stripWidth) {
		var strip = dc("div");
		strip.style.position = "absolute";
		strip.style.left = i + "px";
		strip.style.width = stripWidth + "px";
		strip.style.height = "0px";
		strip.style.overflow = "hidden";
		strip.style.backgroundColor = "magenta";
		var img = new Image();
		img.src = (window.opera ? "walls_19color.png" : "walls.png");
		img.style.position = "absolute";
		img.style.left = "0px";
		strip.appendChild(img);
		strip.img = img;
		screenStrips.push(strip);
		screen.appendChild(strip);
	}
}

function bindKeys() {
	document.onkeydown = function(e) {
		e = e || window.event;
		switch (e.keyCode) {
			case 87:
				player.speed = 1;
				break;
				
			case 83:
				player.speed = -1;
				break;
				
			case 65:
				player.strafe = -1;
				break;
				
			case 68:
				player.strafe = 1;
				break;
				
			case 37:
				player.dir = -1;
				break;
				
			case 39:
				player.dir = 1;
				break;
		}
	}
	
	document.onkeyup = function(e) {
		e = e || window.event;
		switch (e.keyCode) {
			case 87:
			case 83:
				player.speed = 0;
				break;
			case 65:
			case 68:
				player.strafe = 0;
				break;
			case 37:
			case 39:
				player.dir = 0;
				break;
		}
	}
}

function render() {
	updateMiniMap();
	castRays();
}

function gameCycle() {
	move();
	render();
	runFPStasks();
	setTimeout(gameCycle, 1000 / 60);
}

function castRays() {
	var stripIdx = 0;
	for (var i = 0; i < numRays; i++) {
		var rayScreenPos = (-numRays / 2 + i) * stripWidth;
		var rayViewDist = Math.sqrt(rayScreenPos * rayScreenPos + viewDist * viewDist);
		var rayAngle = Math.asin(rayScreenPos / rayViewDist);
		castSingleRay(
			player.rot + rayAngle,
			stripIdx++
		);
	}
}

function castSingleRay(rayAngle, stripIdx) {
	rayAngle %= twoPI;
	if (rayAngle < 0) rayAngle += twoPI;
	var right = (rayAngle > twoPI * 0.75 || rayAngle < twoPI * 0.25);
	var up = (rayAngle < 0 || rayAngle > Math.PI);
	var wallType = 0;
	var angleSin = Math.sin(rayAngle);
	var angleCos = Math.cos(rayAngle);
	var dist = 0;
	var xHit = 0;
	var yHit = 0;
	var textureX;
	var wallX;
	var wallY;
	var wallIsHorizontal = false;
	var slope = angleSin / angleCos;
	var dXVer = right ? 1 : -1;
	var dYVer = dXVer * slope;
	var x = right ? Math.ceil(player.x) : Math.floor(player.x);
	var y = player.y + (x - player.x) * slope;
	while (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {
		wallX = Math.floor(x + (right ? 0 : -1));
		wallY = Math.floor(y);
		if (level1[wallY][wallX] > 0) {
			var distX = x - player.x;
			var distY = y - player.y;
			dist = distX * distX + distY * distY;
			wallType = level1[wallY][wallX];
			textureX = y % 1;
			if (!right) textureX = 1 - textureX;
			xHit = x;
			yHit = y;
			wallIsHorizontal = true;
			break;
		}
		x += dXVer;
		y += dYVer;
	}
	slope = angleCos / angleSin;
	var dYHor = up ? -1 : 1;
	var dXHor = dYHor * slope;
	y = up ? Math.floor(player.y) : Math.ceil(player.y);
	x = player.x + (y - player.y) * slope;
	while (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {
		wallY = Math.floor(y + (up ? -1 : 0));
		wallX = Math.floor(x);
		if (level1[wallY][wallX] > 0) {
			distX = x - player.x;
			distY = y - player.y;
			var blockDist = distX * distX + distY * distY;
			if (!dist || blockDist < dist) {
				dist = blockDist;
				xHit = x;
				yHit = y;
				wallType = level1[wallY][wallX];
				textureX = x % 1;
				if (up) textureX = 1 - textureX;
			}
			break;
		}
		x += dXHor;
		y += dYHor;
	}
	if (dist) {
		var strip = screenStrips[stripIdx];
		dist = Math.sqrt(dist);
		dist = dist * Math.cos(player.rot - rayAngle);
		var height = Math.round(viewDist / dist);
		var width = height * stripWidth;
		var top = Math.round((screenHeight - height) / 2);
		strip.style.height = height + "px";
		strip.style.top = top + "px";
		strip.img.style.height = Math.floor(height * numTextures) + "px";
		strip.img.style.width = Math.floor(width * 2) + "px";
		strip.img.style.top = -Math.floor(height * (wallType - 1)) + "px";
		var texX = Math.round(textureX * width);
		if (texX > width - stripWidth)
			texX = width - stripWidth;
		strip.img.style.left = -texX + "px";
	}
}

function drawRay(rayX, rayY) {
	var miniMapObjects = $("minimapobjects");
	var objectCtx = miniMapObjects.getContext("2d");
	objectCtx.strokeStyle = "rgba(0,100,0,0.3)";
	objectCtx.lineWidth = 0.5;
	objectCtx.beginPath();
	objectCtx.moveTo(player.x * miniMapScale, player.y * miniMapScale);
	objectCtx.lineTo(
		rayX * miniMapScale,
		rayY * miniMapScale
	);
	objectCtx.closePath();
	objectCtx.stroke();
}

function move() {
	let newX;
	let newY;
	if (player.strafe === 0) {
		var moveStep = player.speed * player.moveSpeed;
		player.rot += player.dir * player.rotSpeed;
		newX = player.x + Math.cos(player.rot) * moveStep;
		newY = player.y + Math.sin(player.rot) * moveStep;
	} else {
		var strafeStep = player.strafe * player.moveSpeed;
		player.rot += player.dir * player.rotSpeed;
		newX = player.x + Math.cos(player.rot + deg90) * strafeStep;
		newY = player.y + Math.sin(player.rot + deg90) * strafeStep;
	}
	if (isBlocking(newX, newY)) {
		return;
	} else {
		player.x = newX;
		player.y = newY;
	}
}

function isBlocking(x, y) {
	if (y < 0 || y >= mapHeight || x < 0 || x >= mapWidth) {
		return true;
	} else {
		if (level1[Math.floor(y)][Math.floor(x)] != 0) {
			if (level1[Math.floor(y)][Math.floor(x)] === 5) {
			level ++;
			return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	}
}

function updateMiniMap() {
	var miniMap = $("minimap");
	var miniMapObjects = $("minimapobjects");
	var objectCtx = miniMapObjects.getContext("2d");
	miniMapObjects.width = miniMapObjects.width;
	objectCtx.fillStyle = "red";
	objectCtx.fillRect(
		player.x * miniMapScale - 2,
		player.y * miniMapScale - 2,
		4, 4
	);
	objectCtx.strokeStyle = "red";
	objectCtx.beginPath();
	objectCtx.moveTo(player.x * miniMapScale, player.y * miniMapScale);
	objectCtx.lineTo(
		(player.x + Math.cos(player.rot)) * miniMapScale,
		(player.y + Math.sin(player.rot)) * miniMapScale
	);
	objectCtx.closePath();
	objectCtx.stroke();
}

function drawMiniMap() {
	var miniMap = $("minimap");
	var miniMapCtr = $("minimapcontainer");
	var miniMapObjects = $("minimapobjects");
	miniMap.width = mapWidth * miniMapScale;
	miniMap.height = mapHeight * miniMapScale;
	miniMapObjects.width = miniMap.width;
	miniMapObjects.height = miniMap.height;
	var w = (mapWidth * miniMapScale) + "px";
	var h = (mapHeight * miniMapScale) + "px";
	miniMap.style.width = miniMapObjects.style.width = miniMapCtr.style.width = w;
	miniMap.style.height = miniMapObjects.style.height = miniMapCtr.style.height = h;
	var ctx = miniMap.getContext("2d");
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, miniMap.width, miniMap.height);
	for (var y = 0; y < mapHeight; y++) {
		for (var x = 0; x < mapWidth; x++) {
			var wall = level1[y][x];
			if (wall > 0) {
				ctx.fillStyle = "rgb(200,200,200)";
				ctx.fillRect(x * miniMapScale, y * miniMapScale, miniMapScale, miniMapScale);
			}
		}
	}
	updateMiniMap();
}
setTimeout(init, 1);

// FPS DRAWING
function drawFPS() {
	var canvas = document.getElementById("fps");
	var context = canvas.getContext("2d");
	context.font = "20px Arial";
	context.fillRect(0, 0, canvas.width, canvas.height)
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillText("FPS: " + average, 7.5, 32.5);
}

// FPS SENSING
function getFPS() {
	placeholder1 = performance.now()
	let frames = 1 / ((placeholder1 - placeholder2) / 1000);
	placeholder2 = performance.now();
	return Math.round(frames);
}

function runFPStasks() {
	avFPS.push(getFPS());
	average = 0;
	for (let i = 0; i < avFPS.length; i += 1) {
		average += avFPS[i];
	}
	average = Math.round(average / avFPS.length);
	if (avFPS.length > 100) {
		avFPS = [];
		drawFPS();
	}
}
