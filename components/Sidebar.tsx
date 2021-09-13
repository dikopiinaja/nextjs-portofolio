import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation, GoFile } from "react-icons/go";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <img
        src="/profile.jpg"
        alt="alt avatar"
        className="w-32 h-32 fill mx-auto rounded-full"
      />
      <h1 className="my-4 text-3xl font-large tracking-wider font-kausan">
        <span className="text-brown dark:text-dark-400">K</span>
        unsarifan
      </h1>
      <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 dark:bg-black-400 rounded-full font-roboto">
        Web Developer
      </p>
      <a
        className="flex item-center justify-center px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 dark:bg-black-400 rounded-full font-roboto"
        download="name"
      >
        <GoFile className="w-6 h-6 " /> Download Resume
      </a>
      {/* Social Icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 dark:text-dark-400 text-yellow-700 md:w-full mx-auto">
        <a href="https://www.instagram.com/ifan_404/">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/kun-sarifan-7709ab165/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/dikopiinaja">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* Adress */}
      <div
        className="my-5 py-4 bg-gray-200 dark:bg-dark-200 dark:bg-black-400"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex item-center justify-center space-x-3 font-roboto">
          <GoLocation />
          <span className="text-sm">Buntu, Kroya Cilacap</span>
        </div>
        <p className="my-2 font-roboto">kunsarifan18@gmail.com</p>
        <p className="my-2 font-roboto">081211981268</p>
      </div>
      {/* Email Button */}
      <button
        className="py-2 my-2 text-white bg-gradient-to-r from-yellow-600 to-yellow-800 w-8/12 dark:from-dark-400 dark:to-dark-200 rounded-full focus:outline-none font-roboto"
        onClick={() => window.open("mailto:kunsarifan18@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="text-white py-2 my-2 bg-gradient-to-r from-yellow-600 to-yellow-800 w-8/12 dark:from-dark-400 dark:to-dark-200 rounded-full font-roboto"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
