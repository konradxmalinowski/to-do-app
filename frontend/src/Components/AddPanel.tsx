import { useContext, useState } from 'react';
import { ToDoContext, type Priority } from '../Store/ToDoContext';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import Option from './Option';
import Wrapper from './Wrapper';

const AddPanel = () => {
  const [newName, setNewName] = useState<string>('');
  const [newPriority, setNewPriority] = useState<Priority>('medium');
  const { items, addItem } = useContext(ToDoContext);

  const validateData = (name: string, priority: Priority) => {
    if (
      !name ||
      !priority ||
      items.findIndex((item) => item.name === name.trim()) !== -1
    )
      return false;
    return true;
  };

  const handleAddItem = () => {
    const isValid = validateData(newName, newPriority);
    if (!isValid) return;
    addItem(newName, newPriority);
    setNewName('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e?.target?.value);
  };

  return (
    <Wrapper className="items-center justify-center">
      <Input label="Name" type="text" onChange={handleChange} value={newName} />
      <Select
        id="priority-add-panel"
        name="priority-add-panel"
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          setNewPriority(event.target.value as Priority)
        }
        defaultValue="medium"
        className="min-h-10 flex mt-6"
      >
        <Option value="low">low</Option>
        <Option value="medium">medium</Option>
        <Option value="high">high</Option>
      </Select>
      <Button label="Add" onClick={handleAddItem} className="mt-6" />
    </Wrapper>
  );
};

export default AddPanel;
