import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2>Huh! What's that?</h2>
      <p>
        Looks like that does not exist <br />
        <br />
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
