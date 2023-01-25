const button = document.getElementById("button")
const info = document.getElementById("hidden")
const button2 = document.getElementById("button2")


button.addEventListener("click", () =>{
     info.classList.remove("hidden")
     button.classList.add("hidden")
     button2.classList.remove("hidden")
})

button2.addEventListener("click", () =>{
     info.classList.add("hidden")
     button2.classList.add("hidden")
     button.classList.remove("hidden")
})


