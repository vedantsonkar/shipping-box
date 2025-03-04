import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useCallback,
} from "react";

export interface Shipment {
  id: string;
  receiverName: string;
  weight: number;
  boxColor?: string;
  destinationCountry: string;
  shippingCost: number | string;
}

interface GlobalContextProps {
  shipments: Shipment[];
  setShipments: React.Dispatch<React.SetStateAction<Shipment[]>>;
  addShipment: (shipment: Shipment) => void;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [shipments, setShipments] = useState<Shipment[]>([]);

  const addShipment = useCallback((shipment: Shipment) => {
    setShipments((prev) => [...prev, shipment]);
  }, []);

  return (
    <GlobalContext.Provider value={{ shipments, setShipments, addShipment }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for consuming context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
