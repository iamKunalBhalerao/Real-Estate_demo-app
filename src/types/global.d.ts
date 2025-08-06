declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.sass" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.less" {
  const content: Record<string, string>;
  export default content;
}

// Allow CSS imports from node_modules
declare module "swiper/css";
declare module "swiper/css/*";
declare module "swiper/swiper-bundle.css";
