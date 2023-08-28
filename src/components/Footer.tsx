
const Footer: React.FC = () => {
      return (
            <footer className="bg-[#1A1A1A] mt-24 py-8">

                  <div className="flex items-start justify-around px-28 py-8">
                        <div className="flex flex-col justify- w-full text-gray-50 opacity-75">
                              <h1 className="text-2xl font-semibold">Newsletter</h1>
                              <h1 className="text-base font-medium">Get news about articles and updates in your inbox.</h1>
                        </div>

                        <div className="flex flex-col uppercase justify-start opacity-75 text-gray-50 w-full">

                              <div className="flex flex-col py-4"> 
                                    <h1 className="ml-2">name</h1>
                                    <div className="bg-white h-[1px] w-full"></div>
                              </div>

                              <div className="flex flex-col py-4"> 
                                    <h1 className="ml-2">email</h1>
                                    <div className="bg-white h-[1px] w-full"></div>
                              </div>

                              <div className="flex flex-col py-4"> 
                                    <h1 className="ml-2">message</h1>
                                    <div className="bg-white h-[1px] w-full"></div>
                              </div>
                        </div>
                  </div>

                  <h1 className="uppercase text-gray-50 text-9xl font-extrabold tracking-wider px-28">
                        Get in touch
                  </h1>

                  <h1 className="text-center text-gray-50 py-8 font-semibold self-center">Copyright 2022 All Right Reserved By SG</h1>

            </footer>
      );
};

export default Footer; 