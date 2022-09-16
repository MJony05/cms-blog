import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getPost = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            slug
            createdAt
            title
            excerpt
            featuredImage {
              url
            }
          }
        }
      }
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query getPostDetails() {
       posts(last: 3, orderBy: createdAt_ASC) {
      createdAt
      slug
      featuredImage {
        url
      }
      title
    }
  }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getSimilarPosts = async () => {
  const query = gql`
    query GetPostDetail($slug:String!, $categories: [String!]){
      posts(
        where: {slug_not: $slug, AND {categories_some: {slug_in: $categories}}}
        last:3
      ){
        createdAt
        slug
        featuredImage {
          url
        }
        title
      }
    }
  
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        name
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.categories;
};
