import { useParams } from "react-router-dom";

const Rey = () => {
    const {rey} = useParams();
    const reyCompleto = rey.substring(0,1).toUpperCase() + rey.substring(1).toLocaleLowerCase();

    return ( 
        <div className="reyes">
            <div>
                <img src={`/public/reyes/rey_${rey}.png`} alt="Rey" />
            </div>
            <h1>{reyCompleto}</h1>
        </div>    
    );
}
 
export default Rey;