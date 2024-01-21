'use client'
import React, { useEffect, useState } from 'react'

const Tab = (props:any) => {
  const { activeTab, label, onClick } = props;
  const [className, setClassName] = useState('tab-list-item');

  useEffect(() => {
    if(activeTab === label) {
      setClassName((prev) => (prev += ' tab-list-active'))
    } else {
      setClassName('tab-list-item')
    }

  },[activeTab, label])
  const handleTabClick = () => {
    onClick(label)
  };
  return (
    <>
      <li className={className} onClick={handleTabClick}>{label}</li>
    </>
  )
}

// Tab.propTypes = {

// }

export default Tab
