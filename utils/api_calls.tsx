import axios from "axios"
const serverURL = process.env.NEXT_PUBLIC_SERVER_URL
const worksURL = serverURL + "/works/"
const uploadFilesURL = serverURL + "/upload_files/"

export const fetchGallery = async () => await axios.get(worksURL)

export const createWork = async (title: string, description: string) => {
  const requestOBJ = {
    work: {
      title: title,
      description: description,
    },
  }

  return await axios.post(worksURL, requestOBJ)
}

export const updateWorkFiles = async (work_id: number, formData: object) => {
  const requestURL = uploadFilesURL + work_id

  return await axios.patch(requestURL, formData)
}

export const deleteWork = async (work_id: number) => {
  const deleteURL = worksURL + work_id

  return await axios.delete(deleteURL)
}
