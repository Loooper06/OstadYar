

/* Animate logn/sign UP*/

let switcher = document.getElementById('switcher');
const innerContent = document.querySelector('.inner-switch-content');
const switchTextLogin = document.querySelector('.switchText-login');
const ModalLogin = document.getElementById('modal-login');
const ModalRegister = document.getElementById('modal-register');


innerContent.addEventListener('click', function () {
    switcher.classList.toggle('animate-switcher');
    ModalRegister.classList.toggle('animate-register');
    ModalLogin.classList.toggle('display-none');
})


// header burger menu

const BurgerIcon = document.querySelector('#burger-icon');
const BurgerMenu = document.getElementById('burger-menu-container');
const BurgerClose = document.querySelector('.burger-close-icon');

BurgerIcon.addEventListener('click',function(){
    BurgerMenu.style.transform = 'translate(0)';
    BurgerMenu.style.opacity = '1';
    BurgerMenu.style.display = 'block';
})

BurgerClose.addEventListener('click',function(){
    BurgerMenu.style.transform = 'translate(-20rem)';
    BurgerMenu.style.opacity = '0';
})

const HomeMain = document.querySelector('.burger-home');
const LayoutMain = document.querySelector('.burger-layouts');
const BlogMain = document.querySelector('.burger-weblog');
const MegaMain = document.querySelector('.burger-mega-menu');
const ProductMain = document.querySelector('.burger-products');
const LoginMain = document.querySelector('.burger-login-page');

let HomeSubMenu = document.querySelector('.burger-home-sub-menu');
let LayoutsSubMenu = document.querySelector('.burger-layouts-sub-menu');
let WeblogSubMenu = document.querySelector('.burger-weblog-sub-menu');
let MegaSubMenu = document.querySelector('.burger-mega-sub-menu');
let ProductsSubMenu = document.querySelector('.burger-products-sub-menu');
let LoginSubMenu = document.querySelector('.burger-login-page-sub-menu');
let UnderSub1 = document.querySelector('.burger-under-menu-1');
let UnderSub2 = document.querySelector('.burger-under-menu-2');
let UnderHolder1 = document.querySelector('.burger-under-1-holder');
let UnderHolder2 = document.querySelector('.burger-under-2-holder');
let BlogList = document.querySelector('.blog-list-holder');
let BlogTable = document.querySelector('.blog-table-holder');
let ListSub = document.querySelector('.burger-weblog-list-sub-menu');
let TableSub = document.querySelector('.burger-weblog-table-sub-menu');
let BurgerCategory = document.querySelector('.burger-category');
let ProductShow = document.querySelector('.burger-product-show');
let CategorySub = document.querySelector('.burger-category-sub-menu');
let ShowSub = document.querySelector('.burger-product-show-sub-menu');

HomeMain.addEventListener('click',function() {
    HomeSubMenu.classList.toggle('display-block');
})
////////////////////////////////
LayoutMain.addEventListener('click',function() {
    LayoutsSubMenu.classList.toggle('display-block');
})

UnderHolder1.addEventListener('click',function(){
    UnderSub1.classList.toggle('display-block');
})
UnderHolder2.addEventListener('click',function(){
    UnderSub2.classList.toggle('display-block');
})
//////////////////////////////
BlogMain.addEventListener('click',function(){
    WeblogSubMenu.classList.toggle('display-block');
})

BlogList.addEventListener('click',function(){
    ListSub.classList.toggle('display-block');
})
BlogTable.addEventListener('click',function(){
    TableSub.classList.toggle('display-block');
})
////////////////////////////////////
MegaMain.addEventListener('click',function() {
    MegaSubMenu.classList.toggle('display-block');
})

ProductMain.addEventListener('click',function() {
    ProductsSubMenu.classList.toggle('display-block');
})

BurgerCategory.addEventListener('click',function(){
    CategorySub.classList.toggle('display-block');
})

ProductShow.addEventListener('click',function() {
    ShowSub.classList.toggle('display-block');
})

LoginMain.addEventListener('click',function() {
    LoginSubMenu.classList.toggle('display-block');
})

