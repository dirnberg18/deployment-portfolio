
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {useEffect, useState} from "react";
import {digitalPortfolio, webappPortfolio, designPortfolio, artPortfolio} from "../../data.js";
import Download from "../downloads/Download";

export default function Portfolio() {
    const[selected, setSelected] = useState("digital");
    const[data, setData] = useState([]);
    const list = [
        {
            id: "digital",
            title: "Digital",
        },

        {
            id: "webapp",
            title: "Webapp",
        },

        {
            id: "design",
            title: "Design",
        },

        {
            id: "art",
            title: "Art",
        },
    ];

    useEffect(()=>{

        switch(selected){
            case "digital":
                setData(digitalPortfolio);
                break;
            case "webapp":
                setData(webappPortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "art":
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
                        <h3>{d.title} <Download/> </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}