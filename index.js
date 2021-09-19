const bar = document.getElementById('mobile_view');
let menu = document.getElementById('menu_list');
function toggleview(){
    menu.classList.toggle('active');
}
bar.addEventListener('click',toggleview);