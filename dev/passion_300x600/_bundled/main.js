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
	t1b: { isLeft: false },
	t1c: { isLeft: true },
	t2a: { isLeft: false },
	t2b: { isLeft: true },
	t2c: { isLeft: true },
	t3a: { isLeft: true },
	t3b: { isLeft: true },
	t3c: { isLeft: false }
};

function start() {
	var tl = new TimelineMax();

	TweenLite.to('#playa', 11, { ease: Power3.easeOut, x: -3, y: -104 });

	tl.add('f1');
	tl.set('.frame1', { opacity: 1 });

	tl.add((0, _commonJsCommonJs.slideIn)(el.t1a), 0);
	tl.add((0, _commonJsCommonJs.slideIn)(el.t1b), 0);
	tl.add((0, _commonJsCommonJs.slideIn)(el.t1c), 0);

	tl.add('f1_end', "+=1.5");
	tl.add((0, _commonJsCommonJs.slideOut)(el.t1a), 'f1_end');
	tl.add((0, _commonJsCommonJs.slideOut)(el.t1b), 'f1_end-=.1');
	tl.add((0, _commonJsCommonJs.slideOut)(el.t1c), 'f1_end-=.2');

	tl.add('f2');
	tl.set('.frame2', { opacity: 1 }, 'f2');
	tl.add((0, _commonJsCommonJs.slideIn)(el.t2a));
	tl.add((0, _commonJsCommonJs.slideIn)(el.t2b), '-=.2');
	tl.add((0, _commonJsCommonJs.slideIn)(el.t2c), '-=.2');

	tl.add('f2_end', "+=1.5");
	tl.add((0, _commonJsCommonJs.slideOut)(el.t2a), 'f2_end');
	tl.add((0, _commonJsCommonJs.slideOut)(el.t2b), 'f2_end-=.1');
	tl.add((0, _commonJsCommonJs.slideOut)(el.t2c), 'f2_end-=.2');

	tl.add('f3');
	tl.set('.frame3', { opacity: 1 }, 'f3');
	tl.add((0, _commonJsCommonJs.slideIn)(el.t3a));
	tl.add((0, _commonJsCommonJs.slideIn)(el.t3b), '-=.4');
	tl.add((0, _commonJsCommonJs.slideIn)(el.t3c), '-=.3');

	tl.add('f3_end', "+=.5");
	tl.from('#footer', .5, { opacity: 0 }, "f3_end");
	tl.from('.proline', .5, { y: "+=90", opacity: 0 }, "f3_end");
	tl.from('#cta', .5, { opacity: 0 }, '+=.3');

	tl.set('#legalBtn', { display: "block" });
}

setTimeout(function () {
	(0, _commonJsCommonJs.init)(el);
	start();
}, 10);

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
