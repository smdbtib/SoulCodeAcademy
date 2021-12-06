//SWITCH-CASE

// var tipoUsuario = ["aluno", "professor","admin"];

// switch  (tipoUsuario){
//     case "aluno":
//         console.log("Acesso negado aos Dashboards!");
//         break;
//     case "professor":
//         console.log("Acesso ao Dashboards Liberado!");
//         break;
//     case "admin":
//         console.log("Acesso liberdo para alterar os Dashboards!");
//         break;
//     default:
//         console.log("Acesso negado - Usuário visitante!");
// }


// for (i=0; i < tipoUsuario.length ; i++){
//     switch  (tipoUsuario[i]){
//         case tipoUsuario[i]:
//         console.log("Acesso negado aos Dashboards!");
//     case tipoUsuario[i]:
//         console.log("Acesso ao Dashboards Liberado!");
//     case tipoUsuario[i]:
//         console.log("Acesso liberdo para alterar os Dashboards!");
//     default:
//         console.log("Acesso negado - Usuário visitante!");
//     }
// }

// ATIVIDADE 02

// var diaSemana = parseInt(prompt("Informe o dia da semana de 1 a 7:"))

// switch (diaSemana){
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Semana de trabalho");
//         break;
//     case 3:
//         console.log("Semana de trabalho");
//         break;
//     case 4:
//         console.log("Semana de trabalho");
//         break;
//     case 5:
//         console.log("Semana de trabalho");
//         break;
//     case 6:
//         console.log("Semana de trabalho");
//         break;
//     case 7:
//         console.log("Sábado");
//         break;
//     default:
//         console.log("Dado informado inválido!");
// }

var diaSemana2 = (prompt("Informe o dia da semana: "));
var diaSemanaUpper = diaSemana2.toUpperCase();

switch (diaSemanaUpper){
    case '1':
    case 'DOMINGO':
        console.log("Domingo");
        break;
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case 'SEGUNDA':
    case 'TERÇA':
    case 'QUARTA':
    case 'QUINTA':
    case 'SEXTA':
        console.log("Semana de trabalho");
        break;
    case '7':
    case 'SABADO':
        console.log("Sábado");
        break;
    default:
        console.log("Dado informado inválido!");
}