import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <Link to="/">&lt;Return to the catalog</Link>
      <h2>We could not find the page you were looking for!</h2>
    </div>
  );
}
