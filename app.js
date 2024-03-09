const memberArrowLeft = document.querySelector("#MEMBER-ARROW-LEFT");
const memberArrowRight = document.querySelector("#MEMBER-ARROW-RIGHT");
const memberCarousel = document.querySelector(".members-carousel");
memberArrowLeft.addEventListener("click", () => {
	memberCarousel.style.transform = 'translateX(-500px)';
})