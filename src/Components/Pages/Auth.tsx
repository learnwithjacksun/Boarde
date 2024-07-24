import Brand from "../UI/Brand";
import AuthForm from "../UI/AuthForm";
import Socials from "../UI/Socials";
import Welcome from "../UI/Welcome";

const Auth = () => {
  return (
    <>
      <div>
        <div className="text-center md:max-w-[480px] max-w-[90%] mx-auto mt-16">
          <Brand />
          <Welcome/>
          <AuthForm />
          <Socials />
        </div>
      </div>
    </>
  );
};

export default Auth;
