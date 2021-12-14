import './home.scss'
import Navbar from '../components/Navbar/Navbar'
import { Featured } from '../components/Featured/Featured'

const Home = () => {
    return (
        <div className="home"> 
            <Navbar/>
            <Featured type="movie"/>
        </div>
    )
}

export default Home
