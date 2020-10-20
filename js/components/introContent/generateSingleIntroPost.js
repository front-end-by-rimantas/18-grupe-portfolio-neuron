function generateSingleIntroPost (post) {
 
    const HTML = `<div class="singlepost mb-15">
                    <i class="fla ${post.icon}"></i>
                    <h3 class = "title">${post.title}</h3>
                    <p class = "desc">${post.description}</p>
                </div>`
    // output
    return HTML;
}

export { generateSingleIntroPost }