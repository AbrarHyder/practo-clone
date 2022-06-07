var cart_list = document.querySelector('#cart_list')
var total_amount = document.querySelector('#total_amount')
var item_count = document.querySelector('#item_count')


async function load_cart(){
    try {
        var res = await fetch(`https://practoclon.herokuapp.com/user/1`);
    var data = await res.json();
    console.log(data.user_cart)
    item_count.textContent = data.user_cart[0].length
    data.user_cart[0].forEach((element, i) => {
        console.log(element)
        // id: 4
        // p_content: "100ML SYRUP"
        // p_link: "https://www.practostatic.com/practopedia-images/v3/res-150/liv-52-ds-syrup-100ml_be10e8d0-1aec-4bdd-ad0b-099fbb404827.JPG"
        // p_name: "Himalaya Liv.52 DS Syrup 100 ml"
        // p_price: "128.25"
        // p_quantity: 10

        var div = document.createElement('div')
        div.setAttribute('id',`cart${i}`)
        var temp =
            `   
            <div>
            <div>
                <img src="${element.p_link}" alt="">
            </div>
            <div>
                ${element.p_name}
                <p>HIMALAYAN DRUGS <br> ${element.p_content}</p>
            </div>
        </div>

        <div>
            <p id="price${i}">₹ ${element.p_price}</p>
            <div id="button">
                <div id="decrease${i}">-</div>
                <div id="quantity${i}" class="quantity">${element.p_quantity}</div>
                <div id="increase${i}">+</div>
            </div>
        </div>
    </div>
        `
        div.innerHTML = temp
        cart_list.append(div)
        var price = document.querySelector('#price'+i)
        var decrease = document.querySelector('#decrease' + i)
        var quantity = document.querySelector('#quantity' + i)
        var increase = document.querySelector('#increase' + i)
        var cart = document.querySelector('#cart' + i)
        change_button(decrease,quantity,increase,cart,price.textContent.slice(2),total_amount)

        calculate_total(price.textContent.slice(2),quantity.textContent,total_amount)
    });
    } catch (error) {
        console.log(error)
    }
    
    
}

var sum = 0

function calculate_total(price,count,total_amount){
    sum += (price*count)
    total_amount.textContent = sum
}

function calculate_sub(price,count,total_amount){
    sum -= (price*count)
    total_amount.textContent = sum
}


function change_button(decrease,quantity,increase,cart,price,total_amount){
    var count = quantity.textContent
    decrease.addEventListener('click',()=>{
        quantity.textContent = count--
        if(count == 0){
            calculate_sub(price,1,total_amount)
            cart.style.display = 'none'
            item_count.textContent = item_count.textContent-1
            // localStorage.setItem("user_cart", JSON.stringify(cart_product))
        }else{
            quantity.textContent = count
        }
        calculate_sub(price,count,total_amount)
    })

    increase.addEventListener('click',()=>{
        quantity.textContent = count++
        calculate_total(price,count,total_amount)
    })
}

load_cart()


