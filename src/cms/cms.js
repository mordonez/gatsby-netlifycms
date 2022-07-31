import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import BlogPostPreview from '@cms/collections/blog/BlogPostPreview'
import BlockPagePreview from '@cms/collections/block/BlockPagePreview'
import slugify from 'slugify'

import { v4 } from 'uuid'
import config from '@cms/config'

CMS.init(config)

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('blockpage', BlockPagePreview)

CMS.registerEventListener({
  name: 'preSave',
  handler: ({ entry }) => {
    // Only process blockpages and blog
    if (!['blockpage', 'blog'].includes(entry.get('collection'))) return

    if (!entry.get('data').get('id')) {
      return entry.get('data').set('id', v4())
    }
  },
})

CMS.registerEventListener({
  name: 'preSave',
  handler: ({ entry }) => {
    // Only process blockpages
    if (entry.get('collection') !== 'blockpage') return

    // If there's already a slug, don't change it
    if (entry.getIn(['data', 'path'], '')) return

    // Slugify the title and save it as the slug
    const title = entry.getIn(['data', 'title'], '')
    const slug = slugify(title)
    return entry.get('data').set('path', `/${slug.toLowerCase()}/`)
  },
})
