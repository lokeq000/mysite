let btnAbout = document.querySelector('#about')
let popupBtn = document.querySelector('#closeBtn')
let popup = document.querySelector(".popup")
let slideIndex = 1;
showSlides(slideIndex)
function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    
    let slides = document.querySelectorAll('.slides')
    
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = slides.length
    }
    console.log(slideIndex)
    slides.forEach((e)=>{e.style.display="none"})
    slides[slideIndex - 1].style.display = 'block'
}

popupBtn.addEventListener('click',()=>{
    popup.classList.remove('active')
})

btnAbout.addEventListener('click',()=>{

popup.classList.add('active')
})