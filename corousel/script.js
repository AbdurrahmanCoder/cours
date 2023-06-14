 const coros = document.querySelectorAll(".slide");


var counter = 0;

coros.forEach(
(coro,index) => {
coro.style.left = `${index * 100 }%`

}

)

function goPrev()
{
  counter --;
  slideImage()
 
}
function goNext()
{
  counter ++;
  slideImage()
 if(counter = 9)
{
    counter === 1;
}
     
}

const slideImage = ()=> {

    coros.forEach(
        (coro) => {
        coro.style.transform = `translateX(-${counter * 100}%)`
        

}  )}

