'use strict'

// HEADER 

const header = document.querySelector('.Header')
const headerBtn = document.querySelector('.Header-btn')
const headerNav = document.querySelector('.Header-nav')

headerBtn.addEventListener('click', () => 
    headerNav.classList.toggle('isActive'))


// BRIDGES
const bridge = document.querySelector('.Bridge')
const bridgeBtns = document.querySelectorAll('.Bridge-button')
const bridgeParagraph = document.querySelectorAll('.Bridge-p')

bridgeBtns.forEach((eachBtn,index) => {
    bridgeBtns[index].addEventListener('click', () => {

        bridgeBtns.forEach((eachBtn, index) => {
            bridgeBtns[index].classList.remove('isActive')
            bridgeParagraph[index].classList.remove('isActive')
        })
        bridgeBtns[index].classList.add('isActive')
        bridgeParagraph[index].classList.add('isActive')
    })
})


