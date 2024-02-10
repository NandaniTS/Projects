let pic1=document.getElementById("pic1")
let pic2=document.getElementById("pic2")
let pic3=document.getElementById("pic3")
let blob=document.getElementById("blob")
function change()
{
    blob.style.backgroundColor= "rgb(255, 119, 180)"; 
}
pic1.addEventListener("click",change)

function change2()
{
    blob.style.backgroundColor="rgb(244, 34, 104)";
}
pic2.addEventListener("click",change2)

function change3()
{
    blob.style.backgroundColor="rgb(27, 100, 27)"
}
pic3.addEventListener("click",change3)

let gree=document.getElementById("green")
function chngimg()
{
    gree.src="https://freepngimg.com/thumb/coffee/62115-tea-coffee-drink-starbucks-latte-free-download-image.png";
}
pic1.addEventListener("click",chngimg)


function chngimg2()
{
    gree.src="https://www.pngall.com/wp-content/uploads/4/Starbucks-Coffee-PNG-Free-Download.png"
}
pic2.addEventListener("click",chngimg2)


function chngimg3()
{
    gree.src="https://freepngimg.com/save/77325-frappuccino-drink-chocolate-starbucks-matcha-white/620x899"
}
pic3.addEventListener("click",chngimg3)
