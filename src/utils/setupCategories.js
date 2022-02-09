// Get the posts

const setupCategories = (posts) => {

// Check to see if there are no posts and return an error message 
  if (!posts) {
    throw new Error("no posts found");
  }

  // if posts available, create an object to hold category tags and quantity

  const allCategories = {}

  // iterate over posts

  posts.forEach(post => {
      //    iterate over category array for each post
      post.category.forEach((cat, index) => {
          //    if it exists add 1 to existing cat key value
          if (allCategories[cat]) {
              allCategories[cat] = allCategories[cat] + 1
          } else {
              allCategories[cat] = 1
          }
      })
  })

  const newCategories = Object.entries(allCategories).sort((a,b) => {
    const [firstCat] = a
    const [secondCat] = b
    return firstCat.localeCompare(secondCat)
})
    return newCategories;
};

export default setupCategories