document.addEventListener("DOMContentLoaded", () => {
    const airportBody = document.getElementById("airportBody")
    const searchBar = document.getElementById("searchBar")

    let airportData = [];

    function loadAirports() {
        fetch('airports.json')
            .then(response => response.json())
            .then(data => {
                airportData = data;
                displayAirports(airportData);
            })
            .catch(error => console.error("Airport JSON Load Error:", error));
    }

    function displayAirports(airports) {
        airportBody.innerHTML = "";
        airports.forEach(airport => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${airport.code}</td>
            <td>${airport.name}</td>
            <td>${airport.country}</td>
            <td>${airport.area}</td>
            `;
            airportBody.appendChild(row);
        });
    }

    // searchBar.addEventListener("input");

    loadAirports();
})