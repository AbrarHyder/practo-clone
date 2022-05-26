var header = document.querySelector('header')
var slider = document.querySelector('#slider')

function createnavbar() {
    header.innerHTML = '';
    var nav = document.createElement('nav')
    var temp =
        `
            <div>
                <i class="fa-solid fa-bars" id="menu_icon" onclick="show_menu()"></i>
                <a href="/practo-clone/html/home.html">
                    <div id="logo">
                        <img src="https://futuremedicineindia.com/wp-content/uploads/2020/03/practo1.jpg" alt="">
                    </div>
                </a>

                <div id="menu_hide">
                    <span><a href="/practo-clone/html/findDoctors.html">Find Doctors</a></span>
                    <span><a href="/practo-clone/html/videoConsult.html">Video Consult</a></span>
                    <span><a href="/practo-clone/html/medicines.html">Medicines</a></span>
                    <span><a href="">Lab Tests</a></span>
                    <span><a href="">Surgeries</a></span>
                </div>
            </div>

            <div>
                <div id="menu_visible">
                    <span>
                        <a href=""><div id="new">NEW</div> For Corporatesx
                    </span>
                    <span><a href="">For Providers</a></span>
                    <span><a href="">Security & help</a></span>
                    <button><a href=/practo-clone/html/login.html">Login/Signup</a></button>
                </div>
            </div>

            <div>
                <div id="phone">
                    <div>
                        <a href=""><img src="https://www.practostatic.com/subscriptions/images/explore-plus-tag.png" alt=""></a>
                    </div>
                    <button><a href="">Sign In</a></button>
                </div>
            </div>
        `
    nav.innerHTML = temp
    header.append(nav)
}

function show_menu() {
    slider.style.display = 'block'
}

function close_menu() {
    slider.style.display = 'none';

}

