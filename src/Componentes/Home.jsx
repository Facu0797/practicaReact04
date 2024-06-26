import { Link } from "react-router-dom";

const Home = () => {
    const reyes = ["atanagildo", "ataulfo", "ervigio", "leogivildo", "recesvinto", "sisebuto"];

    return (
        <div className="home">
            {reyes.map((rey, index) => (
               <Link key={index} to={`reyes/${rey}`}>
                    <img src={`/public/reyes/rey_${rey}.png`} alt="" />
               </Link> 
            ))}
        </div>
    );
}
 
export default Home;