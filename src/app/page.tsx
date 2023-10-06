import HeaderAuth from '@/components/HeaderAuth'
import { FormSignIn } from '@/components/FormSignIn/Index'
import { Lock } from 'lucide-react'

export default function Home() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="bg-market bg-cover bg-center"></div>
      <div className="flex flex-col justify-center space-y-3 bg-white">
        <HeaderAuth>
          <Lock />
        </HeaderAuth>
        <FormSignIn />
      </div>
    </div>
  )
}
