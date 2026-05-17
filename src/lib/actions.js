"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export const creteDestination = async (formData) => {
  

  const newDestination = Object.fromEntries(formData.entries());

  const res = await fetch("https://wanderlust-server-3.onrender.com/destinations", {
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

  const { token } = await auth.api.getToken({
    headers: await headers()
  });
 

  const destinationUpdated = Object.fromEntries(formData.entries());

  const res = await fetch(`https://wanderlust-server-3.onrender.com/destinations/${_id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
     authorization: `Bearer ${token}`,  
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



export const deleteDestination = async (id) => {
  const res = await fetch(`https://wanderlust-server-3.onrender.com/destinations/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    revalidatePath("/destinations"); 
    redirect("/destinations"); 
  }
  
  return { success: res.ok };
};

