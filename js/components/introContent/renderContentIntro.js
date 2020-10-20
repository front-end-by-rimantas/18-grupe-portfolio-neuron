import { generateSingleIntroPost } from './generateSingleIntroPost.js';

function renderContentIntro(data) {
     // input validation

    // logic
    let HTML = '';
    const postsDOM = document.querySelector(data.selector);
    const postsCount = data.posts.length;

    for (let i=0; i< postsCount; i++) {
        const post = data.posts[i];
        HTML += generateSingleIntroPost(post);
    }

    // post logic validation
    if(HTML === '') {
        console.error('ERROR: nera nei vienos normalios veikiancios paslaugos!');
        return;
    }
    // output
    return postsDOM.innerHTML = HTML;
}

export { renderContentIntro }