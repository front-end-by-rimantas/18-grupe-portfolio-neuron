import { generateSingleRecentBlogPosts } from "./generateSingleRecentBlogPosts.js";
import { isValidRecentBlogPostObject  } from './isValidRecentBlogPostObject.js'

function renderRecentBlogPosts (data){

let allposts = data.posts;
let postscount = allposts.length;
let imagepath = data.imagepath;
    
    // input validation
if (!isValidRecentBlogPostObject(data)) {
    return ''; 
}
    
    // logic
let htmlDOM = '';
for (let i = 0; i < postscount; i++) {
    htmlDOM+=generateSingleRecentBlogPosts(allposts[i], imagepath,i);
}
      // post logic validation
if (htmlDOM ===''){ 
    console.error('post logic validation: Nera postu');
} 
// else{console.log( htmlDOM);}

    // output
const blogDOM  = document.getElementById("RecentBlogPost");
blogDOM.insertAdjacentHTML('afterend',htmlDOM)
}
export {renderRecentBlogPosts}