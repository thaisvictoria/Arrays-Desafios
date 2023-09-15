let planetas =["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];

const searchPlanet = prompt("Digite um planeta:")
if (planetas.includes(searchPlanet)) {
    alert("O planeta " + searchPlanet + " está na lista de planetas!");
} else {
    alert("Não está na ista de planetas.");
}