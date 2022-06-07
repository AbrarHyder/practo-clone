let flexImg = document.getElementById("flexImg");
    let img = ["https://www.practo.com/consult/bundles/cwipage/images/ic-security-v1.png","https://www.practo.com/consult/bundles/cwipage/images/ic-chats-v1.png"]
    setInterval(function(){ 
        let random = Math.floor(Math.random()*2);
        flexImg.src = img[random];
    },2000)