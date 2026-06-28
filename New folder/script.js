// Highlight active navbar link

const links = document.querySelectorAll("nav a");

links.forEach(link=>{

    link.addEventListener("click",()=>{

        links.forEach(item=>item.classList.remove("active"));

        link.classList.add("active");

    });

});


// Navbar shadow on scroll

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>50){

        nav.style.boxShadow="0 0 20px rgba(124,58,237,.4)";

    }else{

        nav.style.boxShadow="none";

    }

});