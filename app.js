var a = document.getElementById("value")

function cal(num){
    a.value += num  
}

function result(){
    a.value = eval(a.value)
}

function reset(){
    a.value = ""
}

function ce(){
    a.value = ""
}






