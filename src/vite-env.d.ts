/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_UNSPLASH_API_ACCESS_KEY: string;
  //more environment variables
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
