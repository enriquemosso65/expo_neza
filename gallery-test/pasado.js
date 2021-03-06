  /* SCRIPT - pasado.html*/ 
 /* CARGA DE PAGINA */
window.onload = function(){
    $('#onload').fadeOut();
    $('body').addClass('hidden');
}  
  /* NAVBAR - ANIMACION */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');
//display 
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);
/* CARGA DEL CONTENIDO - DESPLAZAMINETO HORIZONTAL CON LOCOMOTIVESCROLL Y GSAP */
  window.addEventListener("load", function () {
    gsap.registerPlugin(ScrollTrigger);
    const pageContainer = document.querySelector(".container");
    pageContainer.setAttribute("data-scroll-container", "");
    const scroller = new LocomotiveScroll({
      el: pageContainer,
      smooth: true,
      getDirection: true });
    scroller.on("scroll", function (t) {
      document.documentElement.setAttribute("data-direction", t.direction);
    });
    scroller.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(pageContainer, {
      scrollTop(value) {
        return arguments.length ?
        scroller.scrollTo(value, 0, 0) :
        scroller.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight };
      },
      pinType: pageContainer.style.transform ? "transform" : "fixed" });
/* DIV HORIZONTALES - CAMBIOS DE COLOR */
// DIV DE REFERENCIA (WRAP)
    let horizontalSections = document.querySelectorAll(".horizontal-scroll");
    horizontalSections.forEach(horizontalSection => {
      let pinWrap = horizontalSection.querySelector(".pin-wrap");
      let pinWrapWidth = pinWrap.offsetWidth;
      let horizontalScrollLength = pinWrapWidth - window.innerWidth;
      gsap.to(pinWrap, {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          scrub: true,
          trigger: horizontalSection,
          pin: true,
          start: "top top",
          end: () => `+=${pinWrapWidth}`,
          invalidateOnRefresh: true },
        x: -horizontalScrollLength,
        ease: "none" });
    });
    const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
    scrollColorElems.forEach((colorSection, i) => {
      const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
      const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
      ScrollTrigger.create({
        trigger: colorSection,
        scroller: "[data-scroll-container]",
        start: "top 50%",
        onEnter: () =>
        gsap.to("body", {
          backgroundColor: colorSection.dataset.bgcolor,
          color: colorSection.dataset.textcolor,
          overwrite: "auto" }),
        onLeaveBack: () =>
        gsap.to("body", {
          backgroundColor: prevBg,
          color: prevText,
          overwrite: "auto" }) });
    });
    ScrollTrigger.addEventListener("refresh", () => scroller.update());
    ScrollTrigger.refresh();
  });
