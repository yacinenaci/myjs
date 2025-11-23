function test() {
    return("This is test ");
   
}

function add() {
    let a = 10
    let b = 20
    return a + b;
}
function double(num){   

 
     return num * 2 ;
}

// function count(arr,call){
//     let c = [];
//     for(let i=0;i<arr.length;i++){
      
//         c.push(call(arr[i],i));
//     }
//     console.log(c);
   
// }

let i1=document.getElementById("i1");
let i2=document.getElementById("i2");
let i3=document.getElementById("i3");
let b1=document.getElementById("b1");
let h1=document.getElementById("h1");
let ul1=document.getElementById("ul1");
let b2=document.getElementById("b2");
b1.addEventListener("click",function(){
   i3.value=Number(i1.value)+Number(i2.value);
   h1.style.color="red";
   alert("The sum is :"+i3.value);
   localStorage.setItem("name",i3.value);  
});
h1.addEventListener("mouseover",function(){
    h1.style.color="blue";
});
b2.addEventListener("click",function(){
    let storedName=localStorage.getItem("name");
    alert("The stored sum is :"+storedName);
});

ul1.innerHTML+="<li>amine</li>";







