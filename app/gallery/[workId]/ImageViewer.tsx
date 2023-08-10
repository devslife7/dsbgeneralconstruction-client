import Image from "next/image"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

export default function ImageViewer({ work }: { work: any }) {
  return (
    <PhotoProvider>
      {work.image_urls.map((url: any, index: any) => (
        <div key={index} className="max-w-[350px] w-[350px]">
          <PhotoView src={url}>
            {url && !!url.match(/.mp4|.mov/) ? (
              <video width="350" height="450" src={url} controls autoPlay muted>
                Sorry, your browser doesn't support HTML5 <code>video</code>
              </video>
            ) : (
              <Image
                src={url}
                alt={work.title}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            )}
          </PhotoView>
        </div>
      ))}
    </PhotoProvider>
  )
}
