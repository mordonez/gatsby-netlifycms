import Sections from '@cms/partials/Sections'

const BlockPage = {
  name: 'blockpage',
  label: 'Pages',
  folder: 'src/pages',
  create: true,
  slug: '{{slug}}',
  filter: { field: 'templateKey', value: 'block-page' },
  preview_path: '{{path}}',
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'block-page',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: 'Default title',
    },
    {
      label: 'Show title',
      name: 'showtitle',
      widget: 'boolean',
      default: false,
      required: false,
    },
    {
      label: 'Header',
      name: 'header',
      widget: 'list',
      types: Sections,
    },
    { label: 'Body', name: 'body', widget: 'markdown', required: false },
    {
      label: 'Footer',
      name: 'footer',
      widget: 'list',
      types: Sections,
    },
    {
      label: 'Path',
      name: 'path',
      widget: 'string',
      default: '',
      required: false,
    },
  ],
}

export default BlockPage
