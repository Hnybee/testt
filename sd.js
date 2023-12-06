window.addEventListener("scroll",()=>{
    var some = document.querySelector(".btn")
    if(window.scrollY > 100){
        some.style.display = "flex"
    }else{
        some.style.display = "none"
    }
})