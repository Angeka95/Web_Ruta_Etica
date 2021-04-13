  var valores = ['dialogo','equidad','honestidad','pertenencia','respeto','responsabilidad','solidaridad'];
  /* Set the width of the side navigation to 250px */
  function openNav() {

      $('#mySidenav').removeClass('sidenav_cerrado');
      $('#mySidenav').addClass('sidenav_abierto');
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
      $('#mySidenav').removeClass('sidenav_abierto');
      $('#mySidenav').addClass('sidenav_cerrado');
  }

  function abrirSideNav(valor) {
      esconderBotonesComplementarios();
      esconderMapas();
      esconderMapasClick();
      esconderInfoSidenav();

      $('#bck_image').addClass('seleccionado');
      $('.campus_un_image_click_' + valor).addClass('imgSeleccionada');
      $('.campus_un_image_click_' + valor).css({
          "display": "inline"
      });

      $('.punto_' + valor + '_2').show();
      $('.punto_' + valor + '_3').show();
      $('.punto_' + valor + '_4').show();
      $('.punto_' + valor + '_5').show();

      $('.contenido_' + valor).show();
      semanaValor(valor);
      openNav();
  }

  function cambiarcss(valor) {
    $("#cssValor").attr("href", 'css/' + valor + '.css');
  }

  function abrirSidenavComplementario(valor) {
      esconderInfoSidenav();
      $('.contenido_' + valor).show();
      paginador(valor, 'p1');
      openNav();
  }

  function esconderInfoSidenav() {
      valores.forEach( valor => {
        $('.contenido_' + valor).hide();
        $('.contenido_' + valor + '_2').hide();
        $('.contenido_' + valor + '_3').hide();
        $('.contenido_' + valor + '_4').hide();
      });
  }

  function esconderBotonesComplementarios() {
      valores.forEach( valor => {
        $('.punto_' + valor + '_2').hide();
        $('.punto_' + valor + '_3').hide();
        $('.punto_' + valor + '_4').hide();
        $('.punto_' + valor + '_5').hide();
      });
  }

  function esconderMapas() {
      $('.campus_un_image_bck').css({
          "display": "none"
      });

      $('.campus_un_image_hover_dialogo').css({
          "display": "none"
      });

      $('.campus_un_image_hover_equidad').css({
          "display": "none"
      });

      $('.campus_un_image_hover_honestidad').css({
          "display": "none"
      });

      $('.campus_un_image_hover_pertenencia').css({
          "display": "none"
      });

      $('.campus_un_image_hover_respeto').css({
          "display": "none"
      });

      $('.campus_un_image_hover_responsabilidad').css({
          "display": "none"
      });

      $('.campus_un_image_hover_solidaridad').css({
          "display": "none"
      });
  }

  function esconderMapasClick() {
      $('.campus_un_image_bck').css({
          "display": "none"
      });

      $('.campus_un_image_click_dialogo').css({
          "display": "none"
      });
      $('.campus_un_image_click_dialogo').removeClass('imgSeleccionada');

      $('.campus_un_image_click_equidad').css({
          "display": "none"
      });
      $('.campus_un_image_click_equidad').removeClass('imgSeleccionada');

      $('.campus_un_image_click_honestidad').css({
          "display": "none"
      });
      $('.campus_un_image_click_honestidad').removeClass('imgSeleccionada');

      $('.campus_un_image_click_pertenencia').css({
          "display": "none"
      });
      $('.campus_un_image_click_pertenencia').removeClass('imgSeleccionada');

      $('.campus_un_image_click_respeto').css({
          "display": "none"
      });
      $('.campus_un_image_click_respeto').removeClass('imgSeleccionada');

      $('.campus_un_image_click_responsabilidad').css({
          "display": "none"
      });
      $('.campus_un_image_click_responsabilidad').removeClass('imgSeleccionada');

      $('.campus_un_image_click_solidaridad').css({
          "display": "none"
      });
      $('.campus_un_image_click_solidaridad').removeClass('imgSeleccionada');
  }


  function mostrarMapa(valor) {
      $('.punto_' + valor).hover(function() {
          esconderMapas();
          if ($('#bck_image').hasClass('seleccionado')) {
              $('.imgSeleccionada').css({
                  "display": "none"
              });
          }
          $('.campus_un_image_hover_' + valor).css({
              "display": "inline"
          });
      });

      $('.punto_' + valor).mouseleave(function() {
          esconderMapas();

          if (!$('#bck_image').hasClass('seleccionado')) {
              $('.campus_un_image_bck').css({
                  "display": "inline"
              });
          } else {
              $('.imgSeleccionada').css({
                  "display": "inline"
              });
          }
      });
  }

  function semanaValor(valor) {
    valores.forEach( valorfe => {
      $('.semana_' + valorfe).hide();
    });
    $('.semana_' + valor).show();
    cambiarcss(valor);
  }

  function paginador(valor, pagina) {
        $('.' + valor + 'p1').hide();
        $('.' + valor + 'p2').hide();
        $('.' + valor + 'p3').hide();
        $('.' + valor + 'p4').hide();

        $('.dot' + valor + 'p1').removeClass('paginador_activo');
        $('.dot' + valor + 'p2').removeClass('paginador_activo');
        $('.dot' + valor + 'p3').removeClass('paginador_activo');
        $('.dot' + valor + 'p4').removeClass('paginador_activo');

        /*
        $('.' + valor + '_2p1').hide();
        $('.' + valor + '_2p2').hide();
        $('.' + valor + '_2p3').hide();
        $('.dot' + valor + '_2p1').removeClass('paginador_activo');
        $('.dot' + valor + '_2p2').removeClass('paginador_activo');
        $('.dot' + valor + '_2p3').removeClass('paginador_activo');

        $('.' + valor + '_3p1').hide();
        $('.' + valor + '_3p2').hide();
        $('.' + valor + '_3p3').hide();
        $('.dot' + valor + '_3p1').removeClass('paginador_activo');
        $('.dot' + valor + '_3p2').removeClass('paginador_activo');
        $('.dot' + valor + '_3p3').removeClass('paginador_activo');

        $('.' + valor + '_4p1').hide();
        $('.' + valor + '_4p2').hide();
        $('.' + valor + '_4p3').hide();

        $('.dot' + valor + '_4p1').removeClass('paginador_activo');
        $('.dot' + valor + '_4p2').removeClass('paginador_activo');
        $('.dot' + valor + '_4p3').removeClass('paginador_activo');
        */
      $('.dot' + valor + pagina).addClass('paginador_activo');
      $('.' + valor + pagina).show();
  }



  valores.forEach( valor => {
    mostrarMapa(valor);
    console.log(valor);
    $('.dot' + valor + 'p1').addClass('paginador_activo');
    $('.dot' + valor + '_2p1').addClass('paginador_activo');
    $('.dot' + valor + '_3p1').addClass('paginador_activo');
    $('.dot' + valor + '_4p1').addClass('paginador_activo');
  });