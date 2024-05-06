import { STACKS_CONSTANTS } from "./stacks.constants";

export const Stacks = () => {
  return (
    <div className="w-full rounded-lg border border-gray01 dark:border-gray04">
      <div className="flex h-14 items-center border-b border-gray01 pl-5 dark:border-gray04">
        <span className="text-lg font-medium text-gray02 dark:text-gray04">
          기술스택
        </span>
      </div>
      <div className="m-0 list-none px-5 py-2">
        {STACKS_CONSTANTS.map((item) =>
          item.isTitle ? (
            <li
              key={item.content}
              className="my-1 flex gap-1 px-0 text-base font-medium dark:text-gray01"
            >
              {item.content}
            </li>
          ) : (
            <li
              key={item.content}
              className="my-1 ml-5 flex gap-2 px-0 font-light dark:text-gray02"
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
