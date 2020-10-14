function isValidRecentBlogPost(allposts,imagepath,i) {

let errors = [];
let warning = [];

if (typeof allposts.imagealt !== 'string'){
    errors.push(`Objekto kurio numeris ${i}: ImageAlt turi buti string tipo.`);
} else{ 
        if (allposts.imagealt === ''){
        errors.push(`Objekto kurio numeris ${i}: ImageAlt tuščias`);
        }
    }

if (typeof allposts.image !== 'string'){
    errors.push(`Objekto kurio numeris ${i}: Image turi buti string tipo`);
} else{
    if (allposts.image === ''){
        errors.push(`Objekto kurio numeris ${i}: Image pavadinimas tuscias`)
    }
    if (allposts.image.length < 5){
        errors.push(`Objekto kurio numeris ${i}: Image turi buti ilgesnis nei 5 simboliai`);
    } 
}

if (!Date.parse(allposts.date)){
    errors.push(`Objekto kurio numeris ${i}: Date turi buti Date tipo`)
} else{
    if(allposts.date < 'Nov 28, 2019'){
    warning.push(`Objekto kurio numeris ${i}: laikas neaktyvus`)    
    }
}

if (typeof allposts.user !== 'string'){
    errors.push(`Objekto kurio numeris ${i}: User turi buti sring tipo`)
} else{
    if(allposts.user === ''){
    errors.push(`Objekto kurio numeris ${i}: vartotojas tuscias`)    
    }
    if(allposts.user !== 'Admin'){
    errors.push(`Objekto kurio numeris ${i}: vartotojas yra ne Admin`)    
    }
}

if (isNaN(allposts.commentscount)){
    errors.push(`Objekto kurio numeris ${i}: commentscount turi buti Number tipo`)
} else{
    if(allposts.commentscount === ''){
    warning.push(`Objekto kurio numeris ${i}: commentscount yra tuscias`)    
    }
}

if (typeof allposts.postheading !== 'string'){
    errors.push(`Objekto kurio numeris ${i}: Postheading turi buti string tipo`);
} else{
    if (allposts.postheading === ''){
        errors.push(`Objekto kurio numeris ${i}: Postheading pavadinimas tuscias`)
    }
    if (allposts.postheading.length < 15){
        errors.push(`Objekto kurio numeris ${i}: Postheading yra ${allposts.postheading.length} simboliu skaičius, turi buti trumpenis nei 15 simboliai`);
    } 
    if (allposts.postheading.length > 60){
        errors.push(`Objekto kurio numeris ${i}: Postheading yra ${allposts.postheading.length} simboliu skaičius, turi buti ne ilgesnis nei 60 simboliai`);
    } 
}

if (typeof allposts.postparagraph !== 'string'){
    errors.push(`Objekto kurio numeris ${i}: postparagraph turi buti string tipo`);
} else{
    if (allposts.postparagraph === ''){
        errors.push(`Objekto kurio numeris ${i}: postparagraph pavadinimas tuscias`)
    }
    if (allposts.postparagraph.length < 15){
        errors.push(`Objekto kurio numeris ${i}: postparagraph yra ${allposts.postparagraph.length} simboliu skaičius, turi buti trumpenis nei 15 simboliai`);
    } 
    if (allposts.postparagraph.length > 120){
        errors.push(`Objekto kurio numeris ${i}: postparagraph yra ${allposts.postparagraph.length} simboliu skaičius, turi buti ne ilgesnis nei 120 simboliai`);
    } 
}

if(!allposts.active){
    return false;
}

if(errors.length > 0 ){
    for (let i = 0; i < errors.length; i++) {
        console.error(errors[i]);
    }
    return false;
}

if(warning.length > 0 ){
    for (let i = 0; i < warning.length; i++) {
        console.warn(warning[i]);
    }
}
return true;
}
export {isValidRecentBlogPost}