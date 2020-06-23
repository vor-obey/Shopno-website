const slides = document.querySelectorAll(".img"),
dots = document.querySelectorAll(".button"),
slider = document.querySelectorAll(".slider");
next  = document.getElementById('btn-2');
prev  = document.getElementById('btn-1');

let index = 0;
const activeSlide = n =>  {
	console.log(n);
	for(slide of slides){
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}

const activeDot = n =>  {
	console.log(n);
	for(dot of dots){
		dot.classList.remove('active');
	}
	dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
	activeSlide(ind);
	activeDot(ind);
}

const nextSlide = () =>{
	if(index === slides.length-1){
		index = 0;
		prepareCurrentSlide(index);
	} else{
		index++;
		prepareCurrentSlide(index);
	}
}

const prevSlide = () =>{
	if(index === 0){
		index = slides.length-1;
		prepareCurrentSlide(index);
	} else{
		index--;
		prepareCurrentSlide(index);
	}
}

dots.forEach((item, indexDot) => {
	item.addEventListener('click', () =>{
		index = indexDot;
		prepareCurrentSlide(index);
		clearInterval(interval);
	})
		
})

// next.addEventListener("click", nextSlide);
// prev.addEventListener("click", prevSlide);

const interval = setInterval(nextSlide, 2000);
