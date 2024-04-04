import { Header } from "../components";
import { TypeAnimation } from "react-type-animation";
const Contact = () => {
  return (
    <section className="m-2 md:m-10 mt-24 p-4 md:p-10 bg-stone-100 rounded-3xl">
      <Header title=" Olyvia Jianru" />
      <div
        className="flex justify-around items-center
       h-96 bg-white flex-col"
      >
        <div className="flex flex-row">
          <p>dengjr1509@gmail.com</p>
          <p>linkedin</p>
          <p>github</p>
        </div>
        <div className="text-2xl font-bold text-center dark:text-white dark:bg-main-dark-bg">
          <TypeAnimation
            cursor={true}
            sequence={[
              "I build data pipelines.",
              100,

              "I develop React applications.",
              100,
              "I visualize data insights.",
              50,
              "I lead cross-functional teams.",
              50,
              "I am a full-stack developer.",
              50,
              "I am UBC Alum",
              300,
              "I am a lifelong learner.",
              50,
              "I am a data scientist.",
              50,
              "I am a data engineer.",
              100,
              "I code in JavaScript.",
              100,
              "I create Node.js APIs.",
              100,
              "I build ML models.",
            ]}
            wrapper="span"
            repeat={Infinity} // repeat the sequence indefinitely
            preRenderFirstString={true} // pre-render the first string in the sequence
            speed={50}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
