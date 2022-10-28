let link = document.querySelectorAll(".data__link")
let mapWrapper = document.querySelector(".map__wrapper")
let mapWrapperBack = document.querySelector(".map__wrapper-back")

for (let i = 0; i < link.length; i++) {
    link[0].addEventListener("click", () => {
        mapWrapper.classList.add("active")
        mapWrapperBack.classList.add("active")
        // body.classList.add("active")
    })
}

mapWrapperBack.addEventListener("click", () => {
    mapWrapper.classList.remove("active")
    mapWrapperBack.classList.remove("active")
    // body.classList.remove("active")
    
})