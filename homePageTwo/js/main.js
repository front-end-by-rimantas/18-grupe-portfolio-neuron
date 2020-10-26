// <----------DATA ---------------->
// Header top
// header content + Partner slider!
// object detection
// pose estimation
// image segmentation
// computer vision AI

import { MainVision } from "./components/MainVision.js";
import { datacomputervisionai } from "../js/data/datacomputervisionai.js";
// testimonials - clients reviews
import { testimonialsData } from "./data/testimonials/testimonialsData.js";
import { RenderClientTestimonial } from "./components/testimonials/RenderTestimonial.js";
// recent blogs and news
// contacts
// footer

// <----------------LOGIC------------->
// Header top
// header content + Partner slider!
// object detection
// pose estimation
// image segmentation
// computer vision AI
new MainVision(datacomputervisionai);
// testimonials - clients reviews
new RenderClientTestimonial(testimonialsData);
// recent blogs and news
// contacts
// footer
