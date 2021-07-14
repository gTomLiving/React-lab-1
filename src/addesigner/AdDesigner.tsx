import {useState} from 'react';
import './AdDesigner.css';



function AdDesigner() {
    const [chocCount, setChocCount] = useState(false);
    const [strawCount, setStrawCount] = useState(false);
    const [vaniCount, setVaniCount] = useState(true);
    const [theme, setTheme] = useState(true);
    const [customFont, setCustomFont] = useState(16);

    let themeClass: string = '';

    let btnChocActive: string = '';
    let btnStrawActive: string = '';
    let btnVanActive: string = '';

    let btnDarkTheme: string = '';
    let btnLightTheme: string = '';

    let voteFlav: string = '';
    if ( chocCount === true) {
        voteFlav = "Chocolate"
        btnChocActive ="Active"
        btnStrawActive = "";
        btnVanActive = "";
       
    }
    else if ( strawCount === true) {
        voteFlav = "Strawberry";
        btnChocActive ="";
        btnStrawActive = "Active";
        btnVanActive = "";

        
    }
    else if (vaniCount === true) {
        voteFlav = "Vanilla";
        btnStrawActive = "";
        btnChocActive = "";
        btnVanActive = "Active";

    }  

    if (theme === false) {
        themeClass = 'Dark';
        btnDarkTheme = "Active";
        btnLightTheme = "";

    }
    else if(theme === true) {
        btnLightTheme = "Active";
        btnDarkTheme = "";
    }

    
    
    return(

        <section className="AdMain">

            <h2 className="FontSpec"> Ad Designer </h2>
            <div className={`Custom ${themeClass}`}>
                <h6>Vote for:</h6>
                <h4 className="FontSpec" style={{fontSize: `${customFont}px`}}> {voteFlav}</h4>
            </div>
            <div className="Support">
                <h3>What to Support?</h3>
                <button className={`ChocBtn ${btnChocActive}`} onClick={() => {setChocCount(true); 
                {chocCount === true && setStrawCount(false)};
                {chocCount === true && setVaniCount(false)} 
                }}>Chocolate</button>
                
                
                
                <button className={`VaniBtn ${btnVanActive}`} onClick={() => {setVaniCount(true);
                {vaniCount === true && setStrawCount(false)};
                {vaniCount ===true && setChocCount(false)}
                }}>Vanilla</button>
                
                


                <button className={`StrawBtn ${btnStrawActive}`} onClick={() => {setStrawCount(true);
                {strawCount === true && setChocCount(false)};
                {strawCount === true && setVaniCount(false)}}}>Strawberry</button>
               
            </div>


            <div className="Theme">
                <h3>Color Theme:</h3>
                <button className={`BtnL ${btnLightTheme}`} onClick={() => {setTheme(true)}}>Light</button>
                <button className={`BtnD ${btnDarkTheme}`} onClick={() => {setTheme(false)}} >Dark</button>
            </div>
            <div className="Theme">
                <h3>Font Size</h3>
                <button onClick={() => {setCustomFont(customFont - 1)}}>Down</button>
                <p>{customFont}</p>
                <button onClick={() => {setCustomFont(customFont + 1)}}>Up</button>
            </div>




        </section>

    );
}

export default AdDesigner;