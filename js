document.addEventListener('DOMContentLoaded', function () {
    const stSlider = document.getElementById('stunden-slider'),
          stWert = document.getElementById('stunden-wert'),
          stPreis = document.getElementById('stunden-preis'),
          akLektionen = document.getElementById('aktion-lektionen'),
          akPreis = document.getElementById('aktionspreis'),
          versCheckbox = document.getElementById('versicherung-checkbox'),
          versBetrag = document.getElementById('versicherung-betrag'),
          gesamt = document.getElementById('gesamttotal');

    const berechne = () => {
        let stAnz = parseInt(stSlider.value),
            pProSt = parseFloat(stPreis.value) || 0,
            akLAnz = parseInt(akLektionen.value) || 0,
            akP = parseFloat(akPreis.value) || 0,
            versB = versCheckbox.checked ? parseFloat(versBetrag.value) || 0 : 0,
            total = (stAnz - akLAnz) * pProSt + akLAnz * akP + versB;

        gesamt.innerHTML = 'Gesamttotal: ' + total.toFixed(2) + ' CHF';
        stWert.innerText = stAnz; // Aktualisiere die Anzeige neben dem Slider
    };

    // Füge das 'change'-Event hinzu, um Kompatibilitätsprobleme zu beheben
    stSlider.addEventListener('input', berechne);
    stSlider.addEventListener('change', berechne); // Speziell für bessere Mobile Unterstützung

    stPreis.oninput = akLektionen.oninput = akPreis.oninput = versBetrag.oninput = berechne;
    versCheckbox.onchange = () => {
        versBetrag.style.display = versCheckbox.checked ? 'block' : 'none';
        berechne();
    };

    berechne(); // Initialberechnung
});
