/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_DRUPAL_BASE_URL?: string;
	readonly VITE_DRUPAL_SERVICES_ENDPOINT?: string;
	readonly VITE_DRUPAL_ANIMALS_ENDPOINT?: string;
	readonly VITE_DRUPAL_INCLUDE_CREDENTIALS?: string;
	readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
