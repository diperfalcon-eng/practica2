let tablero = [1,2,3,4,5,6,7,8,""];

function render() {
    let celdas = document.getElementsByClassName("cell");

    for (let i = 0; i < tablero.length; i++) {
        celdas[i].textContent = tablero[i] === "" ? "" : tablero[i];
        celdas[i].classList.toggle("empty", tablero[i] === "");
    }
}

function mover(i) {
    let vacio = tablero.indexOf("");

    // calcular fila y columna
    let fila = Math.floor(i / 3);
    let col = i % 3;
    let filaV = Math.floor(vacio / 3);
    let colV = vacio % 3;

    // verificar si es adyacente (arriba, abajo, izquierda, derecha)
    let esAdyacente =
        (fila === filaV && Math.abs(col - colV) === 1) ||
        (col === colV && Math.abs(fila - filaV) === 1);

    if (esAdyacente) {
        [tablero[i], tablero[vacio]] = [tablero[vacio], tablero[i]];
        render();
        verificarVictoria();
    }
}

function verificarVictoria() {
    let solucion = [1,2,3,4,5,6,7,8,""];

    if (JSON.stringify(tablero) === JSON.stringify(solucion)) {
        document.getElementById("mensaje").textContent = "🎉 ¡Ganaste!";
    }
}

function mezclarSeguro() {
    // mezcla simple (puedes mejorarla después si quieres garantizar solución)
    for (let i = tablero.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [tablero[i], tablero[j]] = [tablero[j], tablero[i]];
    }
}

function reiniciar() {
    mezclarSeguro();
    render();
    document.getElementById("mensaje").textContent = "";
}

// inicializar al cargar
render();