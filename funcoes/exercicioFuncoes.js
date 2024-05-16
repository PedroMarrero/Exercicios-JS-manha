//Construir um menu que é possível escolher um exercicio entre os anteriores, 
// para ser executado. Faça com que o menu repita a sua execução, 
// disponibilidade as opções para o usuário, até que seja digitado "sair"

// function saudacao() {

//     let nomePessoa = prompt("Digite seu nome: ")
    
//     let horaAtual = new Date().getHours()
    
//     if (horaAtual > 6 && horaAtual < 13) {
    
//         window.alert("Bom dia " + nomePessoa)
    
//     } else if (horaAtual >= 13 && horaAtual < 18) {
    
//         window.alert("Boa Tarde " + nomePessoa)
    
//     } else {
    
//         window.alert("Boa Noite " + nomePessoa)
//     }

// } 

// let opcao = window.prompt("MENU\nDigite a opção desejada: \n\n1 - Exemplo funções")

// switch (opcao){
//     case "1":

//         saudacao()
        
//     break;

//     default:
//         break;
// }


// function programaNumero() {

// let numero;

// do {
//     numero = parseInt(prompt("Digite um número (digite 0 para sair):"));
// } while (numero !== 0);

// console.log("Você digitou 0. O programa terminou.");
// }

// programaNumero()

// let opcao = window.prompt("MENU\nDigite a opção desejada: \n\n1 - programa")

// switch (opcao){
//     case "1":

//         programaNumero()
        
//     break;

//     default:
//         break;
// }




// function contagemRegressiva(){

//     let numero = parseInt(prompt("Digite um número para a contagem regressiva:"));
    
//     if (!isNaN(numero) && numero >= 0) {
//             console.log("Contagem regressiva de ${numero} até 0:");
        
//             while (numero >= 0) {
//                     console.log(numero);
//                     numero--;
//                 }
//             } else {
//                     console.log("Por favor, digite um número válido maior ou igual a 0.");
//                 }
//                 console.log("Contagem regressiva finalizada");
//             }

// contagemRegressiva()

// let opcao = window.prompt("MENU\n Digite a opção desejada: \n\n1 - Contagem")

// switch (opcao){
//     case "1":

//         contagemRegressiva()
        
//     break;

//     default:
//         break;
// }

