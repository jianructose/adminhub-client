import COVER_IMAGE from "../assets/images/mountain-cover.jpg";
import { useStateContext } from "../contexts/ContextProvider";

const colors = {
  primary: "#060606", // black
  secondary: "#e0e0e0", // light grey
  white: "#d9d9d9", // white
};

const Login = () => {
  const { isLogged, setIsLogged } = useStateContext(); // get the state from the context
  return (
    <main className="w-full h-full flex items-start">
      <div className="w-full h-full flex flex-row">
        <div className="absolute top-[20%] left-[10%] flex flex-col w-1/2">
          <h1 className="text-4xl text-slate-500 font-extrabold my-4">
            Empower Your Team's Efficiency{" "}
          </h1>
          <p className="text-xl text-slate-600 font-semibold">
            Start for free and revolutionize your team's productivity
            effortlessly
          </p>
        </div>
        <img
          src={COVER_IMAGE}
          alt="cover"
          className="w-full h-full object-left object-cover"
        />
        <div className="w-full h-full bg-[#e0e0e0] flex flex-col">
          <hi className="text-4xl text-slate-500 font-extrabold my-4">Login</hi>
        </div>
      </div>
    </main>
  );
};

export default Login;
