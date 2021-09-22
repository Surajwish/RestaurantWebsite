const bar = document.getElementById('mobile_view');

let menu = document.getElementById('menu_list');

let home = document.getElementById('home-page');

let service = document.getElementById('services-page');

let me =document.getElementById('menu-page');

function toggleview(){

  menu.classList.toggle('active');

}

bar.addEventListener('click',toggleview);

home.addEventListener('click',toggleview);

me.addEventListener('click',toggleview);

service.addEventListener('click',toggleview);