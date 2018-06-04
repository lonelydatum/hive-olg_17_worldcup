(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var el = {
	t1a: { isLeft: false },
	t1b: { isLeft: true },
	t1c: { isLeft: false },
	t2a: { isLeft: false },
	t2b: { isLeft: true },
	t2c: { isLeft: true },
	t3a: { isLeft: true },
	t3b: { isLeft: false },
	t3c: { isLeft: false }
};

TweenLite.defaultEase = Power4.easeInOut;
var tl = new TimelineMax();

function start() {
	var timeIN = .35;
	var timeOUT = timeIN * .8;

	tl.add('f1');
	tl.from('#playa', .8, { ease: Power2.easeInOut, x: 0 }, 'f1');
	tl.set('.frame1', { opacity: 1 });

	tl.from(el.t1a.img, timeIN, slideIn(el.t1a), '-=.2');
	tl.from(el.t1b.img, timeIN, slideIn(el.t1b));
	tl.from(el.t1c.img, timeIN, slideIn(el.t1c), "+=.4");

	tl.add('f1_end', "+=1");
	tl.to(el.t1a.img, timeOUT, slidOut(el.t1a), 'f1_end');
	tl.to(el.t1b.img, timeOUT, slidOut(el.t1b), 'f1_end+=.1');
	tl.to(el.t1c.img, timeOUT, slidOut(el.t1c), 'f1_end+=.2');

	tl.add('f2');
	tl.set('.frame2', { opacity: 1 }, 'f2');
	tl.to('#playa', .7, { ease: Power2.easeInOut, x: -126, y: -72 }, 'f2');
	tl.from(el.t2a.img, timeIN, slideIn(el.t2a), '-=.2');
	tl.from(el.t2b.img, timeIN, slideIn(el.t2b));
	tl.from(el.t2c.img, timeIN, slideIn(el.t2c));

	tl.add('f2_end', "+=1");
	tl.to(el.t2a.img, timeOUT, slidOut(el.t2a), 'f2_end');
	tl.to(el.t2b.img, timeOUT, slidOut(el.t2b), 'f2_end+=.1');
	tl.to(el.t2c.img, timeOUT, slidOut(el.t2c), 'f2_end+=.2');

	tl.add('f3');
	tl.set('.frame3', { opacity: 1 }, 'f3');
	tl.to('#playa', .5, { ease: Power2.easeInOut, x: -129, y: -88 }, 'f3');
	tl.from(el.t3a.img, timeIN, slideIn(el.t3a), '-=.2');
	tl.from(el.t3b.img, timeIN, slideIn(el.t3b));
	tl.from(el.t3c.img, timeIN, slideIn(el.t3c));

	tl.add('f3_end', "+=.8");
	tl.from('#footer', .5, { opacity: 0 }, "f3_end");
	tl.from('.proline', .5, { y: "+=90", opacity: 0 }, "f3_end");
	tl.from('#cta', .5, { opacity: 0 }, '+=.3');

	// tl.gotoAndPlay('f3_end')
}

function slideIn(el) {
	var isLeft = el.isLeft;
	var img = el.img;
	var dim = el.dim;

	var x = isLeft ? "-" : "+";
	var y = isLeft > 0 ? '+' : '-';
	var obj = { x: x + '=' + dim.w, y: y + '=' + 30 };
	return obj;
}

function slidOut(el) {
	var isLeft = el.isLeft;
	var img = el.img;
	var dim = el.dim;

	var obj = { x: "-" + '=' + dim.w, y: "+" + '=' + 30, opacity: 0 };
	return obj;
}

function init() {

	for (var key in el) {
		var item = el[key];
		item.img = document.getElementById(key);
		item.dim = { w: item.img.offsetWidth / 2, h: item.img.offsetHeight / 2 };
	}
}

setTimeout(function () {
	init();
	start();
}, 100);

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map