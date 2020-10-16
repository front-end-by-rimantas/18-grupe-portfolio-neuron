import { isValidRecentBlogPost } from "./isValidRecentBlogPost.js";

function generateSingleRecentBlogPosts(allposts,imagepath,i) {

    if (!isValidRecentBlogPost(allposts,imagepath,i)){
        return '';
    }

    return `<div class="recent-blog-post-single col-4 col-lg-6 col-sm-12">
            <img class="recent-blog-post-picture" src="${imagepath + allposts.image}" alt="${allposts.imagealt}">
            <div class="recent-blog-post-textbox">
                <ul class="recent-blog-post-info">
                    <li>
                        <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <span>${allposts.date}</span>
                    </li>
                    <li>
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                        <span>${allposts.user}</span>
                    </li>
                    <li>
                        <i>${allposts.commentscount}</i>
                        <span>Comments</span>
                    </li>
                </ul>
                <h3>
                    <a href="">${allposts.postheading}</a>
                </h3>
                <p>${allposts.postparagraph}</p>
                <div class="recent-blog-post-button">
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>`;
    
}

export { generateSingleRecentBlogPosts }