// header top import
import { headerTopData } from "./data/headerTop/dataHeaderTop.js";
import { HeaderTopRender } from "./components/headerTop/HeaderTopRender.js";
// header import
import { menuData } from "./data/Menu/menuData.js";
import { renderMenu } from "./components/menu/renderMenu.js";
// header main part
// intro
// we create
import { cntIntData } from "./data/ContentIntroduction/contentIntroductionData.js";
import { renderCntIntroduction } from "./components/contentIntroduction/renderContentIntroduction.js";
// numbers import
// services import
import { ServicesContentData } from "./data/ServicesContent/ServicesContentData.js";
import { renderServicesContent } from "./components/ServicesContent/renderServicesContent.js";
// Our Latest Project
// NEWS
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

// header top logic
new HeaderTopRender(headerTopData);
// header logic
renderMenu(menuData);
// hero logic
// about logic
// contacts logic
renderPostsContacts(contactsData);
renderContactForm(contactsData);
// header main part
// intro
// we create
renderCntIntroduction(cntIntData);
// numbers import
renderServicesContent(ServicesContentData);
// Our Latest Project
// NEWS
// HOW WE WORK + ANIMATIONS
renderRecentBlogPosts(datarecentblogposts);
// contacts

// footer
