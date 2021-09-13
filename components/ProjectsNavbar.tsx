import { FunctionComponent } from "react";
import { Category } from "../type";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "cursor-pointer hover:text-black capitalize";
  if (active === value) className += " text-black";
  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="space-x-3 py-2 overflow-x-auto flex list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="vue" {...props} />
      <NavItem value="laravel" {...props} />
      <NavItem value="codeigniter" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="java" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
