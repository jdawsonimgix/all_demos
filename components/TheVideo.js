import React, { useState, useEffect } from 'react'
import { createComponent } from '@lit-labs/react'
import { IxVideo } from '@imgix/ix-video'

export const Video = createComponent(React, 'ix-video', IxVideo, {
  onSeeked: 'seeked',
})

const TheVideo = ({ theSource, theid }) => {
  const [hasControls, setHadControls] = useState(true)

  const handleClick = () => {
    const videoPlayer = document.querySelector('ix-video video')
    videoPlayer.play()
  }
  return (
    <div>
      <button onClick={handleClick}>Toggle controls</button>
      <Video
        id="ix-video"
        controls
        source={theSource}
        //source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
        onSeeked={(e) => console.log(e)}
        width="800"
      />
    </div>
  )
}

export default TheVideo

// useEffect(() => {
//   // const videos = document.getElementsByTagName('Video')
//   // console.log(videos)
// })
