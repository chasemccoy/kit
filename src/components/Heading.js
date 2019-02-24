import React from 'react'
import Text from 'components/Text'

const Heading = props => <Text as='h1' {...props} />

Heading.h1 = props => <Heading {...props} />
Heading.h2 = props => <Heading as='h2' {...props} />
Heading.h3 = props => <Heading as='h3' {...props} />
Heading.h4 = props => <Heading as='h4' {...props} />
Heading.h5 = props => <Heading as='h5' {...props} />
Heading.h6 = props => <Heading as='h6' {...props} />

Heading.h1.displayName = 'Heading.h1'
Heading.h2.displayName = 'Heading.h2'
Heading.h3.displayName = 'Heading.h3'
Heading.h4.displayName = 'Heading.h4'
Heading.h5.displayName = 'Heading.h5'
Heading.h6.displayName = 'Heading.h6'

export default Heading
