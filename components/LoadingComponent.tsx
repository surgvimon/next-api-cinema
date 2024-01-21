import { Spin } from 'antd';
import React from 'react'

export default function LoadingComponent() {
  return (
    <>
    <div className='async-loading'>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </div>
    </>
  )
}
