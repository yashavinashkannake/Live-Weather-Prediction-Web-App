async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "0bc58c5873a2bfad3b43da4122b00e15"  ; // Replace this with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
  
      document.getElementById("weatherResult").innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      `;
    } catch (error) {
      document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    }
  }
