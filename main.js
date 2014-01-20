var width = window.innerWidth;
var height = window.innerHeight;
this.exportWidth = 2560;
this.exportHeight = 1440;
this.x = 0.1;
this.y = 0;
this.z = 0;

this.attractorType = "Lorenz84";
this.types = {
	"Lorenz": new Lorenz(),
	"Lorenz84": new Lorenz84(),
	"Pickover": new Pickover(),
	"Polynomial1": new Polynomial1(),
	"Aizawa": new Aizawa(),
	"Rossler": new Rossler(),
	"Thomas": new Thomas(),
	"WangSun": new WangSun(),
	"TSUCS1": new TSUCS1()
};
this.activeGenerator = types[attractorType];

function generate(Generator, initX, initY, initZ) {
	var x = initX,
		y = initY,
		z = initZ,
		maxX = initX,
		maxY = initY,
		maxZ = initZ,
		minX = initX,
		minY = initY,
		minZ = initZ;

	var geometry = new THREE.BufferGeometry();
	geometry.addAttribute('position', Float32Array, Generator.iterations, 3);
	geometry.addAttribute('color', Float32Array, Generator.iterations, 3);
	var positions = geometry.attributes.position.array;
	var colors = geometry.attributes.color.array;
	//
	//	POSITIONS
	//
	for (var i = 0; i < positions.length; i += 3) {
		var newX = Generator.newX(x, y, z);
		var newY = Generator.newY(x, y, z);
		var newZ = Generator.newZ(x, y, z);

		positions[i] = newX;
		positions[i + 1] = newY;
		positions[i + 2] = newZ;

		maxX = Math.max(maxX, newX);
		maxY = Math.max(maxY, newY);
		maxZ = Math.max(maxZ, newZ);
		minX = Math.min(minX, newX);
		minY = Math.min(minY, newY);
		minZ = Math.min(minZ, newZ);

		x = newX;
		y = newY;
		z = newZ;
	}
	var rangeX = maxX - minX;
	var rangeY = maxY - minY;
	var rangeZ = maxZ - minZ;
	var midZ = minZ + rangeZ / 2;
	//
	//	COLORS
	//
	for (var i = 0; i < positions.length; i += 3) {
		var color = new THREE.Color;
		var color2 = new THREE.Color;
		var color3 = new THREE.Color;
		color.setStyle(Generator.color1);
		color2.setStyle(Generator.color2);
		color3.setStyle(Generator.color3);
		color.lerp(color2,
			4 * Math.pow(Math.abs(positions[i + 1]) / rangeY + Math.abs(positions[i]) / rangeX, 2)
		);
		color.lerp(color3, 4 * Math.pow(Math.abs(midZ - positions[i + 2]) / rangeZ, 1.5));

		colors[i] = color.r;
		colors[i + 1] = color.g;
		colors[i + 2] = color.b;
	}
	console.log((new Date).getTime() - window.startTime);
	geometry.computeBoundingSphere();
	return geometry;
}

function update() {
	//
	//	MATERIAL
	//
	activeGenerator = types[attractorType];
	material = new THREE.ParticleSystemMaterial({
		size: activeGenerator.pointSize,
		map: THREE.ImageUtils.loadTexture("particle.png"),
		vertexColors: true,
		blending: THREE.AdditiveBlending,
		transparent: true,
		opacity: activeGenerator.opacity,
		depthWrite: false
	});


	attractor = generate(activeGenerator, x, y, z);

	// create the particle system

	if (typeof particleSystem != 'undefined') {
		scene.remove(particleSystem);
	}
	particleSystem = new THREE.ParticleSystem(
		attractor,
		material);
	particleSystem.sortParticles = true;
	// add it to the scene
	scene.add(particleSystem);
}

var scene = new THREE.Scene;

update();

//
//	RENDERER
//
var renderer = new THREE.WebGLRenderer({
	antialias: true,
	preserveDrawingBuffer: true
});
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
//
//	CAMERA
//
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 3000);
camera.lookAt(particleSystem.position);
scene.add(camera);
console.log((new Date).getTime() - window.startTime);

var mouseControls = new THREE.TrackballControls(camera, renderer.domElement);

// mouseControls.rotateSpeed = 1.0;
// mouseControls.zoomSpeed = 1.2;
// mouseControls.panSpeed = 0.8;

//mouseControls.noZoom = false;
// mouseControls.noPan = false;

mouseControls.staticMoving = true;
mouseControls.dynamicDampingFactor = 1;

//mouseControls.keys = [65, 83, 68];

//mouseControls.addEventListener('change', render);
function animate() {
	particleSystem.rotation.x = activeGenerator.rotationX;
	particleSystem.rotation.y = activeGenerator.rotationY;
	particleSystem.rotation.z = activeGenerator.rotationZ;
	requestAnimationFrame(animate);
	mouseControls.update();
	render();
}

function render() {
	camera.position.z = activeGenerator.cameraDistance;
	particleSystem.scale.set(activeGenerator.scale, activeGenerator.scale, activeGenerator.scale);
	renderer.render(scene, camera);
}

animate();
this.export = function() {
	renderer.setSize(exportWidth, exportHeight);
	camera.aspect = exportWidth / exportHeight;
	camera.updateProjectionMatrix();
	render();
	download(renderer.domElement, attractorType + '.png');
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
	render();
}

function download(canvas, filename) {

	/// create an "off-screen" anchor tag
	var lnk = document.createElement('a'),
		e;

	/// the key here is to set the download attribute of the a tag
	lnk.download = filename;

	/// convert canvas content to data-uri for link. When download
	/// attribute is set the content pointed to by link will be
	/// pushed as "download" in HTML5 capable browsers
	lnk.href = canvas.toDataURL();

	/// create a "fake" click-event to trigger the download
	if (document.createEvent) {

		e = document.createEvent("MouseEvents");
		e.initMouseEvent("click", true, true, window,
			0, 0, 0, 0, 0, false, false, false,
			false, 0, null);

		lnk.dispatchEvent(e);

	} else if (lnk.fireEvent) {

		lnk.fireEvent("onclick");
	}
}

function loadFile() {
	var fileSelector = document.createElement('input');
	fileSelector.type = 'file';
	fileSelector.id = "fileToLoad";
	fileSelector.click();


	fileSelector.onchange = function() {
		var fileToLoad = fileSelector.files[0];
		var fileReader = new FileReader();
		fileReader.onload = function(fileLoadedEvent) {
			var loadedText = fileLoadedEvent.target.result;
			applyLoadedFile(loadedText);
		};
		fileReader.readAsText(fileToLoad);
	}
}

function applyLoadedFile(loadedText) {
	var loadedAtt = JSON.parse(loadedText);
	attractorType = loadedAtt.attType;
	activeGenerator = types[attractorType];
	for (var param in activeGenerator) {
		if (param != 'newX' && param != 'newY' && param != 'newZ') {
			activeGenerator[param] = loadedAtt[param];
		}
	}
	updateGui(attractorType);
	update();
}

function saveFile() {
	var textToWrite = JSON.stringify(activeGenerator);

	var textFileAsBlob = new Blob([textToWrite], {
		type: 'text/plain'
	});
	var fileNameToSaveAs = attractorType;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;

	if (window.webkitURL != null) {
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	} else {
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}
	downloadLink.click();
}