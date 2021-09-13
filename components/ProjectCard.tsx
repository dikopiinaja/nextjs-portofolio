import { FunctionComponent } from "react";
import { IProject } from "../type";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        layout="responsive"
        height="150"
        width="300"
        onClick={() => setShowDetail(true)}
      />
      <p className="my-2 text-center font-roboto">{name}</p>
      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            <Image
              layout="responsive"
              height="150"
              width="300"
              src={image_path}
              alt={name}
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-sm bg-gray-200 dark:bg-dark-200 rounded-sm"
              >
                <AiFillGithub />
                <span className="font-roboto">Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-sm bg-gray-200 dark:bg-dark-200 rounded-sm"
              >
                <AiFillProject />
                <span className="font-roboto">Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-sm md:text-xl font-roboto">
              {name}
            </h2>
            <h3 className="mb-3 font-sm font-roboto">{description}</h3>
            <div className="flex flex wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm font-roboto"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => setShowDetail(false)}
            className="absolute top-3 right-3 rounded-full p-1 focus:outline-none bg-gray-200 dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
