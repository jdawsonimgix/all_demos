import React from 'react'
import { createComponent } from '@lit-labs/react'
import { IxVideo } from '@imgix/ix-video'

export const Video = createComponent(React, 'ix-video', IxVideo, {
  onSeeked: 'seeked',
})

const TheVideo = ({ theSource }) => {
  console.log(theSource)
  return (
    <Video
      controls
      source={theSource}
      //source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
      onSeeked={(e) => console.log(e)}
      width="800"
    />
  )
}

export default TheVideo
