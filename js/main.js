// Recent blogo posts
import { datarecentblogposts } from './data/datarecentblogposts.js';
import { renderrecentblogoposts } from './components/renderrecentblogoposts.js';
// header import
// hero import
// about import
// numbers import
// services import
import { ServicesContentData } from './data/ServicesContent.js';
import { renderServicesContent } from './components/services/renderServicesContent.js';

renderrecentblogoposts(datarecentblogposts);
// header logic
// hero logic
// about logic
// numbers import
// services import
renderServicesContent(ServicesContentData);