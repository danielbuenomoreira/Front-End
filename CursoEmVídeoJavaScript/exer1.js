// Variáveis
let valor_compra;
let opcao_pgto;

console.log("Digite o valor da compra: ");
// Lê o valor da compra como uma string e converte para número
valor_compra = parseFloat(prompt());

console.log("Menu de opções:");
console.log("1 - À vista: com desconto de 10% sobre o valor total da compra");
console.log("2 - 30 dias: com desconto de 5% sobre o valor total da compra");
console.log("3 - 60 dias: valor da compra sem desconto");
console.log("Escolha uma opção: ");
// Lê a opção de pagamento como uma string e converte para número inteiro
opcao_pgto = parseInt(prompt());

switch (opcao_pgto) {
    case 1:
        console.log("O valor da compra à vista ficou em: " + (valor_compra * 0.9));
        break;
    case 2:
        console.log("O valor da compra para 30 dias ficou em: " + (valor_compra * 0.95));
        break;
    case 3:
        console.log("O valor da compra para 60 dias ficou em: " + valor_compra);
        break;
    default:
        console.log("Opção inválida.");
}