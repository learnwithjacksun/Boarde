import { createContext, ReactNode, useState } from "react";

export const DataContext = createContext();

interface Props {
  children: ReactNode;
  data: Data[];
}
interface Data {
  id: string | number;
  title: string;
}

const DataProvider = ({ children }: Props) => {
  const [data, setData] = useState([
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
    <>
      <DataContext.Provider value={{ data, setData }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataProvider;
