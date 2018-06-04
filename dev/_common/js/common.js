const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power3.easeInOut

function slideIn(el) {	
	const {isLeft, img, dim} = el
	const x = isLeft?"-":"+"
	const y = isLeft>0 ? '+' : '-'
	// const obj =  {x:`${x}=${dim.w}`, y:`${y}=${30}`}	

	const right = isLeft ? 0 : dim.w*2
	const left = !isLeft ? dim.w*2 : 0
	const obj =  {clip: `rect(0px,${right}px,${dim.h*2}px,${left}px)`}	
	return obj
}

function slideOut(el) {
	const {isLeft, img, dim} = el	
	// const obj =  {x:`${"-"}=${dim.w}`, y:`${"+"}=${30}`, opacity:0}	

	const right = isLeft ? 0 : dim.w*2
	const left = !isLeft ? dim.w*2 : 0
	const obj =  {clip: `rect(0px,${right}px,${dim.h*2}px,${left}px)`}	
	return obj
}

function init(el) {
	
	for(let key in el)	{
		const item = el[key]
		item.img = document.getElementById(key)
		item.dim = {w:item.img.offsetWidth/2, h:item.img.offsetHeight/2}
		item.img.style.clip = `rect(0px,${item.dim.w*2}px,${item.dim.h*2}px,0px)`
	}
	
}



export {size, slideIn, slideOut, init}