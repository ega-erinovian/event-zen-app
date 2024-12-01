import Income from "./components/Income";
import RecentSales from "./components/RecentSales";
import SalesRevenue from "./components/SalesRevenue";
import TicketsSold from "./components/TicketsSold";
import ActiveEvent from "./components/ActiveEvent";

const Home = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-4 h-full p-8">
      <TicketsSold />
      <Income />
      <ActiveEvent />
      <SalesRevenue />
      <RecentSales />
    </div>
  );
};

export default Home;
