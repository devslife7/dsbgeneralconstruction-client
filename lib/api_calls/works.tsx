const serverURL = process.env.NEXT_PUBLIC_SERVER_URL
const worksURL = serverURL + "/works/"
const ratingURL = worksURL + "/ratings/"
const uploadFilesURL = serverURL + "/upload_files/"
const commentsURL = serverURL + "/comments/"

export async function fetchGallery() {
    const res = await fetch(worksURL)
    return res.json()
}
export async function deleteWork(workId: number) {
    const deleteURL = worksURL + workId
    const res = await fetch(deleteURL, {
        method: "DELETE",
    })
    return res.json()
}
