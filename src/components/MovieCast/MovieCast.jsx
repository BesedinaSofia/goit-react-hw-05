import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../api/tmdb';
import styles from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams(); // отримуємо ID фільма з URL
  const [cast, setCast] = useState([]); // стан для зберігання акторів

  // Виконуємо запит при зміні movieId
  useEffect(() => {
    fetchMovieCast(movieId) // отримуємо каст за допомогою API
      .then(setCast) // зберігаємо отримані дані в стан
      .catch(error => console.error("Error fetching cast:", error)); // обробка помилки
  }, [movieId]);

  // Якщо немає даних або вони ще не завантажені
  if (cast.length === 0) {
    return <p>Loading cast...</p>;
  }

  return (
    <ul className={styles.list}>
      {cast.map(actor => (
        <li key={actor.id} className={styles.castMember}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
            className={styles.castImage}
          />
          <p>{actor.name} as {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
