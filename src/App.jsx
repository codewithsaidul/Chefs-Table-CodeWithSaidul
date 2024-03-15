
import './App.css'
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import OurRecipe from './components/ourRecipe/OurRecipe';

function App() {


  return (
    <>
      <div className="w-full lg:w-[90%] max-w-[1320px] mx-auto">
        <Header></Header>

        <Banner></Banner>

        <OurRecipe></OurRecipe>
      </div>
    </>
  );
}

export default App
