import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
// import { useDispatch } from 'react-redux';

// import { setUsername } from '../../store/slices/userSlice';
import { useUser } from '../../context/UserContext';
import Button from '../../components/ui/Button';

function CreateUser() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [name, setName] = useState('');
  const { setUsername } = useUser();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name) return;
    setUsername(name);
    // dispatch(setUsername(name));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input mb-8 w-72"
      />

      {name !== '' && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
