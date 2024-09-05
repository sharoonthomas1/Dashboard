 function Nav() {
   return (
  <nav className="fixed top-0 left-0  h-screen border-e border-[#BBBBBB26] flex flex-col justify-between p-5">
  <div className="flex flex-col items-center gap-y-7">
    <a href="#">
      <img src="images/logo.png" className="h-[32px]" alt="logo" />
    </a>
    <a href="#">
      <img src="images/icon-home.png" alt="icon-home" />
    </a>
    <a href="#">
      <img src="images/bar-chart.png" alt="bar-chart" />
    </a>
    <a href="#">
      <img src="images/Icon-layer.png" alt="Icon-layer" />
    </a>
    <a href="#">
      <img src="images/Icon@2x.png" alt="Icon@2x" className="w-[22px]" />
    </a>
    <a href="#">
      <img src="images/icon-chart.png" alt="icon-chart" />
    </a>
    <a href="#">
      <img src="images/Icon-people.png" alt="icon-people" />
    </a>
  </div>
  <div className="flex flex-col items-center gap-y-6">
    <a href="#">
      <img src="images/icon-chart.png" alt="icon-chart" />
    </a>
    <a href="#">
      <img src="images/Icon-people.png" alt="icon-people" />
    </a>
  </div>
</nav>
   )
  };
  
 export default Nav;
  
  