import { Header } from '../components/Header/Header';

export function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <h2>Главная страница</h2>
        <p>Добро пожаловать в погодный проект</p>
      </main>
    </>
  );
}
