const console = require('console');
const fs = require('fs');
const process = require('process');
const sharp = require('sharp');

const DIR = process.env.PWD;
const IMAGES_SOURCE_PATH = DIR + "/src/assets/images/source"
const IMAGES_COMPRESSED_PATH = DIR + "/src/assets/images/compressed"
const IMAGE_OBJ_PATH = DIR + "/src/assets/imageData.json"

const COMPRESSION_CONFIG = {
  "width": 1280,
  "height": 720,
  "fit": 'inside',
  "format": 'jpeg',
  "quality": 80,
  "progressive": true,
}

const isVideo = (file) => (/\.mp4|\.m4v|\.mov|\.avi|\.mkv|\.wmv$/i).test(file); 
const isHidden = (file) => (/(^|\/)\.[^\/\.]/g).test(file); 

const ImageMetaData = class {
  constructor(key, image, isVideo) {
    this.key = key;
    this.image = image;
    this.isVideo = isVideo;
    // this.description = description; //TODO: add other metadata for images
  }
};

const compressFile = (file) => {
  sharp(`${IMAGES_SOURCE_PATH}/${file}`)
   .resize(COMPRESSION_CONFIG.width, COMPRESSION_CONFIG.height, { fit: COMPRESSION_CONFIG.fit})
   .toFormat(COMPRESSION_CONFIG.format)
   .jpeg({
    quality: COMPRESSION_CONFIG.quality,
    progressive: COMPRESSION_CONFIG.progressive
  })
  .toFile(`${IMAGES_COMPRESSED_PATH}/${file}`);
};

const compressImages = () => {
  const isAlreadyCompressed = (file) => compressedArray.includes(file);
  const compressedArray = fs.readdirSync(IMAGES_COMPRESSED_PATH);
  const sourceArray = fs.readdirSync(IMAGES_SOURCE_PATH);
  let file;
  for (file of sourceArray) {
    if(!isAlreadyCompressed(file)){
      if(isVideo(file)){
        fs.copyFile(`${IMAGES_SOURCE_PATH}/${file}`, `${IMAGES_COMPRESSED_PATH}/${file}`, (err) => {
          if (err) {
            console.log("Error Found:", err);
          }
        })
      } else {
        compressFile(file);
      }
    }
  }
}

const imageObjectBuilder = () => {
  const imageDataArray = []
  fs.readdirSync(IMAGES_COMPRESSED_PATH).forEach((file, i) => {
    if (!isHidden(file)) {
      let vFlag = isVideo(file);
      imageDataArray.push(new ImageMetaData(i,file,vFlag));
    }
  })
  return JSON.stringify({data: imageDataArray});
}

const imageFileWriter = () => {
  compressImages();
  const data = imageObjectBuilder();
  fs.writeFile(IMAGE_OBJ_PATH, data, (err) => {
    if (err) throw err;
    else console.log("image object saved");
  }
)}

imageFileWriter();

