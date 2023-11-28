import axios from "axios";
import { useEffect, useState } from "react";
import WeatherDetail from "./components/WeatherDetail";

//? https://th.bing.com/th/id/R.e78c324f81ecee96f07f97e2286b0324?rik=ugvcCruKySPFUQ&pid=ImgRaw&r=0
//? https://www.bing.com/images/search?view=detailV2&ccid=TTklWwyD&id=D4100391D705CBB4297A189CF9090539EF6DA2CF&thid=OIP.TTklWwyDTqXUls7nsagO_wHaE8&mediaurl=https%3a%2f%2fsl24.com.ar%2fwp-content%2fuploads%2f2020%2f11%2fnublado-campo.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.4d39255b0c834ea5d496cee7b1a80eff%3frik%3dz6Jt7zkFCfmcGA%26pid%3dImgRaw%26r%3d0&exph=600&expw=900&q=imagen+de+clima+nublado+&simid=608035539976613320&FORM=IRPRST&ck=A6D1D2A0D202805C981BC8344D9C4D78&selectedIndex=7

function App() {
  const [weather, setWeather] = useState(null);

  const success = (pos) => {
    // console.log(pos)
    const {
      coords: { latitude, longitude },
    } = pos;

    //?aqui
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a2144436d50ef9caa5b26175ec763d5d&lang=sp&units=metric`) 
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
  };

  const bgImages = {
    "01d":
       "bg-[url(https://www.istockphoto.com/es/vector/fondo-de-verano-naturaleza-con-hierba-verde-y-cielo-azul-vector-de-gm922107298-253163260)]",
     "03n":
        "bg-[url(https://cdn.pixabay.com/photo/2016/11/21/03/56/landscape-1844226_1280.png)]", 
      "01n":
        "bg-[url(https://cdn.pixabay.com/photo/2014/10/08/04/47/moon-478982_1280.jpg)]",
      "02n":
        "bg-[url(https://media.istockphoto.com/id/1078006484/es/vector/hermoso-cielo-en-la-noche.jpg?s=1024x1024&w=is&k=20&c=9vIgTiWaw23dcWG89MQ7dalD79EiAEDrhrLiZR4NiTQ=)]", 
      "04n":
        "bg-[url(https://cdn.pixabay.com/photo/2022/12/02/03/42/sky-7630197_1280.png)]", 
      "09n":
        "bg-[url(https://cdn.pixabay.com/photo/2021/12/17/02/14/dog-in-the-park-6875524_1280.jpg)]", 
      "10n":
        "bg-[url(https://media.istockphoto.com/id/1144282332/es/vector/nubes-y-tormentas-temporada-de-lluvias.jpg?s=1024x1024&w=is&k=20&c=Yh-WAqbNDKhZB8sdLKw2on9CgsLXJFg4afjnXDw--n8=)]", 
      "11n":
        "bg-[url(https://cdn.pixabay.com/photo/2016/03/31/20/14/daily-1295622_1280.png)]",
      "13n":
        "bg-[url(https://cdn.pixabay.com/photo/2022/12/14/13/43/snow-7655439_1280.png)]", 
      "50n":
        "bg-[url(https://cdn.pixabay.com/photo/2020/12/24/14/26/forest-5857579_1280.jpg)]", 
      "50d":
        "bg-[url(https://cdn.pixabay.com/photo/2020/12/23/14/41/forest-5855196_1280.jpg)]", 
      "13d":
        "bg-[url(https://cdn.pixabay.com/photo/2016/03/31/22/33/landscape-1297082_1280.png)]", 
      "11d":
        "bg-[url(https://cdn.pixabay.com/photo/2016/03/31/20/14/daily-1295622_1280.png)]", 
      "10d":
        "bg-[url(https://cdn.pixabay.com/photo/2013/07/13/12/12/cloud-159394_1280.png)]", 
      "09d":
        "bg-[url(https://media.istockphoto.com/id/1257951336/es/foto/paraguas-transparente-bajo-la-lluvia-contra-gotas-de-agua-de-fondo-de-salpicaduras-concepto-de.jpg?s=1024x1024&w=is&k=20&c=kqq-Ofdfm-q_nxMN66pe82qUHI84eIIxhDYPejUFNt0=)]", 
      "04d":
        "bg-[url(https://th.bing.com/th/id/OIP.zVnNosb219tacK0kKLMZ5wHaFI?rs=1&pid=ImgDetMain)]", 
      "03d":
        "bg-[url(https://media.istockphoto.com/id/1043813930/es/vector/animales-de-vectores-en-forma-de-conjunto-nube.jpg?s=1024x1024&w=is&k=20&c=fG_I3N3DjBIeKRVGRYXfWNrxUauLmHESvwDqyyYM1kI=)]", 
      "02d":
        "bg-[url(https://cdn.pixabay.com/photo/2013/07/18/10/56/house-163526_1280.jpg)]", 
       
      
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);
  return (
    <main className={`flex justify-center items-center h-screen bg-black text-white bg-cover ${
      bgImages[weather?.weather[0].icon]}`}>
      {weather ? <WeatherDetail weather={weather} /> : <span>Cargando...</span>}
      
    </main>
  );
}

export default App;
