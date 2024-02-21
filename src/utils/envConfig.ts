export type EnvConfig = {
ALGOLIA_APP_ID : string ,
ALGOLIA_SEARCH_API_KEY:string,
ALGOLIA_SEARCH_INDEX:string
}

export const envConfig:EnvConfig = {
ALGOLIA_APP_ID:process?.env?.NEXT_PUBLIC_ALGOLIA_APP_ID ? process?.env?.NEXT_PUBLIC_ALGOLIA_APP_ID?.toString() : "",
ALGOLIA_SEARCH_API_KEY: process?.env?.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY ? process?.env?.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY?.toString() : "",
ALGOLIA_SEARCH_INDEX: process?.env?.NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX ? process?.env?.NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX?.toString() : ""
}