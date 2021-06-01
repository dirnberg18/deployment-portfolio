import "./intro.scss"
import "../../global.scss";
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();
    
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1000,
            backSpeed: 60,
            strings: ["Informationsmanagerin.", "Grafik Designerin.", "Frontend Developerin.", "Future Interaction Designerin.", "glückliche Person :-)"],
         });
    },[]);

    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="content-wrapper-left">
                    <h1>Hallihallo!</h1>
                </div>
            </div>
            <div className="right">
                <div className="content-wrapper-right">
                    <h2>
                        Ich bin Marlene,<br/>
                        eine <span ref={textRef}></span> 
                    </h2>
                    <br/><a href="#portfolio">
                    <h5>Portfolio entdecken</h5>
                    </a>
                </div>
                
            </div>
        </div>
    )
}