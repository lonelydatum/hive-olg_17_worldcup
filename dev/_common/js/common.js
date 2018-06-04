const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power3.easeInOut

function slideIn(el) {	
	const timeIN = .45
	const {isLeft, img, dim} = el
	const x = isLeft?"-":"+"
	const y = isLeft>0 ? '+' : '-'
	// const obj =  {x:`${x}=${dim.w}`, y:`${y}=${30}`}	

	const right = isLeft ? 0 : dim.w*2
	const left = !isLeft ? dim.w*2 : 0
	const obj =  {clip: `rect(0px,${right}px,${dim.h*2}px,${left}px)`}	

	const tlSlide = new TimelineMax()
	tlSlide.from(`#${el.img.id}_`, timeIN, obj )
	tlSlide.from(el.img, timeIN, obj, `-=${timeIN*.6}` )

	
	return tlSlide
}

function slideOut(el) {
	const timeIN = .3
	const {isLeft, img, dim} = el	
	// const obj =  {x:`${"-"}=${dim.w}`, y:`${"+"}=${30}`, opacity:0}	

	const right = isLeft ? 0 : dim.w*2
	const left = !isLeft ? dim.w*2 : 0
	const obj =  {clip: `rect(0px,${right}px,${dim.h*2}px,${left}px)`}	

	const tlSlide = new TimelineMax()
	tlSlide.to(`#${el.img.id}_`, timeIN, obj, 0 )
	tlSlide.to(el.img, timeIN, obj, 0 )


	return tlSlide
}

function init(el) {
	
	for(let key in el)	{
		const item = el[key]		
		item.img = document.getElementById(key)
		item.dim = {w:item.img.offsetWidth/2, h:item.img.offsetHeight/2}
		item.img.style.clip = `rect(0px,${item.dim.w*2}px,${item.dim.h*2}px,0px)`
		const bg = document.getElementById(`${key}_`)
		if(bg){
			bg.style.clip = `rect(0px,${item.dim.w*2}px,${item.dim.h*2}px,0px)`
		}
	}
}



export {size, slideIn, slideOut, init}