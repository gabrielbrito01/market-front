import { Trash } from 'lucide-react'
import Image from 'next/image'

interface ProductProps {
  code: string
  name: string
  price: number
  promotionPrice: number
  validity: string
  handleDelete: (code: string) => Promise<void>
}

export function Product(data: ProductProps) {
  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-md border border-black px-4 py-4">
      <div className="flex justify-end">
        <button
          onClick={() => data.handleDelete(data.code)}
          className="hover:text-gray-400"
        >
          <Trash className="sh-5 w-5" />
        </button>
      </div>
      <div
        className={`flex items-center justify-center ${
          !data.promotionPrice && 'mb-4'
        }`}
      >
        <Image
          src={
            'https://a-static.mlcdn.com.br/450x450/cesta-basica-completa-produtos-de-qualidade-20-itens-mercado/oliststore/mglktmfcrtg1jpct/3c9dcbe9af5e9186aa4db6e06e7a7d92.jpeg'
          }
          alt="image"
          width={200}
          height={200}
          className="rounded-md bg-cover bg-center"
        />
      </div>
      <div className="mt-1 flex flex-col gap-2">
        <span className="text-xl">{data.name}</span>
        <div className='flex justify-between items-center'>
          {!data.promotionPrice ? (
            <span className="text-xl text-green-800 ">
              R$ {data.price.toFixed(2)}
            </span>
          ) : (
            <div className="flex flex-col">
              <span className="text-gray-500/70 line-through">
                R$ {data.price.toFixed(2)}
              </span>
              <span className="from-neutral-300 text-xl text-green-800">
                R$: {data.promotionPrice.toFixed(2)}
              </span>
            </div>
          )}

          <span className="text-gray-500/70 text-xs">
            V.: {new Date(data.validity).toLocaleDateString('pt-BR')}
          </span>
        </div>
      </div>
    </div>
  )
}
