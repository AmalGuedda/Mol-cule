let answer = "";
answer = prompt(" wesh la zoneu ya quoi ?");
if (answer.indexOf('?') > -1) {
    console.log("Ouais Ouais...");
} else if (answer == answer.toUpperCase() && answer !== "") {
    console.log("Pwa, calme-toi...");
} else if (answer.indexOf('fortnite') > -1) {
    console.log("on s' fait une partie soum-soum ?");
}else if (answer == "" ) {
    console.log("t'es en PLS ?")
}    else {
    console.log("balek.")
} 