const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
dataSymbols = "$^*ù!:;,&é\"'(-è_ç)";
const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');

function generatePassword() {
    let data = [];
    let password = "";

    // On stocke les valeurs des inputs cochés dans le tableau data, en déstructurant pour que l'on se retrouve avec un seul et unique tableau contenant TOUTES les valeurs, et non pas un tableau différent pour chaque type de données
    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    // On se crée une petite sécurité si aucun input n'est coché
    if (data.length == 0) {
        alert('Veuillez sélectionner des critères !');
        return;
    }

    // On crée une boucle for pour générer une lettre aléatoire autant de fois que la valeur du range
    for (let i =0; i < rangeValue.value; i++) {
        // On n'oublie pas le += pour avoir tous les caractères à la suite
        password += data[Math.floor(Math.random() * data.length)];
    }

    // On remplace le contenu de l'input par le mot de passe généré
    passwordOutput.value = password;

    // On sélectionne le mot de passe généré
    passwordOutput.select();

    // On copie le mdp sélectionné
    navigator.clipboard.writeText(passwordOutput.value);

    // On indique à l'utiliseur que son mdp est copié
    generateButton.textContent = "Copié !";

    // Et au bout de 3sec on lui indique qu'il peut de nouveau générer un mdp
    setTimeout(() => {
        generateButton.textContent = "Générer mot de passe";
    }, 3000);
}

generateButton.addEventListener('click', generatePassword);