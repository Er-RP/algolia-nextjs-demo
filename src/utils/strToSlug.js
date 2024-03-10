export const convertToSlug = (str) => {
  if (!str) {
    return "slug";
  }
  str = str.toLowerCase(); // Convert to lowercase
  str = str.replace(/\s+/g, "-"); // Replace spaces with hyphens
  str = str.replace(/[^\w-]/g, ""); // Remove non-word characters (except hyphens)
  return str;
};
