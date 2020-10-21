// Recent blogo posts
import { datarecentblogposts } from './data/datarecentblogposts.js';
import { renderrecentblogoposts } from './components/renderrecentblogoposts.js';
import { numbersData } from './data/contentNumbersData.js';
// header import
// hero import
// about import
import { renderContentNumbers, addEventListenerContentNumbersOnScroll } from './components/renderContentNumbers.js';
// import { renderContentNumbers } from './components/renderContentNumbers.js';
renderrecentblogoposts(datarecentblogposts);
// header logic
// hero logic
// about logic

//execute
// const { numbersData } = data;
                                          
renderContentNumbers('#numbers', numbersData);
addEventListenerContentNumbersOnScroll();