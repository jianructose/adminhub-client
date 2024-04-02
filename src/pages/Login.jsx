import COVER_IMAGE from "../assets/images/mountain-cover.jpg";

const colors = {
  primary: "#060606", // black
  secondary: "#e0e0e0", // light grey
  white: "#d9d9d9", // white
};

const Login = () => {
  return (
    <main className="w-full min-h-screen flex items-start">
      <div className="w-1/2 h-full flex flex-col">
        <img
          src={COVER_IMAGE}
          alt="cover"
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
};

export default Login;
