const panels=document.querySelectorAll(".faq__item");for(let e of panels)e.addEventListener("click",(e=>{let t=e.currentTarget;if(t.classList.contains("active"))t.classList.remove("active");else{for(let e of panels)e.classList.remove("active");t.classList.add("active")}}));