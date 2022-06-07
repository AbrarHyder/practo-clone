let z=[];
z[0]='https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-1.48172107.png';
z[1]='https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-2.573c08f7.png';
z[2]='https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-3.8c8ab982.png';
let y=0;

    document.querySelector('.leftArrow').addEventListener('click',slideLeft)


function slideLeft(){
    y--;
    if(y<0){
        y=2;
    }
    document.querySelector('.slider1image').src=z[y];
    
}
setInterval(slideLeft,3000);
document.querySelector('.rightArrow').addEventListener('click',slideRight);
function slideRight(){
    y++;
    if(y>2){
        y=0
    }
    document.querySelector('.slider1image').src=z[y];
    
}
console.log(y)