import './App.css';
import Header from './header.js'
import Pizza from './image/p1.jpg';

function Home(){
       const name="sandhiya";

    return(

        
        <section>
            <Header userName={name} />
            <div className="image">
                <img src={Pizza} alt='pizza' className='image'  />
               
            </div>
        </section>
    );
}
export default Home;