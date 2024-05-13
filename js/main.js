

function reverseStringa(stringa) {
    let newStringa = ""

    for (let i = stringa.length - 1; i >= 0; i--) {
        const element = stringa[i];
        newStringa += element   
    }
    console.log(newStringa)
}

reverseStringa("parola")