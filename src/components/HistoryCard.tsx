import { getIcon } from "../common/GetIcon";

const HistoryCard = () => {
  return (
    <>
      <div className="w-full px-7 py-4 mb-1.5 rounded-3xl flex flex-col bg-white shadow-card divide-y divide-slate-100">
        <div className="pb-3 flex flex-row align-center justify-between items-center">
          <div className="flex items-center">
            <img className="w-7 h-7 mr-3" src={getIcon("SOL")} />
            <div>
              <div className="font-bold text-lg leading-6">{"t.Anon"}</div>
              <div className="text-secondary opacity-80 text-sm leading-5">
                {"23.02.27 13:24"}
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="font-bold text-lg mr-1 text-quaternary">{3.33}</div>
            <div className="font-bold text-lg">{"SOL"}</div>
          </div>
        </div>

        <div className="pt-3 flex">
          {true ? (
            <>
              <div className="text-quaternary text-sm">Recieved</div>
            </>
          ) : (
            <div className="flex w-full justify-between items-center">
              <div className="flex text-red-500 text-sm">
                <div className="mr-1">Expired in</div>
                <div>03:23:01</div>
              </div>

              <button className="px-4 py-1 rounded-full bg-secondary bg-opacity-10">
                cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HistoryCard;
