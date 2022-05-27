// document.getElementById("signupreg").style.color="#14bef0";
// document.getElementById("signupreg").style.fontWeight="600";

// function redLogin(){
//         window.location.href ="login.html";
        
// }

var signup_mainr = document.querySelector('#signup-mainr')
var signup_Name = document.querySelector('#signup-Name')
var signup_MobileNo = document.querySelector('#signup-MobileNo')
var signup_Password = document.querySelector('#signup-Password')

var signup_but = document.querySelector('#signup-but')

function sign_up() {
        if (signup_Name.value != '' && signup_MobileNo.value != '' && signup_Password.value != '') {
                // signup_Name.style.display = 'none'
                // signup_Password.style.display = 'none'
                // signup_but.textContent = 'Verify OTP'

                var user_data = {
                    name:signup_Name.value,
                    contact:signup_MobileNo.value,
                    password:signup_Password.value,
                    user_cart:[]
                }

                signup_mainr.innerHTML = ''
                var div = document.createElement('div')
                div.setAttribute('class','signup-form')
                var val = Math.floor(1000 + Math.random() * 9000);
                
                var temp = 
                `
                    <p>Enter Otp</p>
                    <input id="signup-otp" type="password" placeholder="Enter Otp" />
                    <input class="signup-but" id="verfiy-otp" type="button" value="Verify OTP"/>
                `
                div.innerHTML = temp
                signup_mainr.append(div)
                alert('Your OTP is  ' + val)
                var signup_otp = document.querySelector('#signup-otp')
                var verfiy_otp = document.querySelector('#verfiy-otp')
                verfiy_otp.addEventListener('click',verify)
                function verify(){
                    if(signup_otp.value == val){
                        alert('Account Created Sucesfully')
                        send_data()
                        
                    }else{
                        alert('Wrong OTP Entered')
                        location.reload();
                    }
                }

                async function send_data(){
                    try {
                        var res = await fetch(`https://practoclon.herokuapp.com/user`,{
                            method:'POST',
                            body:JSON.stringify(user_data),
                            headers:{
                                "Content-Type":"application/json"
                            }   
                        });
                        window.location.href ="/practo-clone/html/login.html";
                    } catch (error) {
                        console.log(error)
                    }
                    
                }

        } else {
            alert('Fill All Correct Details')
        }
    }
    signup_but.addEventListener('click',sign_up)
    