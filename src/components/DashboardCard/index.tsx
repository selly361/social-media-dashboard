import { ArrowDown, ArrowUp } from "Icons";

import { IDashboard } from "Types";
import { icons } from "Constants";

function DashboardCard({ company, username, followers, today }: IDashboard) {

  const CompanyIcon = icons[company];

  return (
    <div
      className={`min-w-[255px] h-[216px] bg-cardBgLight dark:bg-cardBgDark rounded-t-md pt-[32px] px-[63px] pb-[24px] relative`}
    >
      <div
        className={`absolute top-0 h-1 rounded-t-md w-100 left-0 ${`bg-${company}`} right-0 z-2`}
      />
      <div className="flex gap-2 w-[max-content] mx-auto text-[12px] text-secondaryLight dark:text-secondaryDark">
        <CompanyIcon />
        <p className="text-[12px]">@{username}</p>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <h2 className="text-primaryLight dark:text-primaryDark font-bold text-[56px] text-center">
          {followers}
        </h2>
        <p className="text-[12px] text-secondaryLight dark:text-secondaryDark uppercase tracking-[5px] text-center mb-[25px]">
          Followers
        </p>
      </div>
      <div className="mx-auto w-[max-content] flex gap-1 items-center">
        {today < 0 ? <ArrowDown /> : <ArrowUp />}
        <p className={`${today < 0 ? "text-red" : "text-green"} font-bold text-[12px]`}>{Math.abs(today)} Today</p>
      </div>

    </div>
  );
}

export default DashboardCard;
