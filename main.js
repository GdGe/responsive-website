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
const arrowup = document.querySelector(".arrow-up")
document.addEventListener("scroll", ()=>{
    if(window.scrollY > homeHeight/2 ){
        arrowup.classList.add("visible");
    }
    else{
        arrowup.classList.remove("visible");
    }
});

//home버튼 눌렀을때 위로 이동
arrowup.addEventListener("click",()=> {
    scrollIntoView("#home");
});

//프로젝트 js 부분
// const workBtnContainer = document.querySelector(".work__categories");
// const projectContainer = document.querySelector(".work__projects")
// const projects = document.querySelectorAll(".project");
// workBtnContainer.addEventListener("click", (e)=>{
//     const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
//     if(filter == null){
//         return;
//     }
//     projects.forEach((project)=>{
//         if(filter === "*" || filter === project.dataset.type) {
//             project.classList.remove("invisible"); //보이는 부분
//         }else {
//             project.classList.add("invisible"); // 안 보이는 부분
//         }
//     });
//     const active = document.querySelector(".category__btn.seleted");
//     if(active != null){
//         active.classList.remove("selected");
//     }
//     e.target.classList.add("selected");
//     projectContainer.classList.add("anim-out");
//     setTimeout(()=>{
//         projects.forEach((project)=>{
//             if(filter === "*" || filter === project.dataset.type){
//                 project.classList.remove("invisible");
//             }else{
//                 project.classList.add("invisible");
//             }
//         });
//         projectContainer.classList.remove("anim-out");
//     },300);
// });


const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  projects.forEach((project) => {
    if (filter === "*" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });
  const active = document.querySelector(".category__btn.selected");
  if (active != null) {
    active.classList.remove("selected");
  }
  e.target.classList.add("selected");
  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});


//함수
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth"});
}
