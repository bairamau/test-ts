/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STORE_API_URL: string
  readonly VITE_ECWID_AUTH_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
