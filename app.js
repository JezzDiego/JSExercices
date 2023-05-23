const MAIOR_MENOR = () => {
  let values = [];
  for (let index = 0; index < 5; index++) {
    values.push(parseInt(prompt(`Digite o ${index + 1}º valor: `)));
  }

  values.includes(NaN)
    ? alert("Digite apenas números!")
    : alert(
        `O maior valor é ${Math.max(...values)} e o menor é ${Math.min(
          ...values
        )}`
      );
};

const VOGAL = () => {
  const vogais = ["a", "e", "i", "o", "u"];
  c = prompt("Digite um caractere: ");
  alert(vogais.includes(c.toLowerCase()) ? 1 : 0);
};

const LIMITES = () => {
  const li = parseInt(prompt("Digite o limite inferior: "));
  const ls = parseInt(prompt("Digite o limite superior: "));

  if (isNaN(li) || isNaN(ls)) {
    alert("Digite apenas números!");
    return;
  }

  let pares = [];

  for (let index = li; index < ls; index++) {
    if (index % 2 === 0) {
      pares.push(index);
    }
  }

  alert(`Os números pares entre ${li} e ${ls} são: ${pares.join(", ")}`);
};

const ORDEM = () => {
  let values = [];
  for (let index = 0; index < 3; index++) {
    values.push(parseInt(prompt(`Digite o ${index + 1}º valor: `)));
  }

  values.includes(NaN)
    ? alert("Digite apenas números!")
    : alert(values.sort((a, b) => a - b));
};

const POSITIVO_NEGATIVO = () => {
  const x = parseInt(prompt("Digite um número: "));
  !isNaN(x) && alert(x > 0 ? true : false);
};

const PAR_IMPAR = () => {
  const x = parseInt(prompt("Digite um número: "));
  !isNaN(x) && alert(x % 2 === 0 ? true : false);
};
