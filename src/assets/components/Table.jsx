import React, { useEffect, useState } from "react";

function Table() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("/Data.json")
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData))
            .catch((error) => console.error("Error: ", error));
    }, []);

    const Searchdata = (event) => {
        setSearchQuery(event.target.value);
    };

    const Deletedata = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
    };

    const filteredData = data.filter((data2) =>
        data2.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="border border-[#BBBBBB26] rounded-md">
                <div className="flex justify-between items-center mx-3 my-2">
                    <div className="flex border border-[#BBBBBB26] rounded-md">
                        <div className="text-[#fff] flex items-center gap-x-2 py-2 px-3 bg-[rgba(187,187,187,0.04)]">
                            <img src="images/_Dot.png" alt="" className="h-[8px]" />
                            View all <span className="text-xs border border-[#F97316] rounded-sm px-3 text-[#F97316] bg-[rgba(251,100,25,0.18)]">{filteredData.length}</span>
                        </div>

                        <div className="text-[#C4C4C4A8] flex items-center gap-x-2 py-2 px-4 border-r border-[#BBBBBB26]">
                            Running <span className="text-xs border border-[#BBBBBB26] rounded-sm px-3 text-[#fff]">10</span>
                        </div>

                        <div className="text-[#C4C4C4A8] flex items-center gap-x-2 py-2 px-4">
                            Terminated <span className="text-xs border border-[#BBBBBB26] rounded-sm px-3 text-[#fff]">2</span>
                        </div>
                    </div>
                    <div className="flex gap-x-3">
                        <a href="#" className="py-2 px-2 border border-[#BBBBBB26] rounded-md">
                            <img src="images/loader.png" alt="loader" />
                        </a>
                        <div className="border border-[#BBBBBB26] rounded-md flex items-center gap-x-2 ps-2">
                            <svg fill="#C4C4C4A8" height="20px" width="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.4 488.4" aria-label="Search Icon">
                                <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>
                            </svg>
                            <input
                                type="search"
                                className="border-0 bg-transparent py-1 px-2 w-[200px] text-xs  placeholder-white text-[#fff] focus:outline-none focus:border-transparent"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={Searchdata}
                            />
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="my-3">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs bg-[rgba(187,187,187,0.04)] text-[#C4C4C4A8]">
                            <tr>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Subdomain</th>
                                <th className="px-6 py-3">Port(s)</th>
                                <th className="px-6 py-3">Last Updated</th>
                                <th className="py-3">Status</th>
                                <th className="px-6 py-3">Provider</th>
                                <th className="px-6 py-3"></th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((data) => (
                                    <tr key={data.id} className="border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <div className="flex content-center gap-x-2 items-center">
                                                <div><img src="images/Featured-icon.png" alt="feature-icon" /></div>
                                                <div>
                                                    <span className="text-sm">{data.Name}</span>
                                                    <p className="text-xs text-[#C4C4C4A8] underline">{data.content}</p>
                                                </div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            <a href="#" className="bg-[rgba(0,91,248,0.08)] text-[#005BF8] p-1">https://apacheonv54.exopods.com</a>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-[#005BF8] underline flex gap-x-2 items-center">
                                                <span>{data.port}</span>
                                                <div><img src="images/send-arrow.png" alt="" /></div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">{data.updated}</td>
                                        <td className="">
                                            <a href="#" className="flex justify-center rounded-sm bg-[rgba(86,211,100,0.08)] w-[100px] py-1">
                                                <svg className="h-[22px]" fill="#56D364" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-label="Status Icon">
                                                    <path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"></path>
                                                </svg>
                                                <span className="text-[#56D364]">{data.status}</span>
                                            </a>
                                        </td>
                                        <td className="px-6 py-4">
                                            <img src="images/react-icon.png" alt="react-icon" />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="relative group">
                                                <button>
                                                <img src="images/dots-vertical.png" alt="react-icon" />
                                                </button>
                                                <div className="absolute top-0 right-10 mt-2 hidden group-hover:block bg-[#000] text-white text-xs border-[2px] border-[#BBBBBB26] rounded-md">
                                                    <button onClick={() =>Deletedata(data.id)} className="text-[red]  py-3 px-10">Delete</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center py-4 text-[#fff]">No results found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Table;


