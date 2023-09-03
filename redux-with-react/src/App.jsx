/** @format */

import CakeView from './app/features/cake/CakeView';
import IcreCreamView from './app/features/icecream/IcreCreamView';
import UserSliceView from './app/features/user/UserSliceView';

function App() {
  return (
    <div className='app'>
      <CakeView />
      <IcreCreamView />
      <UserSliceView />
    </div>
  );
}

export default App;
