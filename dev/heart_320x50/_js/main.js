import {size, slideIn, slideOut, init} from '../../_common/js/common.js'


const el = {
	t1a:{isLeft: true},
	t1b:{isLeft: true},	
	t2a:{isLeft: true},
	t2b:{isLeft: true},
	
}



function start() {
	const tl = new TimelineMax()
	
	tl.set('.frame1', {opacity:1})
	
	tl.add('f1')	

	tl.from('.t1', .5, {opacity:0, y:"+=15"})

	tl.add('f2', '+=2.5')	
	tl.to('.t1', .2, {opacity:0}, 'f2')
	tl.from('.t2', .5, {opacity:0, y:"+=15"})

	tl.add('f3', '+=2')	
	tl.to('.t2', .2, {opacity:0}, 'f3')
	tl.from('.t3', .5, {opacity:0, y:"+=15"})
	tl.from('#cta', .5, {opacity:0})
}



setTimeout(()=>{
	// init(el)
	start()	
}, 10)

