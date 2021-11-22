$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function menu(element){
    let menu = document.querySelector('header .menu');
    let auxilio = true;
    if(element.checked){
        menu.style.display = 'block';
    } else{
        menu.style.display = 'none';
    }
    if(window.innerWidth>=640){
        menu.style.display = 'block';
    }
}
