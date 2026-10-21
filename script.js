/**
 * Realiza una operación matemática básica (suma o resta)
 * @param {string} tipo - Tipo de operación ('sumar' o 'restar')
 */
function realizarOperacion(tipo) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultadoSpan = document.getElementById('resultado');

    // Validación de entradas vacías o no numéricas
    if (isNaN(num1) || isNaN(num2)) {
        resultadoSpan.textContent = "Ingresa ambos números.";
        return;
    }

    let resultado = 0;

    if (tipo === 'sumar') {
        resultado = num1 + num2;
    } else if (tipo === 'restar') {
        resultado = num1 - num2;
    }

    resultadoSpan.textContent = resultado;
}