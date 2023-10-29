import useMobileDeviceDetection from 'hooks/useMobileDetection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBrand = () => {
  const isMobile = useMobileDeviceDetection()
  return (
    <>
      <div
        className={`select-none ${
          isMobile ? 'cursor-default' : 'cursor-pointer'
        }`}
      >
        <Link href={'/'} passHref>
          <div className="w-fit h-fit">
            {/* standard size is width: 135px, height: 30  */}
            <Image src={'/writeLogo.png'} width='225px' height={50} alt='company brand' loading='eager' priority={true} />
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavBrand
