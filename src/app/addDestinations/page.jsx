import AddDestinationForm from "@/components/AddDestinationForm";
import { Card } from "@heroui/react";
import { creteDestination } from "../lib/actions";

const AddDestinationsPage = () => {
  return (
    <div className="p-5 max-w-7xl mx-auto flex flex-col items-center ">
      <h2 className="text-2xl font-bold ">Add Your Destinations Place</h2>

      <Card>
        <AddDestinationForm
          creteDestinationAction={creteDestination}
        ></AddDestinationForm>
      </Card>
    </div>
  );
};

export default AddDestinationsPage;
