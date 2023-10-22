import React from 'react'

export default function EventLocation() {
  return (
    <div style={{ height: "50vh" }}>
    <div className="MapContainer">
      <iframe
        width="100%"
        height="400px"
        title="map"
        className="EventLocation"
        loading="lazy"
        style={{ filter: "opacity(0.7)" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.243890593405!2d36.81421683165361!3d-1.2875375584067692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d99f4c0f71%3A0xabad77616f1ae4cb!2sKICC!5e0!3m2!1sen!2ske!4v1697814261559!5m2!1sen!2ske"
      />
    </div>
  </div>
  
  )
}
