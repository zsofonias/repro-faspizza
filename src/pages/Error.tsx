import { useRouteError } from 'react-router';
import { type RouterError } from '../types/error';
import LinkButton from '../components/ui/LinkButton';

function Error() {
  const error = useRouteError() as RouterError;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go Back</LinkButton>
    </div>
  );
}

export default Error;
