document.getElementById(`inviaKm`).addEventListener("click",
function() {
    let intestazione = document.getElementById(`intestazione`).value;
    document.getElementById(`utente`).innerHTML = `${intestazione}`;
    let km = document.getElementById(`km`).value;
    document.getElementById(`risultatoKm`).innerHTML = `Distanza arrivo ${km} Km`;
    let età = document.getElementById(`età`).value;
    document.getElementById(`risultatoEtà`).innerHTML = `Età del passeggero: ${età} anni`;
    let importoKm = "0.21";
    let sconto;
    let prezzo;
    if (età <18){
        prezzo = (km * importoKm * 0.8);
        sconto = "Abbiamo applicato un sconto del 20%";
    }
    else if (età >=18 && età <=65){
        prezzo = (km * importoKm);
        sconto = "Biglietto intero";
    }
    else if (età >65){
        prezzo = (km * importoKm * 0.6);
        sconto = "Abbiamo applicato un sconto del 40%";
    }
    prezzo = prezzo.toFixed(2);

    document.getElementById(`ticket`).style.display = "flex";
    document.getElementById(`sconto`).innerHTML = `${sconto}`; 
    document.getElementById(`totale`).innerHTML = `L'importo totale è di € ${prezzo} `;
}
 )
    
    
    

      