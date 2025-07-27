import { useLoaderData } from 'react-router';

import MenuItem from './MenuItem';
import type { IMenuItem } from '../../types/menu';

function Menu() {
  const menu = useLoaderData<IMenuItem[]>();
  return (
    <ul>
      {menu.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default Menu;
