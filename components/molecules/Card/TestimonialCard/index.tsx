import Text from 'components/atoms/Text'
import Image from 'next/image'
import React from 'react'
interface Props {
  avatarSrc: string
  name: string
  company: string
  testimony: string
  imageWidth: number
  imageHeight: number
}
const TestimonialCard = ({ avatarSrc, company, name, testimony, imageWidth, imageHeight }: Props) => {
  return (
    <div className="w-full px-10 py-14 bg-light rounded-md select-none">

      <div className="space-y-5 flex flex-col items-center text-center">
        <div className="relative w-fit">
          <Image
            src={avatarSrc}
            width={imageWidth}
            height={imageHeight}
            objectFit="contain"
            alt="avatar"
          />
          {/* <div className="absolute bottom-0 right-0">
            <Image
              src={'/images/quote-badge.svg'}
              width={28}
              height={28}
              alt="quote badge"
            />
          </div> */}
        </div>
        {
          name ? (
            <div className="space-y-5">
              <div className="space-y-2">
                <Text value={name} textStyle="TestimonialName" />
                <Text value={company} textStyle="TestimonialCompany" />
              </div>
              <Text value={testimony} textStyle="TestimonialDescription" />
            </div>
          ) : null
        }
      </div>
    </div>
  )
}

export default TestimonialCard
