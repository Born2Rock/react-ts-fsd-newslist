export function getQueryParams(params: OptionalRecord<string, string>) {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });
  return `?${searchParams.toString()}`;
}

/**
 * function adds params to query string
 * @param params
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
  const searchParams = getQueryParams(params);
  window.history.pushState(null, '', searchParams);
}
