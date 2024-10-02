let selectedPlanet = '';
let selectedFlora = '';
let selectedFauna = '';

function selectPlanet(planetType) {
    selectedPlanet = planetType;
    document.getElementById('planet-selection').style.display = 'none';
    document.getElementById('ecosystem-setup').style.display = 'block';
    document.getElementById('flora-selection').innerHTML = `
        <h3>Select Flora</h3>
        <button onclick="addFlora('Alien Plant')">Alien Plant</button>
        <button onclick="addFlora('Crystal Flora')">Crystal Flora</button>
    `;
    document.getElementById('fauna-selection').innerHTML = `
        <h3>Select Fauna</h3>
        <button onclick="addFauna('Space Dolphin')">Space Dolphin</button>
        <button onclick="addFauna('Galactic Bird')">Galactic Bird</button>
    `;
}

function addFlora(flora) {
    selectedFlora = flora;
    showAlert(`You selected: ${flora}`);
}

function addFauna(fauna) {
    selectedFauna = fauna;
    showAlert(`You selected: ${fauna}`);
}

function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'custom-alert';
    alertBox.innerHTML = message + `<button onclick="closeAlert()">Close</button>`;
    document.body.appendChild(alertBox);
}

function closeAlert() {
    const alertBox = document.querySelector('.custom-alert');
    if (alertBox) {
        document.body.removeChild(alertBox);
    }
}

document.getElementById('simulateBtn').onclick = function() {
    const description = getPlanetDescription(selectedPlanet);
    const imageUrl = getPlanetImage(selectedPlanet);
    document.getElementById('ecosystem-status').style.display = 'block';
    document.getElementById('status').innerHTML = `You have created an ecosystem on a ${selectedPlanet}!<br>${description}`;
    const planetImage = document.getElementById('planet-image');
    planetImage.src = imageUrl;
    planetImage.style.display = 'block';
};

function getPlanetDescription(planet) {
    switch (planet) {
        case 'Rocky':
            return "A rugged terrain with stunning mountains and deep canyons.";
        case 'Water World':
            return "An oceanic paradise filled with diverse marine life.";
        case 'Gas Giant':
            return "A swirling atmosphere with vibrant storms and thick clouds.";
        default:
            return "";
    }
}

function getPlanetImage(planet) {
    switch (planet) {
        case 'Rocky':
            return 'https://i.pinimg.com/474x/08/92/fb/0892fbb4388ed58e911b3eb58825b063.jpg'; // Rocky Planet Image
        case 'Water World':
            return 'https://scitechdaily.com/images/Water-Planet.jpg'; // Water World Image
        case 'Gas Giant':
            return 'https://preview.redd.it/a-reminder-to-fss-all-the-gas-giants-you-see-a-green-gas-v0-i6nzoxpgvkx91.png?width=640&crop=smart&auto=webp&s=983bd28902831469fc0544eb69c6a78e22295a8b'; // Gas Giant Image
        default:
            return '';
    }
}

function tryAgain() {
    selectedPlanet = '';
    selectedFlora = '';
    selectedFauna = '';
    document.getElementById('planet-selection').style.display = 'block';
    document.getElementById('ecosystem-setup').style.display = 'none';
    document.getElementById('ecosystem-status').style.display = 'none';
    document.getElementById('planet-image').style.display = 'none';
}
