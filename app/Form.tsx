"use client"

import React, { useState } from "react"

export const Form: React.FC<{
  placeholder: string
  greeting: string
}> = ({ placeholder, greeting }) => {
  const [name, setName] = useState("")

  return (
    <>
      <input
        onChange={(event) => setName(event.currentTarget.value)}
        placeholder={placeholder}
      />
      {name && (
        <p>
          {greeting} {name}
        </p>
      )}
    </>
  )
}
