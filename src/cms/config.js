import BlogPost from '@cms/collections/blog/BlogPost'
import BlockPage from '@cms/collections/block/BlockPage'
import SettingsMenu from '@cms/collections/settings/SettingsMenu'
import SettingsSite from '@cms/collections/settings/SettingsSite'

const config = {
  config: {
    backend: {
      name: 'gitlab',
      branch: 'master',
      repo: 'portals-web-universitat-de-barcelona/gatsby-starter-netlify-cms',
      auth_type: 'pkce',
      app_id:
        'bebe4083039d9a03e362917482d2956bc1e78a44fcc5f2e8843ff0ba4de238fa',
      commit_messages: {
        create: 'Creacio {{collection}} “{{slug}}”',
        update: 'Actualitzacio {{collection}} “{{slug}}”',
        delete: 'Elimina {{collection}} “{{slug}}”',
        uploadMedia: '[skip ci] Upload “{{path}}”',
        deleteMedia: '[skip ci] Elimina “{{path}}”',
      },
    },
    locale: 'es',
    media_folder: 'static/img',
    public_folder: '/img',
    collections: [
      BlogPost,
      BlockPage,
      {
        name: 'config',
        label: 'Settings',
        files: [SettingsMenu, SettingsSite],
      },
    ],
  },
}

if (process.env.NODE_ENV === 'development') {
  ;(config.config.local_backend = true), (config.config.backend.name = 'proxy')
  config.config.backend.proxy_url = process.env.BACKEND_URL
    ? process.env.BACKEND_URL
    : 'http://localhost:8081/api/v1'
} else {
  //config.config.publish_mode = 'editorial_workflow'
  config.config.site_url = 'https://www.ub.edu/d8folder/'
}

export default config
