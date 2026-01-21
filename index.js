function saldo(vitorias, derrotas) {
  let saldoVitoriasFinal = vitorias - derrotas;

  if (saldoVitoriasFinal < 10) {
    return "Ferro";
  } else if (saldoVitoriasFinal >= 11 && saldoVitoriasFinal <= 20) {
    return "Bronze";
  } else if (saldoVitoriasFinal >= 21 && saldoVitoriasFinal <= 50) {
    return "Prata";
  } else if (saldoVitoriasFinal >= 51 && saldoVitoriasFinal <= 80) {
    return "Ouro";
  } else if (saldoVitoriasFinal >= 81 && saldoVitoriasFinal <= 90) {
    return "Diamante";
  } else if (saldoVitoriasFinal >= 91 && saldoVitoriasFinal <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

let vitorias = 25
let derrotas = 19
let nivel = saldo(vitorias,derrotas)
console.log(
  "O Herói tem saldo de " + (vitorias - derrotas) + " e está no nível " + nivel
);