"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const creteDestination = async (formData) => {
  

  const newDestination = Object.fromEntries(formData.entries());

  const res = await fetch("http://localhost:5000/destination", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDestination),
  });

  const data = await res.json();

  return data;
};

export const updatedDestination = async (formData,_id) => {
 

  const destinationUpdated = Object.fromEntries(formData.entries());

  const res = await fetch(`http://localhost:5000/destinations/${_id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(destinationUpdated),
  });

  const data = await res.json();
  if(data.modifiedCount > 0){
    revalidatePath('/destinations');
    redirect(`/destinations/${_id}`);
  }

  return data;
};


