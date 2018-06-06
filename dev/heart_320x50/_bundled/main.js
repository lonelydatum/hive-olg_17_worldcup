(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power3.easeInOut;

function slideIn(el) {
	var timeIN = arguments.length <= 1 || arguments[1] === undefined ? .45 : arguments[1];
	var isLeft = el.isLeft;
	var img = el.img;
	var dim = el.dim;

	var x = isLeft ? "-" : "+";
	var y = isLeft > 0 ? '+' : '-';
	// const obj =  {x:`${x}=${dim.w}`, y:`${y}=${30}`}	

	var right = isLeft ? 0 : dim.w * 2;
	var left = !isLeft ? dim.w * 2 : 0;
	var obj = { clip: "rect(0px," + right + "px," + dim.h * 2 + "px," + left + "px)" };

	var tlSlide = new TimelineMax();
	tlSlide.from("#" + el.img.id + "_", timeIN, obj);
	tlSlide.from(el.img, timeIN, obj, "-=" + timeIN * .6);

	return tlSlide;
}

function slideOut(el) {
	var timeIN = .3;
	var isLeft = el.isLeft;
	var img = el.img;
	var dim = el.dim;

	// const obj =  {x:`${"-"}=${dim.w}`, y:`${"+"}=${30}`, opacity:0}	

	var right = isLeft ? 0 : dim.w * 2;
	var left = !isLeft ? dim.w * 2 : 0;
	var obj = { clip: "rect(0px," + right + "px," + dim.h * 2 + "px," + left + "px)" };

	var tlSlide = new TimelineMax();
	tlSlide.to("#" + el.img.id + "_", timeIN, obj, 0);
	tlSlide.to(el.img, timeIN, obj, 0);

	return tlSlide;
}

function init(el) {

	for (var key in el) {
		var item = el[key];
		item.img = document.getElementById(key);
		item.dim = { w: item.img.offsetWidth / 2, h: item.img.offsetHeight / 2 };
		item.img.style.clip = "rect(0px," + item.dim.w * 2 + "px," + item.dim.h * 2 + "px,0px)";
		var bg = document.getElementById(key + "_");
		if (bg) {
			bg.style.clip = "rect(0px," + item.dim.w * 2 + "px," + item.dim.h * 2 + "px,0px)";
		}
	}
}

exports.size = size;
exports.slideIn = slideIn;
exports.slideOut = slideOut;
exports.init = init;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

var el = {
	t1a: { isLeft: true },
	t1b: { isLeft: true },
	t2a: { isLeft: true },
	t2b: { isLeft: true }

};

function start() {
	var tl = new TimelineMax();

	tl.set('.frame1', { opacity: 1 });

	tl.add('f1');

	tl.from('.t1', .5, { opacity: 0, y: "+=15" });

	tl.add('f2', '+=2.5');
	tl.to('.t1', .2, { opacity: 0 }, 'f2');
	tl.from('.t2', .5, { opacity: 0, y: "+=15" });

	tl.add('f3', '+=2');
	tl.to('.t2', .2, { opacity: 0 }, 'f3');
	tl.from('.t3', .5, { opacity: 0, y: "+=15" });
	tl.from('#cta', .5, { opacity: 0 });
}

setTimeout(function () {
	// init(el)
	start();
}, 10);

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
