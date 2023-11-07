import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="m-3 p-5 rounded-lg shadow-xl bg-white min-w-[90%]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
