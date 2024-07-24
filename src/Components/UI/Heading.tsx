import { useAuth } from "../../Contexts/AuthProvider";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const Heading: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-between py-6">
      <div className="w-[70%]">
        <p className="font-medium text-sm md:text-[16px] text-subtext">Hello, {user} 👋</p>
        <h1 className="md:text-3xl text-2xl font-bold">What do you have to do?</h1>
      </div>

      <Link to="/">
        <div className="flex-center h-14 w-14 border rounded-full">
          <Icon label="logout" size="text-xl" />
        </div>
      </Link>
    </div>
  );
};

export default Heading;
