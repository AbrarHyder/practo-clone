var first_div = document.querySelector('#first_div')
var footer = document.querySelector('footer')
var x = window.matchMedia("(max-width: 1250px)")

var expand1 = document.querySelector('#expand1')
var expand2 = document.querySelector('#expand2')
var expand3 = document.querySelector('#expand3')
var expand4 = document.querySelector('#expand4')
var expand5 = document.querySelector('#expand5')
var expand6 = document.querySelector('#expand6')
var expand7 = document.querySelector('#expand7')

var cross1 = document.querySelector('#cross1')
var cross2 = document.querySelector('#cross2')
var cross3 = document.querySelector('#cross3')
var cross4 = document.querySelector('#cross4')
var cross5 = document.querySelector('#cross5')
var cross6 = document.querySelector('#cross6')
var cross7 = document.querySelector('#cross7')

var content1 = document.querySelector('#content1')
var content2 = document.querySelector('#content2')
var content3 = document.querySelector('#content3')
var content4 = document.querySelector('#content4')
var content5 = document.querySelector('#content5')
var content6 = document.querySelector('#content6')
var content7 = document.querySelector('#content7')

expand1.addEventListener('click', function () {
    if (content1.style.display === 'block') {
        content1.style.display = 'none'
        cross1.textContent = '+'
    } else {
        expand1.style.height = 'auto'

        cross1.textContent = 'x'
        cross2.textContent = '+'
        cross3.textContent = '+'
        cross4.textContent = '+'
        cross5.textContent = '+'
        cross6.textContent = '+'
        cross7.textContent = '+'

        content1.style.display = 'block'
        content2.style.display = 'none'
        content3.style.display = 'none'
        content4.style.display = 'none'
        content5.style.display = 'none'
        content6.style.display = 'none'
        content7.style.display = 'none'
    }
})

expand2.addEventListener('click', function () {
    if (content2.style.display === 'block') {
        content2.style.display = 'none'
        cross2.textContent = '+'
    } else {
        expand2.style.height = 'auto'

        cross2.textContent = 'x'
        cross1.textContent = '+'
        cross3.textContent = '+'
        cross4.textContent = '+'
        cross5.textContent = '+'
        cross6.textContent = '+'
        cross7.textContent = '+'

        content2.style.display = 'block'
        content1.style.display = 'none'
        content3.style.display = 'none'
        content4.style.display = 'none'
        content5.style.display = 'none'
        content6.style.display = 'none'
        content7.style.display = 'none'
    }
})

expand3.addEventListener('click', function () {
    if (content3.style.display === 'block') {
        content3.style.display = 'none'
        cross3.textContent = '+'
    } else {
        expand3.style.height = 'auto'

        cross3.textContent = 'x'
        cross1.textContent = '+'
        cross2.textContent = '+'
        cross4.textContent = '+'
        cross5.textContent = '+'
        cross6.textContent = '+'
        cross7.textContent = '+'

        content3.style.display = 'block'
        content1.style.display = 'none'
        content2.style.display = 'none'
        content4.style.display = 'none'
        content5.style.display = 'none'
        content6.style.display = 'none'
        content7.style.display = 'none'
    }
})

expand4.addEventListener('click', function () {
    if (content4.style.display === 'block') {
        content4.style.display = 'none'
        cross4.textContent = '+'
    } else {
        expand4.style.height = 'auto'

        cross4.textContent = 'x'
        cross1.textContent = '+'
        cross2.textContent = '+'
        cross3.textContent = '+'
        cross5.textContent = '+'
        cross6.textContent = '+'
        cross7.textContent = '+'

        content4.style.display = 'block'
        content1.style.display = 'none'
        content2.style.display = 'none'
        content3.style.display = 'none'
        content5.style.display = 'none'
        content6.style.display = 'none'
        content7.style.display = 'none'
    }
})

expand5.addEventListener('click', function () {
    if (content5.style.display === 'block') {
        content5.style.display = 'none'
        cross5.textContent = '+'
    } else {
        expand5.style.height = 'auto'

        cross5.textContent = 'x'
        cross1.textContent = '+'
        cross2.textContent = '+'
        cross3.textContent = '+'
        cross4.textContent = '+'
        cross6.textContent = '+'
        cross7.textContent = '+'

        content5.style.display = 'block'
        content1.style.display = 'none'
        content2.style.display = 'none'
        content3.style.display = 'none'
        content4.style.display = 'none'
        content6.style.display = 'none'
        content7.style.display = 'none'
    }
})

