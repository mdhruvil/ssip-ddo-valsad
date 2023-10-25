import React from "react";
import {
  BellIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

type Props = {};

function TopBar({}: Props) {
  return (
    <div className="h-12 w-full bg-primary text-primary-foreground">
      <div className="container flex h-full items-center justify-between">
        <div className="text-xl font-bold">SchemEase</div>
        <div className="flex gap-5">
          <MagnifyingGlassIcon className="h-5 w-5" strokeWidth={100} />
          <BellIcon className="h-5 w-5" />
          <HeartIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
