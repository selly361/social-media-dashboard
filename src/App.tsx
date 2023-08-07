import { DashboardCard, Header } from "components"

import { dashboards } from "Constants"

function App() {


  return (
    <main className="min-h-screen w-100 pt-8 px-40 pb-16 relative md:px-6 bg-bgLight dark:bg-bgDark ">
      <section className="absolute inset-0 h-60 bg-topBgLight rounded-b-[1.25rem] dark:bg-topBgDark" />
      <div className="w-[max-content]  mx-auto z-1 relative flex flex-col gap-[46px] md:gap-24">
        <Header />
        
        <div className="w-[max-content] grid grid-cols-4 gap-[30px]  md:grid-cols-2 sm:flex sm:flex-col sm:w-full">
          {dashboards.map(dashboard => (
            <DashboardCard key={dashboard.company} {...dashboard} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App