import { useFetcher } from 'react-router';
import Button from '../../components/ui/Button';

function UpdateOrderPriority() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button variant="small">Make priority</Button>
    </fetcher.Form>
  );
}
export default UpdateOrderPriority;
