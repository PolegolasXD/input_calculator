function resultado() {
    var media
    
    var nota1 = Number(document.getElementById('nota1').value)
    var nota2 = Number(document.getElementById('nota2').value)
    var nota3 = Number(document.getElementById('nota3').value)
    var nota4 = Number(document.getElementById('nota4').value)
    
    media = ((nota1 + nota2 + nota3 + nota4)/4).toFixed(1)
    
    if (media > 6) {
         var x = document.getElementsByClassName("resposta");
      x [0].innerHTML = media = `Parabéns, você foi aprovado. Sua media foi ${media}!`;
      }
          else {
      var y = document.getElementsByClassName("resposta");
      y [0].innerHTML = media =`Infelizmente voce foi reprovado, Sua media foi ${media}!`;
          }
    }
   