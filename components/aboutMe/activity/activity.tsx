import { ACTIVITY_CONSTANTS } from "./activity.constants";

export const Activity = () => {
  return (
    <div className="w-full rounded-lg border border-gray01">
      <div className="flex h-14 items-center border-b border-gray01 pl-5">
        <span className="text-lg font-medium text-gray02">
          활동
        </span>
      </div>
      <div className="m-0 list-none px-5 py-2">
        {ACTIVITY_CONSTANTS.map((item) =>
          item.isTitle ? (
            <div
              key={item.content}
              className="flex justify-between"
            >
              <span className="my-1 flex gap-1 px-0 text-base font-medium">
                {item.content}
              </span>
              <span className="font-light text-gray04">
                {item.due}
              </span>
            </div>
          ) : (
            <li
              key={item.content}
              className="my-1 ml-5 flex gap-2 px-0 font-light"
            >
              &bull;
              <span>{item.content}</span>
            </li>
          ),
        )}
      </div>
    </div>
  );
};
