import React from 'react'

export const FormErrors = ({error}) => {
  return (
    <p className='text-sm text-red-600'>{error}</p>
  )
}
