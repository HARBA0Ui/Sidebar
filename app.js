const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const line = document.querySelector('.line')

burger.addEventListener('click', function(){
    burger.classList.toggle('active')
    sidebar.classList.toggle('active')
})