expand6.addEventListener('click', function () {
    if (content6.style.display === 'block') {
        content6.style.display = 'none'
        cross6.textContent = '+'
    } else {
        expand6.style.height = 'auto'

        cross6.textContent = 'x'
        cross1.textContent = '+'
        cross2.textContent = '+'
        cross3.textContent = '+'
        cross4.textContent = '+'
        cross5.textContent = '+'
        cross7.textContent = '+'

        content6.style.display = 'block'
        content1.style.display = 'none'
        content2.style.display = 'none'
        content3.style.display = 'none'
        content4.style.display = 'none'
        content5.style.display = 'none'
        content7.style.display = 'none'
    }
})

expand7.addEventListener('click', function () {
    if (content7.style.display === 'block') {
        content7.style.display = 'none'
        cross7.textContent = '+'
    } else {
        expand7.style.height = 'auto'

        cross7.textContent = 'x'
        cross1.textContent = '+'
        cross2.textContent = '+'
        cross3.textContent = '+'
        cross4.textContent = '+'
        cross5.textContent = '+'
        cross6.textContent = '+'

        content7.style.display = 'block'
        content1.style.display = 'none'
        content2.style.display = 'none'
        content3.style.display = 'none'
        content4.style.display = 'none'
        content5.style.display = 'none'
        content6.style.display = 'none'
    }
})

display_footer(x) 
x.addListener(display_footer)
window.onresize = function(event)
{
document.location.reload(true);
}
function display_footer(x) {
    if (x.matches) { 
        console.log(x.matches)
        // location.reload();
    } else {
        // location.reload();
        first_div.innerHTML = ''
        footer.innerHTML = ''
        var div = document.createElement('div')
        var temp =
            `
        <div id="download_image">
            <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png" alt="">
        </div>
        <div>
            <p>Download the Practo app</p>
            <span>Access video consultation with IndiaS top doctors on the Practo app.
                Connect with doctors online, available 24/7, from the comfort of your
                home.</span>

            <div>
                <span><b>Get the link to download the app</b></span>
                <div>
                    <div id="contact_number">
                        <div><b>+91</b></div>
                        <input type="number" placeholder="Enter phone number">
                    </div>
                    <button>Send SMS</button>
                </div>

                <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/google_play.png"
                    alt="">
                <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png"
                    alt="">
            </div>
        </div>
        `
        div.innerHTML = temp
        first_div.append(div)

        var div = document.createElement('div')
        div.setAttribute('id', 'top_footer');
        var temp =
            `
        <div>
            <p><b>Practo</b></p>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Contact Us</p>
        </div>

        <div>
            <p><b>For patients</b></p>
            <p>Search for doctors</p>
            <p>Search for clinics</p>
            <p>Search for hospitals</p>
            <p>Book Diagnostic Tests</p>
            <p>Book Full Body Checkups</p>
            <p>Practo Plus</p>
            <p>Covid Hospital listing</p>
            <p>Practo Care Clinics</p>
            <p>Read health article</p>
            <p>Read about medicines</p>
            <p>Practo drive</p>
            <p>Health app</p>
        </div>

        <div>
            <div>
                <p><b>For doctors</b></p>
                <p>Practo Profile</p>
            </div>

            <div>
                <p><b>For clinics</b></p>
                <p>Ray by Practo</p>
                <p>Practo Reach</p>
                <p>Ray Tab</p>
                <p>Practo Pro</p>
            </div>
        </div>

        <div>
            <div>
                <p><b>For hospitals</b></p>
                <p>Insta by Practo</p>
                <p>Qikwell by Practo</p>
                <p>Practo Profile</p>
                <p>Practo Reach</p>
                <p>Practo Drive</p>
            </div>

            <div>
                <p><b>For Corporates</b></p>
                <p>Wellness Plans</p>
            </div>
        </div>

        <div>
            <p><b>More</b></p>
            <p>Help</p>
            <p>Developers</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Healthcare Directory</p>
            <p>Practo Health Wiki</p>
        </div>

        <div>
            <p><b>Social</b></p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linkedin</p>
            <p>Youtube</p>
            <p>Github</p>
        </div>
        `
        div.innerHTML = temp
        footer.append(div)

        var div = document.createElement('div')
        div.setAttribute('id', 'bottom_footer');
        var temp =
            `
        <img src="https://www.practostatic.com/web-assets/images/white_practo_logo.svg" alt="">
        <!-- <span>Copyright © 2017, Practo. All rights reserved.</span> -->
        <p>Copyright © 2017, Practo. All rights reserved.</p>
        `
        div.innerHTML = temp
        footer.append(div)
    }

}