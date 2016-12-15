/* @flow */

import React from 'react'
import { Image, StatusBar, Text, View } from 'react-native'
import { getPeriodColor } from '@helpers/periods'
import Media from '@components/Media'
import styles from './styles'

type Props = {
  content: Array<Object>,
  title: string,
  text: string,
  period: string,
  pageStatus: Array<number>,
}

const ChloeMode = (props: Props): React$Element<any> => {
  const { content, title, text, period, pageStatus } = props
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
      />
      <View style={[styles.wrapper, styles.wrapperDark]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.content, styles.contentDark]}>{text}</Text>
        <View style={styles.footer}>
          <Text style={[styles.text, styles.contentDark]}>
            <Text style={{ color: getPeriodColor(period) }}>{pageStatus[0]}</Text>
            <Text> / {pageStatus[1]}</Text>
          </Text>
        </View>
      </View>
      <View style={[styles.wrapper, styles.projectorContentWrapper]}>
        <Image
          source={require('./assets/chloeZone.png')}
          style={styles.chloeZoneImage}
        >
        </Image>
        <View style={styles.contentContainer}>
          <Text style={styles.contentTitle}>CONTENU INTERACTIF</Text>
          <View style={styles.contentWrapper}>
            {content.map((item, index) => (
              <View key={index}>
                {item.paragraph === 1 &&
                  <View style={{ marginRight: 25 }}>
                    {item.type === 'word' &&
                      <Media
                        tileText={item.data}
                        draggable={false}
                        onPress={() => console.warn('SEND TO PI')}
                      />
                    }
                    {item.type !== 'word' &&
                    <Media
                      image={item.data}
                      draggable={false}
                      onPress={() => console.warn('SEND TO PI')}
                    />
                    }
                  </View>
                }
              </View>
            ))}
          </View>
          <View style={styles.contentWrapper}>
            {content.map((item, index) => (
              <View key={index}>
                {item.paragraph === 2 &&
                  <View style={{ marginRight: 25 }}>
                    {item.type === 'word' &&
                      <Media
                        tileText={item.data}
                        draggable={false}
                        onPress={() => console.warn('SEND TO PI')}
                      />
                    }
                    {item.type !== 'word' &&
                    <Media
                      image={item.data}
                      draggable={false}
                      onPress={() => console.warn('SEND TO PI')}
                    />
                    }
                  </View>
                }
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  )
}

export default ChloeMode
