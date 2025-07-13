import { DiscordIcon, InstagramIcon, TwitterIcon, YouToubeIcon } from '@/assets/icons'
import Heading from '@/components/Heading'
import Text from '@/components/Text'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <footer className='bg-[#3B3B3B] py-10'>
      <div className='containers'>
        <div className='flex justify-between'>
          <div className='w-[238px]'>
            <Link className='!mb-[30px] inline-block' href={'/'}>
              <Image priority className='w-[243] h-[32px]' src={'/logo.svg'} alt='sitelogo' width={243} height={32} />
            </Link>
            <Text classList='mb-[20px]'>NFT marketplace UI created with Anima for Figma.</Text>
            <div>
              <Text classList='mb-[15px]'>Join our community</Text>
              <div className='flex items-center gap-[10px]'>
                <Link href={'/'}>
                  <DiscordIcon />
                </Link>
                <Link href={'/'}>
                  <YouToubeIcon />
                </Link>
                <Link href={'/'}>
                  <TwitterIcon />
                </Link>
                <Link href={'/'}>
                  <InstagramIcon />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Heading classList='!mb-[25px]' tag='h3'>Explore</Heading>
            <Text classList='!mb-[20px]'>Marketplace</Text>
            <Text classList='!mb-[20px]'>Rankings</Text>
            <Text classList='!mb-[20px]'>Connect a wallet</Text>
          </div>
          <div>
            <Heading classList='!mb-[25px]' tag='h3'>Join our weekly digest</Heading>
            <Text classList='!mb-[20px] !w-[330px]'>Get exclusive promotions & updates straight to your inbox.</Text>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer