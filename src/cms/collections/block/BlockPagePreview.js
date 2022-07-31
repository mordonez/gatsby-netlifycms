import React from 'react'
import PropTypes from 'prop-types'
import { BlockPageTemplate } from '@templates/block-page'

const BlockPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(data)
  if (data) {
    return (
      <BlockPageTemplate
        title={data.title}
        showtitle={data.showtitle}
        header={data.header || []}
        footer={data.footer || []}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

BlockPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlockPagePreview
