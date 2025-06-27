/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const getRichTextContentQuery = (articleKey: string, locale: string, preview: boolean) => `
{
    article (slug: "${articleKey}", locale: "${locale}", preview: ${preview}) {
        text
        dateTime
        richText
        allowedCountry {
          sys {
            id
          }
          ... on GeoType {
            abbreviation
          }
        }
    }
}
`;

export const getSingleArticleQueryByUniqueId = (uniqueId: string, locale: string, preview: boolean) => `
{
  articleCollection (where: {uniqueId: "${uniqueId}"}, locale: "${locale}", preview: ${preview}) {
    items {
      sys {
        id
      }
      text
      richText
      uniqueId
      allowedCountry {
        sys {
          id
        }
        ... on GeoType {
          abbreviation
        }
      }
    }
  }
}
`;

export const getArticleArrayQuery = (uniqueIds: string[], locale: string, preview: boolean) => `
{
    articleCollection (where: { uniqueId_in: ${JSON.stringify(uniqueIds)}}, limit: ${
  uniqueIds.length
}, locale: "${locale}", preview: ${preview}) {
      items {
        sys {
          id
        }
        text
        richText
        uniqueId
        allowedCountry {
          sys {
            id
          }
          ... on GeoType {
            abbreviation
          }
        }
      }
    }
}
`;

export const getProjectArticleListQuery = (projectKey: string) => `
query ArticlesUnderProject {
    project(slug: "${projectKey}") {
      sys {
        id
      }
      __typename
      title
      allowedCountry {
        sys {
          id
        }
        ... on GeoType {
          abbreviation
        }
      }
      reference {
        sys {
          id
        }
        __typename
        ...on Article {
          sys {
            id
          }
          text
          richText
          dateTime
          uniqueId
          allowedCountry {
            sys {
              id
            }
            ... on GeoType {
              abbreviation
            }
          }
          media {
            name
            description
          }
        }
      }
    }
}
`;

export const getProjectListQuery = () => `
query AllProjects {
    projectCollection {
      items {
        sys {
          id
        }
        __typename
        title
        description
        weight
        allowedCountry {
          sys {
            id
          }
          ... on GeoType {
            abbreviation
          }
        }
        reference {
          sys {
            id
          }
          __typename
          ...on Category {
            sys {
              id
            }
            title
            allowedCountry {
              sys {
                id
              }
              ... on GeoType {
                abbreviation
              }
            }
            reference {
              sys {
                id
              }
              __typename
              ...on Article {
                uniqueId
                text
                allowedCountry {
                  sys {
                    id
                  }
                  ... on GeoType {
                    abbreviation
                  }
                }
              }
            }
          }
        }
      }
    }
}
`;
