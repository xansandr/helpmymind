import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { CitySearch } from '../components/CitySearch/CitySearch';

export function Weather() {
  const city = useSelector((state: RootState) => state.weather.city);
  const temperature = useSelector((state: RootState) => state.weather.temperature);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Погода</h2>
      <CitySearch />
      {city ? (
        <>
          <p>Город: {city}</p>
          {temperature !== null && <p>Температура: {temperature}°C</p>}
        </>
      ) : (
        <p>Город не выбран</p>
      )}
    </div>
  );
}
