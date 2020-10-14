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
const header = '<h1 class="col-12">Recent Blog Post</h1>';
let htmlDOM = '';
let html ='';
for (let i = 0; i < postscount; i++) {
    html+=generateSingleRecentBlogPosts(allposts[i], imagepath,i);
}
htmlDOM = header + html;    

    // post logic validation
if (html ===''){ 
    console.error('post logic validation: Nera postu');
} 
// else{console.log( htmlDOM);}

    // output
let feedDOM  = document.getElementById("RecentBlogPost");
feedDOM = feedDOM.closest(".row")
feedDOM.innerHTML = htmlDOM;
}
export {renderRecentBlogPosts}