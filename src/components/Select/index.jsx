import React from 'react'

 const Select = ({name , id , onChange , options = []  }) => {
  return (
  <select name={name} id={id} onChange={onChange}>
    {options.length > 0 ? options.map((item) => {
      return <option value={item.value}>{item.label}</option>
    }) : null}
  </select>

  )
}


export default Select