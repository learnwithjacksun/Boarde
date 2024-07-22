import { Link } from "react-router-dom";
import Icon from "./Icon";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <>
      <header className="py-6 flex flex-col gap-4">
          <Link to={-1}>
            <div className="h-14 w-14 flex-center border rounded-full">
              <Icon label="arrow_back" size="text-2xl" />
            </div>
          </Link>
        <h1 className="text-2xl font-semibold">{title}</h1>
      </header>
    </>
  );
};

export default Header;
