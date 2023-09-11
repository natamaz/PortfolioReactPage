import './style.css';
import gitHubP from "../../img/icons/gitHub-black.svg";

const Btn = ({link, titleBtn}) =>{
    return(
        <a href={link} target='_blank' rel='noreferrer' className="btn-outline">
            <img src={gitHubP} alt=""/>
            {titleBtn}
        </a>
    )
}
export default Btn
