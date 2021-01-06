const closeBtn = document.querySelectorAll('.close-btn')
const popupBtn = document.querySelectorAll('.popupBtn')
const popupView = document.querySelectorAll('.popupView')


const popup = function (i){
    popupView[i].classList.add('on')
}

closeBtn.forEach((closeBtns, i) =>{
   closeBtns.addEventListener('click', () =>{
        popupView[i].classList.remove('on')
    })
})

popupBtn.forEach((product, i) =>{
    product.addEventListener('click', () =>{
        popup(i)
    })
})