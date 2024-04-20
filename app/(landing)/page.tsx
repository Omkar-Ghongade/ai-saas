import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation'

export default async function page() {

  const user = await currentUser();

  if(user) redirect('/dashboard')



  return (
    <div>
      <Link href="/sign-in">
        <Button>
          Login
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button>
          Register
        </Button>
      </Link>
    </div>
  )
}
