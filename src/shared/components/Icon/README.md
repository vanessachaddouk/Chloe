# Icon 💠

## Doc
A generic component for SVG icons.

### API
* name: `'arrow' | 'cardio' | 'chill' | 'close' | 'filter' | 'historic' | 'hit' | 'like' | 'location' | 'navigation | 'phone' | 'search' |'share' | 'star' | 'stretching' |'marker'`,
* actived?: `Boolean`,
* size?: `Number`,
* defaultActivedColor?: `String`,
* defaultColor?: `String`,
* style?: `Stylesheet | Number`,

### Example
```js
import React from 'react'
import Icon from '@components/Icon'

const MyComponent = () => {
  return (
    <Icon
      name="star"
      defaultColor="pink"
      size={22}
    />
  )
}

export default MyComponent
```

## Change log
### Thursday, September 29th
* Add awesome icon
* Add dead icon

### Friday, September 23rd
* Add fail icon
* Add muscle icon
* Add success icon

### Sunday, September 11th
* Initial release. We didn't track changes before this version.
