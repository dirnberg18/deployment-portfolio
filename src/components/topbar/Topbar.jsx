import "./topbar.scss"
import AccessibilityNewRoundedIcon from '@material-ui/icons/AccessibilityNewRounded';
import AlternateEmailRoundedIcon from '@material-ui/icons/AlternateEmailRounded';

export default function Topbar({menuOpen, setMenuOpen}) {
    return(
        <div className={"topbar "+(menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">MD</a>
                    <div className="itemContainer">
                    <AccessibilityNewRoundedIcon className="icon"/>
                    <span>+43 664 9190452</span>
                    </div>
                    <div className="itemContainer">
                    <AlternateEmailRoundedIcon  className="icon"/>
                    <span>marlene.dirnberger@edu.fh-joanneum.at</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}