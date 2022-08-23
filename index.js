const textAreaElement=document.getElementById("textarea")
const totalChar=document.getElementById("total-counter")
const remainingChar=document.getElementById("remaining-counter")


textAreaElement.addEventListener("keyup",()=>{
    // console.log("key");
    updateCounter()
});
updateCounter()

function updateCounter(){
   totalChar.innerText= textAreaElement.value.length;
   remainingChar.innerText=textAreaElement.getAttribute("maxLength")-totalChar.innerText
   
}