import {size, slideIn, slideOut, init} from '../../_common/js/common.js'


const el = {
	t1a:{isLeft: true},
	t1b:{isLeft: true},	
	t1c:{isLeft: false},	
	t1d:{isLeft: false},	
	t2a:{isLeft: false},
	t2b:{isLeft: true},	
	t2c:{isLeft: true},
	t3a:{isLeft: true},
	t3b:{isLeft: true},
	t3c:{isLeft: false}
}





function start() {
	const tl = new TimelineMax()
	
	
	TweenLite.to('#playa', 11, {ease:Power3.easeOut, x:-3, y:-104})
	
	tl.add('f1')	
	tl.set('.frame1', {opacity: 1})

	tl.add( slideIn(el.t1a), 0 )
	tl.add( slideIn(el.t1b), 0 )
	tl.add( slideIn(el.t1c), 0 )
	tl.add( slideIn(el.t1d), 0 )
	
	
	tl.add('f1_end', "+=2.2")
	tl.add( slideOut(el.t1a), 'f1_end' )
	tl.add( slideOut(el.t1b), 'f1_end-=.1' )
	tl.add( slideOut(el.t1c), 'f1_end-=.2' )
	tl.add( slideOut(el.t1d), 'f1_end-=.2' )
	

	tl.add('f2')
	tl.set('.frame2', {opacity: 1}, 'f2')
	tl.add( slideIn(el.t2a) )
	tl.add( slideIn(el.t2b), '-=.2' )
	tl.add( slideIn(el.t2c), '-=.2' )

	tl.add('f2_end', "+=1.5")
	tl.add( slideOut(el.t2a), 'f2_end' )
	tl.add( slideOut(el.t2b), 'f2_end-=.1' )
	tl.add( slideOut(el.t2c), 'f2_end-=.2' )


	tl.add('f3')
	tl.set('.frame3', {opacity: 1}, 'f3')
	tl.add( slideIn(el.t3a) )
	tl.add( slideIn(el.t3b), '-=.4' )
	tl.add( slideIn(el.t3c), '-=.3' )
	
	tl.add('f3_end', "+=.5")
	tl.from('#footer', .5, {opacity:0}, "f3_end")
	tl.from('.proline', .5, {y:"+=90", opacity:0}, "f3_end")
	tl.from('#cta', .5, {opacity:0}, '+=.3')

	tl.set('#legalBtn', {display: "block"})
	
}



setTimeout(()=>{
	init(el)
	start()	
}, 10)

