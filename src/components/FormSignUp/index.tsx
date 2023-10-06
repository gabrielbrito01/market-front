'use client'

import { auth } from '@/api/authenticate'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

import { toast } from 'react-toastify'

export function FormSignUp() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()
    console.log('Teste')

    if (password !== confirmPassword) {
      return toast.error('As senhas não estão iguais!')
    }

    const response = await auth.register({
      name,
      cpf,
      password,
      age,
      email,
    })

    if (response?.status === 201) {
      router.push('/')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <form onSubmit={handleForm} className="flex w-[90%] flex-col space-y-3">
        <div className="flex flex-col space-y-2">
          <Input
            after={true}
            type="text"
            required
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          >
            Nome
          </Input>

          <Input
            after={true}
            type="email"
            required
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
          >
            E-mail
          </Input>

          <Input
            after={true}
            type="text"
            required
            placeholder="Digite seu cpf"
            minLength={11}
            maxLength={11}
            onChange={(e) => setCpf(e.target.value)}
          >
            CPF
          </Input>
          <Input
            after={true}
            type="text"
            required
            placeholder="Digite sua idade"
            onChange={(e) => setAge(e.target.value)}
          >
            Idade
          </Input>

          <Input
            after={true}
            type="password"
            required
            placeholder="Digite sua senha"
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          >
            Senha
          </Input>
          <Input
            after={true}
            type="password"
            required
            placeholder="Comfirme sua senha"
            minLength={8}
            onChange={(e) => setConfirmPassword(e.target.value)}
          >
            Confirme sua senha
          </Input>
        </div>
        <Button type="submit">Registrar</Button>
      </form>
      <div>
        <Link
          href={'/'}
          className="text-gray-400 hover:text-gray-700 max-sm:text-sm"
        >
          Já possui uma conta? Acesse
        </Link>
      </div>
    </div>
  )
}
