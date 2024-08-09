import React from 'react'

export default function MyProfile({params}) {
    console.log('params',params)
  return (
    <div>
      My Profile {params.id}
    </div>
  )
}
