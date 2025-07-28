document.addEventListener("DOMContentLoaded", () => {
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const cityInput = document.getElementById("city-input");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameEl = document.getElementById("city-name");
  const temperatureEl = document.getElementById("temperature");
  const descriptionEl = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");
  const forecastContainer = document.getElementById("forecast");
  const toggleThemeBtn = document.getElementById("toggle-theme-btn");

  // Mock weather data for some cities
  const mockWeatherData = {
    london: {
      name: "London",
      temperature: 16,
      description: "light rain",
      icon: "10d",
      forecast: [
        { day: "Mon", temp: 15, icon: "10d" },
        { day: "Tue", temp: 17, icon: "04d" },
        { day: "Wed", temp: 18, icon: "01d" },
        { day: "Thu", temp: 16, icon: "03d" },
        { day: "Fri", temp: 14, icon: "09d" },
      ],
    },
    delhi: {
      name: "Delhi",
      temperature: 34,
      description: "clear sky",
      icon: "01d",
      forecast: [
        { day: "Mon", temp: 33, icon: "01d" },
        { day: "Tue", temp: 35, icon: "01d" },
        { day: "Wed", temp: 36, icon: "02d" },
        { day: "Thu", temp: 34, icon: "03d" },
        { day: "Fri", temp: 32, icon: "01d" },
      ],
    },
    paris: {
      name: "Paris",
      temperature: 20,
      description: "scattered clouds",
      icon: "03d",
      forecast: [
        { day: "Mon", temp: 20, icon: "03d" },
        { day: "Tue", temp: 22, icon: "04d" },
        { day: "Wed", temp: 21, icon: "03d" },
        { day: "Thu", temp: 19, icon: "09d" },
        { day: "Fri", temp: 18, icon: "10d" },
      ],
    },
  };

  getWeatherBtn.addEventListener("click", () => {
    const city = cityInput.value.trim().toLowerCase();

    if (!city) {
      showError("Please enter a city name.");
      return;
    }

    if (mockWeatherData[city]) {
      displayWeather(mockWeatherData[city]);
      clearError();
    } else {
      showError("City not found in mock data. Try London, Delhi, or Paris.");
    }
  });

  function displayWeather(data) {
    weatherInfo.classList.remove("hidden");
    cityNameEl.textContent = data.name;
    temperatureEl.textContent = `${data.temperature}°C`;
    descriptionEl.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.icon}@2x.png" alt="${data.description}" /> ${data.description}`;

    showForecast(data.forecast);
  }

  function showForecast(forecast) {
    forecastContainer.innerHTML = "";
    forecastContainer.classList.remove("hidden");

    forecast.forEach((day) => {
      const div = document.createElement("div");
      div.className = "forecast-day";
      div.innerHTML = `
        <strong>${day.day}</strong>
        <img src="https://openweathermap.org/img/wn/${day.icon}.png" alt="icon" />
        <div>${day.temp}°C</div>
      `;
      forecastContainer.appendChild(div);
    });
  }

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
    weatherInfo.classList.add("hidden");
    forecastContainer.classList.add("hidden");
  }

  function clearError() {
    errorMessage.classList.add("hidden");
  }

  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Optional: simulate geolocation by picking Delhi (mock)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      () => {
        // Pretend user is in Delhi
        displayWeather(mockWeatherData["delhi"]);
      },
      () => {
        // If denied geolocation, do nothing
      }
    );
  }
});
