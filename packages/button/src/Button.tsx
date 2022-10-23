import React from "react"
import clsx from "clsx"

const BUTTON_STYLE = {
  small: "btn-small",
  normal: "",
  large: "btn-large",
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "small" | "normal" | "large"
  block?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ size = "normal", block, className, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={clsx(className, BUTTON_STYLE[size], { "btn-block": block })}
        {...props}
      />
    )
  },
)
