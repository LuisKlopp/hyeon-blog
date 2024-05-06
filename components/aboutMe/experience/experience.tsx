import Link from "next/link";
import { EXPERIENCE_CONSTANTS } from "./experience.constants";

export const Experience = () => {
  return (
    <div className="w-full rounded-lg border border-gray01">
      <div className="flex h-14 items-center border-b border-gray01 pl-5">
        <span className="text-lg font-medium text-gray02">
          핵심 경험
        </span>
      </div>
      <div>
        <ul className="m-0 list-none px-5 py-2">
          {EXPERIENCE_CONSTANTS.map((item) =>
            item.isLinked ? (
              <li
                key={item.content}
                className="my-1 flex gap-2 px-0 font-light"
              >
                &bull;
                <Link
                  href={item.href as string}
                  className="font-light"
                  target="_blank"
                >
                  {item.content}
                </Link>
                🔗
              </li>
            ) : (
              <li
                key={item.content}
                className="my-1 flex gap-2 px-0 font-light"
              >
                &bull;
                <span>{item.content}</span>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};
