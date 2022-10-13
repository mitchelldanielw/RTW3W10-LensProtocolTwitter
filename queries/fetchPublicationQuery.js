import { gql } from "@apollo/client";

export default gql`
  query (
    $postRequest: PublicationQueryRequest!
    $request: PublicationsQueryRequest!
  ) {
    publication( request: $postRequest) {
      ... on Post {
        id
        createdAt
        metadata {
          content
        }
        profile {
          id
          name
          handle
        }
        stats {
          totalAmountOfCollects
          totalAmountOfComments
          totalAmountOfMirrors
          totalDownvotes
          totalUpvotes
        }
      }
      ... on Comment {
        id
        createdAt
        metadata {
          content
        }
        profile {
          id
          name
          handle
        }
        stats {
          totalAmountOfCollects
          totalAmountOfComments
          totalAmountOfMirrors
          totalDownvotes
          totalUpvotes
        }
      }
      ... on Mirror {
        id
        createdAt
        metadata {
          content
        }
        profile {
          id
          name
          handle
        }
        stats {
          totalAmountOfCollects
          totalAmountOfComments
          totalAmountOfMirrors
          totalDownvotes
          totalUpvotes
        }
      }
    },
    publications( request: $request) {
      pageInfo {
        prev
        next
        totalCount
      }
      items {
        ... on Comment {
          id
          appId
          createdAt
          metadata {
            content
          }
          profile {
            id
            handle
            picture {
              ... on NftImage {
                contractAddress
                tokenId
                uri
                verified
              }
              ... on MediaSet {
                original {
                  url
                  mimeType
                }
              }
              __typename
            }
          }
        }
      }
    }
  }
`;