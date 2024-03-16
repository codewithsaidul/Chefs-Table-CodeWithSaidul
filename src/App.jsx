import { useState } from 'react';
import './App.css'
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import OurRecipe from './components/ourRecipe/OurRecipe';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

   
  const [wantToCooking, setWantToCooking] = useState([]);
  const [prepareToCooking, setPrepareToCooking] = useState([]);
  const [time, setTime] = useState(0);
  const [calori, setCalories] = useState(0)

  const handleCooking = (wantCooking, id) => {
    const isExist = wantToCooking.filter((item) => item.recipe_id === id);

    if (isExist.length === 0) {
      
      const newWantCooking = [...wantToCooking, wantCooking];
      setWantToCooking(newWantCooking);
    } else {
      toast("Already Exist!"); 
    }

   
  };

  const prepareCooking = (id, prepare, preparing_time, calories) => {
    const newPrepare = [...prepareToCooking, prepare];
    setPrepareToCooking(newPrepare);
    const remian = wantToCooking.filter((rem) => rem.recipe_id !== id);

    setWantToCooking(remian);

    const newTime = time + parseInt(preparing_time);
    setTime(newTime);

    const newCalories = calori + parseInt(calories);
    setCalories(newCalories);
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
          time={time}
          calori={calori}
        ></OurRecipe>
        <ToastContainer />
      </div>
    </>
  );
}

export default App
