let ab=document.querySelectorAll("li")
let dd1=document.getElementById("dropdown1")
let dd2=document.getElementById("dropdown2")
let dd3=document.getElementById("dropdown3")
let dd4=document.getElementById("dropdown4")
let dd5=document.getElementById("dropdown5")
let dd6=document.getElementById("dropdown6")

let arr2=[dd1,dd2,dd3,dd4,dd5,dd6];
ab.forEach(function callback(x,y){
    
    x.addEventListener("mouseover",()=>{
        // x.classList.toggle("start")
       
        if(y==0)
        {
            dd1.style.display="block"
            // dd1.classList.toggle("start")
        }
        if(y==1)
        {
            dd2.style.display="block"
            
        }
        if(y==2)
        {
            dd3.style.display="block"
        }
        if(y==3)
        {
            dd4.style.display="block"
        }
        if(y==4)
        {
            dd5.style.display="block"
        }
        if(y==5)
        {
            dd6.style.display="block"
        }
        event.stopPropagation()
    },true)
    x.addEventListener("mouseout", ()=>{
        x.style.background=""
        x.classList.toggle("end")
        event.stopPropagation()
        if(y==0)
        {
            dd1.style.display="none"
        }
        if(y==1)
        {
            dd2.style.display="none"
        }
        if(y==2)
        {
            dd3.style.display="none"
        }
        if(y==3)
        {
            dd4.style.display="none"
        }
        if(y==4)
        {
            dd5.style.display="none"
        }
        if(y==5)
        {
            dd6.style.display="none"
        }   
    },true)
})
arr2.forEach(x=>{
    x.addEventListener("mouseover",()=>{
        x.style.display="block"
       
    },true)
})
arr2.forEach(x=>{
    x.addEventListener("mouseout",()=>{
        x.style.display="none"
        
    })
})