/*EVITAR CLIC DERECHO*/
document.oncontextmenu = function(){return false}
//______MODALES CAROUSEL PASADO-ORIGEN_____________
  const pintura1 = document.querySelector('.pintura1');
  pintura1.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/13-alfredo-arcos/Pintura1-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>El inicio.<br>La pobreza de los primeros habitantes de los a??os sesenta, se muestra a un ni??o montado en los hombros de su padre.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alfredo Arcos</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  65x100cm</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  const pintura2 = document.querySelector('.pintura2');
  pintura2.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/2-LazaroGalicia/Pintura 2-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <a class="textoMH">'+
      '     <TABLE class="DES">'+
      '       <TR>'+
      '         <TH>Descripci??n:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Proyecto de mural en Ciudad Neza</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '     <TABLE class="FT">'+
      '       <TR>'+
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  L??zaro Galicia</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  3</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Medidas:  90x120cm</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      ' </a>',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  const pintura2F1 = document.querySelector('.pintura2F1');
  pintura2F1.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/2-LazaroGalicia/1 fragmentacion de pintura2-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <a class="fragmentoH">'+
      '   <div class="textoMH">'+
      '     <TABLE class="DES">'+
      '       <TR>'+
      '         <TH>Descripci??n:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Los primeros habitantes que llegaron a Ciudad Nezahualc??yotl, provenientes de diferentes estados de la Rep??blica Mexicana.</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '     <TABLE class="FT">'+
      '       <TR>'+
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  L??zaro Galicia</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  1/3</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '   </div>'+
      '   <div class="fragPintura">'+
      '     <img src="../images/fragmentos/Pintura2-1.jpg" alt=""></img>'+  
      '   </div>'+
      ' </a>',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  const pintura2F2 = document.querySelector('.pintura2F2');
  pintura2F2.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/2-LazaroGalicia/2 fragmentaci??n de pintura2-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer: ' <div class="fragmentoH">'+
      '   <div class="textoMH">'+
      '     <TABLE class="DES">'+
      '       <TR>'+
      '         <TH>Descripci??n:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Las primeras avenidas: Texcoco, Pantitl??n, Chimalhuac??n, Cuarta Avenida, y Bordo de Xochiaca que cruzan con la Av. L??pez Mateos, Nezahualc??yotl, Riva palacio, Cuauht??moc, y la Avenida 7.</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '     <TABLE class="FT">'+
      '       <TR>'+
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  L??zaro Galicia</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  2/3</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '   </div>'+
      '   <div class="fragPintura">'+
      '     <img src="../images/fragmentos/Pintura2-2.jpg" alt=""></img>'+  
      '   </div>'+
      ' </div>',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  const pintura2F3 = document.querySelector('.pintura2F3');
  pintura2F3.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/2-LazaroGalicia/3 fragmentaci??n de pintura3-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="fragmentoH">'+
      '   <div class="textoMH">'+
      '     <TABLE class="DES">'+
      '       <TR>'+
      '         <TH>Descripci??n:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>La creaci??n de la identidad en los primeros habitantes de la Ciudad ya consolidada.</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '     <TABLE class="FT">'+
      '       <TR>'+
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  L??zaro Galicia</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  3/3</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '   </div>'+
      '   <div class="fragPintura">'+
      '     <img src="../images/fragmentos//Pintura2-3.jpg" alt=""></img>'+  
      '   </div>'+
      ' </div>',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  const pintura3 = document.querySelector('.pintura3');
  pintura3.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/2-LazaroGalicia/Pintura 3-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>El triunfo de las personas donde no hab??a nada, que es acompa??ada por los insectos representativos de esa ciudad naciente, los ???caballitos del diablo???.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  L??zaro Galicia</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  120x120cm</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            ' </div>',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  const pintura4 = document.querySelector('.pintura4');
  pintura4.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/2-LazaroGalicia/Pintura 4-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>???La ventana del querer aprender todo???<br>Se muestra la primera exposici??n de pintura que se hizo en Ciudad Neza en los escalones del Palacio Municipal.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  L??zaro Galicia</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  120x120cm</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            ' </div>',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  const pintura5 = document.querySelector('.pintura5');
  pintura5.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/2-LazaroGalicia/Pintura 5-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
      '     <TABLE class="DES">'+
      '       <TR>'+
      '         <TH>Descripci??n:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>La mujer dando un nuevo aliento a la ciudad frente al coyote de Sebasti??n. Un nuevo milenio que contrasta con los problemas sociales.</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '     <TABLE class="FT">'+
      '       <TR>'+
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  L??zaro Galicia</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  Ninguna</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Medidas:  120x120cm</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      ' </div>',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  const pintura6 = document.querySelector('.pintura6');
  pintura6.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/2-LazaroGalicia/Pintura 6-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Es el presente enmarcado por L??zaro Galicia a finales de la d??cada pasada y a inicios de esta d??cada. Expresa que los j??venes tienen una venda en los ojos que no les permite ver a las personas que interact??an con ellos.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  L??zaro Galicia</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  120x120cm</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            ' </div>',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  const pintura7 = document.querySelector('.pintura7');
  pintura7.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/3-mauricio-vega/Pintura 7-min.JPG" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>La creaci??n del fuego</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Mauricio Vega</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre tela</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  100x160cm</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            ' </div>',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  const pintura8 = document.querySelector('.pintura8');
  pintura8.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/3-mauricio-vega/Pintura 8-min.JPG" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Arcano</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Mauricio Vega</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre tela</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  100x160cm</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            ' </div>',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  const pintura9 = document.querySelector('.pintura9');
  pintura9.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/3-mauricio-vega/Tr??ptico completo-min.png" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
      '     <TABLE class="DES">'+
      '       <TR>'+
      '         <TH>Descripci??n:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Es una referencia a Ciudad Nezahualc??yotl, agua arriba y agua abajo, el cuerpo en movimiento y de d??nde venimos.</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '     <TABLE class="FT">'+
      '       <TR>'+
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Tr??ptico</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Mauricio Vega</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  Ninguna</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  Acr??lico sobre tela</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Medidas:  180x360cm</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      ' </div>',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  const pintura10 = document.querySelector('.pintura10');
  pintura10.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/4-ismael-ponce/Pintura 10-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Ismael Ponce plasma en una serie de 3 cuadros, im??genes del fot??grafo H??ctor Garc??a.<br>Las im??genes se colocaron sobre una madera con lienzos quemados, con el fin de representar que para hacer algo nuevo, otra cosa tiene que ser destruida.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie de 3</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Ismael Ponce</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela y madera</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  60x90cm</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            ' </div>',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  const pintura11 = document.querySelector('.pintura11');
  pintura11.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/4-ismael-ponce/Pintura 11-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
      '     <TABLE class="DES">'+
      '       <TR>'+
      '         <TH>Descripci??n:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Serie 2.<br>3 mujeres lavando ropa en la parte central, en complemento con su extremo izquierdo por postes de luz, y el derecho con torres de alta tensi??n, lo que significa un progreso.</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '     <TABLE class="FT">'+
      '       <TR>'+
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Serie de 3</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Ismael Ponce</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  Ninguna</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela y madera</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Medidas:  60x90cm</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      ' </div>',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  const pintura12 = document.querySelector('.pintura12');
  pintura12.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/4-ismael-ponce/Pintura 12-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie 3.<br>*La ciudad se qued?? sumida en el miedo debido al llamado ???ah?? vienen???ah?? vienen???.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie de 3</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Ismael Ponce</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela y madera</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  60x90cm</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            ' </div>',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  const pintura13 = document.querySelector('.pintura13');
  pintura13.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/5-juan-orozco-palmerin/Pintura 13-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
      '     <TABLE class="FT">'+
      '       <TR>'+
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  Ninguna</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Medidas:  60x90cm</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      ' </div>',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    };
    Swal.fire(options);
  });
  