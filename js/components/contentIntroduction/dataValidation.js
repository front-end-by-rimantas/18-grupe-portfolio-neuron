function isString(data) {
  if (typeof data !== "string") {
    console.error(`${data} is not a string`);
  }
}

function isArray(data) {
  if (!Array.isArray(data)) {
    console.error(`${data} is not an array`);
  }
}

function isDefined(data) {
  if (!data) {
    console.error(`${data} can not be empty`);
  } else {
    return true;
  }
}

function textLengthMin(data, length) {
  if (data.length < length) {
    console.error(`${data} can not be shorter than ${length} characters`);
  }
}

function textLengthMax(data, length) {
  if (data.length > length) {
    console.error(`${data} can not be longer than ${length} characters`);
  }
}

const validation = {
  cntIntroduction(data) {
    if (isDefined(data.path)) {
      isString(data.path);
      textLengthMin(data.path, 2);
    }
    if (isDefined(data.path2)) {
      isString(data.path2);
      textLengthMin(data.path2, 2);
    }
    if (isDefined(data.imagePath)) {
      isString(data.imagePath);
      textLengthMin(data.imagePath, 4);
    }
    if (isDefined(data.image)) {
      isString(data.image);
      textLengthMin(data.image, 5);
    }
    if (isDefined(data.title)) {
      isString(data.title);
      textLengthMax(data.title, 80);
      textLengthMin(data.title, 2);
    }
    if (isDefined(data.cntIntText)) {
      isArray(data.cntIntText);
      textLengthMin(data.cntIntText, 2);
      for (let i = 0; i < data.cntIntText.length; i++) {
        textLengthMin(data.cntIntText[i], 2);
        textLengthMax(data.title, 80);
      }
    }
    if (isDefined(data.button)) {
      isString(data.button);
      textLengthMax(data.button, 20);
      textLengthMin(data.button, 2);
    }
    if (isDefined(data.videoLink)) {
      isString(data.videoLink);
      textLengthMin(data.videoLink, 13);
    }
  },
};
export default validation;
