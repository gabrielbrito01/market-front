import HeaderHome from '@/components/HeaderHome'
import { ListProduct } from '@/components/ListProduct'

export const revalidate = 60

export default function Dashboard() {
  return (
    <div>
      <HeaderHome />
      <ListProduct />
    </div>
  )
}
