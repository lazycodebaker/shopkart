import Hero from "./Hero";
import Navbar from "./Navbar";

const Landing : React.FC = () => {
      return(
            <div className="h-screen bg-[#1A1A1A]">
                  <Navbar />
                  <Hero />
            </div>
      );
};

export default Landing;