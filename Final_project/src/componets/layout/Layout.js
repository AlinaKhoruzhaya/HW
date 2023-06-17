import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function layout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
};

export default layout;
