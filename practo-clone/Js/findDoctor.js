let a=[]
a[0]='Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.';
a[1]='Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.';
a[2]='Very easy to use, user interface is amazing. The option Where I can book a cab truly showed how much this app-makers cares about the patient health👍';
a[3]='Very good app. Well thought out about booking/rescheduling/cancelling an appointment. Also Doctor feedbac k mechanism is good and describes all the basics in good way.';
let b=[];
b[0]='Amit Sharma';
b[1]='Jyothi Bhatia';
b[2]='Anjani Sirivella';
b[3]='Avinash Kumar';
let i=0;
function displayData1(){
    
        let slider1p1=document.getElementsByClassName('slider1p1')
        slider1p1[0].innerText=a[i];
        let slider1p2=document.getElementsByClassName('slider1p2');
        slider1p2[0].innerText=b[i]
        i++;
        if(i>3){
            i=0;
        } 
}
document.querySelector('.rbutton').addEventListener('click',displayData1);


function displayData2(){
    
    let slider1p1=document.getElementsByClassName('slider1p1')
    slider1p1[0].innerText=a[i];
    let slider1p2=document.getElementsByClassName('slider1p2');
    slider1p2[0].innerText=b[i]
    i--;
    if(i<0){
        i=3;
    } 
}
document.querySelector('.lbutton').addEventListener('click',displayData2);
/////////////////////////////////////////////////////////////////////////////
var j=0;
function displayData12(){
    
    let slider2p1=document.getElementsByClassName('slider2p1')
    slider2p1[0].innerText=a[j];
    let slider2p2=document.getElementsByClassName('slider2p2');
    slider1p2[0].innerText=b[j]
    j++;
    if(j>3){
        j=0;
    } 
}
document.querySelector('.rbutton2').addEventListener('click',displayData12);


function displayData22(){

let slider1p1=document.getElementsByClassName('slider2p1')
slider1p1[0].innerText=a[j];
let slider1p2=document.getElementsByClassName('slider2p2');
slider1p2[0].innerText=b[j]
j--;
if(j<0){
    j=3;
} 
}
document.querySelector('.lbutton2').addEventListener('click',displayData22);