import MainCaraousal from "~/components/pages/Home/Caraousal";
import RecentlyViewed from "~/components/pages/Home/RecentlyViewed";
import TopBar from "~/components/pages/shared/TopBar";

export default async function Home() {
  return (
    <div>
      <TopBar />
      <MainCaraousal />
      <RecentlyViewed />
    </div>
  );
}
