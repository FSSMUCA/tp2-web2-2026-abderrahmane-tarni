let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let element = valeurs[i];
    let label;

    if (element){
        label = String(element)
        console.log(label + "-> truthy")
    } else {
        label = String(element)
        console.log(label + "-> falsy")
    }

}
