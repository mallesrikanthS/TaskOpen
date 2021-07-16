import logo from './logo.svg';
import './App.css';
import MyIcon from './components/Icontest'
import OpenInv1 from './components/OpenInv1';
import OpenInv from './components/OpenInv';

import OpenTab from './components/OpenTab';
import Try from './components/Try';
import Dat from './components/Dat';
import Datcopy from './components/Datcopy';
import Tabletest from './components/Tabletest';
import Ttest from './components/Ttest';


// This are rquired for fluentui-icons to use.
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();

function App() {
  return (
    <div className="App">
      <div>
        
      <Dat />
        
      </div>
      
    </div>
  );
}

export default App;
