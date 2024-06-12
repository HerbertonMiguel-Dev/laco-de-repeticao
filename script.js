function pedir() {
  var valor = prompt("digite um valor de 1 a 4");

  switch (Number(valor)) {
    case 1:
      alert("Você escolhe 1 = suco");
      break;
    case 2:
      alert("Você escolhe 2 = Agua gelada");
      break;
      case 3:
      alert("Você escolhe 3 = Sorvete");
      break;
    case 4:
      alert("Você escolhe 4 = Chamar o garçom");
      break;
      default:
      alert("escolha uma opção entre 1 e 4")
      break;
  }
}
