const SettingsMenu = {
  file: 'src/data/menu.json',
  label: 'Menu',
  name: 'settings-menu',
  editor: {
    preview: false,
  },
  fields: [
    {
      label: 'Link',
      name: 'navigation',
      widget: 'list',
      collapsed: true,
      summary: '{{fields.title}} {{fields.url}}',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Link', name: 'url', widget: 'string' },
      ],
    },
  ],
}

export default SettingsMenu
