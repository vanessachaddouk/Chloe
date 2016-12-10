/* @flow */

export default (period: string) => {
  switch (period) {
    case 'preHistory':
      return 'Préhistoire'
    case 'antiquity':
      return 'Antiquité'
    case 'middleAge':
      return 'Moyen-Âge'
    case 'modernTimes':
      return 'Époque moderne'
    case 'contemporaryTimes':
      return 'Époque contemporaine'
    default:
      return ''
  }
}
