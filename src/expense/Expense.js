import { useEffect, useState } from "react";

export default function Expenses() {
  const [films, setFilms] = useState([]);
  const [startShips, setStartShips] = useState([]);
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    const apiResult  = async() => {
      const response = await fetch(`${process.env.REACT_APP_STARWAR_API}`,{
        'type': 'GET',
        'content-type': 'application/json'
      })
  
      const data = await response.json();
      const { vehicles, films, starships } = data;
      console.log(vehicles, films, starships );
      setFilms(films); 
      setStartShips(starships); 
      setVehicle(vehicles);
      // console.log('data =>', data);

    }
    apiResult();
  },[])

   return (
     <main style={{ padding: "1rem 0" }}>
       <h2>Expenses</h2>
     </main>
   );
 }