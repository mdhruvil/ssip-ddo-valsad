import { ArrowRightIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";
import { Button } from "~/components/ui/button";

type Props = {};

function RecentlyViewed({}: Props) {
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <p>Recently Viewed</p>
        <Button variant="ghost" className="text-primary">
          See all
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}

type TIleProps = {};

function RecentlyViewedTile({}: Props) {
  return <div>RecentlyViewed</div>;
}

export default RecentlyViewed;
