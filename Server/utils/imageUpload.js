import { cloudinaryInstance } from '../config/cloudinaryConfig';

const handleImageUpload = async (path) => {
  try {
    const uploadResult = await cloudinaryInstance.uploader.upload(path);
    return uploadResult.url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export default handleImageUpload;