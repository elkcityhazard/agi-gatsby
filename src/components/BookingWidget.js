import React, { useRef } from 'react'

const BookingWidget = () => {

  const bookingRef = useRef(null)


  const bookingScript = () => {
    const script = document.createElement('script')
    script.src = "https://asset-tidycal.b-cdn.net//js/embed.js"
    script.async = true;
    bookingRef.current.appendChild(script)
  }


  return (
    <div>
      <div id="tidycal-embed" data-path="absolutely-gorgeous-interiors/30-minute-meeting" onLoad={bookingScript()}></div>
      <div ref={bookingRef} className="booking-widget">
      </div>
    </div>
  )
}
export default BookingWidget