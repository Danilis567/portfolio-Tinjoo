import React from 'react'
import { footerIcons } from '../dynamicData'
export default function Footer() {

  return (
    <footer className='flex flex-col gap-12 items-center'>
      <div className='flex flex-row gap-7 cursor-pointer'>
        {footerIcons.map((iconItem) => (
          <div key={iconItem.id} className="text-dark hover:text-primary transition duration-300">
            <iconItem.icons size={30} />
          </div>
        ))}
      </div>
      <p>
        Copyright ©2025 All rights reserved
      </p>
    </footer>
  )
}
