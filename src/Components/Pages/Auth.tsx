import Brand from "../UI/Brand";
import AuthForm from "../UI/AuthForm";
import Socials from "../UI/Socials";

const Auth = () => {
  return (
    <>
      <div>
        <div className="text-center md:max-w-[480px] max-w-[90%] mx-auto mt-16">
          <Brand />
          <div className="my-8 ">
            <h1 className="text-xl font-semibold">
              Welcome on{" "}
              <span className="font-semibold text-subtext">Boarde! 👋</span>
            </h1>
            <p className="text-sm text-subtext">
              Keep tabs of your daily activities...
            </p>
          </div>
          <AuthForm />
          <Socials />
        </div>
      </div>
    </>
  );
};

export default Auth;
