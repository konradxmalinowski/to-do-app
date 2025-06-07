import { createContext } from 'react';

export type Priority = 'low' | 'medium' | 'high';

export interface Item {
  id: number;
  name: string;
  priority: Priority;
}

export const ItemPrototype: Item = {
  id: 0,
  name: '',
  priority: 'low',
};

export interface ToDoContext {
  addItem: (name: string, priority: Priority) => void;
  removeItem: (id: number) => void;
  clearItems: () => void;
  changePriority: (id: number, priority: Priority) => void;
  changeName: (id: number, name: string) => void;
  items: Item[];
}

export const ToDoContextPrototype: ToDoContext = {
  addItem: () => {},
  removeItem: () => {},
  clearItems: () => {},
  changePriority: () => {},
  changeName: () => {},
  items: [ItemPrototype],
};

export const ToDoContext = createContext<ToDoContext>(ToDoContextPrototype);
