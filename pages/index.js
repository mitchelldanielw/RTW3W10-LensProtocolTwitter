import { useQuery } from "@apollo/client";
import fetchFollowingQuery from "../queries/fetchFollowingQuery.js";
import Profile from '../components/Profile.js';

export default function Home() {
  const { loading, error, data } = useQuery(fetchFollowingQuery, {
    variables: {
      request: {
        address: process.env.NEXT_PUBLIC_INITIAL_WALLET,
        limit: process.env.NEXT_PUBLIC_LENSAPI_QUERY_LIMIT,
      },
    },
  });

  if (loading) return 'Loading..';
  if (error) return `Error! ${error.message}`;
  
  console.log(data);

  return (
    <div>
      {data.following.items.map((following) => {
        return (<Profile key={following.profile.id} profile={following.profile} displayFullProfile={true} />);
      })}
    </div>
  )
}