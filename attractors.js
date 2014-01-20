function Aizawa(){
	this.attType = 'Aizawa';
	this.a = 0.95;
	this.b = 0.7;
	this.c = 0.6;
	this.d = 3.5;
	this.e = 0.25;
	this.f = 0.1;
	this.t = 0.01;
	this.iterations = 200000;
	this.opacity = 0.3;
	this.pointSize = 2.2;
	this.cameraDistance = 421;
	this.scale = 90;
	this.rotationX = 0;
	this.rotationY = 0;
	this.rotationZ = 0;
	this.color1 = "#e32e8e";
	this.color2 = "#2e98e3";
	this.color3 = "#2e58e3";
	this.newX = function(x,y,z) {
	return x + this.t*((z-this.b) * x - this.d*y);
	}
	this.newY = function(x,y,z) {
	return y + this.t*(this.d*x + (z-this.b)*y);
	}
	this.newZ = function(x,y,z) {
	return z + this.t*(this.c + this.a*z - Math.pow(z,3)/3 - (Math.pow(x,2)+Math.pow(y,2))*(1+this.e*z) + this.f * z * Math.pow(x,3));
	}
}

//	LORENZ 14, 28, 8/3

function Lorenz(){
	this.attType = 'Lorenz';
	this.a = 12;
	this.b = 26;
	this.c = 3;
	this.t = 0.001;
	this.iterations = 100000;
	this.opacity = 0.3;
	this.pointSize = 2.2;
	this.cameraDistance = 320;
	this.scale = 3;
	this.rotationX = 0;
	this.rotationY = 0;
	this.rotationZ = 0;
	this.color1 = "#e32e8e";
	this.color2 = "#2e98e3";
	this.color3 = "#2e58e3";
	this.newX = function(x,y,z) {
	return x - this.a * x * this.t + this.a * y * this.t;
	}
	this.newY = function(x,y,z) {
	return y + this.b * x * this.t - y * this.t - z * x * this.t;
	}
	this.newZ = function(x,y,z) {
	return z - this.c * z * this.t + x * y * this.t;
	}
}

function Lorenz84(){
	this.attType = 'Lorenz84';
	this.a = 0.9;
	this.b = 3.4;
	this.f = 9.9;
	this.g = 1;
	this.t = 0.001;
	this.iterations = 100000;
	this.opacity = 0.3;
	this.pointSize = 2.2;
	this.cameraDistance = 300;
	this.scale = 10;
	this.rotationX = 0;
	this.rotationY = 0;
	this.rotationZ = 0;
	this.color1 = "#e32e8e";
	this.color2 = "#2e98e3";
	this.color3 = "#2e58e3";
	this.newX = function(x,y,z) {
	return x - this.t*this.a*x +this.t*y*y -this.t*z*z + this.t*this.a*this.f;
	}
	this.newY = function(x,y,z) {
	return y - this.t*y + this.t*x*y - this.t*this.b*x*z + this.t*this.g;
	}
	this.newZ = function(x,y,z) {
	return z - this.t*z + this.t*this.b*x*y + this.t*x*z;
	}
}

function Pickover(){
	this.attType = 'Pickover';
	this.a = 1.3;
	this.b = -2.4;
	this.c = -3;
	this.d = 1.51;
	this.iterations = 200000;
	this.opacity = 0.3;
	this.pointSize = 2.2;
	this.cameraDistance = 421;
	this.scale = 90;
	this.rotationX = 0;
	this.rotationY = 0;
	this.rotationZ = 0;
	this.color1 = "#e32e8e";
	this.color2 = "#2e98e3";
	this.color3 = "#2e58e3";
	this.newX = function(x,y,z) {
	return Math.sin(this.a*y) - z*Math.cos(this.b*x);
	}
	this.newY = function(x,y,z) {
	return z*Math.sin(this.c*x)-Math.cos(this.d*y);
	}
	this.newZ = function(x,y,z) {
	return Math.sin(x);
	}
}

