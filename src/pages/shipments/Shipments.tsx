import { FC } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";

const Shipments: FC = () => {
  const { shipments } = useGlobalContext();
  return (
    <div
      id="shipments"
      className="flex flex-col items-center justify-center h-screen w-screen"
    >
      <div className="container flex flex-col items-start justify-start mx-auto p-16 bg-[rgba(255,255,255,0.2)] backdrop-blur-lg rounded-tr-2xl rounded-bl-2xl w-full text-xl 2xl:min-w-2xl text-black max-h-[80vh] overflow-y-auto py-10 lg:py-14 lg:hide-scrollbar">
        <h1 className="text-4xl font-bold mb-4 text-center w-full">
          Shipments
        </h1>
        {shipments.length > 0 ? (
          <table className="table-auto border-collapse border border-gray-400 w-full max-sm:text-sm">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">
                  Receiver Name
                </th>
                <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">
                  Weight (Kg)
                </th>
                <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">
                  Box Color
                </th>
                <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">
                  Destination Country
                </th>
                <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">
                  Shipping Cost (INR)
                </th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((shipment) => (
                <tr key={shipment.id}>
                  <td className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">
                    {shipment.receiverName}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">
                    {shipment.weight}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2 flex gap-x-2 items-center justify-center">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: shipment.boxColor }}
                    ></div>
                    {shipment?.boxColor || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">
                    {shipment.destinationCountry}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">
                    {shipment.shippingCost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
