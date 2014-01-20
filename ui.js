//window.onload = function() {
this.attractorTypes = ['Lorenz', 'Lorenz84', 'Pickover', 'Polynomial1', 'Aizawa', 'Rossler', 'Thomas', 'TSUCS1', 'WangSun'];
this.iterMin = 1000;
this.iterMax = 4000000;
this.camMin = 0;
this.camMax = 600;
this.scaleMin = 1;
this.scaleMax = 100;
this.gui = {};
gui['Lorenz'] = new dat.GUI();
var typeController1 = gui['Lorenz'].add(this, 'attractorType', attractorTypes).listen();
gui['Lorenz'].addFolder("Attractor Parameters");
gui['Lorenz'].add(types["Lorenz"], 'a', -5, 20).onFinishChange(update);
gui['Lorenz'].add(types["Lorenz"], 'b', -5, 40).onFinishChange(update);
gui['Lorenz'].add(types["Lorenz"], 'c', -5, 10).onFinishChange(update);
gui['Lorenz'].add(types["Lorenz"], 't', 0.0001, 0.02).onFinishChange(update);
typeController1.onChange(function(value) {
	updateGui(value);
});

gui['Lorenz84'] = new dat.GUI();
var typeController2 = gui['Lorenz84'].add(this, 'attractorType', attractorTypes).listen();
gui['Lorenz84'].addFolder("Attractor Parameters");
gui['Lorenz84'].add(types["Lorenz84"], 'a', -5, 5).onFinishChange(update);
gui['Lorenz84'].add(types["Lorenz84"], 'b', -10, 10).onFinishChange(update);
gui['Lorenz84'].add(types["Lorenz84"], 'f', 0, 20).onFinishChange(update);
gui['Lorenz84'].add(types["Lorenz84"], 'g', -5, 10).onFinishChange(update);
gui['Lorenz84'].add(types["Lorenz84"], 't', 0.0001, 0.1).onFinishChange(update);
typeController2.onChange(function(value) {
	updateGui(value);
});

gui['Pickover'] = new dat.GUI();
var typeController3 = gui['Pickover'].add(this, 'attractorType', attractorTypes).listen();
gui['Pickover'].addFolder("Attractor Parameters");
gui['Pickover'].add(types["Pickover"], 'a', -5, 5).onFinishChange(update);
gui['Pickover'].add(types["Pickover"], 'b', -10, 10).onFinishChange(update);
gui['Pickover'].add(types["Pickover"], 'c', -5, 5).onFinishChange(update);
gui['Pickover'].add(types["Pickover"], 'd', -5, 10).onFinishChange(update);
typeController3.onChange(function(value) {
	updateGui(value);
});

gui['Polynomial1'] = new dat.GUI();
var typeController4 = gui['Polynomial1'].add(this, 'attractorType', attractorTypes).listen();
gui['Polynomial1'].addFolder("Attractor Parameters");
gui['Polynomial1'].add(types["Polynomial1"], 'a', -5, 5).onFinishChange(update);
gui['Polynomial1'].add(types["Polynomial1"], 'b', -10, 10).onFinishChange(update);
gui['Polynomial1'].add(types["Polynomial1"], 'c', -5, 5).onFinishChange(update);
typeController4.onChange(function(value) {
	updateGui(value);
});

gui['Aizawa'] = new dat.GUI();
var typeController5 = gui['Aizawa'].add(this, 'attractorType', attractorTypes).listen();
gui['Aizawa'].addFolder("Attractor Parameters");
gui['Aizawa'].add(types["Aizawa"], 'a', -5, 5).onFinishChange(update);
gui['Aizawa'].add(types["Aizawa"], 'b', -5, 5).onFinishChange(update);
gui['Aizawa'].add(types["Aizawa"], 'c', -5, 5).onFinishChange(update);
gui['Aizawa'].add(types["Aizawa"], 'd', -5, 5).onFinishChange(update);
gui['Aizawa'].add(types["Aizawa"], 'e', -5, 5).onFinishChange(update);
gui['Aizawa'].add(types["Aizawa"], 'f', -5, 5).onFinishChange(update);
gui['Aizawa'].add(types["Aizawa"], 't', 0.0001, 0.1).onFinishChange(update);
typeController5.onChange(function(value) {
	updateGui(value);
});

