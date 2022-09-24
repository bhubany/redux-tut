import logo from './logo.svg';
import './App.css';
import User from './Components/User';
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      {/* <h1>FROM APP</h1> */}
      {/* <User data={{name:"Bhuban", address:"DPK-23"}}></User> */}
      <HeaderContainer></HeaderContainer>
      <HomeContainer></HomeContainer>
    </div>
  );
}

export default App;
