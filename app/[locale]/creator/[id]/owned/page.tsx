"use client"
import { NftType2 } from '@/@types/NftType'
import NftCard from '@/components/NftCard'
import { getQuery } from '@/lib/getQueryData'
import { useParams } from 'next/navigation'

const Owned = () => {
  const {id}:{id:string} = useParams()
  const collectionData = getQuery(`/nfts?ownerId=${id}`, 'owned_nft', id)
  console.log(collectionData);
  
  return (
    <div className='bg-[#3B3B3B]'>
      <div className='containers flex justify-between gap-y-[30px] gap-x-[10px] !py-[80px]'>
        {collectionData?.data?.data?.map((item: NftType2) => <NftCard id={id} key={item.id} item={item}/>)}
      </div>
    </div>
  )
}

export default Owned