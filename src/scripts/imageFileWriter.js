const console = require('console');
const fs = require('fs');
const process = require('process');

const DIR = process.env.PWD;
const IMAGES_PATH = DIR + "/src/assets/images/"
const IMAGE_OBJ_PATH = DIR + "/src/assets/imageData.json"

const ImageMetaData = class {
  constructor(key, image) {
    this.key = key;
    this.image = image;
    // this.description = description; //TODO: add other metadata for images
  }
};

const imageObjectBuilder = () => {
  const imageDataArray = []
  const isHidden = (file) => (/(^|\/)\.[^\/\.]/g).test(file); 
  fs.readdirSync(IMAGES_PATH).forEach((file, i) => {
    if (!isHidden(file)) imageDataArray.push(new ImageMetaData(i,file));
  })
  return JSON.stringify({data: imageDataArray});
}

const imageFileWriter = () => {
  const data = imageObjectBuilder();
  fs.writeFile(IMAGE_OBJ_PATH, data, (err) => {
    if (err) throw err;
    else console.log("image object saved");
  }
)}

imageFileWriter();

