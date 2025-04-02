import { apiMultiPartService, getService } from "../common/apiService";

export const getFolderService = async (params) => {
  let response;
  try {
    response = await getService(
      `/files/files?page=${params.page}&perPage=${params.perPage} `
    );
  } catch (error) {
    console.error("Error fetching folder data:", error);
    response = error.message;
  }
  return response;
};

export const fileUploadService = async (params) => {
  // console.log("API Call: Uploading File", params);
  let res;
  let formData = new FormData();
  formData.append("file", params);
  formData.append("folderId", params.folderId ? params.folderId : null);
  try {
    res = await apiMultiPartService.post(`/files/upload`, formData);
  } catch (error) {
    console.error("Error uploading file:", error);
    res = error.message;
  }
  return res;
};
