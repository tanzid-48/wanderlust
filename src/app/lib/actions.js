
export const creteDestination = async (formData) => {
  "use server";

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
