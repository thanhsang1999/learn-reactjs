import { useEffect, useState } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import Header from './components/Header';
import AlbumFeatures from './features/album';
import CouterFeatures from './features/Couter';
import Todofeatures from './features/todo';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const listProduct = await productApi.getAll(params);
      console.log(listProduct);
    };

    fetchProducts();
  }, []);
  const [showClock, setShowClock] = useState(true);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/albums" component={AlbumFeatures} />
        <Route path="/todos" component={Todofeatures} />
        <Route path="/" component={CouterFeatures} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
