import './styles/tours.css';
import Loading from './loading';
import Error from './error';
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

  function load(){
    fetch("https://course-api.com/react-tours-project")
      .then((resp)=>{
        setTimeout(() => {setIsLoading(false)}, 3400);
        if(resp.ok){
          return resp.json();
        }
        setError(true);
      })
      .then((tours)=>{
        setTours(tours.map(tour=>{return {...tour, readMore: false}}));
      })
      .catch((error)=>{
        setTimeout(() => {setIsLoading(false)}, 3400);
        setError(true);
        console.log(error);
      });
  }

  useEffect(() => {
    load()
  }, []);

  function deleteTour(id){
    setTours(Tours.filter(tour=>tour.id !== id));
  }
  
  function readMore(id){
    setTours(Tours.map(tour=>{
      const {name, info, image, price, readMore} = tour;
      return (tour.id !== id) ? tour : {id: tour.id, name, info, image, price, readMore: !readMore}
    }))
  }

  if(isLoading) {
    return (
      <Loading/>
    );
  }
  else if(Error) {
    return (
      <Error/>
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
                  <p>{(tour.readMore) ? tour.info : (tour.info).substring(0, 200)}{(tour.readMore) ? <span onClick={()=>readMore(tour.id)}>...<span>Read Less</span></span>: <span onClick={()=>readMore(tour.id)}>...<span>Read More</span></span>}</p>
                </div>
                <button onClick={()=>deleteTour(tour.id)}>Not Interested</button>
              </div>
            )
          })
        }
        <button onClick={()=>load()} className='reload'>Reload Tours</button>
      </div>
    );
  }
}

export default App;
