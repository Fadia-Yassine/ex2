//exo1
function reverseNumber(number) {
    var digit, result = 0

    while (number) {
        digit = number % 10;
        result = (result * 10) + digit;
        number = number / 10 | 0;
    }
    return result
}
//exo2
function divPar2(number) {
    let num = alert(prompt("nombre"));
    switch (true) {
        case num % 2 == 0:
            let resultat = num / 2;
            console.log("Le num " + num + " est divisible par 2 " + num + " :2 = " + resultat)
            break;
        case num % 2 == 1:
            console.log("Ce nombre n'est pas divisible par 2");
            break;
        default:
            break;
    }
}
//exo3
function logIn (mdp) {
    mdp = prompt("mdp ?");
    while(mdp!="mdp"){
        prompt("essayez à nouveau");
    }
        alert('Vous êtes connecté');
}
