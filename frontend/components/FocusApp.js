import React, { useState } from "react"
import FocusSpace from "./FocusSpace"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faWindowRestore, faVolumeHigh, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'

const FocusApp = ({ }) => {

  const [isFocusSpaceShowing, setIsFocusSpaceShowing] = useState(false)
  const [hasSoundPlaying, setHasSoundPlaying] = useState(false)
  const [isPomodoroRunning, setIsPomodoroRunning] = useState(false)

  return (
    <div className={`focus-app ${isFocusSpaceShowing ? 'space-showing' : ''} ${hasSoundPlaying ? 'playing' : ''} ${isPomodoroRunning ? 'pomodoro-running' : ''}`}>
      <FocusSpace isFocusSpaceShowing={isFocusSpaceShowing}
        onPlayStart={() => setHasSoundPlaying(true)}
        onPlayToggle={() => setHasSoundPlaying(false)}
        onPomodoroStart={() => setIsPomodoroRunning(true)}
        onPomodoroStop={() => setIsPomodoroRunning(false)}
        onHide={() => setIsFocusSpaceShowing(false)} />

      <div className="focus-space-access-buttons">

        <button className={`tour--open-focus-app-button open-space-button ${isFocusSpaceShowing ? 'close' : 'open'}`} onClick={() => setIsFocusSpaceShowing(!isFocusSpaceShowing)}>
          <FontAwesomeIcon icon={isFocusSpaceShowing ? faXmark : faWindowRestore} />
          <span className='sound-playing-icon'>
            <FontAwesomeIcon icon={faVolumeHigh} />
          </span>

          <span className='pomodoro-running-icon'>
            <FontAwesomeIcon icon={faHourglassHalf} />
          </span>
        </button>

      </div>
    </div>
  )
}

export default FocusApp
