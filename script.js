const searchInput = document.getElementById('search');
const btn = document.querySelector('.btn');
const humidityVal = document.querySelector('.hum_val');
const temperatureVal = document.querySelector('.temp_val');
const apiKey = '57dbe8d466323531dc59aade5504b1a2';
const url = 'https://api.openweathermap.org/data/2.5/weather';

btn.addEventListener('click', getWeather);

async function getWeather() {
  const city = searchInput.value.trim() || 'Kumasi';
  const fullUrl = `${url}?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    humidityVal.textContent = ` ${data.main.humidity}%`;
    temperatureVal.textContent = `${data.main.temp}°C`;

    const temperature = data.main.temp;

    if (temperature >= 20 && temperature <= 30) {
      document.body.style.backgroundImage = "url('rain.jpeg')";
      document.body.style.backgroundRepeat ="no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundAttachment = "fixed";
    } 
    
    else if (temperature > 30) {
      document.body.style.backgroundImage = "url('ra.jpeg')";
      document.body.style.backgroundRepeat ="no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundAttachment = "fixed";



    } else {
      document.body.style.backgroundImage = "url('bb.jpeg')";
      document.body.style.backgroundRepeat ="no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundAttachment = "fixed";
    }
  } catch (error) {
    console.error('Error:', error);
    if (error.message.includes('city not found')) {
      alert(`Error: "${searchInput.value}" is not a valid city`);
    } else {
      alert(`Error: ${error.message}`);
    }
  }
}

