import { Link, useLocation } from 'react-router-dom';
import styles from './MovieCard.module.css';

function MovieCard({ movie }) {
  const location = useLocation();
  return (
    <li className={styles.card}>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <p>{movie.title}</p>
      </Link>
    </li>
  );
}

export default MovieCard;