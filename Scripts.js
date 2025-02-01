let seleccionadas = [];
let bloqueo = false;

/**
 * Función que voltea una carta en el juego de memoria.
 * @param {HTMLElement} carta - Elemento de la carta seleccionada.
 * @param {number} id - Identificador único de la carta.
 */
function voltearCarta(carta, id) {
    let card = $(carta);

    try {
        // Evita que se pueda seleccionar la misma carta dos veces
        if (bloqueo || card.hasClass("matched") || seleccionadas.some(c => c.id === id)) return;

        let cardFront = card.find(".card-front");
        let cardBack = card.find(".card-back");

        // Muestra la imagen de la carta
        card.addClass("flipped");
        cardFront.removeClass("hidden");
        cardBack.addClass("hidden");

        // Agrega la carta al arreglo de seleccionadas
        seleccionadas.push({ id, element: carta });

        // Si hay dos cartas seleccionadas, se verifica si son iguales
        if (seleccionadas.length === 2) {
            bloqueo = true;

            setTimeout(() => {
                let img1 = $(seleccionadas[0].element).find(".card-front").attr("src");
                let img2 = $(seleccionadas[1].element).find(".card-front").attr("src");

                if (img1 === img2) {

                    $(seleccionadas[0].element).addClass("matched");
                    $(seleccionadas[1].element).addClass("matched");

                    // Si las cartas son iguales, se dejan visibles
                    seleccionadas = [];

                    if ($(".matched").length === $(".card").length) {
                        setTimeout(() => {
                            alert("¡Felicidades! Has encontrado todas las parejas.");
                        }, 500);
                    }
                } else {
                    // Si son diferentes, se voltean de nuevo
                    $(seleccionadas[0].element).removeClass("flipped");
                    $(seleccionadas[0].element).find(".card-front").addClass("hidden");
                    $(seleccionadas[0].element).find(".card-back").removeClass("hidden");

                    $(seleccionadas[1].element).removeClass("flipped");
                    $(seleccionadas[1].element).find(".card-front").addClass("hidden");
                    $(seleccionadas[1].element).find(".card-back").removeClass("hidden");

                    seleccionadas = [];
                }
                bloqueo = false;
            }, 1000);
        }
    }
    catch (error) {
        lblMensajeError.Text = "Error al voltear la carta: " + ex.Message;
        lblMensajeError.Visible = true;
    }
}