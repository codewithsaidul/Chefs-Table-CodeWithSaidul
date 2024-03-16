

import { useState } from 'react';
import './App.css'
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import OurRecipe from './components/ourRecipe/OurRecipe';
import { toast } from 'react-toastify';

function App() {

   
  const [wantToCooking, setWantToCooking] = useState([]);
  const [prepareToCooking, setPrepareToCooking] = useState([]);

  const handleCooking = (wantCooking, id) => {
    const isExist = wantToCooking.filter((item) => item.recipe_id === id);

    if (isExist.length === 0) {
      
      const newWantCooking = [...wantToCooking, wantCooking];
      setWantToCooking(newWantCooking);
    } else {
      toast("Already Exsited !"); 
    }

   
  };

  const prepareCooking = (id, prepare) => {
    const newPrepare = [...prepareToCooking, prepare];
    setPrepareToCooking(newPrepare);
    const remian = wantToCooking.filter(rem => rem.recipe_id !== id
    );

    setWantToCooking(remian);

  };

  return (
    <>
      <div className="w-full lg:w-[90%] max-w-[1320px] mx-auto">
        <Header></Header>

        <Banner></Banner>

        <OurRecipe
          wantToCooking={wantToCooking}
          handleCooking={handleCooking}
          prepareCooking={prepareCooking}
          prepareToCooking={prepareToCooking}
        ></OurRecipe>
      </div>
    </>
  );
}

export default App
