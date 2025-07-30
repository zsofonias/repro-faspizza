import Button from '../../components/ui/Button';

function EmptyCart() {
  return (
    <div className="mt-10 flex flex-col items-center gap-6 text-center">
      <p>Your cart is empty. Add some pizzas to get started!</p>

      <Button to="/menu">View pizzas</Button>
    </div>
  );
}
export default EmptyCart;
