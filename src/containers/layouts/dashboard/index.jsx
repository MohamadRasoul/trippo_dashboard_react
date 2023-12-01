import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const layout = () => {
    return ( 
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar/>
            <Outlet/>
          </main>
        </div>
     );
}
 
export default layout;