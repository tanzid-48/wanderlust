
export const getDestinationsData = async () => {
  const res = await fetch("https://wanderlust-server-3.onrender.com/destinations");
  if (!res.ok) {
    throw new Error("Failed to fetch destinations");
  }
  const data = await res.json();
  return data;
};

  export const getSingleDestination = async(_id, token) =>{
    const res = await fetch(`https://wanderlust-server-3.onrender.com/destinations/${_id}`,{
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
     if (!res.ok) {
    throw new Error("Failed to fetch destination"); 
  }
  const data = await res.json();
  return data;

 }