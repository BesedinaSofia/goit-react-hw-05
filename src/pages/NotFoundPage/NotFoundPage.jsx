import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={css.wrapper}>
      <h1>404 - Page Not Found</h1>
      <p>На жаль, такої сторінки не існує.</p>
      <Link to="/" className={css.link}>
        Повернутися на головну
      </Link>
    </div>
  );
}
