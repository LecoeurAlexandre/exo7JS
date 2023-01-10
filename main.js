let email = "contact@teamjs.fr";
let mdp = "leLundiAuSoleil";

let mail = prompt("Veuillez saisir votre email :");
let password = prompt("Veuillez saisir votre mot de passe : ");

if (mail===email && mdp===password) {
    console.log("Bienvenue sur le site")
} else {
    console.log("L'adresse mail et/ou le mot de passe est/sont incorrect(s).")
}