document.addEventListener("DOMContentLoaded", () => {
    const airportBody = document.getElementById("airportBody");
    const searchBar = document.getElementById("searchBar");
    const airlineBody = document.getElementById("airlineBody");
    const airlineSearchBar = document.getElementById("airlineSearchBar");

    let airportData = [];
    let airlineData = [];

    // 📌 Airport JSON を読み込む
    function loadAirports() {
        fetch("airports.json")
            .then(response => response.json())
            .then(data => {
                airportData = data;
                displayAirports(airportData);
            })
            .catch(error => console.error("Airport JSON Load Error:", error));
    }


    // 📌 空港リストを表示する
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

    // 📌 航空会社リストを表示する
    function displayAirlines(airlines) {
        airlineBody.innerHTML = "";
        airlines.forEach(airline => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${airline.code}</td>
                <td>${airline.name}</td>
                <td>${airline.country}</td>
            `;
            airlineBody.appendChild(row);
        });
    }

    // 📌 空港のフィルタリング
    function filterAirports() {
        const searchText = searchBar.value.toLowerCase().trim();
        const keywords = searchText.split(/[\s,]+/).filter(keyword => keyword);

        const filteredAirports = airportData.filter(airport =>
            keywords.every(keyword =>
                airport.code.toLowerCase().includes(keyword) ||
                airport.name.toLowerCase().includes(keyword) ||
                airport.country.toLowerCase().includes(keyword) ||
                airport.area.toLowerCase().includes(keyword)
            )
        );
        displayAirports(filteredAirports);
    }

    // 📌 航空会社のフィルタリング
    function filterAirlines() {
        const searchText = airlineSearchBar.value.toLowerCase().trim();
        const keywords = searchText.split(/[\s,]+/).filter(keyword => keyword);

        const filteredAirlines = airlineData.filter(airline =>
            keywords.every(keyword =>
                airline.code.toLowerCase().includes(keyword) ||
                airline.name.toLowerCase().includes(keyword) ||
                airline.country.toLowerCase().includes(keyword)
            )
        );
        displayAirlines(filteredAirlines);
    }

    searchBar.addEventListener("input", filterAirports);
    airlineSearchBar.addEventListener("input", filterAirlines);

    loadAirports();
    loadAirlines();
});
