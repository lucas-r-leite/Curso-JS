function tabuada(){
    var numerotxt = document.getElementById("numero")
    var tab = document.getElementById('tab')
    
    var numero = Number(numerotxt.value)
    if(numerotxt.value.length == 0){
        window.alert("Digite um número para começarmos")
    }else{
        tab.innerHTML = '' //Limpando a section
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option') //Cria as options de forma dinâmica dentro de select
            item.text = `${numero} x ${c} = ${numero * c}` 
            item.value = `tab${c}` //Mostra o item selecionado em algumas linguagens
            tab.appendChild(item) //Adiciona o elemento filho. É necessário para mostrar os elementos na tela
        }
    }
}