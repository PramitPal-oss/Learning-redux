/** @format */

import { useSelector } from 'react-redux/es/hooks/useSelector';

function IcreCreamView() {
  const TotalNoOfIceCream = useSelector(
    (state) => state.iceCream.numOfIceCream
  );

  return (
    <div>
      <h2>Number of Ice Creams {TotalNoOfIceCream}</h2>
      <button>Order Ice cream</button>
      <button>Restock Ice cream</button>
    </div>
  );
}

export default IcreCreamView;
