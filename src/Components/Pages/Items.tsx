import { useContext, useState } from "react";
import { DataContext } from "../../Contexts/DataProvider";
import Header from "../UI/Header";
import { useParams } from "react-router-dom";
import Icon from "../UI/Icon";



const Items: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const { id } = useParams(); 
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    return <div>Error: DataContext not found</div>;
  }

  const { data } = dataContext;
  const category = data.find((category) => category.id === id);

  if (!category) {
    return <div>Category not found</div>;
  }

  const { items } = category;
  const completedCount = items.filter((item) => item.completed).length;

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <>
      <Header title="Preview" />
      <div>
        <div className="relative p-6 border rounded-3xl bg-secondary flex flex-col gap-4">
          <h2 className="md:text-2xl text-xl">
            {category.title}
          </h2>
          <div>
            <div className="text-subtext text-sm font-medium">Completed items</div>
            <div className="font-semibold text-2xl">
              {completedCount}/{items.length}
            </div>
          </div>
          {showForm ? (
            <button
              onClick={toggleForm}
              className="absolute -bottom-5 flex-center right-5 btn h-14 w-auto px-6 bg-white border rounded-full shadow-md"
            >
              <Icon label="close" size="text-xl" color="text-subtext" />
              <span className="text-subtext text-sm">Cancel</span>
            </button>
          ) : (
            <button
              onClick={toggleForm}
              className="absolute -bottom-5 flex-center right-5 btn h-14 w-auto px-6 bg-white border rounded-full shadow-md"
            >
              <Icon label="add" size="text-xl" color="text-subtext" />
              <span className="text-subtext text-sm">Add Item</span>
            </button>
          )}
        </div>

        {showForm && (
          <form className="flex my-8 border h-[50px] gap-2 rounded-2xl overflow-hidden p-1">
            <input
              type="text"
              name="item"
              id="item"
              placeholder="Enter item e.g walk my dog"
              className="flex-1 pl-4 text-sm focus:bg-secondary rounded-xl"
              autoComplete="off"
            />
            <button type="submit" className="btn-primary rounded-xl px-4">
              <span>Add</span>
              <Icon label="add" color="text-white" />
            </button>
          </form>
        )}
        <ul className="my-8">
          {items.map((item) => (
            <li
              key={item.id}
              className="py-2 border-b last:border-none flex items-center gap-4"
            >
              <div className="border h-14 w-14 flex-center rounded-full">
                <Icon
                  label={item.completed ? "check" : ""}
                  color="text-subtext"
                  size="text-2xl"
                />
              </div>
              <div
                className={`flex-1 ${
                  item.completed && "line-through text-subtext"
                }`}
              >
                {item.name}
              </div>
              <div className="h-14 w-14 flex-center">
                <Icon label="close" size="text-2xl" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Items;
