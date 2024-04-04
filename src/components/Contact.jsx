import { Header } from "../components";
import { TypeAnimation } from "react-type-animation";
import { MdMarkEmailUnread } from "react-icons/md";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import IOS_AVATAR from "../../public/ios-avatar.jpg";

const Contact = () => {
  return (
    <section className="m-2 md:m-10 mt-24 p-4 md:p-10 bg-stone-100 rounded-3xl relative">
      <Header title=" Olyvia Jianru" />
      <div className="flex gap-20 items-center h-96 bg-white flex-col py-10">
        <ul className="flex flex-row font-semibold text-lg mb-7 dark:text-white dark:bg-main-dark-bg">
          <li className="mr-4 flex flex-col gap-2 hover:text-blue-500">
            <MdMarkEmailUnread />
            <a href="mailto: dengjr1509@gmail.com">dengjr1509@gmail.com</a>
          </li>
          <li className="mr-4 flex flex-col gap-2 hover:text-blue-500">
            <LuLinkedin />
            <a href="https://www.linkedin.com/in/jianructose/">
              linkedin.com/jianructose
            </a>
          </li>
          <li className="mr-4 flex flex-col gap-2 hover:text-blue-500">
            <FiGithub />
            <a href="https://github.com/jianructose">github.com/jianructose</a>
          </li>
        </ul>

        <div className="text-2xl font-bold text-center dark:text-white dark:bg-main-dark-bg flex flex-col items-center justify-center">
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
            wrapper="div"
            repeat={Infinity} // repeat the sequence indefinitely
            preRenderFirstString={true} // pre-render the first string in the sequence
            speed={50}
          />
        </div>
      </div>
      <img
        src={IOS_AVATAR}
        alt="avatar ios"
        className="absolute w-1/4 left-4 bottom-4 rounded-full transform rotate-150"
      />
    </section>
  );
};

export default Contact;
