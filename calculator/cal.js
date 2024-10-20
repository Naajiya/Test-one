display=(val)=>{
    output.value+=val
}

showResult=()=>{
    try{
        output.value=eval(output.value)
    }catch{
        alert('invalid input')
    }
    
}

clearAll=()=>{
    output.value=""
}
    
RemveEnd=()=>{
    output.value=output.value.slice(0,-1)
    
 }