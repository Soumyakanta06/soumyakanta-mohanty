import React from 'react'

function scripts() {
    return (
        <div>
            console.log("hello");
var btn1= document.getElementsByClassName("btn1");
var btn2= document.getElementsByClassName("btn2");
btn1.addEventListener("mouseenter",() =>{
    btn1.classList.remove(".btn1");
    btn1.classList.add(".btn2");
})
btn2.addEventListener("mouseenter",() =>{
    btn2.classList.remove(".btn2");
    btn2.classList.add(".btn1");
})

        </div>
    )
}

export default scripts


