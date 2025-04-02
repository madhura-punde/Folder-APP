import { postService } from "../common/apiService";

export const createFolderAPI = async (params) => {
  console.log("API Call: Creating Folder", params);
  let response;
  try {
    response = await postService(`/folders/create`, params);
  } catch (error) {
    console.error("Error creating folder:", error);
    response = error.message;
  }
  return response;
};
