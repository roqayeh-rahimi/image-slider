let btnRight= document.querySelector('#btn-right');
let btnLeft = document.querySelector('#btn-left');
let boxSlide = document.querySelector('.slider')



btnRight.addEventListener('click', showImageRight)
btnLeft.addEventListener('click', showImageLeft)

// let carousel =  setInterval(showImageRight, 5000)

let image = 1
function showImageRight(){
    console.log(image);
    image++
    if(image > 6){
        image = 1
    }
    let urlImage = `url('./assets/images/0${image}.jpg') no-repeat center  center/cover`
    boxSlide.style.background = urlImage
    // boxSlide.style.transition = "all 1s ease-out"
    console.log(image);
}

function showImageLeft(){
    image--
    if(image < 1){
        image = 6
    }
    let urlImage = `url('./assets/images/0${image}.jpg') no-repeat center  center/cover`
    boxSlide.style.background = urlImage
    console.log(image);
}
