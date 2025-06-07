import { useContext } from 'react';
import { ToDoContext } from '../Store/ToDoContext';
import Item from './Item';
import Wrapper from './Wrapper';

const Items = () => {
  const { items } = useContext(ToDoContext);

  return (
    <Wrapper className="flex-col items-center justify-center">
      {items.map((item) => (
        <Item
          name={item.name}
          priority={item.priority}
          key={item.name}
          itemId={item.id}
        />
      ))}
    </Wrapper>
  );
};

export default Items;
