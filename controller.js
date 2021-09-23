import cloudinary from "cloudinary";
import "./cloudinaryconfig";

const home = (req, res) => {
    return res.status(200).json({
      message: "Multiple uploader api",
    });
};

const userpost =  async (req, res) => {
    try {
      const pictureFiles = req.files; 
      if (!pictureFiles)
        return res.status(400).json({ message: "No picture attached!" });
      //map through images and create a promise array using cloudinary upload function
      console.log("picfile", cloudinary.v2.uploader.upload())
      const multiplePicturePromise = pictureFiles.map((picture) => 
        cloudinary.v2.uploader.upload(picture.path)
      );

      const imageResponses = await Promise.all(multiplePicturePromise);//
      console.log("image", imageResponses)
      res.status(200).json({ images: imageResponses });//
    } catch (err) {console.log("err", err)
      res.status(500).json({
        message: err.message,
      });
    }
  };

export const homepage = home;

export const uploadpicture = userpost;