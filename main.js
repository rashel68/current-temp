const searchCity = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    // console.log(searchText);
    const api = '339e6cdd4b9ca83e296c5a1cb0367b83';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${api}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}

const displayTemp = (dataIN) => {
    // console.log(dataIN);
    // modify loaded Data 
    const tempCelcius = `${dataIN.main.temp}`;
    const cel = (tempCelcius - 273.15).toFixed(2);
    let sunriseValue = `${dataIN.sys.sunrise}`;
    let sunriseTime = new Date(sunriseValue * 1000);
    let sunsetValue = `${dataIN.sys.sunset}`;
    let sunsetTime = new Date(sunsetValue * 1000);

    const tempResult = document.getElementById('temp-result');
    tempResult.textContent = '';

    // console.log(cel);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <h2 class="fw-bold">${dataIN.name}</h2>
        <h3 class="fw-bold">${cel}&deg C</h3>
        <h5>${dataIN.weather[0].main}</h5>
    
    `;
    tempResult.appendChild(div);

    const table = document.getElementById('tableData');
    table.textContent = '';
    const tr = document.createElement('tr');
    const secondTr = document.createElement('tr');
    const sunrise = document.createElement('tr');
    const sunset = document.createElement('tr');
    tr.innerHTML = `
    <td>City</td>
    <td>${dataIN.name}</td>
    `;
    secondTr.innerHTML = `
    <td>Country</td>
    <td>${dataIN.sys.country}</td>
    `;
    sunrise.innerHTML = `
    <td>Sunrise</td>
    <td>${sunriseTime}</td>
    `;
    sunset.innerHTML = `
    <td>Sunset</td>
    <td>${sunsetTime}</td>
    `;
    table.appendChild(tr);
    table.appendChild(secondTr);
    table.appendChild(sunrise);
    table.appendChild(sunset);

}