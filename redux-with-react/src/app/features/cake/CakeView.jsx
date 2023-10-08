/** @format */

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { orderd, restocked } from './cakeSlice';
import { useState } from 'react';

function CakeView() {
  const [cakeOrder, setCakeOrder] = useState(1);
  const [cakeRestock, setCakeRestock] = useState(1);

  const TotalNoOfCakes = useSelector((state) => state.cake.numOfCakes);

  const dispathch = useDispatch();

  return (
    <div>
      <h2>Number of cakes {TotalNoOfCakes} </h2>
      <input
        type='number'
        max={5}
        min={1}
        onChange={(e) => setCakeOrder(+e.target.value)}
        value={cakeOrder}
      />
      <button onClick={() => dispathch(orderd(cakeOrder))}>Order cake</button>
      <input
        type='number'
        max={5}
        min={1}
        onChange={(e) => setCakeRestock(+e.target.value)}
        value={cakeRestock}
      />
      <button onClick={() => dispathch(restocked(cakeRestock))}>
        Restock cakes
      </button>
    </div>
  );
}

export default CakeView;
