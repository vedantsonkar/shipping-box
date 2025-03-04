import { FC } from "react";
import { Shipment } from "../../contexts/GlobalContext";

interface ShipmentsTablePropTypes {
  shipments: Shipment[];
}

const ShipmentsTable: FC<ShipmentsTablePropTypes> = ({ shipments }) => {
  return (
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
  );
};

export default ShipmentsTable;
