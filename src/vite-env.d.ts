/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MP_PUBLIC_KEY: string
  readonly VITE_MP_ACCESS_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
