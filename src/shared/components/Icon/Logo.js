/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import Svg, { Ellipse, G, Path } from 'react-native-svg'

type Props = { size: number }

const Logo = (props: Props) => {
  const { size } = props
  const ratio = 246 / 111
  return (
    <Svg width={ratio * size} height={size} viewBox="21 60 246 111">
      <G fill="none" fillRule="evenodd">
        <Path d="M54.627 141.765c-1.26-2.545-2.297-5.173-3.106-7.844h23.02c2.18 0 3.93-1.75 3.93-3.92 0-2.16-1.76-3.92-3.93-3.92H49.83c-.042-.32-.08-.64-.117-.96 0 0-.064-3.32.05-6.87h18.9c2.18 0 3.93-1.75 3.93-3.92 0-2.16-1.76-3.92-3.93-3.92H50.527c1.828-9.48 6.417-18.54 13.765-25.88 15.56-15.56 38.8-18.67 57.428-9.41-4.77 2.3-9.28 5.398-13.257 9.376-19.54 19.536-19.567 51.16-.065 70.66 3.97 3.97 8.56 6.97 13.24 9.35-18.644 9.29-41.87 6.22-57.403-9.31-1.745-1.747-3.345-3.605-4.794-5.55h9.23c2.18 0 3.93-1.76 3.93-3.925 0-2.16-1.76-3.92-3.93-3.92H54.63zm35.58-53.342c2.163 0 3.916-1.756 3.916-3.923 0-2.166-1.753-3.922-3.915-3.922s-3.915 1.756-3.915 3.922c0 2.167 1.753 3.923 3.915 3.923zm-10.96 35.144c1.426 0 2.584-1.16 2.584-2.59s-1.15-2.59-2.58-2.59c-1.43 0-2.58 1.16-2.58 2.59s1.16 2.59 2.59 2.59zm12.723 37.048c3.58 0 6.483-2.908 6.483-6.495s-2.903-6.495-6.483-6.495c-3.58 0-6.483 2.908-6.483 6.495s2.902 6.495 6.483 6.495z" fill="#FDC109" />
        <Path d="M60.453 110.387h3.72v4.677c0 .22-.146.313-.34.2l-1.18-.69c-.187-.11-.486-.114-.68 0l-1.178.69c-.19.11-.342.03-.342-.2v-4.677z" fill="#FF9C00" />
        <G transform={{ translate: '35, 60' }}>
          <Ellipse stroke="#FDC109" strokeWidth="1.176" cx="101.008" cy="5.536" rx="3.9" ry="3.954" />
          <Ellipse stroke="#FDC109" strokeWidth="1.176" cx="8.97" cy="35.984" rx="3.51" ry="3.559" />
          <Ellipse fill="#FDC109" cx="78.778" cy="3.163" rx="3.12" ry="3.163" />
          <Ellipse fill="#FDC109" cx="2.73" cy="53.186" rx="2.73" ry="2.768" />
        </G>
        <Path d="M138.205 109.273c2.842 2.842 6.37 4.508 9.8 4.508 6.664 0 10.192-4.7 10.192-10.19 0-8.43-7.056-16.66-19.6-17.34 2.156-3.92 5.684-5.29 9.212-5.29.58 0 2.94.4 3.43.4 1.17 0 2.15-.68 2.15-1.96 0-2.45-3.53-2.64-5.59-2.64-6.08 0-11.67 3.43-14.21 9.61-16.47 1.67-27.64 16.47-27.64 33.62 0 16.76 10.09 29.5 27.44 29.5 16.46 0 23.22-10.19 23.22-11.76 0-1.27-.98-2.25-2.06-2.25-.69 0-1.47.39-1.86.98-3.83 5.59-10.59 8.82-19.31 8.82-14.9 0-23.13-11.27-23.13-25.28 0-13.82 8.43-26.757 22.15-29.3-.1.78-.2 1.66-.2 2.543 0 6.37 2.05 12.25 5.97 16.07zm9.8.294c-4.606 0-11.368-5.684-11.368-16.366 0-1.07.098-2.05.294-2.94 10.69.3 16.76 6.67 16.76 13.33 0 1.77-.49 5.98-5.68 5.98zm18.413 38.906c1.274 0 2.254-.98 2.058-2.156-1.372-10.878 6.958-27.244 13.328-27.244 2.45 0 3.724 2.548 3.724 9.996 0 6.27-1.372 12.93-2.156 15.97 0 .19-.098.39-.098.59 0 1.08.98 2.15 2.254 2.15.98 0 1.764-.69 2.058-1.67.294-.88 2.352-8.92 2.352-17.05 0-4.22-.098-14.51-7.84-14.51-5.292 0-11.27 5.98-14.21 15.78 1.176-9.41 2.744-16.37 3.626-19.9 9.8-2.45 19.894-9.8 19.894-17.74 0-4.02-2.45-6.57-6.664-6.57-7.546 0-13.622 11.07-16.66 20.77-1.078.2-2.45.29-3.724.29h-1.862c-1.078-.198-2.058.782-2.058 1.96 0 2.252 2.058 2.154 3.822 2.154.882 0 1.96 0 2.646-.096-.98 4.12-3.234 16.66-3.234 27.44 0 3.236.196 5.1.686 8.04.196.98.98 1.76 2.058 1.76zm18.228-58.31c1.764 0 2.45 1.078 2.45 2.548 0 4.81-6.566 10.49-14.21 13.14 3.038-9.21 8.232-15.68 11.76-15.68zm19.294-.686c0 .196.098.49.196.784.294.49.392 1.77.392 3.73 0 4.02-1.372 9.02-3.528 17.94-1.862 7.55-4.802 21.66-4.802 29.5 0 2.75.196 7.06 2.94 7.06 1.176 0 2.156-.88 2.156-2.15 0-.39-.098-.68-.294-.98-.098-.29-.392-1.17-.392-3.92 0-7.84 3.038-21.95 5.194-30.77 1.372-5.68 3.038-12.05 3.038-16.66 0-3.13 0-6.76-2.646-6.76-.294 0-.686.1-.882.2-.784.3-1.372 1.08-1.372 2.06zm21.55 24.5c-6.273 0-9.605 4.9-9.605 9.604 0 4.51 2.94 8.24 8.624 8.24 2.45 0 2.64-1.57 2.64-2.15 0-1.17-.98-2.15-2.26-2.15-1.67 0-4.61 0-4.61-3.92 0-2.35 1.27-5.48 5-5.48 4.7 0 6.27 5.29 6.27 9.21 0 8.33-4.51 17.64-11.57 17.64-5 0-7.06-5.98-7.06-11.07 0-2.06.29-4.8.88-6.27.1-.29.19-.59.19-.98 0-1.08-.88-2.16-2.06-2.16-.88 0-1.767.69-2.06 1.57-.98 2.65-1.376 5.2-1.376 7.94 0 9.12 4.51 15.09 11.27 15.09 10 0 16.17-11.27 16.17-21.75 0-7.84-4.018-13.33-10.486-13.33zm24.29 15.68c-1.273.098-2.155 1.078-2.155 2.156 0 1.274.98 2.058 2.156 2.058 5.79 0 13.92-3.82 13.92-11.56 0-3.92-2.35-7.54-8.23-7.54-7.74 0-16.36 8.63-16.36 20.98 0 8.33 4.8 13.33 12.25 13.33 5.98 0 10.68-3.92 10.68-5.78 0-1.27-.78-2.25-1.96-2.25-.68 0-1.17.3-1.56.79-1.66 2.06-4.31 3.23-6.86 3.23-7.05 0-8.13-5.98-8.13-9.31 0-10.49 6.96-16.76 11.86-16.76 2.55 0 3.92 1.37 3.92 3.33 0 4.41-4.9 7.25-9.5 7.35zm11.565-30.576c-2.352 2.06-5.586 4.51-8.82 7.06-.49.39-.784.98-.784 1.67 0 .79.69 1.77 1.47 1.77.49 0 1.08-.1 1.77-.59 2.35-1.66 7.06-5.49 9.7-7.45 1.37-1.07 1.96-2.05 1.96-3.03 0-1.08-.78-1.66-1.76-1.66-.29 0-.78.2-1.17.3-.88.69-1.86 1.57-2.35 1.96z" fill="#FDC109" />
      </G>
    </Svg>
  )
}

export default Logo