export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6034012dc5561b008c80be5d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-aazthk3j',
                  apiId: '0faa26be-184a-4758-9873-b7a5b204acca'
                },
                {
                  buildHookId: '6034012d83c7900102db1c7d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xjjqfibi',
                  apiId: 'a27401c8-b36c-44f8-9619-3d72b6bde8c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/m-ali-rashid/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xjjqfibi.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
