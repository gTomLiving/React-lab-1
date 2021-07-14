import {useState} from 'react';
import "./Ad.css";

interface Props {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}





function Ad ({flavor, fontSize, darkTheme}: Props) {

    let dark = '';

    if(darkTheme === true) {
        dark = "Dark";

    }

    return(

        <section className="Examples">
            <div className={`Flav ${dark}`}>
                <h6>Vote for:</h6>
                <h4 style={{fontSize: `${fontSize}px`}}>{flavor}</h4>
            </div>
            
        </section>

    );
}


export default Ad;




