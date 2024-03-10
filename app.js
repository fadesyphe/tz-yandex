const memberArrowLeft = document.querySelector("#MEMBER-ARROW-LEFT");
const memberArrowRight = document.querySelector("#MEMBER-ARROW-RIGHT");
const memberCarousel = document.querySelector(".members-carousel");
const memberLine = document.querySelector(".members-line");
const memberItem = document.querySelector('.members-item');
const countSlider = document.querySelector('.member-arrow-wrapper p span');
let minCount = Math.round(memberCarousel.clientWidth / (memberItem.clientWidth + 20));
let maxCount = memberLine.childElementCount
let widthMember = memberItem.clientWidth;
let offsetX = 0;
let count = 0;
document.addEventListener("DOMContentLoaded", () => {
	countSlider.innerHTML = count = Math.round(memberCarousel.clientWidth / (memberItem.clientWidth + 20))
})
document.addEventListener("resize", () => {
	widthMember = memberItem.offsetWidth;
})
console.log(maxCount)
memberArrowLeft.addEventListener("click", () => {
	offsetX += widthMember + 20

	if (offsetX > (widthMember * minCount + 20 * minCount)) {
		offsetX = 0
		count = minCount
	} else {
		count++
	}
	countSlider.innerHTML = count
	memberLine.style.left = '-' + offsetX + 'px'
})
memberArrowRight.addEventListener("click", () => {
	offsetX -= widthMember + 20;
	if (offsetX < 0) {
		offsetX = widthMember * 3 + 60
		count = maxCount
	} else {
		count--
	}
	countSlider.innerHTML = count
	memberLine.style.left = '-' + offsetX + 'px'
})
