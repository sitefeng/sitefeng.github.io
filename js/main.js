(function() {

	var app = angular.module('PersonalWebsite', []);

	app.controller('ProjectsController', function() {
		this.projects = projects;

	});

	app.controller('DashletController', function() {
		this.activeTab = 0;
		this.activeImg = 0;

		this.tabClicked = function(tabNumber) {
			this.activeTab = tabNumber;
		};

		this.isActiveTab = function(tabNumber) {
			return tabNumber == this.activeTab;
		}

		this.hasSourceURL = function(project) {
			return project.sourceURL;
		}

		this.hasAppURL = function(project) {
			return project.appURL;
		}

		this.imgClicked = function(imgNumber) {
			this.activeImg = imgNumber;
		}

		this.isActiveImg = function(imgNumber) {
			return imgNumber == this.activeImg;
		}
	});


	app.controller('WritingsController', ['$window', function($window) {
		this.writings = writings;

		this.openLink = function(writingNum) {
			$window.open(this.writings[writingNum].pdfLink);
		}

		this.openBook = function(writingNum) {
			$window.open("pdfs/ideas-for-post-human-civilization.pdf");
		}

	}]);

	app.controller('ContactController', function() {

	});


	var projects = [
		{
			"title": "Hack the North",
			"subtitle": "iPhone App",
			"details": [
				"Designed and built an iPhone app that allows hackers to quickly find the information they need during Hack the North 2014 at University of Waterloo (Objective-C)",
				"Collaborated with the Android team to come with the feature specifications",
				"Currently developing the iPhone app for Hack the North 2015 (Swift)",
				"2014:(July, 2014 - Sep, 2014), 2015:(May, 2015 - Sep, 2015)"
			],
			"appURL": "https://itunes.apple.com/us/app/hack-the-north/id917531622?ls=1&mt=8",
			"sourceURL": "https://github.com/hackathon/hackthenorth-mobile",
			"iconType": "icon-hackTheNorth",
			"imageLinks": ["pImg/hacka.png", "pImg/hackb.png", "pImg/hackc.png", "pImg/hackd.png", "pImg/hacke.png", "pImg/hack1.png", "pImg/hack2.png", "pImg/hack3.png", "pImg/hack4.png", "pImg/hack5.png", "pImg/hack6.png", "pImg/hack7.png", "pImg/hack8.png"]
		},
		{
			"title": "Fusion Smartstrap",
			"subtitle": "Watch strap for Pebble Time",
			"details": [
				"Adds wireless charging capability to the Pebble Time smartwatch and extends the battery life on Pebble Time from 7 days to more than 40 days",
				"Created Solidworks models of the back casing and the strap with battery compartments",
				"Researched on electrical components to use",
				"(April, 2015 - present)"
			],
			"sourceURL": "https://github.com/ericye16/fusion",
			"iconType": "icon-fusion",
			"imageLinks": ["pImg/fusion1.png","pImg/fusion2.png","pImg/fusion3.png","pImg/fusion4.png","pImg/fusion5.png"]
		}, 
		{
			"title": "MetroArm",
			"subtitle": "Arduino + Leap Motion Robotic Arm",
			"details": [
				"Designed and hand-made the 6-DOF robotic arm at a local machine shop",
				"Records hand position using Leap Motion sensor and sends the actions to the robotic arm through an Arduino Uno (C, Python)",
				"Grand-prize winner of TreeHacks 2015 at Stanford University",
				"(Feb, 2015)"
			],
			"appURL": "http://challengepost.com/software/metroarm",
			"sourceURL": "https://github.com/ericye16/LeapControlledRobot",
			"iconType": "icon-robot",
			"imageLinks": ["pImg/metroArm6.jpg", "pImg/metroArm1.jpg","pImg/metroArm2.jpg","pImg/metroArm3.jpg","pImg/metroArm4.jpg","pImg/metroArm5.jpg"]
		}, 
		{
			"title": "Uniq (Beta)",
			"subtitle": "iOS Universal App",
			"details": [
				"Co-founded Uniq, a college information assistant for high school students on mobile devices with integration to custom backend",
				"Uniq dramatically reduces the time spent on college research by condensing program information from various colleges into one unified app, so that the data is personalized and easy to access",
				"Responsible for iOS development(Objective-C, Swift) and business planning",
				"(Nov, 2013 – Nov, 2014)"
			],
			"appURL": "http://uniq.webuda.com/",
			"iconType": "icon-uniq",
			"imageLinks": ["pImg/uniq1.png", "pImg/uniq2.png", "pImg/uniq3.png", "pImg/uniq4.png"]
		},
		{
			"title": "Space 7",
			"subtitle": "iPhone Game",
			"details": [
				"An open source Cocos2D iOS game (Objective-C)",
				"Use touchscreen joystick and button to control a spaceship and shoot to destroy incoming asteroids",
				"Two game modes with static velocity control and acceleration based control",
				"(Oct, 2013 - Nov, 2013)"
			],
			"appURL": "https://itunes.apple.com/US/app/id733590789?mt=8",
			"sourceURL": "https://github.com/sitefeng/Space7",
			"iconType": "icon-space7",
			"imageLinks": ["pImg/space1.png", "pImg/space2.png", "pImg/space3.png", "pImg/space4.png", "pImg/space5.png"]
		},
		{
			"title": "ArcTime",
			"subtitle": "Watchface for Pebble Time",
			"details": [
				"An artistic watchface with curves and dots built with Pebble SDK (C)",
				"(Mar, 2015)"
			],
			"appURL": "https://apps.getpebble.com/applications/5508e6201a6b43fbeb00008f",
			"iconType": "icon-pebble",
			"sourceURL": "https://github.com/sitefeng/ArcTime",
			"imageLinks": ["pImg/arcTime1.png", "pImg/arcTime2.png"]
		}
	];

	var writings = [{
		"title": "Report for Functional Reactive Programming and MVVM",
		"date": "May 1, 2015",
		"pdfLink": "pdfs/report1.pdf",
		},
		{
		"title": "Report for Multi-layered View Hierarchy",
		"date": "Sep 15, 2014",
		"pdfLink": "pdfs/report2.pdf",
		}
	];

})();