function Polynomial1(){
	this.attType = 'Polynomial1';
	this.a = 1.586;
	this.b = 1.124;
	this.c = 0.281;
	this.iterations = 200000;
	this.opacity = 0.3;
	this.pointSize = 2.2;
	this.cameraDistance = 421;
	this.scale = 90;
	this.rotationX = 0;
	this.rotationY = 0;
	this.rotationZ = 0;
	this.color1 = "#e32e8e";
	this.color2 = "#2e98e3";
	this.color3 = "#2e58e3";
	this.newX = function(x,y,z) {
	return this.a + y - z*y;
	}
	this.newY = function(x,y,z) {
	return this.b + z - x*z;
	}
	this.newZ = function(x,y,z) {
	return this.c + x - y*x;
	}
}

function Rossler(){
	this.attType = 'Rossler';
	this.a = 0.2;
	this.b = 0.2;
	this.c = 5.7;
	this.t = 0.01;
	this.iterations = 100000;
	this.opacity = 0.3;
	this.pointSize = 2.2;
	this.cameraDistance = 320;
	this.scale = 8;
	this.rotationX = 0;
	this.rotationY = 0;
	this.rotationZ = 0;
	this.color1 = "#e32e8e";
	this.color2 = "#2e98e3";
	this.color3 = "#2e58e3";
	this.newX = function(x,y,z) {
	return x - this.t*(y+z);
	}
	this.newY = function(x,y,z) {
	return y + this.t*(x+this.a*y);
	}
	this.newZ = function(x,y,z) {
	return z + this.t*(this.b+z*(x-this.c));
	}
}

function Thomas(){
	this.attType = 'Thomas';
	this.a = 0.19;
	this.t = 0.05;
	this.iterations = 100000;
	this.opacity = 0.3;
	this.pointSize = 2.2;
	this.cameraDistance = 320;
	this.scale = 25;
	this.rotationX = 0;
	this.rotationY = 0;
	this.rotationZ = 0;
	this.color1 = "#e32e8e";
	this.color2 = "#2e98e3";
	this.color3 = "#2e58e3";
	this.newX = function(x,y,z) {
	return x + this.t*(-this.a*x + Math.sin(y));
	}
	this.newY = function(x,y,z) {
	return y + this.t*(-this.a*y + Math.sin(z));
	}
	this.newZ = function(x,y,z) {
	return z + this.t*(-this.a*z + Math.sin(x));
	}
}

function TSUCS1(){
	this.attType = 'TSUCS1';
	this.a = 0.2;
	this.b = -0.01;
	this.c = 0.5381287182260683;
	this.d = -0.6156480980710297;
	this.e = -1;
	this.f = -1;
	this.t = 0.06;
	this.iterations = 100000;
	this.opacity = 0.3;
	this.pointSize = 2.2;
	this.cameraDistance = 440;
	this.scale = 40;
	this.rotationX = 0;
	this.rotationY = 0;
	this.rotationZ = 0;
	this.color1 = "#e32e8e";
	this.color2 = "#2e98e3";
	this.color3 = "#2e58e3";
	this.newX = function(x,y,z) {
	return x + this.t*(x*this.a + this.c*y*z);
	}
	this.newY = function(x,y,z) {
	return y + this.t*(this.b*x + this.d*y - x*z);
	}
	this.newZ = function(x,y,z) {
	return z + this.t*(this.e*z + this.f*x*y);
	}
}

function WangSun(){
	this.attType = 'WangSun';
	this.a = 40;
	this.b = 0.833;
	this.c = 0.5;
	this.d = 0.65;
	this.e = 20;
	this.t = 0.001;
	this.iterations = 100000;
	this.opacity = 0.3;
	this.pointSize = 2.2;
	this.cameraDistance = 440;
	this.scale = 2;
	this.rotationX = 0;
	this.rotationY = 0;
	this.rotationZ = 0;
	this.color1 = "#e32e8e";
	this.color2 = "#2e98e3";
	this.color3 = "#2e58e3";
	this.newX = function(x,y,z) {
	return x + this.t*(this.a*(y-x)+this.c*x*z);
	}
	this.newY = function(x,y,z) {
	return y + this.t*(this.e*y - x*z);
	}
	this.newZ = function(x,y,z) {
	return z + this.t*(this.b*z + x*y - this.d*x*x);
	}
}


