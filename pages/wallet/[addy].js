import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import fetchNFTQuery from "../../queries/fetchNFTQuery.js";
import Nft from "../../components/Nft.js";

export default function WalletPage() {
  const router = useRouter();
  const { addy } = router.query;

  console.log("fetching NFTs for", addy);
  const { loading, error, data } = useQuery(fetchNFTQuery, {
    variables: {
      request: {
        ownerAddress: addy,
        chainIds: [137], // 1:ethereum, 137:polygon, 42:kovan, 80001:mumbai
        limit: process.env.NEXT_PUBLIC_LENSAPI_QUERY_LIMIT,
      },
    },
  });

  if (loading) return "Loading..";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-4 justify-center">
      {data.nfts.items.map((nft) => {
        return <Nft key={nft.symbol + nft.tokenId} nft={nft} />;
      })}
    </div>
  );
}