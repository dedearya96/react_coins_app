import { Card , Button} from 'flowbite-react';
import Img from './images/dollar.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarUI from './components/Navbar';
import FooterUI from './components/Footer';

function App() {
  const [coins, setCoins] = useState([]);
  const URL = 'http://127.0.0.1:8000/coins-store';

  useEffect(() => {
    getCoins();
  }, []);

  const getCoins = () => {
    axios.get(URL).then(res => {
      console.log(res.data.data);
      setCoins(res.data.data);
    }).catch(e => {

    })
  }
  return (
    <div>
      <NavbarUI />
      <div className=" m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {coins.map((coin, i) => (
          <Card key={i}
            imgAlt=""
            imgSrc={Img}
            style={{ padding: '5px' }}
          >
            <h5 className="text-3xl font-bold tracking-tight text-green-700 text-center">
              <p>
                {coin.counts_coins}
              </p>
            </h5>
            <div className="font-normal text-gray-700 dark:text-gray-400" >
              <p style={{ textDecoration: 'line-through' }}>
                Rp. {coin.price_id}
              </p>
              <p className=' text-sm'>
                {coin.discount} %
              </p>
              <p className=' font-bold text-2xl'>
                Rp. {coin.price_id_now}
              </p>
            </div>
            <Button color="success">
              Buy
            </Button>
          </Card>
        ))}
      </div>
      <FooterUI />
    </div>


  );
}

export default App;
