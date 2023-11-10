document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formPay");
    const ticketPrice = document.getElementById("ticketPrice");
    const alertTotalPay = document.getElementById("alertTotalPay");
    const selectElement = document.getElementById("floatingSelectGrid");
    const resetButton = document.getElementById("resetButton");




    let price = 200;
    ticketPrice.innerHTML = `<strong>${price}</strong>`


    /*=============================================
    =                   Form                  =
    =============================================*/
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // const nombre = document.getElementById("nombre").value;
        // const email = document.getElementById("email").value;
        // let cant = (document.querySelector(".form-control"));
        let cant = parseInt(document.getElementById("cantidadTickets").value);

        console.log(cant);

        // Obtén el valor seleccionado del <select>
        var valorSeleccionado = selectElement.value;
        console.log(valorSeleccionado);

        if (cant < 0 || !cant) {
            alertTotalPay.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Valor no valido
                </div>
            `
        } else {
            let totalToPay = calculatePrice(price, cant, valorSeleccionado);
            console.log("Calculo total: " + totalToPay);
            alertTotalPay.innerHTML = `
                <div class="alert alert-info" role="alert">
                    Total a pagar: $ <strong>${totalToPay}</strong>
                </div>
            `
        }
    })

    // Agrega un evento al botón de restablecimiento
    resetButton.addEventListener("click", function () {
        // Restablece el formulario
        alertTotalPay.innerHTML = ''
        form.reset();
    });



    /*=============================================
    =                   Categias                  =
    =============================================*/
    // Seleccion desde cards
    // Selecciona todos los elementos <span> con el atributo "value"
    var elementosSpan = document.querySelectorAll("span[value]");

    // Agrega un evento a cada elemento <span>
    elementosSpan.forEach(function (elemento) {
        elemento.addEventListener("click", function () {
            // Obtiene el valor del atributo "value" del elemento
            var valor = elemento.getAttribute("value");
            selectElement.value = valor;
        });
    });

    // Seleccion desde form-select
    const ESTUDIANTES = "1";
    const TRAINEE = "2";
    const JUNIOR = "3";

    let calculatePrice = (price, cant, valorSeleccionado) => {
        let totalToPay
        let priceXcant = price * cant
        switch (valorSeleccionado) {
            case ESTUDIANTES:
                let _80Off = priceXcant * 0.80;
                totalToPay = priceXcant - _80Off;
                break;
            case TRAINEE:
                let _50Off = priceXcant * 0.50;
                totalToPay = priceXcant - _50Off;
                break;
            case JUNIOR:
                let _15Off = priceXcant * 0.15;
                totalToPay = priceXcant - _15Off;
                break;
            default:
                totalToPay = 0;
                break;
        }
        return totalToPay;
    }


})