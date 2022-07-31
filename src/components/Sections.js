import * as React from 'react'
import PropTypes from 'prop-types'
import PageHeading from '@components/Sections/PageHeading'
import ImageAndText from '@components/Sections/ImageAndText'
import Content from '@components/Sections/Content'
import FullImage from '@components/Sections/FullImage'
import FeaturedPost from '@components/Sections/FeaturedPost'
import Columns from '@components/Sections/Columns'

const Sections = ({ sections }) => {
  const sectionsComponents = {
    pageheading: PageHeading,
    imageandtext: ImageAndText,
    content: Content,
    fullimage: FullImage,
    featuredpost: FeaturedPost,
    columns: Columns,
  }
  if (sections) {
    const sectionsContent = sections.map((section, key) => {
      const Section = sectionsComponents[section.type]
      if (Section) {
        return <Section key={key} data={section} />
      }
      return <div key="`${section}-${key}`">{section.type}</div>
    })
    return <>{sectionsContent}</>
  } else {
    return <></>
  }
}

Sections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      heading: PropTypes.string,
      subheading: PropTypes.string,
      content: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      buttons: PropTypes.array,
    })
  ),
}

export default Sections
