alert("Digite suas Nota");

let nota1= prompt("1° nota ");
let nota2= prompt("2° nota ");
let nota3= prompt("3° nota ");
let nota4= prompt("4° nota ");

let notaf= (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;

if(nota1>10.0 || nota2>10.0 || nota3>10.0 || nota4>10.0)
alert("Digite somente notas entre 0 e 10");
else if(nota1<0.0 || nota2<0.0 || nota3<0.0 || nota4<0.0)
alert("Digite somente notas entre 0 e 10");
else if(notaf<5.0)
alert(`Você ficou com média ${notaf} Resultado: Reprovado`);
else if(notaf>5.0 && notaf<7.0)
alert(`Você ficou com média ${notaf} Resultado: Recuperação`);
else if(notaf>7.0)
alert(`Você ficou com média ${notaf} Resultado: Aprovado`);