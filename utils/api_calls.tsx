import axios from "axios"
const serverURL = process.env.NEXT_PUBLIC_SERVER_URL
const filesURL = serverURL + "/works/"
const uploadURL = serverURL + "/uploadAvatar/"

export const consoleText = () => {
  console.log("Hello World!")
}

export const getGallery = async () => {
  const response = await axios.get(filesURL)
  console.log(response)
}

export const updateWorkFiles = async (work_id: number, data: object) => {
  // fetch(uploadURL + work.work.id, {
  //     method: "PATCH",
  //     body: formData,
  //   })
  //     .then(res => res.json())
  //     .then(work => {
  //       console.log("work::", work)
  //       setCurrentWork({ ...work })
  //     })

  const requestURL = uploadURL + work_id

  const requestOBJ = {
    method: "patch",
    data: { images: data },
  }
  console.log("requestOBJ:", requestOBJ)

  const response = await axios.patch(requestURL, data)

  console.log("FILES::::", response)
  return response
}
