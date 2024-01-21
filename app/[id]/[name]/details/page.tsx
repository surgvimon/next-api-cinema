'use client'
import MainLayout from '@/components/Layout/MainLayout'
import LoadingComponent from '@/components/LoadingComponent';
import Details from '@/components/details/Details'
import { useSelector } from 'react-redux';

export default function SinglePage() {
  const { loading } = useSelector((state:any) => state.async);

  return (
    <>
    {loading ? <LoadingComponent /> : (
      <MainLayout>
        <main className="main">
          <Details/>        
        </main>
      </MainLayout>
    )}

    </>
  )
}
