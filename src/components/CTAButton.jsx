import React from 'react'

export default function CTAButton({ href = 'https://t.me/+oUQxmivw6SMzOTBl' }){
  return (
    <div style={{marginBottom: '12px'}}>
      <a className="cta" href={href} target="_blank" rel="noreferrer">JOIN THE CHANNEL NOW</a>
    </div>
  )
}
