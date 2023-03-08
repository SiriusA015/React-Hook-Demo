import { Link, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>Uh oh! We’ve got a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          <span>Go Back</span>
        </button>
        <Link to="/" className="btn btn--dark">
          <span>Go home</span>
        </Link>
      </div>
    </div>
  );
};

export default Error;
