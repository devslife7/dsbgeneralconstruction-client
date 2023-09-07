const serverURL = process.env.NEXT_PUBLIC_SERVER_URL
const worksURL = serverURL + "/works/"
const ratingURL = worksURL + "/ratings/"
const uploadFilesURL = serverURL + "/upload_files/"
const commentsURL = serverURL + "/comments/"

export async function deleteReview(reviewId: number) {
    const deleteURL = worksURL + "/id/reviews/" + reviewId
    const res = await fetch(deleteURL, {
        method: "DELETE",
    })
    return res.json()
}
