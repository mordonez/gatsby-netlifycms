const Sections = [
  {
    label: 'Full Image',
    name: 'fullimage',
    widget: 'object',
    summary: '{{fields.heading}}',
    fields: [
      { label: 'type', name: 'type', widget: 'hidden', default: 'fullimage' },
      { label: 'Image', name: 'image', widget: 'image' },
      {
        label: 'Height',
        name: 'height',
        widget: 'number',
        value_type: 'int',
        default: 400,
      },
      {
        label: 'Heading',
        name: 'heading',
        widget: 'string',
        default: 'Heading here...',
      },
      {
        label: 'Subheading',
        name: 'subheading',
        widget: 'text',
        required: false,
      },
    ],
  },
  {
    label: 'Featured Post',
    name: 'featuredpost',
    widget: 'object',
    summary: '{{fields.heading}}',
    fields: [
      {
        label: 'type',
        name: 'type',
        widget: 'hidden',
        default: 'featuredpost',
      },
      {
        label: 'Heading',
        name: 'heading',
        widget: 'text',
        default: 'Featured Post',
      },
      {
        label: 'Featured post',
        name: 'post',
        widget: 'relation',
        collection: 'blog',
        search_fields: ['title'],
        value_field: '{{id}}',
        display_fields: ['{{title}}'],
        multiple: false,
      },
    ],
  },
  {
    label: 'Page Heading',
    name: 'pageheading',
    widget: 'object',
    summary: '{{fields.heading}}',
    fields: [
      { label: 'type', name: 'type', widget: 'hidden', default: 'pageheading' },
      {
        label: 'Heading',
        name: 'heading',
        widget: 'text',
        default: 'Heading here...',
      },
      {
        label: 'Subheading',
        name: 'subheading',
        widget: 'text',
        default: 'SubHeading here...',
      },
    ],
  },
  {
    label: 'Columns',
    name: 'columns',
    widget: 'object',
    summary: '{{fields.heading}}',
    fields: [
      { label: 'type', name: 'type', widget: 'hidden', default: 'columns' },
      {
        label: 'Number',
        name: 'number',
        widget: 'select',
        options: ['1', '2', '3', '4', '5', '6'],
        default: '1',
      },
      {
        label: 'Box?',
        name: 'box',
        widget: 'boolean',
        default: false,
        required: false,
      },
      {
        label: 'Columns',
        name: 'columns',
        widget: 'list',
        fields: [
          { label: 'Image', name: 'image', widget: 'image', required: false },
          {
            label: 'Content',
            name: 'content',
            widget: 'markdown',
            buttons: [
              'bold',
              'italic',
              'code',
              'link',
              'heading-two',
              'heading-three',
              'heading-four',
              'heading-five',
              'heading-six',
              'quote',
              'bulleted-list',
              'numbered-list',
            ],
            editor_components: ['code-block'],
            required: false,
          },
        ],
      },
    ],
  },
  {
    label: 'Content',
    name: 'content',
    widget: 'object',
    summary: '{{fields.content}}',
    fields: [
      { label: 'type', name: 'type', widget: 'hidden', default: 'content' },
      {
        label: 'Content',
        name: 'content',
        widget: 'markdown',
        editor_components: ['code-block'],
        default: 'Content here...',
      },
    ],
  },
  {
    label: 'Image and Text',
    name: 'imageandtext',
    widget: 'object',
    summary: '{{fields.heading}}',
    fields: [
      {
        label: 'type',
        name: 'type',
        widget: 'hidden',
        default: 'imageandtext',
      },
      { label: 'Image', name: 'image', widget: 'image' },
      {
        label: 'Position',
        name: 'position',
        widget: 'select',
        options: ['left', 'right'],
        default: 'right',
      },
      {
        label: 'Heading',
        name: 'heading',
        widget: 'text',
        default: 'Heading here...',
      },
      { label: 'Content', name: 'content', widget: 'text', required: false },
      {
        label: 'Buttons',
        name: 'buttons',
        widget: 'list',
        summary: '{{fields.label}} - {{fields.url}}',
        fields: [
          {
            label: 'Label',
            name: 'label',
            widget: 'string',
            default: 'Label here',
          },
          { label: 'url / page', name: 'url', widget: 'string', default: '/' },
          {
            label: 'Style',
            name: 'style',
            widget: 'select',
            options: ['default', 'light'],
            default: 'default',
          },
        ],
      },
    ],
  },
]

export default Sections