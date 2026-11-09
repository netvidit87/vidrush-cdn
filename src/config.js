export const VIDEO_CDN = 'https://cdn.videy.co'

export function getVideoUrl(id) {
  // hanya izinkan karakter aman (alphanumeric, dash, underscore)
  const safe = String(id || '').replace(/[^a-zA-Z0-9_-]/g, '')
  if (!safe) return ''
  return `${VIDEO_CDN}/${safe}.mp4`
}
