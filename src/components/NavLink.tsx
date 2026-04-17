"use client";

import {
  NavLink as RouterNavLink,
  NavLinkProps,
} from "react-router-dom";
import { forwardRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "default" | "ghost" | "underline";
type Size = "sm" | "md" | "lg";

interface NavLinkPropsExtended
  extends Omit<NavLinkProps, "className" | "children"> {
  children?: ReactNode;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  variant?: Variant;
  size?: Size;
  animated?: boolean;
}

const baseStyles =
  "relative inline-flex items-center transition-colors duration-200";

const sizeStyles = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

const variantStyles = {
  default: "text-white/70 hover:text-white",
  ghost: "text-white/60 hover:text-primary",
  underline: "text-white/70 hover:text-white",
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkPropsExtended>(
  (
    {
      className,
      activeClassName = "text-primary",
      pendingClassName = "opacity-50",
      variant = "default",
      size = "md",
      animated = true,
      to,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            baseStyles,
            sizeStyles[size],
            variantStyles[variant],
            className,
            isActive && activeClassName,
            isPending && pendingClassName
          )
        }
        {...props}
      >
        {({ isActive }) => (
          <span className="relative">
            {children}

            {/* 🔥 underline animation */}
            {variant === "underline" && (
              <motion.span
                layoutId="nav-underline"
                className="absolute left-0 -bottom-1 h-[2px] bg-primary"
                initial={false}
                animate={{
                  width: isActive ? "100%" : "0%",
                }}
                transition={{ duration: 0.3 }}
              />
            )}

            {/* 🔥 active glow */}
            {isActive && animated && (
              <motion.span
                layoutId="nav-glow"
                className="absolute inset-0 rounded-md bg-primary/10 blur-md -z-10"
                transition={{ type: "spring", stiffness: 200 }}
              />
            )}
          </span>
        )}
      </RouterNavLink>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };