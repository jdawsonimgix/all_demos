import React, { useState, useEffect } from 'react'
import { createComponent } from '@lit-labs/react'
import { IxVideo } from '@imgix/ix-video'

export const Video = createComponent(React, 'ix-video', IxVideo, {
  onSeeked: 'seeked',
})

const TheVideo = () => {
  const [videoURL, setURL] = useState(
    'https://jdawson.imgix.video/mixkit-stars-in-space-1610.mp4',
  )

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
      <form>
        <label>
          Enter url:
          <input
            type="text"
            value={videoURL}
            onChange={(e) => setURL(e.target.value)}
          />
        </label>
      </form>
      <Video
        controls
        source={videoURL + `?fm=mp4`}
        onSeeked={(e) => console.log(e)}
        width="400"
        type="video/mp4"
      />
      <Video
        controls
        source={videoURL}
        onSeeked={(e) => console.log(e)}
        width="400"
      />
    </div>
  )
}

export default TheVideo
