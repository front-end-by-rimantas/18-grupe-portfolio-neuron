// header import
import { menuData } from './data/Menu/menuData.js'; 
import { renderMenu } from './components/menu/renderMenu.js'
// header main part
// intro
// we create
// numbers import
// services import
import { ServicesContentData } from "./data/ServicesContent/ServicesContentData.js";
import { renderServicesContent } from "./components/ServicesContent/renderServicesContent.js";
// Our Latest Project
// NEWS
import { newsUpdateData } from './data/ContentNewsUpdates/ContentNewsUpdatesData.js'
import { ContentNewsUpdates } from './components/ContentNewsUpdates/ContentNewsUpdates.js';
// HOW WE WORK + ANIMATIONS
// Recent blogo posts
import { datarecentblogposts } from "./data/RecentBlogPosts/datarecentblogposts.js";
import { renderRecentBlogPosts } from "./components/recentblogposts/renderRecentBlogPosts.js";
// contacts
import { contactsData } from "./data/contactsData/contactsData.js";
import { renderPostsContacts } from "./components/contacts/renderPostContacts.js";
import { renderContactForm } from "./components/contacts/renderContactForm.js";
// console.log(singlePostContact(contactsData));
// footer

// header logic
 renderMenu (menuData);
// hero logic
// about logic
// contacts logic
renderPostsContacts(contactsData);
renderContactForm(contactsData);
// header main part
// intro
// we create
// numbers import
// Our Latest Project
new ContentNewsUpdates(newsUpdateData);
// HOW WE WORK + ANIMATIONS
renderRecentBlogPosts(datarecentblogposts);
// contacts

// footer
