$(".banner").banner({
	aimg:$(".banner").find("img"),			//必传
	left:$(".banner").find(".left"),		//可选,传了有功能，不传没有功能
	right:$(".banner").find(".right"),		//可选,传了有功能，不传没有功能
	isList:false,			//可选，默认为true
	
	autoPlay:true,			//可选，默认为true
	delayTime:3000,			//可选，默认为2000
	moveTime:200,			//可选，默认为200
	index:0
})




$(".mask").banner({
	aimg:$(".mask").find(".mask_m"),			//必传
	left:$(".mask").find(".left"),		//可选,传了有功能，不传没有功能
	right:$(".mask").find(".right"),		//可选,传了有功能，不传没有功能
	isList:false,			//可选，默认为true
	
	autoPlay:true,			//可选，默认为true
	delayTime:3000,			//可选，默认为2000
	moveTime:200,			//可选，默认为200
	index:0
})





$(".big_right").banner({
	aimg:$(".big_right").find(".like"),			//必传
	left:$(".big_right").find(".left"),		//可选,传了有功能，不传没有功能
	right:$(".big_right").find(".right"),		//可选,传了有功能，不传没有功能
	isList:false,			//可选，默认为true
	
	autoPlay:false,			//可选，默认为true
	delayTime:3000,			//可选，默认为2000
	moveTime:200,			//可选，默认为200
	index:0
})


