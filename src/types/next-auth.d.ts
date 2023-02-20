import 'next-auth'
import { GenericObject } from 'next-auth/_utils'
import { UrlObject } from 'url'

declare module 'next-auth/client' {
  export * from 'next-auth/client'

  interface SignInReponse {
    error: string | undefined
    status: number
    ok: boolean
    url: string | null
  }

  declare type Url = UrlObject | string

  interface SignOutResponse {
    url: Url
  }

  export function signin(
    provider: 'credentials' | 'email' | 'string',
    data?: GenericObject & {
      callbackUrl?: string
      redirect?: false
    },
    authorizationParams?: string | string[][] | GenericObject | URLSearchParams
  ): Promise<SignInReponse>

  export function signout(data?: {
    callbackUrl?: string
    redirect?: boolean
  }): Promise<SignOutResponse>

  export const signIn: typeof signin
  export const signOut: typeof signout
}
