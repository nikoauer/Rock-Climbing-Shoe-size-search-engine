import { useRouteError, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center">
      <h1 id="404">404</h1>
      <h4>This page is not found</h4>
      <p>Looks like you have an error</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button as={Link} to="/">Return Home</Button>
    </div>
  );
}
