const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut

function slideIn(el) {	
	const {isLeft, img, dim} = el
	const x = isLeft?"-":"+"
	const y = isLeft>0 ? '+' : '-'
	const obj =  {x:`${x}=${dim.w}`, y:`${y}=${30}`}	
	return obj
}

function slideOut(el) {
	const {isLeft, img, dim} = el	
	const obj =  {x:`${"-"}=${dim.w}`, y:`${"+"}=${30}`, opacity:0}	
	return obj
}

function init(el) {
	
	for(let key in el)	{
		const item = el[key]
		item.img = document.getElementById(key)
		item.dim = {w:item.img.offsetWidth/2, h:item.img.offsetHeight/2}
	}
	
}



export {size, slideIn, slideOut, init}