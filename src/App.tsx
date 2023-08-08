import { DashboardCard, Header, OverviewCard } from "components";
import { dashboards, overviews } from "Constants";

function App() {
  return (
    <main className="min-h-screen w-100 pt-8 px-40 pb-16 relative md:px-6 bg-bgLight dark:bg-bgDark ">
      <section className="absolute inset-0 h-60 bg-topBgLight rounded-b-[1.25rem] dark:bg-topBgDark" />
      <div className="w-[max-content]  mx-auto z-1 relative flex flex-col gap-[46px] md:gap-24">
        <Header />

        <div className="w-[max-content] grid grid-cols-4 gap-[30px]  md:grid-cols-2 sm:flex sm:flex-col sm:w-full">
          {dashboards.map((dashboard) => (
            <DashboardCard key={Date.now()} {...dashboard} />
          ))}
        </div>

        <div className="w-[max-content] flex flex-col gap-[24px]">
          <h1 className="text-primaryLight text-[24px] sm:text-[24px] font-bold dark:text-primaryDark">
            Overview - Today
          </h1>
          <div className="w-[max-content] grid grid-cols-4 grid-rows-2 gap-[30px]  md:grid-cols-2 md:grid-rows-4 sm:flex sm:flex-col sm:w-full">
            {overviews.map((overview) => (
              <OverviewCard key={Date.now()} {...overview} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
