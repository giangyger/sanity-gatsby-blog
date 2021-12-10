export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61b3c4ee680b428cd3aab9e8",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ypdruj8t",
                  apiId: "a07b7f50-5b19-4e19-a179-3ff7b048f802",
                },
                {
                  buildHookId: "61b3c4ed5e685b96d8ecd7a8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-sw15djhx",
                  apiId: "b692bb20-87be-4cf6-9f48-90c0d2b874cf",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/giangyger/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-sw15djhx.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
