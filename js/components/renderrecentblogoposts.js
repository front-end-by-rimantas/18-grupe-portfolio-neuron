function renderrecentblogoposts (data){

    let onlyposts = data.posts;
    // tikrina ar yra duomenu
    if (Object.keys(onlyposts).length > 0)
        {console.log('yra duomenu')} 
        else{return (console.log('nera duomenu'))};

    
    // input validation


// isfiltruoju , ar yra duomenų ir ar aktyvūs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://stackoverflow.com/questions/7037669/how-to-check-the-value-given-is-a-positive-or-negative-integer/7792637
onlyposts = onlyposts.filter(onlypostsfunc)
  function onlypostsfunc(onlyposts){
      if (onlyposts.active===true && onlyposts.image!='' &&  onlyposts.date!='' && onlyposts.user!='' && (Math.floor( onlyposts.commentscount ) == onlyposts.commentscount && onlyposts.commentscount > 0)?true:false && onlyposts.postheading!='' && onlyposts.postparagraph!=''){
      return true  
  }
}


    // logic
 let htmlDOM = '<h1 class="col-12">Recent Blog Post</h1>';
    if (Object.keys(onlyposts).length > 0 ) {
        for (let i = 0; i < onlyposts.length; i++) {
            // if (onlyposts[i].active){
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
                <i>${onlyposts[i].commentscount}</i>
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
        // }
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