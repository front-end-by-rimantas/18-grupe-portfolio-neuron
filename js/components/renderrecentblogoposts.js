function renderrecentblogoposts (data){

    let onlyposts = data.posts;
    if (Object.keys(onlyposts).length > 0 ) {
    for (let i = 0; i < onlyposts.length; i++) {
    }
 }
else return (console.log('tuscias'));

    
    // input validation

    // logic
 let htmlDOM = '<h1 class="col-12">Recent Blog Post</h1>';
    if (Object.keys(onlyposts).length > 0 ) {
        for (let i = 0; i < onlyposts.length; i++) {
            htmlDOM+= 
`<div class="recent-blog-post-single col-4 col-lg-6 col-sm-12">
        <img class="recent-blog-post-picture" src="${data.imagepath}${onlyposts[i].image}" alt="${onlyposts[i].imagecounter}">
        <ul class="recent-blog-post-info">
            <li>
                <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                <span>${onlyposts[i].date}</span>
            </li>
            <li>
                <i class="fa fa-user-o" aria-hidden="true"></i>
                <span>${onlyposts[i].user}</span>
            </li>
            <li>
                <span>${onlyposts[i].commentscount}</span>
                <span>Comments</span>
            </li>
        </ul>
        <h3>
            <a href="">${onlyposts[i].postheading}</a>
        </h3>
        <p>${onlyposts[i].postparagraph}</p>
        <div class="recent-blog-post-button">
            <a href="#">Read More</a>
        </div>
    </div>`;
        }
    } else return (console.log('tuscias'));
    // console.log(htmlDOM);

    // post logic validation

    // output
     let feedDOM  = document.getElementById("RecentBlogPost");
    feedDOM = feedDOM.closest(".row")
    feedDOM.innerHTML = htmlDOM;
}
export {renderrecentblogoposts}