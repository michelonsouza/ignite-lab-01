/// <reference types="vite/client" />

type ReactEnvType = 'development' | 'staging' | 'production' | 'qa' | 'test';
type BooleanType = 'true' | 'false';

interface ImportMetaEnv {
  readonly PORT?: string;
  readonly HOST?: string;
  readonly HTTPS?: BooleanType;
  readonly VITE_APP_HOST: string;
  readonly VITE_APP_PORT: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_NODE_ENV: ReactEnvType;
  readonly VITE_APP_ENCRYPT_STORAGE_PREFIX: string;
  readonly VITE_APP_ENCRYPT_STORAGE_SECRET_KEY: string;

  // GRAPHQL API
  readonly VITE_APP_GRAPHQL_API_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
