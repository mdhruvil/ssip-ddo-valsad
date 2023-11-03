import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Scheme } from "~/server/db/schema";
import { api } from "~/trpc/server";

type Props = {};

async function RecentlyViewed({}: Props) {
  const schemes = await api.scheme.getAll.query();

  return (
    <div className="container mt-1.5">
      <div className="flex items-center justify-between text-lg font-bold">
        <p>Recently Viewed</p>
        <Button variant="ghost" className="text-primary">
          See all
          <ChevronRightIcon />
        </Button>
      </div>
      <div className="flex gap-1.5">
        {schemes.slice(0, 3).map((scheme) => {
          return <RecentlyViewedTile schemeData={scheme} key={scheme.id} />;
        })}
      </div>
    </div>
  );
}

type TIleProps = {
  schemeData: Scheme;
};

function RecentlyViewedTile({ schemeData }: TIleProps) {
  return (
    <div className="flex-grow basis-0 text-center">
      <Image
        src={schemeData.schemeImage}
        alt={schemeData.name}
        className="w-full rounded-lg"
        width={100}
        height={100}
      />
      <p className="mt-1 text-sm">
        {schemeData.name?.split(" ").length > 2
          ? schemeData.name?.split(" ").splice(0, 2).join(" ") + "..."
          : schemeData.name}
      </p>
    </div>
  );
}

export default RecentlyViewed;
