import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface TippyConfig {
  content: string
  hideOnClick?: boolean
}

export type TippyOptions = TippyConfig | string | undefined
