import logo from './logo.svg';
import './App.css';
import MyIcon from './components/Icontest'
import OpenInv1 from './components/OpenInv1';
import OpenInv from './components/OpenInv';

import OpenTab from './components/OpenTab';
import Try from './components/Try';
import Dat from './components/Dat';

// This are rquired for fluentui-icons to use.
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();

function App() {
  return (
    <div className="App">
      <div>
        
        <OpenInv1 />
        
      </div>
      
    </div>
  );
}

export default App;
