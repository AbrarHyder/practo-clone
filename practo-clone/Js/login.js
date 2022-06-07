// document.getElementById("signuplog").style.color="#14bef0";
// document.getElementById("signuplog").style.fontWeight="600";
// function redRegister(){
//         window.location.href ="signup.html";
        
// }

var login_mobNo = document.querySelector('#login-mobNo')
var login_but = document.querySelector('#login-but')
var login_Pass = document.querySelector('#login-Pass')



async function log_in() {
    try {   
        var res = await fetch(`https://practoclon.herokuapp.com/user`);
        var data = await res.json();
        console.log(data)

        for(var element = 0;element < data.length;element++) {
            console.log(data[element].contact , 'contact',data[element].id)
            if(login_mobNo.value == data[element].contact && login_Pass.value == data[element].password){
                console.log('login')
                localStorage.setItem('login', JSON.stringify([data[element].id,data[element].name,data[element].contact]))
                window.location.href = "/practo-clone/html/home.html";
                
                break
            }else{
                console.log('not login')
            }
        }
        
    } catch (error) {
        console.log(error)
    }
    
}

login_but.addEventListener('click',log_in)
// log_in() 