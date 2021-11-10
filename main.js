'use sirict' ;

//넷바 색상 변경
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');   
    }
});

//넷바메뉴 선택시 해당 부분으로 이동하기
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove("open");
    scrollIntoView (link);
});

//contact me 버튼 이동하기
const contactMeBtn = document.querySelector(".home__contact");
contactMeBtn.addEventListener("click", ()=> {
    scrollIntoView("#contact");
});

//home 투명도 조절
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", ()=>{
    home.style.opacity = 1 - window.scrollY/homeHeight;
});

//햄버거 메뉴 클릭할 때 
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", ()=>{
    navbarMenu.classList.toggle("open");
});

//home버튼 나타나게하는거
const up = document.querySelector(".arrow-up");
const arrowup = up.getBoundingClientRect().height;
document.addEventListener("scroll", ()=>{
     console.log(arrowup);
    arrowup.style.opacity = 1 + window.screenY/arrowup;
});


//home버튼 눌렀을때 위로 이동


//함수
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth"})
}