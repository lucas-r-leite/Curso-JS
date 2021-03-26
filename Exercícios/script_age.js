function verificar(){
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fyear.value.length == 0 || fyear.value > year){
        window.alert('Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var genero = ''
        //Criando foto dinamicamente
        //var img = document.createElement('img')//Cria uma tag img
        //img.setAttribute('id ','foto')
        if(fsex[0].checked){
            genero = 'Homem'
        } else{
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${age} anos`
        //res.innerHTML = `Idade Calculada: ${age}`
    }
}