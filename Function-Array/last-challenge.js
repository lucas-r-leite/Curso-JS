let numtxt = document.getElementById('numero')
let list = document.getElementById('list')
let res = document.getElementById('res')
let valores = []


function isNumero(n){ //Checando as condições impostas
    if(Number(n) >=1 && Number(n)<=100){
        return true
    }else{ 
        return false
    }

}

function inLista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
     if(isNumero(numtxt.value) && !inLista(numtxt.value, valores)){
         valores.push(Number(numtxt.value))
         let item = document.createElement('option') //Cria o option de forma dinamica
         item.text = `Valor ${numtxt.value} adicionado`//Escreve o valor em select
         list.appendChild(item)//Faz com que o valor apareça na tela
         res.innerHTML = ``
     }else{
        window.alert('Valor inválido ou já encontrado na Lista.')
     }
      numtxt.value = '' //Esvaziar a caixa de forma automatica
      numtxt.focus() //Matém o foco dentro da caixa

}

function finalizar(){
    if(valores.length == 0 ){
        window.alert('Adicione itens à lista')
    } else{
        let bigger = valores[0]
        let smaller = valores[0]
        let soma = 0
        for(let pos in valores){ //Pegando o maior valor
            soma += valores[pos]
            if(valores[pos] < bigger){
                bigger = valores[pos]
            }
            if(valores[pos] < smaller){
                smaller = valores[pos]
            }
        }
        media = soma/(valores.length)
        res.innerHTML = `` //Zerando o valor de res
        res.innerHTML += `<p>Temos ${valores.length} elementos</p>`
        res.innerHTML += `<p>O maior valor informado foi ${bigger}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${smaller}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é de  ${media}</p>`
    }
}