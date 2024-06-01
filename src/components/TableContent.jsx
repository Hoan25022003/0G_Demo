const TableContent = () => {
    return (
        <div className="w-full overflow-x-auto shadow-md rounded-lg border-[1px] border-primaryColor">
                <div className="w-full p-3 bg-gradient-to-r from-[#C353F1] via-[#DC64C2] to-[#F8758E]">
                  <h2 className="text-xl font-semibold uppercase text-white">Live seed</h2>
                  
                </div>
                
                <div className="flex flex-row text-sm text-left rtl:text-right p-4 items-center">
                    <div className="w-full text-[15px] md:text-[17px] flex flex-col-2 text-black">
                      <p className="w-1/2">Detail</p>
                      <p className="w-1/2">Value</p>
                    </div>
                    
                </div>
                <hr className="border-primaryColor sm:mx-auto" />
                <div className="flex flex-row text-sm text-left rtl:text-right p-4">
                    <div className="w-full text-[15px] md:text-[17px] flex flex-col-2 text-black">
                      <p className="w-1/2">Chain Name</p>
                      <p className="w-1/2">0G Newton Testnet</p>
                    </div>
                </div>
                <hr className="border-primaryColor sm:mx-auto" />
                <div className="flex flex-row text-sm text-left rtl:text-right p-4 bg-[#FAE6F3]">
                    <div className="w-full text-[15px] md:text-[17px] flex flex-col-2 text-black">
                      <p className="w-1/2">RPC</p>
                      <p className="w-1/2">https://rpc-testnet.0g.ai</p>
                    </div>
                </div>
                <hr className="border-primaryColor sm:mx-auto" />
                <div className="flex flex-row text-sm text-left rtl:text-right p-4">
                    <div className="w-full text-[15px] md:text-[17px]  flex flex-col-2 text-black">
                      <p className="w-1/2">Chain ID</p>
                      <p className="w-1/2">16600</p>
                    </div>
                </div>
                <hr className="border-primaryColor sm:mx-auto" />
                <div className="flex flex-row text-sm text-left rtl:text-right p-4 bg-[#FAE6F3] ">
                    <div className="w-full text-[15px] md:text-[17px]  flex flex-col-2 text-black">
                      <p className="w-1/2">Native Currency Name</p>
                      <p className="w-1/2">A0GI</p>
                    </div>
                </div>
                <hr className="border-primaryColor sm:mx-auto" />
                <div className="flex flex-row text-sm text-left rtl:text-right p-4">
                    <div className="w-full text-[15px] md:text-[17px] flex flex-col-2 text-black">
                      <p className="w-1/2">Native Currency Symbol</p>
                      <p className="w-1/2">A0GI</p>
                    </div>
                </div>
                
            </div>
            );
        };
        export default TableContent;