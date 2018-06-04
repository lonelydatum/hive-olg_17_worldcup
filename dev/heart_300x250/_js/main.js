import {size, slideIn, slideOut, init} from '../../_common/js/common.js'

console.log();

const el = {
	t1a:{isLeft: false},
	t1b:{isLeft: true},
	t1c:{isLeft: false},
	t2a:{isLeft: false},
	t2b:{isLeft: true},
	t2c:{isLeft: true},
	t3a:{isLeft: true},
	t3b:{isLeft: false},
	t3c:{isLeft: false}
}



const tl = new TimelineMax()

function start() {
	const timeIN = .4
	const timeOUT = timeIN * .8
	
	TweenLite.to('#playa', 7, {ease:Sine.easeInOut, x:-129, y:-88})
	tl.add('f1')
	// tl.to('#playa', .8, {ease:Power2.easeInOut, x:-92}, 'f1')
	tl.set('.frame1', {opacity: 1})
	
	tl.from(el.t1a.img, timeIN, slideIn(el.t1a), '-=.2' )
	tl.from(el.t1b.img, timeIN, slideIn(el.t1b) )
	tl.from(el.t1c.img, timeIN, slideIn(el.t1c), "+=.4" )
	
	

	tl.add('f1_end', "+=1")
	tl.to(el.t1a.img, timeOUT, slideOut(el.t1a),  'f1_end')
	tl.to(el.t1b.img, timeOUT, slideOut(el.t1b),  'f1_end+=.1')
	tl.to(el.t1c.img, timeOUT, slideOut(el.t1c),  'f1_end+=.2')
	


	tl.add('f2')
	tl.set('.frame2', {opacity: 1}, 'f2')
	// tl.to('#playa', .7, {ease:Power2.easeInOut, x:-126, y:-72}, 'f2')
	tl.from(el.t2a.img, timeIN, slideIn(el.t2a), '-=.2' )
	tl.from(el.t2b.img, timeIN, slideIn(el.t2b) )
	tl.from(el.t2c.img, timeIN, slideIn(el.t2c) )
	

	tl.add('f2_end', "+=1.3")
	tl.to(el.t2a.img, timeOUT, slideOut(el.t2a),  'f2_end')
	tl.to(el.t2b.img, timeOUT, slideOut(el.t2b),  'f2_end+=.1')
	tl.to(el.t2c.img, timeOUT, slideOut(el.t2c),  'f2_end+=.2')

	

	tl.add('f3')
	tl.set('.frame3', {opacity: 1}, 'f3')
	// tl.to('#playa', .5, {ease:Power2.easeInOut, x:-129, y:-88}, 'f3')
	tl.from(el.t3a.img, timeIN, slideIn(el.t3a), '-=.2' )
	tl.from(el.t3b.img, timeIN, slideIn(el.t3b) )
	tl.from(el.t3c.img, timeIN, slideIn(el.t3c) )
	

	tl.add('f3_end', "+=.5")
	tl.from('#footer', .5, {opacity:0}, "f3_end")
	tl.from('.proline', .5, {y:"+=90", opacity:0}, "f3_end")
	tl.from('#cta', .5, {opacity:0}, '+=.3')

	tl.set('#legalBtn', {display: "block"})

	// tl.gotoAndPlay('f3_end')
	
}



setTimeout(()=>{
	init(el)
	start()	
}, 10)

