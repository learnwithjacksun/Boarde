import { useState } from "react";
import Icon from "./Icon";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthProvider";

const AuthForm: React.FC = () => {
  const [name, setName] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(name);
    navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-[90%] mx-auto gap-2">
      <Input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name: e.g Scorpion"
      />
      <button type="submit" className="btn-primary px-4 h-12 rounded-xl">
        <span>Continue</span>
        <Icon label="arrow_forward" color="text-white" />
      </button>
    </form>
  );
};

export default AuthForm;
