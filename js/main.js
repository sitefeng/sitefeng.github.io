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
			"title": "Voxel",
			"subtitle": "Lightpainting Magic Wand",
			"details": [
				"A wifi enabled and modular LED stick that connects to a smartphone. Gives photographers an innovative tool to create lightpainting at night with ease.",
				"Collaborating 3 co-founders on this long-term project aimed towards mass production and profitability",
				"Responsible for mechanical design, embedded programming, iOS development, and product management",
				"(Dec, 2015 - Present)"
			],
			"sourceURL": "https://github.com/sitefeng/Voxel",
			"iconType": "icon-voxel",
			"imageLinks": ["pImg/voxel1.jpg", "pImg/voxel2.jpg","pImg/voxel3.png","pImg/voxel4.jpg","pImg/voxel5.png","pImg/voxel6.png"]
		},
		{
			"title": "Relay",
			"subtitle": "Sign in with your Fingerprint",
			"details": [
				"Sign in to all social websites with iPhone TouchID",
				"Using Chrome Extension, Firebase, and Native iOS app",
				"Grand-prize winner of MHacks 2015 at University of Michigan",
				"(Sep, 2015)"
			],
			"appURL": "http://devpost.com/software/relay-4o05pb",
			"iconType": "icon-relay",
			"imageLinks": ["pImg/relay1.jpg", "pImg/relay2.jpg","pImg/relay3.jpg","pImg/relay4.png","pImg/relay5.png"]
		},
		{
			"title": "Hack the North",
			"subtitle": "iPhone App",
			"details": [
				"Designed, built, and released the iOS app for Hack the North at University of Waterloo for the last two years",
				"Collaborated with the Android team to come up with the feature specifications",
				"Rebuilt the app in Swift for 2015 version with the new 'Uber for Mentor' feature, which allows hackers to conveniently request a person to help them on demand",
				"2014:(July, 2014 - Sep, 2014), 2015:(May, 2015 - Sep, 2015)"
			],
			"sourceURL": "https://www.dropbox.com/sh/fzswya0vv9nvyhg/AAAk_xExwvqkBCWuQmGns_QHa?dl=0",
			"iconType": "icon-hackTheNorth",
			"imageLinks": ["pImg/hacka.png", "pImg/hackb.png", "pImg/hackc.png", "pImg/hackd.png", "pImg/hacke.png", "pImg/hack1.png", "pImg/hack2.png", "pImg/hack3.png", "pImg/hack4.png", "pImg/hack5.png", "pImg/hack6.png", "pImg/hack7.png"]
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
			"title": "Fusion Smartstrap",
			"subtitle": "Watch strap for Pebble Time",
			"details": [
				"Adds wireless charging capability to the Pebble Time smartwatch and extends the battery life on Pebble Time from 7 days to more than 40 days",
				"Created Solidworks models of the back casing and the strap with battery compartments",
				"Researched on electrical components to use",
				"(April, 2015 - August, 2015)"
			],
			"sourceURL": "https://github.com/ericye16/fusion",
			"iconType": "icon-fusion",
			"imageLinks": ["pImg/fusion1.png","pImg/fusion2.png","pImg/fusion3.png","pImg/fusion4.png","pImg/fusion5.png"]
		}, 
		{
			"title": "Uniq (Beta)",
			"subtitle": "iOS Universal App",
			"details": [
				"Co-founded Uniq, a college information assistant for high school students on mobile devices with integration to custom backend",
				"Dramatically reduces the time spent on college research by condensing program information from various colleges into one unified app, so that the data is both personalized and easy to access",
				"Responsible for iOS development in Objective-C, Swift with business planning on the side",
				"(Nov, 2013 – Nov, 2014)"
			],
			"sourceURL": "https://github.com/sitefeng/Uniq-iOS",
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

	var writings = [
		{
		"title": "Medium Articles",
		"date": "",
		"pdfLink": "https://medium.com/@sitefeng",
		},
		{
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

