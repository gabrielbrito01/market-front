'use client'

import React, { FormEvent, useState } from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'

import { toast } from 'react-toastify'
import { createProduct } from '@/api/product/createProduct'

import { parseCookies } from 'nookies'
import { secret } from '@/api/api'

export function FormProduct() {
  const [name, setName] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [code, setCode] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [validity, setValidity] = useState<string>('')

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()

    if (!Number(price)) {
      return toast.error('Digite o preço do produto valido')
    }

    const data = {
      name,
      type,
      code,
      price: Number(price),
      validity,
    }

    const response = await createProduct(data, parseCookies()[secret])

    console.log('Teste')

    if (response?.status === 201) {
      toast.success('Produto criado com sucesso')
      setName('')
      setType('')
      setCode('')
      setValidity('')
      setPrice('')
    }
  }

  return (
    <div className="container flex w-[600px] flex-col gap-4">
      <span className="my-3 text-center text-xl font-bold">
        Registrar produto
      </span>
      <form onSubmit={handleForm} className="gap-4 pb-3">
        <div className="flex flex-col gap-3">
          <Input
            value={name}
            after={true}
            type="text"
            required
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          >
            Nome
          </Input>
          <Input
            value={type}
            after={true}
            type="text"
            required
            placeholder="Digite o tipo do produto"
            onChange={(e) => setType(e.target.value)}
          >
            Tipo do produto
          </Input>
          <Input
            value={code}
            after={true}
            type="text"
            required
            placeholder="Digite seu código"
            minLength={10}
            onChange={(e) => setCode(e.target.value)}
          >
            Codigo
          </Input>
          <Input
            value={price}
            after={true}
            type="text"
            required
            placeholder="Digite o preço do produto"
            onChange={(e) => setPrice(e.target.value)}
          >
            Preço
          </Input>
          <Input
            value={validity}
            after={true}
            type="date"
            required
            placeholder="Enter the price"
            onChange={(e) => setValidity(e.target.value)}
          >
            Validade
          </Input>

          <Button type="submit">Register</Button>
        </div>
      </form>
    </div>
  )
}
