'use client'
import React from 'react'

interface GlobalErrorPageProps {
  error: Error;
}

const GlobalErrorPage = ({ error }: GlobalErrorPageProps) => {
  console.log('Global Error:', error);
  return (
    <div>The application has encountered an error, please read the console log</div>
  )
}

export default GlobalErrorPage