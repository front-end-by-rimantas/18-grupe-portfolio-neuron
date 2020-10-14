// Recent blogo posts
import { datarecentblogposts } from "./data/datarecentblogposts.js";
import { renderrecentblogoposts } from "./components/renderrecentblogoposts.js";
// header import
// hero import
// about import
// contacts import
import { contentContactsData } from "./data/contentContacts.js";
import { renderContentContactsPosts } from "./components/contentContacts/contentContactsPosts.js";

renderrecentblogoposts(datarecentblogposts);
// header logic
// hero logic
// about logic
// contacts logic
renderContentContactsPosts(contentContactsData);
