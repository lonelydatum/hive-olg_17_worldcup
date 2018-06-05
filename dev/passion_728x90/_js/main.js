import {size, slideIn, slideOut, init} from '../../_common/js/common.js'


const el = {
	t1a:{isLeft: true},
	t1b:{isLeft: true},	
	t2a:{isLeft: true},
	t2b:{isLeft: true}	
}



function start() {
	const tl = new TimelineMax()
	
	TweenLite.to('#playa', 8, {ease:Power3.easeOut, x:-44})
	
	tl.add('f1')	
	tl.set('.frame1', {opacity: 1})

	tl.add( slideIn(el.t1a) )
	tl.add( slideIn(el.t1b), '-=.2' )	
	
	tl.add('f1_end', "+=1.5")
	tl.add( slideOut(el.t1a), 'f1_end' )
	tl.add( slideOut(el.t1b), 'f1_end-=.1' )	

	tl.add('f2')
	tl.set('.frame2', {opacity: 1}, 'f2')
	tl.add( slideIn(el.t2a) )
	tl.add( slideIn(el.t2b), '-=.2' )


	tl.add('f2_end', "+=1.5")
	tl.add( slideOut(el.t2a), 'f2_end' )
	tl.add( slideOut(el.t2b), 'f2_end-=.1' )

	tl.add('f3')
	tl.set('.frame3', {opacity: 1}, 'f3')
	tl.from('#t3a_', .5, {opacity:0})
	
	tl.add('f3_end', "+=.1")
	tl.from('#footer', .5, {opacity:0}, "f3_end")
	tl.from('.proline', .65, {y:"+=90", opacity:0}, "f3_end")
	tl.from('#cta', .5, {opacity:0}, '+=.3')

	tl.set('#legalBtn', {display: "block"})	
}



setTimeout(()=>{
	init(el)
	start()	
}, 10)

