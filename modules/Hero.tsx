import { RocketIcon } from '@/assets/icons'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Text from '@/components/Text'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  const t = useTranslations('HeroContent')
  return (
    <section className='py-[80px]'>
      <div className='containers flex flex-col md:flex-row gap-[10px] justify-between'>
        <div className='md:w-[50%]'>
          <Heading tag='h1' classList='!mb-[20px]'>{t('title')}</Heading>
          <Text classList='!text-[16px] lg:!text-[20px] !mb-[20px] lg:!mb-[30px]'>{t('text')}</Text>
          <Button extraClass='!px-[50px]' title={t('buttonContent')} icon={<RocketIcon />} iconPosition='left' type='button' variant='filled' />
          <div className='!mt-[20px] lg:mt-[36px] flex gap-[30px]'>
            <div>
              <Heading classList='' tag='h3'>240k</Heading>
              <Text classList='!text-[16px] lg:!text-[23.99px] leading-[160%]'>{t('totalSale')}</Text>
            </div>
            <div>
              <Heading classList='' tag='h3'>100k</Heading>
              <Text classList='!text-[16px] lg:!text-[23.99px] leading-[160%]'>{t('auctions')}</Text>
            </div>
            <div>
              <Heading classList='' tag='h3'>240k</Heading>
              <Text classList='!text-[16px] lg:!text-[23.99px] leading-[160%]'>{t('artists')}</Text>
            </div>
          </div>
        </div>
        <div className='mx-auto md:mx-0 mt-[40px] md:mt-0 md:w-[330px] lg:w-[510px] self-start bg-[#3B3B3B] rounded-[20px] overflow-hidden'>
          <Image className='w-[510px] h-[221px] object-cover lg:h-[410px]' src={'/hero-img.svg'} alt='hero-img' width={510} height={401} priority />
          <div className='py-[22px] px-[20px]'>
            <Heading classList='!text-22px' tag='h3'>Space Walking</Heading>
            <div className='flex items-center gap-[12px] mt-[10px]'>
              <Image className='w-[24px] h-[24px]' src={'/animaked.svg'} alt='animaked-img' width={24} height={24} priority/>
              <Text classList='!text-[18px]'>Animaked</Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero