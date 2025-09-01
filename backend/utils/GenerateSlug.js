import slugify from "slugify";

const generateUniqueSlug = async (name, model) => {
  //name will be slug
  let slug = slugify(name, { lower: true });

  //finds slug in exisiting authors
  let existingAuthor = await model.findOne({ slug });
  let counter = 1;
  // if slug already exists it will add the  counter in the end like "-1"
  while (existingAuthor) {
    slug = slugify(`${name}-${counter}`, { lower: true, strict: true });
    existingAuthor = await model.findOne({ slug });
    counter++;
  }
  return slug;
};

export default generateUniqueSlug;
