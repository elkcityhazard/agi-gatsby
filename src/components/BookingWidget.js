import React, { Component } from 'react'
class BookingWidget extends Component {
  
  
  componentDidMount(){
    const script=document.createElement('script')
    script.src="https://asset-tidycal.b-cdn.net//js/embed.js"
    script.async=true;
    this.instance.appendChild(script)
    
  }
  render() {
    return (
      <div>
        <div
          id="frameTitle"
          className="embedded-widget-title"
          style={{
            fontSize: '23px',
            color: '#333',
            fontFamily: 'Arial, Helvetica, sans-serif',
            lineHeight:'24px',
            padding:'18px 10px 8px',
            textAlign:'center',
            boxSizing:'border-box'
          }}
        >
          Book Now
        </div>
        <div ref={el => (this.instance = el)} className="booking-widget">
        </div>
      </div>
    )
  }
}
export default BookingWidget