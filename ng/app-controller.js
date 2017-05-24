angular
	.module("App")
	.controller("AppCtrl", AppCtrl);

AppCtrl.$inject = [];

function AppCtrl() {
	var self = this; // should always be here and first
	self.pages = [
		{ id: 1, name: "Home" }, 
		{ id: 2, name: "Resume" }, 
		{ id: 3, name: "Accomplishments" }, 
		{ id: 4, name: "Background" }, 
		{ id: 5, name: "Contact" }
	];
	self.copyright = "Copyright (c)";
	self.author = "Gregory Doud";
	self.rights = "2017 All Rights Reserved";
	self.getCopyright = function() {
		return self.copyright + " " + self.author + " " + self.rights;
	}
	self.counter = 100;
	self.incCounter = function() { self.counter++; }
	self.addPage = function(page) {
		self.pages.push(page);
	}
};