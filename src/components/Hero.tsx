
import ORANGEBG from '../assets/pngs/orangebg.png';
import PERSON from '../assets/pngs/person.png';
import ARROW from '../assets/pngs/arrow.png';

const Hero : React.FC = () => {
      return(
            <div>
                  <div className="text-9xl px-28 py-32 text-gray-50 font-extrabold flex flex-col">
                        <h1>Fresh</h1> 
                        <span className="ml-48 z-10">2022</span>
                        <h1 className='z-10'>Look</h1>
                  </div>
                  <img src={PERSON} alt="person" className="absolute bottom-0 z-10 px-24 right-0" />
                  <img src={ORANGEBG} alt="orangebg" className="absolute bottom-0 -right-0" />
                  <div className='flex text-lg flex-col items-start text-black z-10 absolute bottom-0 right-0 pr-16 pb-32'>
                        <h1>Oregon jacket</h1>
                        <h1>$124</h1>
                  </div>
                  <div className='absolute bottom-24 w-full'>
                        <div className='h-[1px] w-[60%] bg-gray-50'></div>
                  </div>

                  <div className='flex text-gray-50 -mt-24 border-2 w-28 mx-28 h-10 items-center justify-center space-x-4'>
                        <h1>See More</h1>
                        <img src={ARROW} alt="arrow" className='w-3 h-3' />
                  </div>
            </div>
      )
};

export default Hero;