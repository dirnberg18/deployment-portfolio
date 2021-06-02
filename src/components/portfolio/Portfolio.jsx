
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {useEffect, useState} from "react";
import {digitalPortfolio, designPortfolio, artPortfolio} from "../../data.js";


export default function Portfolio() {
    const[selected, setSelected] = useState("3d");
    const[data, setData] = useState([]);
    const list = [
        {
            id: "3d",
            title: "3D",
        },

        {
            id: "design",
            title: "Design",
        },

        {
            id: "galerie",
            title: "Galerie",
        },
    ];

    useEffect(()=>{

        switch(selected){
            case "3d":
                setData(digitalPortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "galerie":
                setData(artPortfolio);
                break;
                default:
                    setData(digitalPortfolio);

        }

    }, [selected])

    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected = {setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d)=> (
                    <div className="item">
                        <img 
                        src={d.img}
                        alt=""
                        />
                        <h3>{d.title} <a href = {d.file} target = "_blank" rel="noreferrer"><h5>Hier geht's zum Pdf</h5></a></h3>
                    </div>
                ))}
            </div>
        </div>
    )
}