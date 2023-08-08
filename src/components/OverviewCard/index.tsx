import { ArrowDown, ArrowUp } from "Icons";

import { IOverview } from "Types";
import { icons } from "Constants";

function OverviewCard({
  company,
  platformSpecificValue,
  type,
  percentage,
}: IOverview) {
  const CompanyIcon = icons[company];

  return (
    <section className="min-w-[255px] h-[125px] bg-cardBgLight dark:bg-cardBgDark rounded-[5px] px-[24px] pt-[27px] pb-[17px] grid gap-[23px]">
      <div className="flex justify-between items-center w-100">
        <h4 className="text-secondaryLight dark:text-secondaryDark text-[14px] font-bold">
          {type}
        </h4>
        <CompanyIcon />
      </div>

      <div className="w-100 flex justify-between items-center">
        <h5 className="text-[32px] text-primaryLight dark:text-primaryDark font-bold">
          {platformSpecificValue}
        </h5>
        <div className=" w-[max-content] flex gap-1 items-center">
          {percentage < 0 ? <ArrowDown /> : <ArrowUp />}

          <p
            className={`${
              percentage < 0 ? "text-red" : "text-green"
            } font-bold text-[12px]`}
          >
            {Math.abs(percentage)}%
          </p>
        </div>
      </div>
    </section>
  );
}

export default OverviewCard;
