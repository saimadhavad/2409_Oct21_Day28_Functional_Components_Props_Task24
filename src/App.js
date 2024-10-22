import logo from './logo.svg';
import './App.css';

import Player from './components/Player';

function App() {
  return (
    <div className="App">
      <div className="withOutFunctionComponents">
      <h1 className="fontChange">With out Functional Components</h1> 
      <h1 className='heading'>INDIA TEAM A & B</h1>
        <div className="withoutFunComponents">
        
        <div className="playerDiv">
        <img className="imgIndiaAB" src="./images/shubman-gill.webp"></img>
        <h2>Name : Shubman Gill</h2>
        <h3>Team : India A</h3>
        <h3>Role : Captain</h3>
        </div>
        <div className="playerDiv">
        <img className="imgIndiaAB" src="./images/Abhimanyu Easwaran.webp"></img>
        <h2>Name : Abhimanyu Easwaran</h2>
        <h3>Team : India B</h3>
        <h3>Role : Captain</h3>
        </div>
        <div>

        </div>
        </div>
        </div>
        <div className="withFunctionComponents">
        <h1 className="fontChange">With Functional Components</h1> 
        <h1 className='heading'>IPL T20 TEAMS</h1>
        <div className="withFunComponents">
        <Player name="Ruturaj Gaikwad" team="Chennai Super Kings (CSK)" role="Batter" imageURL="./images/CSKImage.png"></Player>
        <Player name="Rishabh Pant" team="Delhi Capitals (DC)" role="Wicketkeeper Batter" imageURL="./images/DCImage.png"></Player>
        <Player name="Shubman Gill" team="Gujarat Titans (GT)" role="Batter" imageURL="./images/GTImage.png"></Player>
        <Player name="Shreyas Iyer" team="Kolkata Knight Riders (KKR)" role="Batter" imageURL="./images/KKRImage.png"></Player>
        <Player name="KL Rahul" team="Lucknow Super Giants (LSG)" role="Wicketkeeper Batter" imageURL="./images/LSGImage.png"></Player>
        <Player name="Hardik Pandya" team="Mumbai Indians (MI)" role="All-rounder" imageURL="./images/MIImage.png"></Player>
        <Player name="Shikhar Dhawan" team="Punjab Kings (PBKS)" role="Batter" imageURL="./images/PKImage.png"></Player>
        <Player name="Sanju Samson" team="Rajasthan Royals (RR)" role="Wicketkeeper Batter" imageURL="./images/RRImage.png"></Player>
        <Player name="Faf du Plessis" team="Royal Challengers Bengaluru (RCB)" role="Batter" imageURL="./images/RCBImage.png"></Player>
        <Player name="Pat Cummins" team="Sunrisers Hyderabad (SRH)" role="Bowler" imageURL="./images/SRHImage.png"></Player>
          
        </div>

      </div>
     
    </div>
  );
}

export default App;
