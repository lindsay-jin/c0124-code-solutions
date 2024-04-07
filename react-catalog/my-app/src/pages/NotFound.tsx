import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <h3>We could not find the page you were looking for!</h3>
      <Link to="/">&lt;Return to the catalog</Link>
    </div>
  );
}
