import { Link } from "react-router-dom";
import Icon from "./Icon";

interface Props {
  id: string | number;
  title: string;
  items: Item[];
}
interface Item {
  name: string;
  completed: boolean;
}

const Box: React.FC<Props> = ({ id, title, items }) => {
  return (
    <>
      <div className="p-6 rounded-3xl border flex flex-col justify-between gap-4 shadow-md">
        <h2 className="md:text-3xl text-2xl">{title}</h2>
        <div>
          <h1 className="md:text-4xl text-2xl font-semibold">{items.length}</h1>
          <p className="text-subtext text-sm">Items</p>
        </div>

        <div className="flex justify-between items-center">
          <button className="h-16 w-16 bg-secondary border flex-center rounded-full">
            <Icon label="more_vert" />
          </button>

          <Link
            className="h-16 w-16 bg-secondary border flex-center rounded-full"
            to={`/${id}`}
          >
            <Icon label="add" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Box;
