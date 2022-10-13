import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import fetchPublicationQuery from "../../queries/fetchPublicationQuery.js";
import Post from "../../components/Post.js";
import Comment from "../../components/Comment.js";

export default function PublicationsPage() {
  const router = useRouter();
  const { pubId } = router.query;

  console.log("fetching post+comments for", pubId);
  const { loading, error, data } = useQuery(fetchPublicationQuery, {
    variables: {
      postRequest: {
        publicationId: pubId,
        // publicationTypes: ["POST", "COMMENT", "MIRROR"],
      },
      request: {
        commentsOf: pubId,
        limit: process.env.NEXT_PUBLIC_LENSAPI_QUERY_LIMIT,
      }
    },
  });

  if (loading) return "Loading comments for .." + pubId;
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <div className="flex-col p-2 items-center">
      <Post key={data.publication.id} post={data.publication} displayProfile={true} />
      {data.publications.items.map((comment) => {
        return (
          <Comment key={comment.id} post={comment} />
        )
      })}
    </div>
  );
}