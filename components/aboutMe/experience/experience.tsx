import { EXPERIENCE_CONSTANTS } from "./experience.constants";

export const Experience = () => {
  return (
    <div className="w-full rounded-lg border border-gray01">
      <div className="flex h-14 items-center border border-b-gray01 pl-5">
        <span className="text-lg font-medium text-gray02">
          핵심 경험
        </span>
      </div>
      <div>
        <ul className="m-0 list-none py-1">
          {EXPERIENCE_CONSTANTS.map((item) => (
            <li
              key={item.content}
              className="my-1 px-0 font-light"
            >
              &bull; &nbsp; {item.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
