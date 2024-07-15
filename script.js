let s1=document.getElementById("sq1");
s1.addEventListener("mouseenter",function(){
    let r= Math.floor(Math.random()*100);
    s1.innerHTML=`<h1> ${r} </h1>`
})
s1.addEventListener("mouseleave",function(){
    s1.innerHTML=`<h1> 1 </h1>`
})
let s2=document.getElementById("sq2");
let clr="green"
s2.addEventListener("mouseenter",function(){
   if (clr=="green"){
    s2.style.backgroundColor="green";
    clr="red"
   }
   else{
    s2.style.backgroundColor="red";
    clr="green"
   }
})
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="white"
})
let s3=document.getElementById("sq3")
s3.addEventListener("mouseenter",function(){ 
    let a=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let c=Math.floor(Math.random()*256)
    s3.style.backgroundColor=`rgb(${a},${b},${c})`
})

s3.addEventListener("mouseleave",function(){
s3.style.backgroundColor="white"
})
let s4=document.getElementById("sq4")
s4.addEventListener("click",function(){
    let a=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let c=Math.floor(Math.random()*256)
    s1.style.backgroundColor=`rgb(${a},0,0)`
    s2.style.backgroundColor=`rgb(0,${b},0)`
    s3.style.backgroundColor=`rgb(0,0,${c})`
})
s4.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="white"
    s1.style.backgroundColor="white"
    s2.style.backgroundColor="white"
    })


