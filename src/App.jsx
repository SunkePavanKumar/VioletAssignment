import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import ProfileSideBar from "./components/ProfileSideBar";
import SideBar from "./components/SideBar";
import SubNav from "./components/SubNav";
import WallpaperBackground from "./components/WallpaperBackground";

function App() {
  return (
    <div className="container h-[100%] w-[100%] bg-slate-100">
      <div className="nav-bar w-full bg-white">
        <NavBar />
      </div>
      <div className="container flex">
        <div className="left w-[20%] border-2 border-gray-200 h-[100%] bg-white">
          <SideBar />
          <Footer />
        </div>
        <div className="right w-[80%] border-2 border-gray-200">
          <div className="background-wallpaper h-[8%] bg-blue-600 relative">
            <WallpaperBackground />
          </div>
          <div className="flex">
            <div className="profile-side-bar w-[25%] h-[100%] bg-white">
              <ProfileSideBar />
            </div>
            <div className="sub-nav-bar w-[71%]  ml-[2%] mr-[2%] bg-white z-50 relative">
              <SubNav />
              <Posts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
