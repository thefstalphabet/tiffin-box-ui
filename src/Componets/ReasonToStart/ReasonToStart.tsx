import { ReasonToStartItems } from "../../Configs/ReasonToStartItems";
import { IReasonStartItem } from "../../Interfaces/ReasonToStart.interface";
export default function ReasonToStart() {
  return (
    <div className="subContainer p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        So many reasons to start
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ReasonToStartItems.map((item: IReasonStartItem) => {
          const { icon, key, heading, desc } = item;
          return (
            <div className="flex flex-col items-center justify-center">
              <div className="w-40 h-40 flex justify-center items-center p-4">
                {icon}
              </div>
              <h1 className="text-lg font-bold text-center">{heading}</h1>
              <p className="text-center">{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
