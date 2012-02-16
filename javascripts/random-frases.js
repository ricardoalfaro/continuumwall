(function ($) {

var last_phrase = -1;

function showFrases(id, animate) {
  var frase = cl.continuum.wall.frasesWall[id];
  // fadeIn, fadeOut de la frase
  var p_frase = $('h1#frase_completa')
  var p_autor = $('h2#frase_autor')
		if (animate) {
            p_frase.fadeOut(2000, function () {
                $(this).empty().append(frase.texto).fadeIn(2000);
            })
            p_autor.fadeOut(2000, function () {
                $(this).empty().append(frase.autor).fadeIn(2000);
            })
        } else {
            p_frase.empty().append(frase.texto);
            p_autor.empty().append(frase.autor)
        }
    }



function _random(tope, last_one) {
  var rand = (Math.floor(Math.random()*tope));
  return (rand != last_one ? rand : _random(tope, last_one));
 }

 var intervalID = 0;

 function randomFrases() {
  intervalID = setInterval(function () {
  var rd = _random(cl.continuum.wall.frasesWall.length, last_phrase);
     showFrases(rd, true)
     last_phrase = rd;
    }, cl.continuum.wall.RANDOM_FRASES);
  }

  $(document).ready(function () {
        // cargar una frase aleatoria
        showFrases(_random(cl.continuum.wall.frasesWall.length))

        // mostrar mas frases
        $('.otrafrase').click(function (e) {
          var rd = _random(cl.continuum.wall.frasesWall.length, last_phrase);
          showFrases(rd);
          last_phrase = rd;
          e.preventDefault();
        });

        /*$('.otrafrase').click(function() {
          showFrases(_random(cl.continuum.wall.frasesWall.length))
        });*/

    });

})(jQuery)