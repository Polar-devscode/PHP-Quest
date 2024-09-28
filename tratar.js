// export default function capturarTexto(event) {
const numeroTeste = {
    number: 100
}
function capturarTexto(event) {
    const texto = event.target.value; // Pega o valor do textarea
    console.log(texto); // Exibe o valor no console em tempo real
    const regex = /'([^']*)'/; // Expressão regular para pegar texto entre aspas simples
    const resultado = texto.match(regex);
    console.log(resultado[1]);
    // return resultado[1];
}