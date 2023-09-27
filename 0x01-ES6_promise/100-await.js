import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    // Call the uploadPhoto and createUser functions concurrently using Promise.all
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

    // Return the results in the specified format
    return {
      photo,
      user,
    };
  } catch (error) {
    // If an error occurs in either function, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}

// Usage example
asyncUploadUser()
  .then((result) => {
    console.log(result); // This will contain photo and user data or null values if there's an error.
  })
  .catch((error) => {
    console.error("An unexpected error occurred:", error);
  });
