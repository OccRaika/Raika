window.addEventListener("load", ()=>{

    /* controla los tiempos de los letreritos de ponga horizontal el dispositivo, oprima el cuadrito y objetivo raika...hechos con jQuery */
			$(document).ready(function() {
                setTimeout(function() {
                    $(".content").fadeOut(4500); /* entra el 1º letrero "pon horizontal"*/
                },4000);
            
                setTimeout(function() { /* entra el 2º letrero "toca el cuadrito"*/
                    $(".content2").fadeIn(4500);
                },4000);
            
                 setTimeout(function() { /* sale  el 2º letrero "toca el cuadrito"*/
                    $(".content2").fadeOut(6500);
                },7000);
            
                setTimeout(function() {  /* entra el 3º letrero "toca raika"*/
                    $(".content3").fadeIn(12500);
                },4000);
            
                 setTimeout(function() { /* sale  el 3º letrero "toca raika" */ 
                    $(".content3").fadeOut(4500);
                },4000);
            
                        }); /* termina jQuery */
});