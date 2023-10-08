/** @format */

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { ordered, restocked } from '../icecream/icecreamSlice';
import { useState } from 'react';

function IcreCreamView() {
  const [icecreamOrder, setIceCreamOrder] = useState(1);
  const [iceCreamRestock, setIceCreamRestocked] = useState(1);

  const TotalNoOfIceCream = useSelector(
    (state) => state.iceCream.numOfIceCream
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Ice Creams {TotalNoOfIceCream}</h2>
      <input
        type='number'
        max={5}
        min={1}
        onChange={(e) => setIceCreamOrder(+e.target.value)}
        value={icecreamOrder}
      />
      <button onClick={() => dispatch(ordered(iceCreamRestock))}>
        Order Ice cream
      </button>
      <input
        type='number'
        max={5}
        min={1}
        onChange={(e) => setIceCreamRestocked(+e.target.value)}
        value={iceCreamRestock}
      />
      <button onClick={() => dispatch(restocked(iceCreamRestock))}>
        Restock Ice cream
      </button>
    </div>
  );
}

export default IcreCreamView;
