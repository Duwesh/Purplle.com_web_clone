var primerobj=[{
  name: "NY Bae Blurin Primer| Blurin Face Primer",
  image :"https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-Best_Seller_235x235small_e0fLESWoel.png,ofo-top_right/static/img/product/240161/ny-bae-primer-white-15g-15_10_display_1631800058_e824cd72.jpg",
  price : "189",
  strikeoff :"215",
  discount :"12"
  
},
{
  name : "Lakme Absolute Blur Perfect Makeup Primer,10g",
  image :"https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/206995/biotique-bio-white-whitening-and-brightening-face-wash-for-all-skin-types-100-ml-2-13_2_display_1583929498_865029fe.jpg",
  price :"75",
  strikeoff: "70",
  discount :"10"
},
{
  name : "NY Bae Makeup Primer|All Skin Types",
  image: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-Best_Seller_235x235small_e0fLESWoel.png,ofo-top_right/static/img/product/238793/ny-bae-face-primer-48_10_display_1631799901_3c29c8d8.jpg",
  price:"216",
  strikeoff:"245",
  discount:"12"
},
{
  name:"Insight 3 in 1 Long Lasting Primer(30ml)",
  image:"https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/250318/good-vibes-brightening-face-wash-papaya-200-ml-1_7_display_1620453076_6da6c4d9.jpg",
  price:"250",
  strikeoff:"245",
  discount:"12"
},{
    name: "NY Bae Blurin Primer| Blurin Face Primer",
    image :"https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-Best_Seller_235x235small_e0fLESWoel.png,ofo-top_right/static/img/product/240161/ny-bae-primer-white-15g-15_10_display_1631800058_e824cd72.jpg",
    price : "189",
    strikeoff :"215",
    discount :"12"
    
  },
  {
    name : "Lakme Absolute Blur Perfect Makeup Primer,10g",
    image :"https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/214310/lakme-absolute-blur-perfect-makeup-primer-10-g-18_7_display_1631104552_882ba13c.jpg",
    price :"263",
    strikeoff: "215",
    discount :"12"
  },
  {
    name : "NY Bae Makeup Primer|All Skin Types",
    image: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-Best_Seller_235x235small_e0fLESWoel.png,ofo-top_right/static/img/product/238793/ny-bae-face-primer-48_10_display_1631799901_3c29c8d8.jpg",
    price:"216",
    strikeoff:"245",
    discount:"12"
  },
  {
    name:"Good Face Wash | Face Primer(30ml)",
    image:"https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/232357/good-vibes-shea-butter-deep-moisturizing-body-lotion-400ml-100-ml-free-1_1_display_1635231050_ffebdc26.jpg",
    price:"247",
    strikeoff:"290",
    discount:"15"
  },{
    name: "NY Bae Blurin Primer| Blurin Face Primer",
    image :"https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-Best_Seller_235x235small_e0fLESWoel.png,ofo-top_right/static/img/product/240161/ny-bae-primer-white-15g-15_10_display_1631800058_e824cd72.jpg",
    price : "189",
    strikeoff :"215",
    discount :"12"
    
  },
  {
    name : "Lakme Absolute Blur Perfect Makeup Primer,10g",
    image :"https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/214310/lakme-absolute-blur-perfect-makeup-primer-10-g-18_7_display_1631104552_882ba13c.jpg",
    price :"263",
    strikeoff: "215",
    discount :"12"
  },
  {
    name : "NY Bae Makeup Primer|All Skin Types",
    image: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-Best_Seller_235x235small_e0fLESWoel.png,ofo-top_right/static/img/product/238793/ny-bae-face-primer-48_10_display_1631799901_3c29c8d8.jpg",
    price:"216",
    strikeoff:"245",
    discount:"12"
  },
  {
    name:"Good Face Wash |  Face wash Primer(30ml)",
    image:"https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/250318/good-vibes-brightening-face-wash-papaya-200-ml-1_7_display_1620453076_6da6c4d9.jpg",
    price:"247",
    strikeoff:"290",
    discount:"15"
  }
  

];

document.querySelector("#productBox")

var cartss = JSON.parse(localStorage.getItem("cartsItems")) || [];
var length=cartss.length;
var length=Number(length)
if(length==0)
{
   
}else{
    document.querySelector("#cart").textContent =length;
}
var total=0;
primerobj.map(function(elem)
{
    console.log(elem.name);

    var div=document.createElement("div")
    var img = document.createElement("img");
        img.setAttribute("src", elem.image);
        img.addEventListener("click" ,function ()
        {
          productDetails();
        })
    
        var h2 = document.createElement("h5");
        h2.textContent = "Item Name:"+elem.name;

         var priceDiv=document.createElement("div");
        var price = document.createElement("h6");
        price.textContent = "Price:"+"₹"+elem.price;
        total=total +Number(elem.price);
       
        var strikeoff = document.createElement("h6");
        strikeoff.textContent = elem.strikeoff;

        var discount = document.createElement("h6");
        discount.textContent = elem.discount +"% off";
        
         
        var button = document.createElement("button");
        button.textContent = "Add To Cart";
        button.addEventListener("click", function () {
                  console.log(elem);
                  addToCart(elem);
                });
        priceDiv.append(price,strikeoff,discount,)
        img.append(button)
        div.append(img,h2,priceDiv,button)
       var x=document.querySelector("#productBox").append(div)
      

}); console.log(total)

document.querySelector("#cart").textContent =length;
function addToCart(elem) {

  cartss.push(elem);
  localStorage.setItem("cartsItems", JSON.stringify(cartss));
}

function  productDetails()
{
  window.location.href = "product_desc.html";
}