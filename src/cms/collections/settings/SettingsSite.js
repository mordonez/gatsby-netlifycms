const SettingsSite = {
  file: 'site-config.json',
  label: 'Site & Theme',
  name: 'settings-site',
  editor: {
    preview: false,
  },
  fields: [
    { label: 'Title', name: 'title', widget: 'string' },
    { label: 'Title Template', name: 'titleTemplate', widget: 'string' },
    { label: 'Description', name: 'description', widget: 'string' },
    {
      label: 'Theme',
      name: 'theme',
      widget: 'object',
      fields: [
        {
          label: 'Color > Primary',
          name: 'colorsPrimary',
          widget: 'color',
          allowInput: true,
        },
        {
          label: 'Color > Light',
          name: 'colorsLight',
          widget: 'color',
          allowInput: true,
        },
        {
          label: 'Color > Dark',
          name: 'colorsDark',
          widget: 'color',
          allowInput: true,
        },
        {
          label: 'Color > Link',
          name: 'colorsLink',
          widget: 'color',
          allowInput: true,
        },
      ],
    },
  ],
}

export default SettingsSite
