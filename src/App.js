import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [Tours, setTours] = useState([
    {
      id: 1,
      name: 'Tour',
      info: 'Info',
      image: 'Tour Image',
      price: 'Tour Price'
    }
  ]);

  useEffect(() => {
    fetch("https://course-api.com/react-tours-project")
      .then((resp)=>{
        setIsLoading(false);
        if(resp.ok){
          return resp.json();
        }
        setIsLoading(false);
        setError(true);
      })
      .then((tours)=>{
        setTours(tours);
      })
      .catch((error)=>{
        setIsLoading(false);
        setError(true);
      });

  }, []);

  function deleteTour(id){
    setTours(Tours.filter(tour=>tour.id !== id));
  }

  if(isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }
  else if(Error) {
    return (
      <h1>Error... Reload</h1>
    );
  }
  else{
    return (
      <div className="Tours">
        {
          Tours.map(tour => {
            return(
              <div key={tour.id} className="tour">
                <img src={tour.image} alt={tour.name}/>
                <div className='text'>
                  <div>
                    <h4>{tour.name}</h4>
                    <h4>${tour.price}</h4>
                  </div>
                  <p>{tour.info}</p>
                </div>
                <button onClick={()=>deleteTour(tour.id)}>Not Interested</button>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
