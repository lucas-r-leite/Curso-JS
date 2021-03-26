//window.alert('Olá')
function load(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var date = new Date()
    var hour = date.getHours()
    var minut = date.getMinutes()
    msg.innerHTML = `Agora são ${hour} horas e ${minut} minutos`
    if(hour>= 0 && hour <=12){
        //Manha
        img.src = '../imagens/sunrise.png'
        document.body.style.background = '#feb361'
    } else if(hour>12 && hour<=18){
        //Tarde
        img.src = '../imagens/afternoon.png'
        document.body.style.background = '#77484f'
    }else{
        //Noite
        img.src = '../imagens/night.png'
        document.body.style.background = '#142b2b'
    }
}
