
import SHIPPINGVAN from '../assets/pngs/shipping-van.png';

const Navbar: React.FC = () => {
      return (
            <div>
                  <div className="h-[42px] bg-[#1A1A1A]">
                        <div className="flex items-center w-1/5 ml-16 justify-evenly h-full" style={{
                              color : "#626262",
                        }}>
                              <div className='h-full flex items-center space-x-4 '>
                                    <img src={SHIPPINGVAN} alt="shipping-van" className="h-[13px] w-[21px] ml-[20px]"/>
                                    <h1>Free Delivery</h1>
                              </div>
                              <h1>|</h1>
                              <h1>Return Policy</h1>
                        </div>
                  </div>

                  <div className='w-full py-[8px] flex items-center text-gray-50 justify-between px-24'>
                        <h1 className='text-4xl font-extralight '>ShopKart</h1>
                        <div className='font-bold flex items-center space-x-4  justify-between'>
                              <h1>WISHLIST (0) </h1>
                              <h1>BAG (0)</h1> 
                        </div>
                  </div>
                  
                  <div className='h-[1px] mx-24 bg-gray-50'></div>

                  <div className='uppercase py-[8px] font-bold text-gray-50 flex justify-start items-center pl-28'>
                        <h1 className='mx-12'>home</h1>
                        <h1 className='mx-12'>our products</h1>
                        <h1 className='mx-12'>about</h1>
                        <h1 className='mx-12'>contact</h1>
                  </div>
            </div>
      );
};

export default Navbar;