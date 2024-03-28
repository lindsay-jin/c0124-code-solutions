import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <Link to="/">
        <h3>Uh oh, we could not find the page you were looking for!</h3>
        Return to catalog
      </Link>
    </div>
  );
}
