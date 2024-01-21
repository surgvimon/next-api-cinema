import LayoutProvider from '@/components/LayoutProvider'
import './globals.scss'
import ReduxProvider from '@/components/ReduxProvider'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <ReduxProvider>
      <LayoutProvider>
        {children}
      </LayoutProvider>
    </ReduxProvider>
  )
}