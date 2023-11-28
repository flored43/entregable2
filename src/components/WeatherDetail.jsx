import  { useState } from "react";
const WeatherDetail = ({weather}) => {
console.log(weather);

const [isFahrenheit, setIsFahrenheit] = useState(true);

const toggleTemperatureUnit = () => {
  // Cambiar el estado entre Fahrenheit y Celsius
  setIsFahrenheit((prevIsFahrenheit) => !prevIsFahrenheit);
}

const convertTemperature = (temp) => {
  // Convertir la temperatura según la unidad actual
  return isFahrenheit ? celsiusToFarenheit(temp) : temp;
};
const celsiusToFarenheit = (tempCelsius) => {
  const tempF = ((tempCelsius * (9 / 5)) + 32).toFixed(1)
  return tempF
};
return (
  <article className="text-center grid-4 md:grid-cols-4">
  <h3 className="col-span-full mb-4 text-2xl md:text-4xl">
    {weather.name}, {weather.sys.country}
  </h3>
  <div className="text-black grid gap-4">
    <section className="bg-white/60 p-2 rounded-xl grid grid-cols-2 items-center md:flex-auto">
   {/* <section className="bg-white/60 p-2 rounded-xl grid grid-cols-2 items-center"> */}
      {/* <h3 className="col-span-2 md:col-span-4 text-2xl md:text-2xl">
        {weather.weather[0].description}  </h3> */}
      <h3 className="col-span-2 md:col-span-4 text-2x1">{weather.weather[0].description}</h3>
      <span className="text-5xl">
        {convertTemperature(weather.main.temp)}°{isFahrenheit ? 'F' : 'C'}
      </span>
      <div className="block mx-auto">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt=""
          />
      </div>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-3 md:flex-auto bg-white/60 p-2 rounded-xl gap-4">
      <div className="flex gap-1">
        <div>
          <img src="/wind.svg" alt="icono del viento" />
        </div>
        <span>{weather.wind.speed}m/s</span>
      </div>
      <div className="flex gap-1">
        <div>
          <img src="/humidity.svg" alt="icono de humedad" />
        </div>
        <span>{weather.main.humidity}%</span>
      </div>
      <div className="flex gap-1">
        <div>
          <img src="/pressure.svg" alt="icono presion atmosférica" />
        </div>
        <span>{weather.main.pressure}hPa</span>
      </div>
    </section>
  </div>
    <button 
    className="col-span-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
    onClick={toggleTemperatureUnit}>
      Cambiar a {isFahrenheit ? 'Celcius' : 'Fahrenheit'}
    </button>
</article>
    // <article className="text-center grid-4 md:grid-cols-4">
    //   <h3 className="col-span-full mb-4 text-2x1">
    //     {weather.name}, {weather.sys.country}
    //   </h3>
    //   <div className="text-black grid gap-4">
    //     <section className="bg-white/60 p-2 rounded-xl grid grid-cols-2 items-center">
    //       <h3 className="col-span-2 md:col-span-4 text-2x1">{weather.weather[0].description}</h3>
    //        {/* Mostrar la temperatura con la unidad actual */}
    //       {/* <span className="text-3xl">{celsiusToFarenheit(weather.main.temp)}°C</span> */}
    //       <span className="text-3xl">{convertTemperature(weather.main.temp)}°{isFahrenheit ? 'F' : 'C'}</span>
    //       <div className="block mx-auto">
    //         <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
    //       </div>
    //     </section>

    //     {/* <section className="grid grid-cols-3 justify-items-center bg-white/60 p-2 rounded-xl"> */}
    //     <section className="grid grid-cols-2 bg-white/60 p-2 rounded-xl">
    //       <div className="flex gap-1">
    //         <div>
    //           <img src="/wind.svg" alt="icono del viento" />
    //         </div>
    //         <span>{weather.wind.speed}m/s</span>
    //         </div>         
    //       <div className="flex gap-1">
    //         <div>
    //           <img src="/humidity.svg" alt="icono de humedad" />
    //         </div>
    //         <span>{weather.main.humidity}%</span>
    //         </div>         
    //       <div className="flex gap-1">
    //         <div>
    //           <img src="/pressure.svg" alt="icono presion atmoferica" />
    //         </div>
    //         <span>{weather.main.pressure}hPa</span>
    //         </div>         
    //     </section> 
    //      {/* Botón para cambiar entre Fahrenheit y Celsius */}
    //   </div>
    //   <button 
    //   className="col-span-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
    //   onClick={toggleTemperatureUnit}>
    //     Cambiar a {isFahrenheit ? 'Celcius' : 'Fahrenheit'}
    //   </button>
    // </article>
  );
};
export default WeatherDetail;
