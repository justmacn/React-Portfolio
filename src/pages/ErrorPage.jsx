import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>404 Error</h1>
      <p>Wow! Looks like the devs can't do anything right.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
