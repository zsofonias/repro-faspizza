import { useNavigate, useRouteError } from 'react-router';
import { type RouterError } from '../types/error';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError() as RouterError;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
