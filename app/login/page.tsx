'use client'

import { authenticate } from '@/app/lib/actions'
import TestComponent from '@/public/components/TestComponent'
import { useFormState, useFormStatus } from 'react-dom'

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
  <>
<form action={dispatch}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <LoginButton />
    </form>

    <TestComponent />
  </>
    
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  const handleClick = (event: any) => {
    if (pending) {
      event.preventDefault()
    }
  }

  return (
    <button disabled={pending} type="submit" onClick={handleClick}>
      Login
    </button>
  )
}