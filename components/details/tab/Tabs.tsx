'use client'
import React, { useEffect, useState } from 'react'
import Tab from './Tab';

const Tabs = ({children}:any ) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab:any) => { 
    setActiveTab(tab);
    // console.log(tab.label)
  };

  return (
    <div className='tabs'>
      <ol className="tab-list">
        {
          children.map((child:any) => {
            const { label } = child.props;
            return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem} />
          })
        }
      </ol>
      <div className="tab-content">
        {
          children.map((child:any) => {
            if(child.props.label !== activeTab) return undefined;
            return child.props.children;
          })
        }
      </div>
    </div>
  )
}

export default Tabs
