


export function hasInvalidString(...value: string[]) {
  if(value.length == 0) return true
  return value.some(
    (item: string) => item.trim().length == 0
  );
}

export function isUrl(value: string) {
  if (value.length == 0) return false
  try {
    const url = includesProtocol(value) ? value : `http://${value}`
    new URL(url)
    const urlRegex =
      /^https?:\/\/(([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z0-9]{2,}|localhost)(:\d+)?(\/.*)?$/
    return urlRegex.test(url)
  } catch {
    return false
  }
}

function includesProtocol(value: string) {
  const protocols = ["www.", 'https://', 'http://'];
  return protocols.some((protocol) => value.startsWith(protocol))
}