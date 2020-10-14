function isValidRecentBlogPostObject(data) {
    let postscount = data.posts.length;
    let errors = [];

    if (postscount === 0) {
        errors.push('Nera datarecentblogposts.posts duomenu');
    }

    if (errors.length > 0){
        for (let i = 0; i < errors.length; i++) {
            console.error(errors[i]);
        }
        return false;
    }
    return true;
}
export { isValidRecentBlogPostObject }