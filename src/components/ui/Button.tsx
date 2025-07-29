import type { ReactNode } from 'react';
import { Link } from 'react-router';

type Props = {
  children: ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'small' | 'round';
  isDisabled?: boolean;
  onClick?: () => void;
};

function Button({
  children,
  to,
  onClick,
  variant = 'primary',
  isDisabled = false,
}: Props) {
  const base =
    'inline-block text-sm cursor-pointer bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-stone-300 disabled:border-stone-300 disabled:text-stone-500';

  const secondary =
    'inline-block text-sm border-2 border-stone-300 cursor-pointer font-semibold tracking-wide text-stone-500 uppercase transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:ring-2 focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5';

  const styles = {
    base,
    primary: `${base} px-4 py-3 md:px-6 md:py-4`,
    secondary,
    small: `${base} px-3 py-2 text-xs md:px-4 md:py-2.5`,
    round: `${base} px-2 py-0.5 rounded-full text-sm`,
  };

  if (to) {
    return (
      <Link to={to} className={styles[variant]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={styles[variant]}
      >
        {children}
      </button>
    );
  }
  return (
    <button disabled={isDisabled} className={styles[variant]}>
      {children}
    </button>
  );
}
export default Button;
