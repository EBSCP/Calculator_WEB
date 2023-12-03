let result = document.getElementById("ortalama");


let calculate=(number) => {
    result.value+=number;
}

let Result = () =>{
    try {
         result.value=eval(result.value);
    }catch(err) {
        alert(err.message);
    }
   
}
 function del(){
    result.value =" ";
}
function clr() {
    result.value =result.value.slice(0,-1);
}