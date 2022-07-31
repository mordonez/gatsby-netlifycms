const BlogPost = {
  name: 'blog',
  label: 'Blog',
  folder: 'src/pages/blog',
  create: true,
  slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'blog-post',
    },
    { label: 'Title', name: 'title', widget: 'string' },
    { label: 'Publish Date', name: 'date', widget: 'datetime' },
    { label: 'Description', name: 'description', widget: 'text' },
    {
      label: 'Featured Post',
      name: 'featuredpost',
      widget: 'boolean',
      required: false,
    },
    { label: 'Featured Image', name: 'featuredimage', widget: 'image' },
    { label: 'Body', name: 'body', widget: 'markdown' },
    { label: 'Tags', name: 'tags', widget: 'list' },
  ],
}

export default BlogPost
