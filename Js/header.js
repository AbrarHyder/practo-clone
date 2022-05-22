var header = document.querySelector('header')
    var slider = document.querySelector('#slider')

    function createnavbar() {
        header.innerHTML = '';
        var nav = document.createElement('nav')
        var temp =
            `
        <div>
                <i class="fa-solid fa-bars" id="menu_icon" onclick="show_menu()"></i>
                <div id="logo">
                    <img src="https://futuremedicineindia.com/wp-content/uploads/2020/03/practo1.jpg" alt="">
                </div>

                <div id="menu_hide">
                    <span>Find Doctors</span>
                    <span>Video Consult</span>
                    <span>Medicines</span>
                    <span>Lab Tests</span>
                    <span>Surgeries</span>
                </div>
            </div>

            <div>
                <div id="menu_visible">
                    <span>
                        <div id="new">NEW</div> For Corporates
                    </span>
                    <span>For Providers</span>
                    <span>Security & help</span>
                    <button>Login/Signup</button>
                </div>
            </div>

            <div>
                <div id="phone">
                    <div>
                        <img src="https://www.practostatic.com/subscriptions/images/explore-plus-tag.png" alt="">
                    </div>
                    <button>Sign In</button>
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

   //createnavbar()