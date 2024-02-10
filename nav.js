let frst=document.getElementById("frst");
let scnd=document.getElementById("scnd");
let third=document.getElementById("third");
let fourth=document.getElementById("fourth");
let five=document.getElementById("five");
let indicator=document.getElementById("indicator");

frst.addEventListener("mouseover",()=>
{
    indicator.style.left="25px"
})
scnd.addEventListener("mouseover",()=>
{
    indicator.style.left="140px"
})
third.addEventListener("mouseover",()=>
{
    indicator.style.left="270px"
})
fourth.addEventListener("mouseover",()=>
{
    indicator.style.left="375px"
})
five.addEventListener("mouseover",()=>
{
    indicator.style.left="500px"
})

//One function for all
// function first(e)
// {
//    indicator.style.left=e;
//     // alert("hyy")
// }
// frst.addEventListener("mouseover",first("20px"));
// scnd.addEventListener("mouseover",first("140px"));
// third.addEventListener("mouseover",first("270px"));
// fourth.addEventListener("mouseover",first("375px"));
// five.addEventListener("mouseover",first("500px"));
// frst.addEventListener("mouseover",first("20px"));