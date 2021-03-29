function verify(){
    var begintxt = document.getElementById("begin")
    var endtxt = document.getElementById("end")
    var steptxt = document.getElementById("step")
    var res = document.getElementById("res")

    var begin = Number(begintxt.value)
    var end = Number(endtxt.value)
    var step = Number(steptxt.value)
    
    //Checando se os campos foram preenchidos 
    if(begintxt.value.length == 0|| endtxt.value.length == 0 || steptxt.value.length == 0 ){
          window.alert('Preencha TODOS os Campos!')
    }else{ //Repetição
            if(step<=0){
                window.alert('Passo inválido. Passo considerado será 1')
                step = 1
            }
            if(begin < end){//Contagem ascendente
                for(var sum = begin; sum <= end; sum += step){  
                    res.innerHTML += `${sum} \u{1F449}`
                }
            
            } else{//Contagem descendente
                for(var sum = begin; sum >= end; sum -= step){  
                    res.innerHTML += `${sum} \u{1F449}`
                }
            
            }
        res.innerHTML += `\u{1F3C1}`
    }


}