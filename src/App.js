import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import FullName from './profile/components/fullname';
import Profession from './profile/components/profession';
import Bio from './profile/components/bio';
import Photo from './profile/components/R.png';

function App() {
  let msg = "HELLO"
   const alertMe=()=> {
     alert(msg)
   }

  return (
    <div className="App">
      <div >
<FullName FullName="Eya Abou Shamat" alertMe={alertMe}>
  <div className='imag'>
<img src= {Photo} alt="prof"/>
</div>
</FullName> 
      </div>
      <div>
<Bio Bio="bio"
     Date="20/10/1990"
     Adress="Ben Arous,tunis"
     Mobile="+21600000"
     Mail="hello2022@gmail.com"></Bio>  
      </div>
      <div>
<Profession Profession="Profession"
Experrience="Luckily, I work at a company that sets a high standard for innovation, collaboration and productivity."></Profession>
      </div>
    </div>
  );
}



export default App;


