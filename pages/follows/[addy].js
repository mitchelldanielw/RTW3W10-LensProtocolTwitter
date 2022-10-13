import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import fetchFollowingQuery from "../../queries/fetchFollowingQuery.js";
import Profile from "../../components/Profile.js";

export default function FollowsPage() {
  const router = useRouter();
  const { addy } = router.query;

  console.log("fetching follows for", addy);
  const { loading, error, data } = useQuery(fetchFollowingQuery, {
    variables: {
      request: {
        address: addy,
        limit: process.env.NEXT_PUBLIC_LENSAPI_QUERY_LIMIT,
      },
    },
  });

  if (loading) return "Loading..";
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <div>
      {data.following.items.map((following_item) => {
        return <Profile key={following_item.profile.id} profile={following_item.profile} displayFullProfile={true} />;
      })}
    </div>
  );
}