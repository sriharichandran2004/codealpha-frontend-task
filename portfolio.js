// Cursor follow
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

// Reveal + skill animation
const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
reveals.forEach(sec=>{
if(sec.getBoundingClientRect().top<window.innerHeight-100){
sec.classList.add("active");

sec.querySelectorAll(".bar span").forEach(bar=>{
bar.style.width=bar.dataset.width;
});
}
});
});
