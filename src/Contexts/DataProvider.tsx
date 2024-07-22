import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

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
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const DataProvider = ({ children }: Props) => {
  const [data, setData] = useState<Category[]>([
    {
      id: crypto.randomUUID(),
      title: "Groceries",
      items: [
        {
          id: crypto.randomUUID(),
          name: "Milk",
          completed: false,
        },
        {
          id: crypto.randomUUID(),
          name: "Bread",
          completed: true,
        },
        {
          id: crypto.randomUUID(),
          name: "Cabbage",
          completed: false,
        },
        {
          id: crypto.randomUUID(),
          name: "Salt",
          completed: false,
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Daily Tasks",
      items: [
        {
          id: crypto.randomUUID(),
          name: "Run",
          completed: false,
        },
        {
          id: crypto.randomUUID(),
          name: "Laundry",
          completed: false,
        },
        {
          id: crypto.randomUUID(),
          name: "Feed the dog",
          completed: true,
        },
        {
          id: crypto.randomUUID(),
          name: "Code",
          completed: true,
        },
        {
          id: crypto.randomUUID(),
          name: "Call my babe",
          completed: true,
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "School",
      items: [
        {
          id: crypto.randomUUID(),
          name: "Solve Math",
          completed: false,
        },
        {
          id: crypto.randomUUID(),
          name: "Practice Spanish",
          completed: false,
        },
      ],
    },
  ]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
