import algoliasearch from 'algoliasearch/lite';
import { envConfig } from './envConfig';
export const searchClient = algoliasearch(envConfig?.ALGOLIA_APP_ID, envConfig?.ALGOLIA_SEARCH_API_KEY);