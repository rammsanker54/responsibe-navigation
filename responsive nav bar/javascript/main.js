let show=document.getElementsByClassName("menu")[0];
let btn=document.querySelector(".cli");
let list=true;
btn.addEventListener("click", function(){
    // alert();
    // divit.classList.toggle("show");
    // btn.children[0].classList.toggle("toggling");
    console.log("click")
   
    if(list){
        show.style.display="block";
        list=!list;
        console.log(list);
    }else{
        show.style.display="none";
        list=!list;
        console.log(list);

    }

})

