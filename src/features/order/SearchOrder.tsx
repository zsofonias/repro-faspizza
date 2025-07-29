import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 bg-yellow-100 px-4 py-2 transition-all duration-300 placeholder:text-stone-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}
export default SearchOrder;
