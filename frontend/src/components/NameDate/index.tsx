import React from 'react'
import "./styles.css"

function NameDate() {
  return (
    <div className='nd-main'>
      <p className='nd-title'>Smart Farm Management</p>
      <p className='nd-description'>Date : 12/02/2024</p> {/*need to show this as dynamic date */}
    </div>
  )
}

export { NameDate }