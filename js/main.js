// header import
// hero import
// header main part
// intro
// we create
// numbers import
// services import
import { ServicesContentData } from "./data/ServicesContent/ServicesContentData.js";
import { renderServicesContent } from "./components/ServicesContent/renderServicesContent.js";
// Our Latest Project
// NEWS
// HOW WE WORK + ANIMATIONS
import { howWeWorksData } from "./data/howWeWorksData/howWeWorksData.js";
import { renderHowWeWorks } from "./components/howWeWorks/renderHowWeWorks.js"
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
// hero logic
// about logic
// contacts logic
renderPostsContacts(contactsData);
renderContactForm(contactsData);
// header main part
// intro
// we create
// numbers import
renderServicesContent(ServicesContentData);
// Our Latest Project
// NEWS
// HOW WE WORK + ANIMATIONS
renderHowWeWorks(howWeWorksData);
renderRecentBlogPosts(datarecentblogposts);
// contacts

// footer
