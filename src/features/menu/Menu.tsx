import { useLoaderData } from 'react-router';

import MenuItem from './MenuItem';
import type { IMenuItem } from '../../types/menu';

function Menu() {
  const menu = useLoaderData<IMenuItem[]>();
  return (
    <ul className="divide-y divide-stone-200 px-4">
      {menu.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default Menu;
