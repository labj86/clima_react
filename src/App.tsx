import Alert from "./Alert/Alert";
import styles from "./App.module.css";
import Form from "./Form/Form";
import useWeather from "./hooks/useWeather";
import Spinner from "./Spinner/Spinner";
import WeatherDetail from "./WeatherDetail/WeatherDetail";

function App() {

  const { weather, loading, notFound, fetchWeather } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {loading && <Spinner/>}
        {weather.name &&
          <WeatherDetail 
            weather={weather}
          />
        }
        {notFound && <Alert>Ciudad no encontrada</Alert>}
      </div>
    </>
  )
}

export default App
