/// <reference types="vite/client" />

// Para importar archivos .mp3
declare module '*.mp3' {
    const content: string;
    export default content;
  }
  
  // Extender ImportMeta para variables de entorno
  /// <reference types="vite/client" />
  
  interface ImportMetaEnv {
    readonly VITE_SEND_MAIL_URL: string;
    readonly VITE_TOKEN_CLOUD_FUNCTION: string;
    // Agrega aquí otras variables de entorno que utilices
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  