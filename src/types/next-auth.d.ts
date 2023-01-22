import 'next-auth'
import { GenericObject } from 'next-auth/_utils'

declare module 'next-auth/client' {
  export * from 'next-auth/client'

  interface SignInReponse {
    error: string | undefined
    status: number
    ok: boolean
    url: string | null
  }

  export function signin(
    provider: 'credentials' | 'email' | 'string',
    data?: GenericObject & {
      callbackUrl?: string
      redirect?: false
    },
    authorizationParams?: string | string[][] | GenericObject | URLSearchParams
  ): Promise<SignInReponse>

  export const signIn: typeof signin
}
