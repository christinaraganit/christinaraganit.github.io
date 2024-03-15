const imageLoader = ({ src, width, quality }) => {
  return `https://christinaraganit.github.io/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default imageLoader;
