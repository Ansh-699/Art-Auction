import React from "react";
import Countdown from "react-countdown";
import { PiWarning } from "react-icons/pi";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { cn } from "@/utils/function";

dayjs.extend(localizedFormat);

const Completionist = () => {
  return (
    <h3 className="text-[#FF434E] text-xs xsm:text-sm xl:text-base flex justify-center items-center gap-1 bg-[#ff45500d]">
      <PiWarning />
      This time has ended
    </h3>
  );
};

const renderer = ({ days, hours, minutes, seconds, completed, props }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div>
        <div
          className={cn(
            "px-6 py-2 flex justify-center items-end text-cusOnyx uppercase border border-cusOnyx rounded-md sm:w-fit space-x-2 font-semibold",
            props.className
          )}
        >
          <p aria-level={3}>{days}d</p>
          <p aria-level={3}>:</p>
          <p aria-level={3}>{hours}h</p>
          <p aria-level={3}>:</p>
          <p aria-level={3}>{minutes}m</p>
          <p aria-level={3}>:</p>
          <p aria-level={3}>{seconds}s</p>
        </div>
        <p aria-level={5} className="mt-1">
          Ending on : {dayjs(props.date).format("LLL")}.
        </p>
      </div>
    );
  }
};

// 2025-02-01T01:02:03
const TimeCountdown = ({ date, ...rest }) => {
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      {!hydrated ? (
        <h5 className="text-xs mxl:text-sm 2xl:text-base 3xl:text-lg font-extrabold text-white">
          Countdown Timer
        </h5>
      ) : (
        <Countdown {...rest} date={date} renderer={renderer}></Countdown>
      )}
    </>
  );
};

export default TimeCountdown;
