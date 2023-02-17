(function calcu()
{
   let buttons=document.querySelectorAll(".btn")
   let screen=document.querySelector(".screen")
   let equal=document.querySelector(".equal")
   let clear=document.querySelector(".clear")
   let cut=document.querySelector(".cut")
   buttons.forEach(function(button)
   { 
    button.addEventListener('click',(e)=>{ 
        let nums=e.target.value;
        screen.value+=nums;

    })
   })
   equal.addEventListener('click',(e)=>{ 
    if (screen.value=="")
        screen.value=""
    else{
        let cal=eval(screen.value)
        screen.value = cal
    }
    
   })
   clear.addEventListener('click',(e)=>{ 
     if (screen.value=="")
         screen.value=""
     else
     screen.value=""
   })
   cut.addEventListener('click',(e)=>{ 
    if (screen.value.length >=0)
    {  
        console.log(screen.value.length)
      let r=screen.value.toString().slice(0,-1)
      screen.value=r
    }

        
   })


})() ;
