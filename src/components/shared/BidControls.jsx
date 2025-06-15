import { NumberInput } from "@mantine/core";
import { useRef, useState } from "react";
import { Button } from "../UI/button";

// icons
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import { cn } from "@/utils/function";

const BidControls = ({ classNames }) => {
  const [value, setValue] = useState(1);
  const handlers = useRef(null);

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row justify-between items-center gap-6 xl:gap-10",
        classNames?.root
      )}
    >
      <div className="flex justify-start items-center gap-4 flex-1 sm:mr-auto">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handlers?.current?.decrement()}
          multiChild
          className={cn("text-black hover:text-black", classNames?.inDeButtons)}
        >
          <HiMinus />
        </Button>

        <NumberInput
          hideControls
          value={value}
          onKeyDown={(evt) =>
            ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
          }
          handlersRef={handlers}
          onChange={(val) => setValue(val)}
          max={10}
          min={1}
          step={1}
          classNames={{
            input: cn(
              "text-2xl lg:text-3xl text-center font-semibold outline-none text-cusOnyx bg-transparent border border-cusOnyx h-10 2xl:h-11 3xl:h-12",
              classNames?.input
            ),
          }}
          variant="filled"
        />

        <Button
          variant="outline"
          size="icon"
          onClick={() => handlers?.current?.increment()}
          multiChild
          className={cn("text-black hover:text-black", classNames?.inDeButtons)}
        >
          <GoPlus />
        </Button>
      </div>

      <Button
        className={cn(
          "w-full sm:w-2/4 mr-auto bg-cusBG hover:bg-cusBG text-white hover:text-white",
          classNames?.placeBid
        )}
      >
        Place Bid
      </Button>
    </div>
  );
};

export default BidControls;
