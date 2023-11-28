// import { auth } from "@/auth"

export async function getSignedURL() {
  // make sure user is authenticated
  // const session = await auth()
  const session = true
  if (!session) return { error: "Not authenticated" }
  return { success: { url: "https://example.com" } }
}
