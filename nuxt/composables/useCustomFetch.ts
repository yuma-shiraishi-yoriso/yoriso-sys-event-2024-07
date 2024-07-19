import type { UseFetchOptions } from "#app"

export function useCustomFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    headers: {
      'X-Github-Token': config.public.githubToken,
    },
  }

  return useFetch(url, {
    ...defaults,
    ...options,
    headers: {
      ...defaults.headers,
      ...options.headers,
    },
  })
}