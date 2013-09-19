var square = $('#square')
var squareRevAnim = $('.clickSquare')
var infoBlock = $('.infoBlock')
var topRowImg = $('.topRowImg')
var thirdShape = $('#thirdShape')
var hiddenBlock = $('.hiddenBlock')
var heading = $('#heading')
var col = 'rgb(' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ')';
var colTwo = 'rgb(' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ')';
var colThree = 'rgb(' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ')';
var isFlipped = topRowImg.hasClass('rotated')




var isFlippedFunc = function() {     
	if(isFlipped === false) {
		topRowImg.click(function() {
			$(this).css('-webkit-transform', 'rotateY(180deg)').css('-webkit-transition', '0.3s', 'ease-in-out')
			$(this).toggleClass('rotated')
			isFlipped = true
		});
	}
	else if(isFlipped === true) {
		topRowImg.click(function() {
			$(this).css('-webkit-transform', 'rotateY(0deg)').css('-webkit-transition', '0.3s', 'ease-in-out')
			$(this).toggleClass('rotated')
			isFlipped = false
		});
	}
}



window.onload=function() {
	heading.css('backgroundColor', 'green').css('-webkit-transition', '3s', 'ease-in-out')
	heading.css('color', 'white').css('-webkit-transition', '3s', 'ease-in-out')
	heading.css('borderRadius', '20px').css('-webkit-transition', '3s', 'ease-in-out')
		topRowImg.each(function() {
			$('.firstImg').css('backgroundColor', col).css('-webkit-transition', '2s', 'ease-in-out')
			$('.secondImg').css('backgroundColor', colTwo).css('-webkit-transition', '2s', 'ease-in-out')
			$('.thirdImg').css('backgroundColor', colThree).css('-webkit-transition', '2s', 'ease-in-out')
	});
		isFlippedFuncRun
};



var isFlippedFuncRun = isFlippedFunc()


infoBlock.click(function() {
	infoBlock.slideUp(function() {
		infoBlock.css('display', 'none');
	});
})

infoBlock.click(function() {
	hiddenBlock.slideDown(function() {
		hiddenBlock.css('display', 'block');
	});
})

hiddenBlock.click(function() {
	hiddenBlock.slideUp(function() {
		hiddenBlock.css('display', 'none');
	});
})

hiddenBlock.click(function() {
	infoBlock.slideDown(function() {
		infoBlock.css('display', 'block');
	});
})

















