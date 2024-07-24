import { createContext, ReactNode, useState, Dispatch, SetStateAction, useEffect } from "react";

interface Item {
  id: string;
  name: string;
  completed: boolean;
}

interface Category {
  id: string;
  title: string;
  items: Item[];
}

interface DataContextType {
  data: Category[];
  setData: Dispatch<SetStateAction<Category[]>>;
  deleteCategory: (id: string) => void;
  addItem: (categoryId: string, itemName: string) => void;
  deleteItem: (categoryId: string, itemId: string) => void;
  toggleItemCompletion: (categoryId: string, itemId: string) => void;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const DataProvider = ({ children }: Props) => {
  const [data, setData] = useState<Category[]>(() => {
    const savedData = localStorage.getItem('categories');
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(data));
  }, [data]);

  const deleteCategory = (id: string) => {
    setData(prevData => prevData.filter(category => category.id !== id));
  };

  const addItem = (categoryId: string, itemName: string) => {
    setData(prevData =>
      prevData.map(category =>
        category.id === categoryId
          ? {
              ...category,
              items: [
                ...category.items,
                {
                  id: crypto.randomUUID(),
                  name: itemName,
                  completed: false,
                },
              ],
            }
          : category
      )
    );
  };

  const deleteItem = (categoryId: string, itemId: string) => {
    setData(prevData =>
      prevData.map(category =>
        category.id === categoryId
          ? {
              ...category,
              items: category.items.filter(item => item.id !== itemId),
            }
          : category
      )
    );
  };

  const toggleItemCompletion = (categoryId: string, itemId: string) => {
    setData(prevData =>
      prevData.map(category =>
        category.id === categoryId
          ? {
              ...category,
              items: category.items.map(item =>
                item.id === itemId ? { ...item, completed: !item.completed } : item
              ),
            }
          : category
      )
    );
  };

  return (
    <DataContext.Provider value={{ data, setData, deleteCategory, addItem, deleteItem, toggleItemCompletion }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