gui['Rossler'] = new dat.GUI();
var typeController6 = gui['Rossler'].add(this, 'attractorType', attractorTypes).listen();
gui['Rossler'].addFolder("Attractor Parameters");
gui['Rossler'].add(types["Rossler"], 'a', -5, 5).onFinishChange(update);
gui['Rossler'].add(types["Rossler"], 'b', -5, 5).onFinishChange(update);
gui['Rossler'].add(types["Rossler"], 'c', -5, 10).onFinishChange(update);
gui['Rossler'].add(types["Rossler"], 't', 0.0001, 0.1).onFinishChange(update);
typeController6.onChange(function(value) {
	updateGui(value);
});

gui['Thomas'] = new dat.GUI();
var typeController7 = gui['Thomas'].add(this, 'attractorType', attractorTypes).listen();
gui['Thomas'].addFolder("Attractor Parameters");
gui['Thomas'].add(types["Thomas"], 'a', -1, 1).onFinishChange(update);
gui['Thomas'].add(types["Thomas"], 't', 0.0001, 0.1).onFinishChange(update);
typeController7.onChange(function(value) {
	updateGui(value);
});

gui['TSUCS1'] = new dat.GUI();
var typeController8 = gui['TSUCS1'].add(this, 'attractorType', attractorTypes).listen();
gui['TSUCS1'].addFolder("Attractor Parameters");
gui['TSUCS1'].add(types["TSUCS1"], 'a', -20, 60).onFinishChange(update);
gui['TSUCS1'].add(types["TSUCS1"], 'b', -5, 5).onFinishChange(update);
gui['TSUCS1'].add(types["TSUCS1"], 'c', -5, 5).onFinishChange(update);
gui['TSUCS1'].add(types["TSUCS1"], 'd', -5, 5).onFinishChange(update);
gui['TSUCS1'].add(types["TSUCS1"], 'e', -5, 5).onFinishChange(update);
gui['TSUCS1'].add(types["TSUCS1"], 't', 0.0001, 0.1).onFinishChange(update);
typeController8.onChange(function(value) {
	updateGui(value);
});

gui['WangSun'] = new dat.GUI();
var typeController9 = gui['WangSun'].add(this, 'attractorType', attractorTypes).listen();
gui['WangSun'].addFolder("Attractor Parameters");
gui['WangSun'].add(types["WangSun"], 'a', -20, 60).onFinishChange(update);
gui['WangSun'].add(types["WangSun"], 'b', -5, 5).onFinishChange(update);
gui['WangSun'].add(types["WangSun"], 'c', -5, 5).onFinishChange(update);
gui['WangSun'].add(types["WangSun"], 'd', -5, 5).onFinishChange(update);
gui['WangSun'].add(types["WangSun"], 'e', -5, 30).onFinishChange(update);
gui['WangSun'].add(types["WangSun"], 't', 0.0001, 0.1).onFinishChange(update);
typeController9.onChange(function(value) {
	updateGui(value);
});

addColorControllers();
updateGui(attractorType);
function addColorControllers(){
	for(var attGui in gui){
		gui[attGui].addFolder("Style");
		gui[attGui].add(types[attGui], 'iterations', iterMin, iterMax).onFinishChange(update);
		gui[attGui].add(types[attGui], 'opacity', 0, 1).onFinishChange(update);
		gui[attGui].add(types[attGui], 'pointSize', 0.5, 30).name('point size').onFinishChange(update);
		gui[attGui].addColor(types[attGui], 'color1').onChange(update);
		gui[attGui].addColor(types[attGui], 'color2').onChange(update);
		gui[attGui].addColor(types[attGui], 'color3').onChange(update);
		gui[attGui].addFolder("Position");
		gui[attGui].add(types[attGui], 'cameraDistance', camMin, camMax).name('camera distance');
		gui[attGui].add(types[attGui], 'scale', scaleMin, scaleMax);
		gui[attGui].add(types[attGui], 'rotationX', -3, 3).name('rotation X');
		gui[attGui].add(types[attGui], 'rotationY', -3, 3).name('rotation Y');
		gui[attGui].add(types[attGui], 'rotationZ', -3, 3).name('rotation Z');
		gui[attGui].addFolder("Export Options");
		gui[attGui].add(this, 'exportWidth').name('width');
		gui[attGui].add(this, 'exportHeight').name('height');
		gui[attGui].add(this, 'export').name('Export to PNG');
		gui[attGui].addFolder("Save or Load Parameters");
		gui[attGui].add(this, 'loadFile').name('Load Parameters');
		gui[attGui].add(this, 'saveFile').name('Save Parameters');
	}
}
function updateGui(type) {
	for(var attGui in gui){
		gui[attGui].domElement.style.display = 'none';
	}
	update();
	for (var i in gui[type].__controllers) {
    gui[type].__controllers[i].updateDisplay();
  	}
	gui[type].domElement.style.display = 'block';
}




