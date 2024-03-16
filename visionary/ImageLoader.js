export function myLoader({ src, width, quality }) {
  return `https://christinaraganit.github.io/${src}?w=${width}&q=${
    quality || 75
  }`;
}
