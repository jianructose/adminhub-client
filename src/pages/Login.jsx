// import COVER_IMAGE from "../assets/images/mountain-cover.jpg";
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const colors = {
  primary: "#060606", // black
  secondary: "#e0e0e0", // light grey
  white: "#d9d9d9", // white
};

const Login = () => {
  const { isLogged, setIsLogged } = useStateContext(); // get the state from the context

  const handleLogin = () => {
    setIsLogged(true);
  };
  return (
    <main className="  bg-white overflow-hidden">
      <section className="hero bg-hero bg-center bg-cover bg-no-repeat md:rounded-bl-[300px] z-20 relative md:flex gap-1 md:flex-row">
        <div className=" p-10 my-10 md:w-1/2 flex flex-col items-start justify-center h-1/2 md:h-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 py-4 mb-5">
            Empower Your Team's Efficiency{" "}
          </h1>
          <h4 className="text-lg md:text-2xl text-slate-700 font-semibold">
            Start for free and revolutionize your team's productivity
            effortlessly
          </h4>
        </div>

        <div className="backdrop-blur-md  md:w-1/2 h-1/2 md:h-full p-10 flex flex-col justify-between">
          {/* <h1>AdminHub</h1> */}

          <form className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-5">AdminHub</h3>
              <p className=" text-base">
                Welcome Back! Please enter your details.
              </p>
            </div>

            <div className="w-full flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full py-5 my-2 border-b placeholder-slate-900 bg-transparent border-black outline-none focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full py-5 my-2 border-b placeholder-slate-900 bg-transparent border-black outline-none focus:outline-none"
              />
            </div>

            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <p className="text-sm">Remember me</p>
              </div>
              <p className="text-sm font-medium cursor-pointer hover:underline hover:underline-offset-4 whitespace-nowrap">
                Forgot Password?
              </p>
            </div>

            <div className="w-full flex flex-col">
              <Link
                className="bg-black text-white my-2 font-semibold py-2.5 px-5 rounded-lg flex items-center justify-center hover:bg-opacity-60"
                to="/"
                onClick={handleLogin}
              >
                Log in
              </Link>
              <button className="bg-white text-black my-2 font-semibold border border-black py-2.5 px-5 rounded-lg flex items-center justify-center hover:bg-opacity-60">
                Register
              </button>
            </div>

            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-lg absolute p-3 ">or</p>
            </div>

            <button className="bg-white text-black/50 my-2 font-semibold border border-black py-2.5 px-4 rounded-lg flex items-center justify-center hover:bg-opacity-60">
              <FcGoogle className="mr-2 h-6 w-6" />
              Sign In With Google
            </button>
          </form>

          <div className="w-full text-white flex items-center justify-center">
            <p className="text-sm font-normal">
              Don't have an account?{" "}
              <span className="font-semibold underline underline-offset-5">
                Sign up for free
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
