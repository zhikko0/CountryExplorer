import { Link } from "react-router-dom";

export default function HomePage(){

    return(
        <div className="menu">
            <h1>Country Explorer</h1>
            <Link to='/countries' className="btn btn-purple">Study countries</Link>
            <Link to='/collection' className="btn btn-purple">Collection</Link>
            <Link to='/quiz' className="btn btn-purple">Quiz</Link>
            <Link to='/leaderboard' className="btn btn-purple">Leaderboard</Link>  
        </div>
    )
}