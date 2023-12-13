function carregar() {

  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')

  var data =  new Date()
  var hora = data.getHours()
  var min = data.getMinutes()


  msg.innerHTML = `Agora são ${hora}H${min}`
  
   if (hora >= 0 && hora < 12) {
      // Bom Dia!!!  
      img.src = 'images/manha.jpg'
      document.body.style.background = 'rgb(245, 229, 160)'
  } else if(hora >= 12 && hora < 18) {
     // Boa Tarde!!!
     img.src = 'images/tarde.jpg'
     document.body.style.background = 'rgb(250, 129, 49)'
  } else {
     // Boa Noite!!!
     img.src = 'images/noite.jpg'
     document.body.style.background = 'rgb(17, 1, 77)'
  }
}
