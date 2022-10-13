import Link from "next/link";
import { shorten_Ether_address } from './ethAddress'

export default function Profile(props) {
  const profile = props.profile;

  const address_display = shorten_Ether_address(profile.ownedBy);

  // When displayFullProfile is true, we show more info.
  const displayFullProfile = props.displayFullProfile;

  return (
    <div className="ml-6 mt-9">
      <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="shrink-0">
            {profile.picture ? (
              <img
                src={
                  profile.picture.original
                    ? profile.picture.original.url
                    : profile.picture.uri
                }
                alt={null}
                className="h-24 w-full rounded-xl object-cover md:h-full md:w-32"
              />
            ) : (
              <div
                style={{
                  backgroundColor: "inherit",
                }}
                className="h-4 w-full object-cover md:h-full md:w-24"
              />
            )}
          </div>
          <div className="p-2 w-full">
          <div className="mt-2 text-sm float-right">
              <Link href={`../wallet/${profile.ownedBy}`}>
                {`${profile.id}` + " | " + address_display}
              </Link>
            </div>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            <p>{profile.handle}{profile.name && " (" + profile.name + ")"}
              </p>
            </div>
            <div className="block mt-1 text-sm leading-tight font-medium text-black dark:text-white">
              {displayFullProfile && profile.bio}
            </div>
            <div className="mt-2 text-md text-right">
              <p>following:&nbsp;
                <Link href={`/follows/${profile.ownedBy}`}>
                  {profile.stats.totalFollowing.toLocaleString()}
                </Link>
              </p>
              <p>
                (public+private) posts:&nbsp;
                <Link href={`/posts/${profile.id}`}>
                  {profile.stats.totalPosts.toLocaleString()}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}