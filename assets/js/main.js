const btnBox = document.querySelector(".btn-box")
btnBox.addEventListener('click', () => {
    document.body.classList.toggle("body-style")
    btnBox.classList.toggle("second-style")
    var theme;
if(document.body.classList.contains("body-style")){
    theme = "DARK"

}
else{
    theme = "LIGHT"
}
  localStorage.setItem("Color", JSON.stringify(theme))
})
let getlcl = JSON.parse(localStorage.getItem("Color"))
if(getlcl === "DARK"){
    document.body.classList.add("body-style")
btnBox.classList.add("second-style")
}
else{
    document.body.classList.remove("body-style")
    btnBox.classList.remove("second-style")
}