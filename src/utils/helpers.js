/**
 * Create Slug
 * @param {string} text
 * @returns Slug bases on text received
 */
export function createSlug(text) {
  let slug = text.toLowerCase()
  let i = 0,
    slugLength = slug.length

  for (i; i < slugLength; i++) {
    slug = slug.replace(' ', '-')
  }

  return slug
}
