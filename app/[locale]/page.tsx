import Collections from "@/modules/Collection";
import Creators from "@/modules/Creators";
import Hero from "@/modules/Hero";
import { getRequest } from "@/service/getRequest";

export default async function Home() {
  const collections = await getRequest("/collections?limit=3");
  const auctions = await getRequest("/auctions");
  const auctionsResults = await getRequest("/auction-results");
  const artists = await getRequest("/user?role=ARTIST");
  return (
    <>
      <Hero auctions={auctions} artists={artists} actionResults={auctionsResults} />
      <Collections collection={collections} />
      <Creators artists={artists} />
    </>
  );
}
