
import ARROWLEFT from '../assets/pngs/arrowleft.png';
import ARROWRIGHT from '../assets/pngs/arrowright.png';

import ARROW from '../assets/pngs/arrow.png';

import PRODUCT1 from '../assets/pngs/products/product1.png';
import PRODUCT2 from '../assets/pngs/products/product2.png';

const Products: React.FC = () => {
      return (
            <div>
                  <div className="bg-white flex items-center justify-evenly">
                        <div className=''>
                              <h1 className="text-[90px] pr-48 tracking-wider font-medium pt-8">New products</h1>
                              <div className="w-1/2 h-[1px] -mt-4 bg-black"></div>
                        </div>
                        <div className='flex items-center justify-center space-x-8'>
                              <img src={ARROWLEFT} alt="arrowleft" className="" />
                              <img src={ARROWRIGHT} alt="arrowright" className="" />
                        </div>
                  </div>

                  <div className='px-28 flex'>
                        <div className='py-8'>
                              <ul className='space-y-4'>
                                    <li className='text-xl'>Apparel</li>
                                    <li className='font-semibold text-2xl'>Accessories</li>
                                    <li className='text-xl'>Best Sellers</li>
                                    <li className='text-xl'>%0% off</li>
                              </ul>
                        </div>

                        <div className='flex space-x-8'>
                              <div className='w-[310px]'>
                                    <div className='relative'>
                                          <img src={PRODUCT1} alt='' className='w-[310px]' />
                                          <div className='absolute w-[45px] flex items-center justify-center right-0 bottom-0 h-[45px] bg-black'>
                                                <img src={ARROW} alt="arrow" className='w-3 h-3' />
                                          </div>
                                    </div>

                                    <div className='flex flex-col items-start justify-center'>
                                          <h1 className='font-semibold text-xl'>FLORIDA JACKET</h1>
                                          <h1 className='text-base'>Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised</h1>
                                          <h1 className='font-semibold text-xl'>$100</h1>
                                    </div>
                              </div>

                              <div className='w-[310px]'>
                                    <div className='relative'>
                                          <img src={PRODUCT1} alt='' className='w-[310px]' />
                                          <div className='absolute w-[45px] flex items-center justify-center right-0 bottom-0 h-[45px] bg-black'>
                                                <img src={ARROW} alt="arrow" className='w-3 h-3' />
                                          </div>
                                    </div>

                                    <div className='flex flex-col items-start justify-center'>
                                          <h1 className='font-semibold text-xl'>FLORIDA JACKET</h1>
                                          <h1 className='text-base'>Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised</h1>
                                          <h1 className='font-semibold text-xl'>$100</h1>
                                    </div>
                              </div>

                              <div className='w-[310px]'>
                                    <div className='relative'>
                                          <img src={PRODUCT2} alt='' className='w-[310px]' />
                                          <div className='absolute w-[45px] flex items-center justify-center right-0 bottom-0 h-[45px] bg-black'>
                                                <img src={ARROW} alt="arrow" className='w-3 h-3' />
                                          </div>
                                    </div>

                                    <div className='flex flex-col items-start justify-center'>
                                          <h1 className='font-semibold text-xl'>FLORIDA JACKET</h1>
                                          <h1 className='text-base'>Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised</h1>
                                          <h1 className='font-semibold text-xl'>$100</h1>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default Products;