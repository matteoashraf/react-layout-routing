import React, { useEffect } from 'react'

export default function TitleWrapper({ title, children }) {
  useEffect(() => {
    document.title = title
  }, [title])
  return children
}
