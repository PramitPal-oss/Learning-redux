/** @format */

import { useSelector } from 'react-redux/es/hooks/useSelector';

function CakeView() {
  const TotalNoOfCakes = useSelector((state) => state.cake.numOfCakes);

  return (
    <div>
      <h2>Number of cakes {TotalNoOfCakes} </h2>
      <button>Order cake</button>
      <button>Restock cakes</button>
    </div>
  );
}

export default CakeView;
