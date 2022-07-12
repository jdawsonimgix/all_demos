import React, { useState, useEffect } from 'react'
import { createComponent } from '@lit-labs/react'
import { IxVideo } from '@imgix/ix-video'

export const Video = createComponent(React, 'ix-video', IxVideo, {
  onSeeked: 'seeked',
})

const TheVideo = ({ theSource, theid }) => {
  const handlePlay = () => {
    const videos = document.getElementsByTagName('video')
    const firstPlayer = videos[0]
    const secondPlayer = videos[1]
    firstPlayer.play()
    secondPlayer.play()
  }

  const handlePause = () => {
    const videos = document.getElementsByTagName('video')
    const firstPlayer = videos[0]
    const secondPlayer = videos[1]
    firstPlayer.pause()
    secondPlayer.pause()
  }
  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <Video
        controls
        source={theSource}
        //source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
        onSeeked={(e) => console.log(e)}
        width="400"
      />
      <Video
        controls
        source={theSource}
        //source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
        onSeeked={(e) => console.log(e)}
        width="400"
      />
    </div>
  )
}

export default TheVideo

// useEffect(() => {
//   // const videos = document.getElementsByTagName('Video')
//   // console.log(videos)
// })
