import { FC } from "react";
import AddShipmentForm from "../../components/Forms/AddShipment/AddShipmentForm";

const Homepage: FC = () => {
  return (
    <div
      id="homepage"
      className="flex flex-col items-center justify-center h-screen w-screen"
    >
      <h1 id="add-shipment-container" className="text-4xl font-bold">
        <AddShipmentForm />
      </h1>
    </div>
  );
};

export default Homepage;
