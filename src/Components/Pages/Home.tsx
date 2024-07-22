import { Link } from "react-router-dom";
import Box from "../UI/Box";
import Heading from "../UI/Heading";
import Icon from "../UI/Icon";
import { useContext } from "react";
import { DataContext } from "../../Contexts/DataProvider";

const Home: React.FC = () => {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    return <div>Error: DataContext not found</div>;
  }

  const { data } = dataContext;

  return (
    <>
      <Heading />
      <div className="mb-6">
        <ul className="grid md:grid-cols-2 gap-2">
          {data.map((item) => (
            <Box key={item.id} {...item} />
          ))}
          <Link to="/add-category">
            <div className="p-6 min-h-[230px] bg-secondary rounded-3xl border flex-center flex-col gap-2">
              <Icon label="add" size="text-3xl font-light" color="text-subtext" />
              <span className="text-subtext font-semibold">Add Category</span>
            </div>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Home;
