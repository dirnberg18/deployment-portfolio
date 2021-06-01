import "./contact.scss";
import me from "../images/me.gif";
import KeyboardReturnRoundedIcon from '@material-ui/icons/KeyboardReturnRounded';

export default function Contact() {
    return (
        <div className="contact" id="contact">
                <div className ="frucht">
                    <div className= "image-wrapper">
                        <img src={me} alt="ich"/>
                     </div>

                    <div className= "text-wrapper">
                        <h1><KeyboardReturnRoundedIcon/> Das bin ich - ein freches Früchtchen :-D </h1>
                    </div>

                </div>
                <div className="wrapper">
                    <h1>
                        Thank you! Danke! Merci! Kiitos! Efharisto! Toda! Gracias! Asante! Tesekkr ederim! Salamat Po! Sukria! Tak! Xie xie! Dankie! Shukran! Do jeh!                
                    </h1>
                </div>
                
                
            
        </div>
    )
}