import React from "react";

type ServiceCardProps = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  name,
  description,
}) => {
  return (
    <div className="service-card flex flex-col h-full">
      <div className="shrink-0">
        <img src={icon} alt="img" width={60} height={60} />
      </div>
      <h1 className="mt-6 text-xl md:text-2xl font-bold text-gray-200">
        {name}
      </h1>
      <p className="mt-6 text-gray-300 grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
