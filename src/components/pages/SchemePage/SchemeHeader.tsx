import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "~/components/ui/button";
import { Card, CardDescription, CardTitle } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { Scheme } from "~/server/db/schema";

type Props = {
  schemeData: Scheme;
};

function SchemeHeader({ schemeData }: Props) {
  return (
    <div>
      <Card className="flex items-center justify-start rounded-2xl">
        <Image
          src={schemeData.schemeImage}
          alt={schemeData.name}
          className="m-3 h-20 rounded-xl"
          width={80}
          height={80}
        />
        <div className="flex flex-col gap-1">
          <CardTitle className="text-xl">{schemeData.name}</CardTitle>
          <CardDescription>{schemeData.department}</CardDescription>
        </div>
      </Card>
      <div className="mt-4 flex gap-2">
        <Link
          href={schemeData.portalLink}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({
              variant: "secondary",
              className: "w-full rounded-full text-base",
            }),
          )}
        >
          Apply
        </Link>
        <Button
          className="w-full rounded-full text-base text-primary-foreground"
          variant="outline"
        >
          Wishlist
        </Button>
      </div>
    </div>
  );
}

export default SchemeHeader;
