import type { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router';

type Props = {
  children: ReactNode;
  to: string;
};

function LinkButton({ children, to }: Props) {
  const navigate = useNavigate();

  const className = 'cursor-pointer text-sm text-blue-500 hover:text-blue-600';

  if (to === '-1') {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        className={className}
      >
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
export default LinkButton;
