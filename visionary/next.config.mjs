/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./ImageLoader.js",
  },
};

/* https://christinaraganit.github.io/eric-dam.jpg?w=100&q=75 */

export default nextConfig;
