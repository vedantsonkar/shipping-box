import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidV4 } from "uuid";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import { COUNTRY_SHIPPING_COST } from "../../../constants";
import { useNavigate } from "react-router";

type FormValues = {
  receiverName: string;
  weight: number;
  boxColor: string;
  destinationCountry: string;
};

const AddShipmentForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { addShipment } = useGlobalContext();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const id = uuidV4();
    const newShipment = {
      ...data,
      shippingCost:
        COUNTRY_SHIPPING_COST?.[
          data.destinationCountry as keyof typeof COUNTRY_SHIPPING_COST
        ] || "N/A",
      id,
    };
    addShipment(newShipment);
    navigate("/shipments");
  };

  return (
    <div className="container mx-auto p-16 bg-[rgba(255,255,255,0.2)] backdrop-blur-lg rounded-tr-2xl rounded-bl-2xl w-full text-xl 2xl:min-w-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
        <h2 className="text-black text-2xl 2xl:text-4xl text-center">
          Add Shipment
        </h2>
        <div>
          <label
            htmlFor="receiverName"
            className="block font-medium text-black"
          >
            Receiver Name
          </label>
          <input
            id="receiverName"
            type="text"
            {...register("receiverName", {
              required: "Receiver Name is required",
            })}
            className="mt-1 block w-full p-2 border border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-black text-black"
            title="Receiver Name"
            aria-required="true"
          />
          {errors.receiverName && (
            <p className="text-red-500 text-sm font-medium">
              {errors.receiverName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="weight" className="block font-medium text-black">
            Weight (Kg)
          </label>
          <input
            id="weight"
            type="number"
            step="0.0001"
            {...register("weight", {
              required: "Weight is required",
              validate: (value) => {
                if (value <= 0) {
                  return "Weight must be a positive number";
                }
                if (value < 0.01) {
                  return "Weight too low";
                }
                return true;
              },
            })}
            className="mt-1 block w-full p-2 border border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-black text-black"
            title="Weight (kg)"
            aria-required="true"
          />
          {errors.weight && (
            <p className="text-red-500 text-sm font-medium">
              {errors.weight.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="boxColor" className="block font-medium text-black">
            Box Color
          </label>
          <input
            id="boxColor"
            type="color"
            {...register("boxColor")}
            className="mt-1 block w-full p-2 border border-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer h-14 rounded-2xl"
            title="Box Color"
            aria-required="false"
            defaultValue="#997f66"
          />
        </div>

        <div className="text-black">
          <label
            htmlFor="destinationCountry"
            className="block font-medium text-black"
          >
            Destination Country
          </label>
          <select
            id="destinationCountry"
            defaultValue={"Sweden"}
            {...register("destinationCountry", {
              required: "Destination Country is required",
            })}
            className="mt-1 block w-full p-2 border border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-black text-black"
            title="Destination Country"
            aria-required="true"
          >
            <option value="Sweden">Sweden (7.35 INR)</option>
            <option value="China">China (11.53 INR)</option>
            <option value="Brazil">Brazil (15.63 INR)</option>
            <option value="Australia">Australia (50.09 INR)</option>
          </select>
          {errors.destinationCountry && (
            <p className="text-red-500 text-sm font-medium">
              {errors.destinationCountry.message}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="mt-4 w-full bg-purple-500 text-white p-2 rounded-2xl cursor-pointer hover:bg-purple-600 transition-all drop-shadow-lg hover:drop-shadow-xl"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddShipmentForm;
