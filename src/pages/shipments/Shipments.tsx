import { FC } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import ShipmentsTable from "../../components/ShipmentsTable/ShipmentsTable";

const Shipments: FC = () => {
  const { shipments } = useGlobalContext();
  return (
    <div
      id="shipments"
      className="flex flex-col items-center justify-center h-screen w-screen"
    >
      <div className="container flex flex-col items-start justify-start mx-auto p-6 sm:p-16 bg-[rgba(255,255,255,0.2)] backdrop-blur-lg rounded-tr-2xl rounded-bl-2xl w-full text-xl 2xl:min-w-2xl text-black max-h-[80vh] overflow-y-auto py-10 lg:py-14 lg:hide-scrollbar">
        <h1 className="text-4xl font-bold mb-4 text-center w-full">
          Shipments
        </h1>
        {shipments.length > 0 ? (
          <ShipmentsTable shipments={shipments} />
        ) : (
          <p className="text-xl font-bold text-center w-full">
            No shipments available
          </p>
        )}
      </div>
    </div>
  );
};

export default Shipments;
