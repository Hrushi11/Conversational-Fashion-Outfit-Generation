const slides = document.querySelectorAll(".slide")
console.log(slides)
var counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)
const goNext = () => {
    if(counter===3){
        counter=-1
    }
    counter++
    slideImage()
}
const goPrev = () => {
    if(counter===0){
        counter=4
    }
    counter--
    slideImage()
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
setInterval(function(){
    goNext()
},4000,Infinity);

const goNext2 = () => {
    // A1.style.transform = `translateX(-${20}em)`;
    // A2.style.transform = `translateX(-${20}em)`;
    // A3.style.transform = `translateX(-${20}em)`;
    // A4.style.transform = `translateX(-${20}em)`;
    // A5.style.transform = `translateX(-${20}em)`;
    // A6.style.transform = `translateX(-${20}em)`;
    // A7.style.transform = `translateX(-${20}em)`;
    B1.setAttribute('class','boxcEnd');
    btn1prev.setAttribute('class','prev2')
    btn1next.setAttribute('class','nextinvisible')
}

const goPrev2 = () => {
    // A1.style.transform = `translateX(-${0}%)`;
    // A2.style.transform = `translateX(-${0}%)`;
    // A3.style.transform = `translateX(-${0}%)`;
    // A4.style.transform = `translateX(-${0}%)`;
    // A5.style.transform = `translateX(-${0}%)`;
    // A6.style.transform = `translateX(-${0}%)`;
    // A7.style.transform = `translateX(-${0}%)`;
    B1.setAttribute('class','boxc');
    btn1next.setAttribute('class','next2')
    btn1prev.setAttribute('class','previnvisible')
}

const goNext3 = () => {
    B2.setAttribute('class','boxcEnd');
    btn2prev.setAttribute('class','prev2')
    btn2next.setAttribute('class','nextinvisible')
}

const goPrev3 = () => {
    B2.setAttribute('class','boxc');
    btn2next.setAttribute('class','next2')
    btn2prev.setAttribute('class','previnvisible')
}

const goNext4 = () => {
    B3.setAttribute('class','boxcEnd');
    btn3prev.setAttribute('class','prev2')
    btn3next.setAttribute('class','nextinvisible')
}

const goPrev4 = () => {
    B3.setAttribute('class','boxc');
    btn3next.setAttribute('class','next2')
    btn3prev.setAttribute('class','previnvisible')
}