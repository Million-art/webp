import Header from '../components/Header';
import Catagories from '../components/Catagories';
import Products from './Products';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

export default function Home(){
    return (
        <div className="Home">
             <Header />
            <Catagories/>
            <Products/> 
            <Testimonial />
             <Footer/>
        </div>
      );
}

 