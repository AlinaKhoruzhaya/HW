import { Outlet } from "react-router-dom";


function LayoutSecond() {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    )
};

export default LayoutSecond;
