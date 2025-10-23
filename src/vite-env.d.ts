/// <reference types="vite/client" />

// Allow importing CSV as raw string via Vite's ?raw suffix
declare module "*.csv?raw" {
  const content: string;
  export default content;
}
