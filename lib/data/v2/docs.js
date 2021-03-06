import { PRODUCT } from '~/lib/constants'

export default [
  {
    name: 'Introduction',
    href: '/docs/v2/introduction',
    aliases: ['/docs', '/docs/v2']
  },
  {
    name: 'Git Integrations',
    href: '/docs/v2/git-integrations',
    posts: [
      {
        name: `${PRODUCT} for GitHub`,
        href: '/docs/v2/git-integrations/zeit-now-for-github'
      },
      {
        name: `${PRODUCT} for GitLab`,
        href: '/docs/v2/git-integrations/zeit-now-for-gitlab'
      },
      {
        name: `${PRODUCT} for Bitbucket`,
        href: '/docs/v2/git-integrations/zeit-now-for-bitbucket'
      }
    ]
  },
  {
    name: 'Build Step',
    href: '/docs/v2/build-step'
  },
  {
    name: 'Custom Domains',
    href: '/docs/v2/custom-domains'
  },
  {
    name: 'Serverless Functions',
    href: '/docs/v2/serverless-functions/introduction',
    posts: [
      {
        name: 'Supported Languages',
        href: '/docs/v2/serverless-functions/supported-languages'
      },
      {
        name: 'Edge Caching',
        href: '/docs/v2/serverless-functions/edge-caching'
      },
      {
        name: 'Environment Variables & Secrets',
        href: '/docs/v2/serverless-functions/env-and-secrets'
      }
    ]
  },
  {
    name: 'Platform',
    href: '/docs/v2/platform/overview',
    posts: [
      {
        name: 'Deployments',
        href: '/docs/v2/platform/deployments'
      },
      {
        name: 'Projects',
        href: '/docs/v2/platform/projects'
      },
      {
        name: 'Users and Teams',
        href: '/docs/v2/platform/users-and-teams'
      },
      {
        name: 'Limits',
        href: '/docs/v2/platform/limits'
      },
      {
        name: 'Glossary',
        href: '/docs/v2/platform/glossary'
      },
      {
        name: 'Frequently Asked Questions',
        href: '/docs/v2/platform/frequently-asked-questions'
      }
    ]
  },
  {
    name: 'Network',
    href: '/docs/v2/network/overview',
    posts: [
      {
        name: 'Caching',
        href: '/docs/v2/network/caching'
      },
      {
        name: 'Headers',
        href: '/docs/v2/network/headers'
      },
      {
        name: 'Encryption',
        href: '/docs/v2/network/encryption'
      },
      {
        name: 'Compression',
        href: '/docs/v2/network/compression'
      },
      {
        name: 'Regions and Providers',
        href: '/docs/v2/network/regions-and-providers'
      },
      {
        name: 'Frequently Asked Questions',
        href: '/docs/v2/network/frequently-asked-questions'
      }
    ]
  },
  {
    name: 'More',
    href: '/docs/v2/more/introduction',
    posts: [
      {
        name: 'Deploy Button',
        href: '/docs/v2/more/deploy-button'
      },
      {
        name: 'Deploy Hooks',
        href: '/docs/v2/more/deploy-hooks'
      }
    ]
  }
]
