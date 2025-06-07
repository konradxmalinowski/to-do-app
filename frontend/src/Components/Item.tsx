import { useContext } from 'react';
import { ToDoContext, type Priority } from '../Store/ToDoContext';
import Button from './Button';
import Option from './Option';
import Select from './Select';

const Item = ({
  name,
  priority,
  itemId,
}: {
  name: string;
  priority: Priority;
  itemId: number;
}) => {
  const { items, changePriority, changeName, removeItem } =
    useContext(ToDoContext);

  const handleChangePriority = (id: number, newPriority: Priority): void => {
    const itemInArray =
      items?.find((item) => id === item?.id)?.priority ?? 'medium';
    console.log(newPriority);

    if (newPriority === itemInArray) {
      return;
    }

    changePriority(itemId, newPriority);
  };

  const handleChangeName = (id: number, newName: string): void => {
    const itemInArray = items?.find((item) => id === item?.id)?.name ?? '';
    if (newName === itemInArray) {
      changeName(id, itemInArray);
      return;
    }

    changeName(itemId, newName);
  };

  const handleRemoveItem = (id: number) => {
    if (items?.findIndex((item) => item.id === id) !== -1) {
      removeItem(id);
    }
  };

  return (
    <section className="lg:w-1/2 md:w-1/2 w-[95%] min-h-16 flex justify-between items-center p-4 bg-background2 rounded-xl transition-transform hover:scale-105 hover:transition-transform">
      <span
        className="font-semibold pointer"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onInput={(event) =>
          handleChangeName(
            itemId,
            (event.currentTarget as HTMLElement).innerText
          )
        }
      >
        {name}
      </span>

      <Select
        name="priority"
        id={`priority${itemId}`}
        defaultValue={priority}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleChangePriority(itemId, event.target.value as Priority)
        }
      >
        <Option value="low">low</Option>
        <Option value="medium">medium</Option>
        <Option value="high">high</Option>
      </Select>

      <Button label="🗑️" onClick={() => handleRemoveItem(itemId)} />
    </section>
  );
};

export default Item;
