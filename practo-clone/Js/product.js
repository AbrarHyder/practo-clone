var product = document.querySelector('#product')
var view_cart = document.querySelector('#view_cart')
var item_count = document.querySelector('#item_count')
var i_count = 0
console.log(item_count.textContent)


localStorage.setItem('user_cart', JSON.stringify([]))

async function list_product() {
    product.innerHTML = ''
    var res = await fetch(`https://practoclon.herokuapp.com/weight`);
    var data = await res.json();
    console.log(data)

    // "id":1,
    // "p_link":"https://www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png",
    // "p_name":"Nutrix Whey Protein Powder 1000 g",
    // "p_price":"-",
    // "p_content":"--",
    // "p_quantity":0

    var p_count = -1
    data.forEach((element, i) => {

        var div = document.createElement('div')
        var temp =
            `
                <div>
                    <img src="${element.p_link}" alt="">
                </div>
                <div class="product_details">
                    <span>${element.p_name}</span>
                    <h3>₹ ${element.p_price}</h3>
                    <div id="details">
                        <div id="qunatity">${element.p_content}</div>
                        <div id="add_button${i}" class="add_button">ADD</div>
                        <div id="inc_dnc${i}" = class="add_button" style="display:none;">
                            <div id="decrease${i}">-</div>
                            <div id="quantity${i}" class='quantity'>1</div>
                            <div id="increase${i}">+</div>
                        </div>
                        <div id="unavailable${i}" class="add_button unavailable">Unavailable</div>
                    </div>
                </div>
        `
        div.innerHTML = temp
        product.append(div)
        var add_to_cart = document.querySelector('#add_button' + i)
        var unavailable = document.querySelector('#unavailable' + i)
        var inc_dnc = document.querySelector('#inc_dnc' + i)

        function un_available(){
            if(element.p_quantity == 0){
                add_to_cart.style.display = 'none'
                inc_dnc.style.display = 'none'
                unavailable.style.display = 'flex'
            }else{
                unavailable.style.display = 'none'
            }
        }

        un_available()
        
        add_to_cart.addEventListener('click', function () {
            item_count.textContent = ++i_count
            p_count++
            var q_count = 1
            element.p_quantity = q_count
            var user_cart = JSON.parse(localStorage.getItem('user_cart'))
            user_cart.push(element)
            localStorage.setItem("user_cart", JSON.stringify(user_cart))
            
            var decrease = document.querySelector('#decrease' + i)
            var quantity = document.querySelector('#quantity' + i)
            var increase = document.querySelector('#increase' + i)
            change_button(add_to_cart,q_count,inc_dnc,decrease,quantity,increase,p_count)
            var quantity = change_button(add_to_cart,q_count,inc_dnc,decrease,quantity,increase,p_count)
            // console.log(quantity)

        })      
    });
}

function change_button(add_to_cart,q_count,inc_dnc,decrease,quantity,increase,p_count){
    add_to_cart.style.display = 'none'
    inc_dnc.style.display = 'flex'
    decrease.addEventListener('click',()=>{
        quantity.textContent = q_count--
        if(q_count == 0){
            var cart_product = JSON.parse(localStorage.getItem('user_cart'))
            cart_product.splice(p_count, 1);
            add_to_cart.style.display = 'flex'
            inc_dnc.style.display = 'none'
            localStorage.setItem("user_cart", JSON.stringify(cart_product))
        }else{
            var cart_product = JSON.parse(localStorage.getItem('user_cart'))
            cart_product[p_count].p_quantity = q_count
            quantity.textContent = cart_product[p_count].p_quantity
            localStorage.setItem("user_cart", JSON.stringify(cart_product))
        }
    })

    increase.addEventListener('click',()=>{
        var cart_product = JSON.parse(localStorage.getItem('user_cart'))
        quantity.textContent = q_count++
        cart_product[p_count].p_quantity = q_count
        quantity.textContent = cart_product[p_count].p_quantity
        localStorage.setItem("user_cart", JSON.stringify(cart_product))
    })
    // console.log(q_count)
}

view_cart.addEventListener('click', () =>{
    console.log('view_cart_button click')
    JSON.parse(localStorage.getItem('user_cart')).forEach(element => {
        update_quantity(element)
    });
    store_cart(JSON.parse(localStorage.getItem('user_cart')))
})

async function store_cart(cart_item) {  
    try {
        var res = await fetch(`https://practoclon.herokuapp.com/user/1`,{
        method:'PATCH',
        body:JSON.stringify({user_cart:[cart_item]}),
        headers:{
            "Content-Type":"application/json"
        }
    });
    var data = await res.json();
    console.log(data)
    window.location.href = "/practo-clone/html/cart.html";
    } catch (error) {
        console.log(error)
    }
}

async function update_quantity(element){
        var a;
        try {
            var res = await fetch(`https://practoclon.herokuapp.com/weight/${element.id}`);
            var data = await res.json();
            console.log(data)
            a = data.p_quantity
        } catch (error) {
            console.log(error)
        }

        try {
            // console.log(element.p_quantity)
            var res = await fetch(`https://practoclon.herokuapp.com/weight/${element.id}`,{
            method:'PATCH',
            body:JSON.stringify({p_quantity:a - element.p_quantity}),
            headers:{
            "Content-Type":"application/json"
            }   
        });

        } catch (error) {
            console.log(error)
        } 
}

// setInterval(function () {update_quantity(JSON.parse(localStorage.getItem('user_cart')))}, 1000);

list_product()
// updateDOMs()