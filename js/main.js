function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));

////////////
function validarIdade(idade){
    var validar;
    if (idade >= 18){
        alert("Acesso liberado!")
    }else{
        alert("Acesso negado!") 
    }
}

var idade = prompt("Qual sua idade");
console.log(validarIdade(idade));


/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getFullYear());
*/


/*var count;
for (count = 0; count <= 5; count++){
    alert(count);
}
*/

/*var count = 0;
while (count < 10){
    console.log(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


/*var frutas = [
            {nome:"maça", cor:"vermelha"},
            {nome:"pera", cor:"verde"},
            {nome:"uva", cor:"roxo"},
            {nome:"laranja", cor:"laranja"},
            {nome:"goiaba", cor:"verde"},
            {nome:"banana", cor:"amarela"}
            ]
console.log(frutas);
alert(frutas[3].cor);
*/


/*
var nome = "Luiz Falavinha";
var idade = 22;
var idade2 = 28;
alert("Meu nome é " + nome + " e tenho " + idade + " anos de idade!");
alert(idade + idade2);
*/