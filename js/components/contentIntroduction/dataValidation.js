function isString(data) {
  if (typeof data !== "string") {
    console.error(`${data} is not a string`);
    return false;
  }
  return true;
}

function isArray(data) {
  if (!Array.isArray(data)) {
    console.error(`${data} is not an array`);
    return false;
  }
  return true;
}

function isDefined(data) {
  if (!data) {
    console.error(`${data} can not be empty`);
    return false;
  }
  return true;
}

function textLengthMin(data, length) {
  if (data.length < length) {
    console.error(`${data} can not be shorter than ${length} characters`);
    return false;
  }
  return true;
}

function textLengthMax(data, length) {
  if (data.length > length) {
    console.error(`${data} can not be longer than ${length} characters`);
    return false;
  }
  return true;
}

const validation = {
  cntIntroduction(data) {
    if (
      !isDefined(data.path) ||
      !isString(data.path) ||
      !textLengthMin(data.path, 2)
    ) {
      return false;
    }

    if (
      !isDefined(data.path2) ||
      !isString(data.path2) ||
      !textLengthMin(data.path2, 2)
    ) {
      return false;
    }

    if (
      !isDefined(data.imagePath) ||
      !isString(data.imagePath) ||
      !textLengthMin(data.imagePath, 4)
    ) {
      return false;
    }

    if (
      !isDefined(data.image) ||
      !isString(data.image) ||
      !textLengthMin(data.image, 5)
    ) {
      return false;
    }

    if (
      !isDefined(data.title) ||
      !isString(data.title) ||
      !textLengthMax(data.title, 80) ||
      !textLengthMin(data.title, 2)
    ) {
      return false;
    }

    if (isDefined(data.cntIntText) || isArray(data.cntIntText)) {
      for (let i = 0; i < data.cntIntText.length; i++) {
        if (
          !textLengthMin(data.cntIntText[i], 2) ||
          !textLengthMax(data.title, 80)
        ) {
          return false;
        }
      }
    } else {
      return false;
    }

    if (
      !isDefined(data.button) ||
      !isString(data.button) ||
      !textLengthMax(data.button, 20) ||
      !textLengthMin(data.button, 2)
    ) {
      return false;
    }

    if (
      !isDefined(data.videoLink) ||
      !isString(data.videoLink) ||
      !textLengthMin(data.videoLink, 13)
    ) {
      return false;
    }
    return true;
  },
};
export default validation;
