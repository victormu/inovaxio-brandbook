/// <reference types="vite/client" />

declare module "*.png?format=webp&quality=80" {
  const src: string;
  export default src;
}
