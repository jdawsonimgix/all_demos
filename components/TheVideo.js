import React, { useState, useEffect } from 'react'
import { createComponent } from '@lit-labs/react'
import { IxVideo } from '@imgix/ix-video'

export const Video = createComponent(React, 'ix-video', IxVideo, {
  onSeeked: 'seeked',
})

const TheVideo = ({ theSource, theid }) => {
  const handlePlay = () => {
    const videoPlayer = document.querySelector('ix-video video')
    console.log(videoPlayer)
    videoPlayer.play()
  }

  const handlePause = () => {
    const videoPlayer = document.querySelector('ix-video video')
    videoPlayer.pause()
  }
  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <Video
        id="ix-video"
        controls
        source={theSource}
        //source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
        onSeeked={(e) => console.log(e)}
        width="400"
      />
      <Video
        id="ixx-video"
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
