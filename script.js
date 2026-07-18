$(document).ready(function () {

    // Oculta el libro al comenzar
    $("#book").hide();

    // =========================
    // ABRIR EL SOBRE
    // =========================

    $(".valentines-day").click(function () {

        $(".valentines-day").fadeOut(800, function () {

            $("#book").fadeIn(700);

        });

    });

    // =========================
    // CAMBIAR DE PÁGINA
    // =========================

    let pagina = 0;

    const paginas = $(".page");

    paginas.eq(0).addClass("active");

    $(".next").click(function () {

        paginas.eq(pagina).removeClass("active");

        pagina++;

        if (pagina >= paginas.length) {
            pagina = paginas.length - 1;
        }

        paginas.eq(pagina).addClass("active");

        $(".book").scrollTop(0);

    });

    // =========================
    // BOTÓN NO
    // =========================

    $("#no").mouseenter(function () {

        const ancho = $(".book").width() - 180;
        const alto = $(".book").height() - 100;

        const x = Math.random() * ancho;
        const y = Math.random() * alto;

        $(this).css({
            position: "absolute",
            left: x + "px",
            top: y + "px"
        });

    });

    // =========================
    // BOTÓN SÍ
    // =========================

    $("#yes").click(function () {

        $(".buttons").fadeOut(400);

        $("#success").fadeIn(600);

        crearCorazones();

    });

});


// ======================================
// CORAZONES
// ======================================

function crearCorazones() {

    for (let i = 0; i < 180; i++) {

        setTimeout(function () {

            let corazon = $("<div class='floating-heart'>❤️</div>");

            corazon.css({

                left: Math.random() * window.innerWidth + "px",

                top: window.innerHeight + "px",

                fontSize: (20 + Math.random() * 40) + "px"

            });

            $("#hearts").append(corazon);

            setTimeout(function () {

                corazon.remove();

            }, 4000);

        }, i * 40);

    }

}
