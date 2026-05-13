
export const getDestinationsData = async () => {
  const res = await fetch("http://localhost:5000/destinations");
  if (!res.ok) {
    throw new Error("Failed to fetch destinations");
  }
  const data = await res.json();
  return data;
};

  export const getSingleDestination = async(_id) =>{
    const res = await fetch(`http://localhost:5000/destinations/${_id}`)
     if (!res.ok) {
    throw new Error("Failed to fetch destination"); 
  }
  const data = await res.json();
  return data;

 }