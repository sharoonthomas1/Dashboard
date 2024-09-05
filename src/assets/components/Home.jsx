import { NavLink } from "react-router-dom";
import Table from "./Table";
import Nav from "./Nav";
function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      < Nav/>
      {/* Main Content */}
      <div className="ml-[5%] w-screen ">
        <header className="px-[2%] py-4 border-b border-[#BBBBBB26] flex justify-between ml-1">
          <div className="flex gap-x-2">
            <NavLink to="/services" className="flex gap-x-2 items-center">
              <img src="images/icon-home.png" alt="home-icon" />
              <span className="text-[16px] font-semibold text-white">Dashboard</span>
            </NavLink>
            <a href="#" className="flex gap-x-2 items-center">
              <span className="text-[16px] font-semibold text-white">/</span>
            </a>
            <a href="#" className="flex gap-x-2 items-center">
              <span className="text-[16px] font-normal text-white">Nikhil's projects</span>
              <img src="images/arrow.png" alt="arrow-icon" className="h-[16px]" />
            </a>
          </div>
          <div className="flex items-center gap-x-4">
            <button className="text-[#C4C4C4A8] hover:bg-white hover:text-[#000] px-[10px] py-[2px] rounded-sm">
              Docs
            </button>
            <div className="px-2 py-2 rounded-[4px] bg-[rgba(25,251,155,0.08)]">
              <p className="text-[#fff] text-xs">
                Credits: <span className="text-[#19FB9B] px-2">5 USD</span>
              </p>
            </div>
            <a href="#">
              <img src="images/profile-icon.png" alt="profile-icon" />
            </a>
          </div>
        </header>
        <section className="px-[2%]">
          <div className="flex justify-between items-center py-5">
            <div>
              <h1 className="text-white text-2xl">Services</h1>
              <p className="text-[#C4C4C4A8] text-xs">Review Your Deployed Services</p>
            </div>
            <button className="flex items-center border  py-2 px-4 rounded-md ">
              <img src="images/plus-icon.png" alt="Add New" className="h-5" />
              <span className="text-xs text-white ps-2">Create New</span>
            </button>
          </div>
          {/* Table Section */}
       <Table/>
        </section>
      </div>
    </div>
  );
}

export default Home;

