angular
	.module("MusicApp")
	.controller("MusicCtrl", MusicCtrl);

MusicCtrl.$inject = ["AppSvc", "BetaSvc"];

function MusicCtrl(AppSvc, BetaSvc) { // this is the code in the controller
	var self = this; // should always be here and first
	self.about = AppSvc.about;
	self.music = AppSvc.music;
	self.aboutBeta = BetaSvc.about;
};