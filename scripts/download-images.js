const https = require("https");
const fs = require("fs");
const path = require("path");

const images = {
  "airport-pattern.png":
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop",
  "airport-access.png":
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=800&fit=crop",
  "instant-connections.png":
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=800&fit=crop",
  "local-experiences.png":
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=800&fit=crop",
  "safe-verified.png":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=800&fit=crop",
  "step-1.png":
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=800&fit=crop",
  "step-2.png":
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=800&fit=crop",
  "step-3.png":
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=800&fit=crop",
  "testimonial-1.png":
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  "testimonial-2.png":
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
};

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response
          .pipe(
            fs.createWriteStream(
              path.join(__dirname, "../public/images", filename)
            )
          )
          .on("error", reject)
          .once("close", () => resolve(filename));
      } else {
        response.resume();
        reject(
          new Error(`Request Failed With a Status Code: ${response.statusCode}`)
        );
      }
    });
  });
};

const downloadAllImages = async () => {
  const imageDir = path.join(__dirname, "../public/images");
  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
  }

  for (const [filename, url] of Object.entries(images)) {
    try {
      await downloadImage(url, filename);
      console.log(`Downloaded: ${filename}`);
    } catch (error) {
      console.error(`Error downloading ${filename}:`, error.message);
    }
  }
};

downloadAllImages();
