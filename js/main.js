// header import
// hero import
// header main part
// intro
// we create
// numbers import
// services import
import { ServicesContentData } from './data/ServicesContentData.js';
import { renderServicesContent } from './components/ServicesContent/renderServicesContent.js';
// Our Latest Project
// NEWS
// HOW WE WORK + ANIMATIONS
// Recent blogo posts
import { datarecentblogposts } from './data/datarecentblogposts.js';
import { renderrecentblogoposts } from './components/renderrecentblogoposts.js';
// contacts
// footer

// header logic
// hero logic
// header main part
// intro
// we create
// numbers import
renderServicesContent(ServicesContentData);
// Our Latest Project
// NEWS
// HOW WE WORK + ANIMATIONS
renderrecentblogoposts(datarecentblogposts);
// contacts
// footer