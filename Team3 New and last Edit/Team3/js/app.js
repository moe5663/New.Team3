var items = {
    0: {

        title: "iPhone 13 Pro",
        desc: "Smooth, responsive Super Retina XDR display with ProMotion. Huge camera system upgrade for dramatic new possibilities. Exceptional durability. The ultrafast A15 Bionic chip. And breakthrough battery life. Let’s Pro.",
        price: "5199 SAR"

    },
    1: {

        title: "ASUS ROG NVIDIA GEFORCE RTX 3090 GRAPHIC CARD",
        desc: "24 GB GDDR6X, 1.73 GHZ BOOST CLOCK, ROG-STRIX-RTX3090-24G-GAMING, 2X HDMI, 384 BIT BUS WIDTH, 3 X DISPLAYPORT, HDMI.",
        price: "14000 SAR"
    },
    2: {

        title: "Samsung Galaxy S21 Ultra",
        desc: "Introducing Galaxy S21 Ultra 5G. Designed with a unique contour-cut camera to create a revolution in photography — letting you capture cinematic 8K video and snap epic stills, all in one go. And with Galaxy's fastest chip, strongest glass, 5G and an all-day battery, Ultra easily lives up to its name.",
        price: "4299 SAR"
    },
    3: {

        title: "BenQ ZOWIE XL2546K",
        desc: "24.5inch 240Hz Esports Gaming Monitor,0.5ms, FHD| Height Adjustable| FreeSync Premium | DP, HDMI| DyAc+ for Recoil Control, Black eQualizer & Color Vibrance| S-Switch for Game Mode.",
        price: "2100 SAR"
    },
    4: {

        title: "Logitech G PRO X SUPERLIGHT",
        desc: "Wireless Gaming Mouse, HERO 25K Sensor, Ultra-light with 63g, 5 Programmable Buttons, 70 hours Battery Life, Zero Additive PTFE Feet, PC/Mac.",
        price: "700 SAR"
    }

}

// var mydata = items;
// console.log(mydata[0].pic);
// console.log(mydata[0].title);
// console.log(mydata[1].pic);
// console.log(mydata[1].title);

$(document).ready(function () {
    for (var key in items) {
        $('.example').append(
            `<div class="post-preview">
            <a href="#">
              <h2 class="post-title">`
              +items[key].title+
              `</h2>
              <h3 class="post-subtitle">`
              +items[key].desc+`</h3>
            </a>
            <p class="post-meta">`
              +items[key].price+ `</p>
          </div>
          <hr>`

        )
    }
})

$('#get_users_btn').on('click', function() {
    // this._baseUrl = 'http://localhost:5500/';
    $.ajax({
        url: "https://reqres.in/api/users",
        context: document.body
      }).done(function(data) {
        //   console.log(data.data)
          var users = data.data
          console.log(users)
        $( '#users' ).removeClass( "d-none" );
        for (var item in users) {
            $('#user').append(
                `<h6>Name: ${users[item].first_name}</h6>
                <h6>Email: ${users[item].email}</h6> <hr>`
            );
        }
      });
})
