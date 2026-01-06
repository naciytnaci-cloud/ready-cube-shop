import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Çantalar - Ready Cube',
  description: 'Ready Cube Bag yakında satışta.',
}

export default function CantalarPage() {
  redirect('/shop')
}

