"use client"
import Image from "next/image"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

type Props = {
    mediaURLS?: string[]
}

const testGallery = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1587582423116-ec07293f0395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
]

export default function MediaGalleryButton({ mediaURLS = testGallery }: Props) {
    const renderVideo = (videoUrl: string) => {
        return (
            <PhotoView
                width={600}
                height={600}
                render={({ attrs }) => {
                    return (
                        <div {...attrs} className="flex items-center">
                            <div className="mx-auto my-auto max-w-[400px] w-[400px]">
                                <video width="400" height="350" src={videoUrl} controls autoPlay muted>
                                    Sorry, your browser doesn't support HTML5 <code>video</code>
                                </video>
                            </div>
                        </div>
                    )
                }}
            >
                <video width="400" height="350" src={videoUrl} autoPlay muted>
                    Sorry, your browser doesn't support HTML5 <code>video</code>
                </video>
            </PhotoView>
        )
    }

    const renderImage = (imageURL: any) => {
        return (
            <PhotoView src={imageURL}>
                <Image
                    src={imageURL}
                    alt="Work Image"
                    width="0"
                    height="0"
                    sizes="500px 700px"
                    className="w-full h-auto"
                />
            </PhotoView>
        )
    }

    return (
        <PhotoProvider>
            {mediaURLS.map((url: string, index: number) => (
                <div key={index} className="w-[30rem] lg:max-w-[24rem]">
                    {url && !!url.match(/.mp4|.mov/) ? renderVideo(url) : renderImage(url)}
                </div>
            ))}
        </PhotoProvider>
    )
}
