import { useEffect, useState } from 'react';
import {
  ItemPrototype,
  ToDoContext,
  type Item,
  type Priority,
} from './ToDoContext';

const ADDRESS = 'http://localhost/Todo%20app%20(database)/backend';

const ToDoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Item[]>([ItemPrototype]);

  const getItems = async () => {
    try {
      const response: Response = await fetch(`${ADDRESS}/get_items.php`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result: Item[] = await response.json();
        result.forEach((item) => {
          item.id = Number(item.id);
        });

        setItems(result);
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = async (name: string, priority: Priority) => {
    try {
      const response: Response = await fetch(`${ADDRESS}/add_item.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          priority,
        }),
      });

      if (response.ok) {
        const result = await response.json();

        if (result.success) {
          getItems();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (id: number) => {
    try {
      const response: Response = await fetch(`${ADDRESS}/remove_item.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
      });

      if (response.ok) {
        const result = await response.json();

        if (result.success) {
          getItems();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearItems = async () => {
    try {
      const response: Response = await fetch(`${ADDRESS}/clear_items.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();

        if (result.success) {
          setItems([ItemPrototype]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changePriority = async (id: number, priority: Priority) => {
    try {
      const response: Response = await fetch(`${ADDRESS}/change_priority.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          priority,
        }),
      });

      if (response.ok) {
        const result = await response.json();

        if (result.success) {
          getItems();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeName = async (id: number, name: string) => {
    try {
      const response: Response = await fetch(`${ADDRESS}/change_name.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name,
        }),
      });

      if (response.ok) {
        const result = await response.json();

        if (result.success) {
          getItems();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <ToDoContext
      value={{
        addItem,
        removeItem,
        clearItems,
        items,
        changePriority,
        changeName,
      }}
    >
      {children}
    </ToDoContext>
  );
};

export default ToDoContextProvider;
