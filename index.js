
const open = document.getElementById('icon-open')
const close = document.getElementById('icon-close')
const nav = document.querySelector('.nav')
 


console.log(open)
console.log(close)
 

open.addEventListener('click' , ()=>{
    open.classList.add('show')
    close.classList.remove('show')
    nav.style.display = 'unset'

})

close.addEventListener('click' , ()=>{
    close.classList.add('show')
    open.classList.remove('show')
    nav.style.display = 'none'

})

window.addEventListener('resize'  , ()=>{
    if(screen.width > 800){
        nav.style.display = 'unset'
    }else{
        nav.style.display = 'none'
        if(open.classList.contains('show')){
            close.classList.add('show')
            open.classList.remove('show')
           
        }
    }
})
