import { FunctionComponent } from "react";
import { IService } from "../type";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  const creatMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="p-2 flex items-center space-x-4 text-sm font-roboto">
      <Icon className="w-12 h-12 text-brown dark:text-dark-400" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={creatMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
