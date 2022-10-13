import Link from "next/link";

export default function Comment(props) {
  // the Lens API / GraphQL returns comments as a type of post
  const comment = props.post;  // hence, this is props.post, not props.comment

  var dtString = new Date(comment.createdAt).toString().replace(/GMT.*/g, "") + '(local time)';

  return (
    <div className="p-2">
      <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="w-full p-2 text-xs">
            <div className="flex">
              <div className="p-2 w-12 shrink-0">
                {comment.profile.picture ? (
                  <img
                    src={
                      comment.profile.picture.original
                        ? comment.profile.picture.original.url
                        : comment.profile.picture.uri
                    }
                    alt={comment.id}
                    className="h-12 w-full object-cover"
                  />
                ) : (
                  <div
                    style={{
                      backgroundColor: "gray",
                    }}
                    className="h-12 w-full object-cover"
                  />
                )}
              </div>
              <div className="mt-2 whitespace-pre-line">
                {comment.metadata.content}
              </div>
            </div>
            <hr />
            <div className="mt-2 float-right">{dtString}</div>
            <div className="mt-2">
              <a href={`../posts/${comment.profile.id}`} id={`${comment.id}`}>
                {comment.profile.id} | {comment.profile.handle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}