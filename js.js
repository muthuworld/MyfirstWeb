var onePopu = document.getElementById("open-overlay")
var twoPopu = document.getElementById("second-popu")
var addButton = document.getElementById("add-button")

var addbutton = document.getElementById("add-inp")
var twobutton = document.getElementById("add-inp-two")

var mainbox = document.querySelector(".text-box")
var inpboxitem = document.getElementById("inp-box1")
var twopupo = document.getElementById("inp-box2")
var area = document.getElementById("text-area")

addButton.addEventListener("click",function(){
    onePopu.style.display = "block"
    twoPopu.style.display = "block"
})


twobutton.addEventListener("click",function(event){
    event.preventDefault()
    onePopu.style.display = "none"
    twoPopu.style.display = "none"
})

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","text-box")
    div.innerHTML = `<h1>${inpboxitem.value}</h1>
    <button onclick="delItem(event)" id="del">delete</button>`
    mainbox.append(div)
    onePopu.style.display = "none"
    twoPopu.style.display = "none"
})
function delItem(event)
{
    event.target.parentElement.remove()
}