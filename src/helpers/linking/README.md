# Linking
```Linking``` gives you a general interface to interact with both incoming and outgoing app links.

## Doc
### Share
Open native modal to share content.

#### API
* ```share({ title: String, url: String, content: String, }): void```

#### Example
``` js
import React from 'react'
import { TouchableWithoutFeedback, Text } from 'react-native'
import { share } from '@helpers/linking'

const Example = () => {
  return (
    <TouchableWithoutFeedback onPress={() => share({
      title: 'Example',
      url: 'http://example.com',
      content: Lorem ipsum ...,      
    })}>
      <Text>On click</Text>
    </TouchableWithoutFeedback>
  )
}
```

### Call
Call a phone number.

#### API
* ```call(phone: Number): void```

#### Example
``` js
import React from 'react'
import { TouchableWithoutFeedback, Text } from 'react-native'
import { call } from '@helpers/linking'

const Example = () => {
  return (
    <TouchableWithoutFeedback onPress={() => call('0607080910')}>
      <Text>On click</Text>
    </TouchableWithoutFeedback>
  )
}
```

## Change log
### Saturday, September 10th
* Initial release. We didn't track changes before this version.
