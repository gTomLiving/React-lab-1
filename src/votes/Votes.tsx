import './Votes.css';
import {useState} from 'react';


function Votes() {
    const [chocPoll, setChocPoll] = useState(0);
    const [vanPoll, setVanPoll] = useState(0);
    const [strawPoll, setStrawPoll] = useState(0);
    const [totalPoll, setTotalPoll] = useState(0);
    
    
    let chocPercent:number = Math.round((chocPoll / totalPoll) * 100) / 100 * 100 ? Math.round((chocPoll / totalPoll) * 100) / 100 * 100 : 0;
    let strawPercent: number = Math.round((strawPoll / totalPoll) * 100) / 100 * 100 ? Math.round((strawPoll / totalPoll) * 100) / 100 * 100 : 0;
    let vanPercent: number = Math.round((vanPoll / totalPoll) * 100) / 100 * 100 ? Math.round((vanPoll / totalPoll) * 100) / 100 * 100 : 0;

    if( chocPercent === NaN) {
        chocPercent = 0;
    }
    
    
    
    return(
        <section>
            <h3>Votes go here</h3>
            <div className="VotingBtns">

           
                <button className="VBtn" onClick={() => {setChocPoll(chocPoll + 1); {setTotalPoll(totalPoll + 1)}}}>Chocolate</button>
                <button className="VBtn" onClick={() => {setVanPoll(vanPoll + 1); {setTotalPoll(totalPoll + 1)}}}>Vanilla</button>
                <button className="VBtn" onClick={() => {setStrawPoll(strawPoll + 1); {setTotalPoll(totalPoll + 1)}}}>Strawberry</button>
            </div>
            <div className="VotingResults">
                <p>{chocPoll}---{chocPercent}%</p>
                <div className="ChocBar" style={{width: `${chocPercent}%`, height:`10px`} }></div>
                <p>Vanilla:{vanPoll}--{vanPercent}% </p>
                <div className="VanBar" style={{width: `${vanPercent}%`, height:`10px`}}></div>
                <p>Strawberry:{strawPoll}--{strawPercent}%</p>
                <div className="StrawBar" style={{width: `${strawPercent}%`, height:`10px`}}></div>

            </div>

            </section>

    );
}


export default Votes;