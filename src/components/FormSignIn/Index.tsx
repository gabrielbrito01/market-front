'use client'

import { auth } from '@/api/authenticate'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export function FormSignIn() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()

    const response = await auth.login({ email, password })

    if (response?.status === 200) {
      router.push('/home')
    }
  }
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <form onSubmit={handleForm} className="flex w-[90%] flex-col space-y-3">
        <Input
          after={false}
          type="txt"
          required
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        >
          E-mail
        </Input>
        <Input
          after={false}
          type="password"
          required
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        >
          Senha
        </Input>
        <Button type="submit">Entrar</Button>
      </form>
      <div>
        <Link href={'/register'} className="text-gray-400 hover:text-gray-700">
          Registre-se
        </Link>
      </div>
    </div>
  )
}
