let colseCartBtn = document.querySelectorAll('.close-cart');
let overlay = document.querySelector('.overlay');
let bagCartBtn = document.querySelectorAll('.fa-bag-shopping');
let Cart= document.querySelector('.cart');
let filterBtn = document.querySelectorAll('.filter-btn');
let filter= document.querySelector('.filter');
let colsefilterBtn = document.querySelectorAll('.close-filter');
let products = document.querySelectorAll(".product-t");
let btns_footer=document.querySelectorAll('.footer-column-title');
let btn_selectors = document.querySelectorAll('.variationSelector');
let image = document.querySelector('.show-img img');
let price = document.querySelector('.price');
let video = document.querySelector('#autoplay-vid1');
// video


// /*header*/
let headerLargescreen=document.querySelector(".header.largescreen");
let headermMobilescreen=document.querySelector(".header.mobile-screen");
let sticky1 = headerLargescreen.offsetHeight;
let sticky2 = headermMobilescreen.offsetHeight;
window.addEventListener('scroll',()=>{
  if (headerLargescreen && window.pageYOffset > sticky1) {
    headerLargescreen.classList.add("sticky");
  } else {
    headerLargescreen.classList.remove("sticky");
  }
  if ( headermMobilescreen && window.pageYOffset > sticky2) {
    headermMobilescreen.classList.add("sticky");
  } else {
    headermMobilescreen.classList.remove("sticky");
  }
});



/*hover Effect */

function addhover(element) {

  element.classList.add('ishover');
};

function deletehover(element) {
    element.classList.remove('ishover');
}
/* to up of page */ 
let span = document.querySelector(".up");

window.onscroll = function () {

this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
window.scrollTo({
top: 0,
behavior: "smooth",
});
};
/*footer*/ 
btns_footer.forEach(function(btn) {
  btn.addEventListener("click",function(e){
   let colunm =e.currentTarget.parentElement;
      colunm.classList.toggle("show-list");
  })
});
/* product details */ 

btn_selectors.forEach(function(button){
  button.addEventListener("click",function(e){
    let imagesrc =e.currentTarget.getAttribute('data-image');
    let pricevalue =e.currentTarget.getAttribute('data-price');
    btn_selectors.forEach((element)=>element.classList.remove('active'));
    e.currentTarget.classList.add("active");
    price.innerHTML=pricevalue;
    image.src=imagesrc;
    console.log("test");
  })
})
/*filter */

colsefilterBtn.forEach((element)=>element.addEventListener("click",function(e){
  filter.classList.remove("show");
  overlay.classList.remove("show");

}))
filterBtn.forEach((element)=> element.addEventListener("click",function(e){
  filter.classList.add("show");
  overlay.classList.add("show");
 }));
 /*cart */

colseCartBtn.forEach((element)=>element.addEventListener("click",function(e){
  Cart.classList.remove("show");
  overlay.classList.remove("show");

}))
bagCartBtn.forEach((element)=> element.addEventListener("click",function(e){
  Cart.classList.add("show");
  overlay.classList.add("show");
 }));
 /* mobile menu  */
let linkItem = document.querySelectorAll('.mobile-menu .link-item');
let titleSubmenu = document.querySelectorAll('.mobile-menu .title-sunmenu');

linkItem.forEach((link)=>{
  link.addEventListener("click",(e)=>{
  let  submenu= e.currentTarget.nextElementSibling;
    submenu&& submenu.classList.add("showsubmenu");
  })
})
titleSubmenu.forEach((link)=>{
  link.addEventListener("click",(e)=>{
  
   e.currentTarget.parentElement.classList.remove("showsubmenu");
  })
})
let  menuIconhide= document.querySelector('.control-icons .icon-menu .fa-x');
let menuIconshow  = document.querySelector('.control-icons .icon-menu .fa-bars');
let mobileMenu = document.querySelector('.mobile-menu');
menuIconshow.addEventListener("click",()=>{
  mobileMenu.classList.add("show");
  menuIconshow.classList.add("hide");
  menuIconhide.classList.add("showicon");

 
})
menuIconhide.addEventListener("click",()=>{
  mobileMenu.classList.remove("show");
  menuIconshow.classList.remove("hide");
  menuIconhide.classList.remove("showicon");

 
})



 

/*slider */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });