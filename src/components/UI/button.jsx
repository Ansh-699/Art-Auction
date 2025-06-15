import * as React from "react";
import { cva } from "class-variance-authority";

import { Button } from "@mantine/core";
import { cn } from "@/utils/function";

const buttonVariants = cva(
  "group inline-flex items-center justify-center disabled:pointer-events-none disabled:opacity-90 disabled:select-none relative w-fit rounded font-medium",
  {
    variants: {
      variant: {
        default: "bg-white hover:bg-white/90 text-black hover:text-black",
        outline: "border-cusOnyx bg-transparent hover:bg-transparent",
      },
      size: {
        default:
          "h-10 2xl:h-11 3xl:h-12 px-4 text-xs xsm:text-sm 2xl:text-base 3xl:text-lg",
        icon: "size-10 2xl:size-11 3xl:size-12 text-xs xsm:text-sm 2xl:text-base 3xl:text-lg",
        sm: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const CusButton = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      children,
      asChild = false,
      loading = false,
      multiChild = false,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        loading={loading}
        loaderProps={{
          size: size === "sm" ? "sm" : "md",
          type: "dots",
          classNames: {
            root: cn(
              ""
              // size === "sm" ? "-mb-px" : "-mb-1",
            ),
          },
        }}
      >
        {multiChild ? (
          <>{children}</>
        ) : (
          <span className="relative z-[1] block">{children}</span>
        )}
      </Button>
    );
  }
);

CusButton.displayName = "Button";

export { CusButton as Button, buttonVariants };
