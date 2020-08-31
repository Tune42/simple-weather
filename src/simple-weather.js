const SimpleWeather = (function () {

    async function getWeather(position) {
        const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude.toFixed(2)}&lon=${position.coords.longitude.toFixed(2)}&APPID=b582138cf158eb5c64ca8b60a8d81fe1`;
        
        const response = await fetch(apiURL, {mode: 'cors'});
        response.json().then((response) => {
            const weatherData = {
                test : response.current.sunrise
            }
            return weatherData;
        }).catch(err => {
            console.log(err);
        });
    }

    const getLocationData = () => {
        if ('geolocation' in navigator) {
            return navigator.geolocation.getCurrentPosition(getWeather);
        } else {
            return 'Geolocation is not available';
        }
    }

    return {getLocationData}
})();

export default SimpleWeather;