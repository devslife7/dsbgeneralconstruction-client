import Image from "next/image"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

export default function ImageViewer({ work }: { work: any }) {
  return (
    <PhotoProvider>
      {work.image_urls.map((url: any, index: any) => (
        <div key={index} className="max-w-[400px] w-[400px]">
          {url && !!url.match(/.mp4|.mov/) ? (
            <PhotoView
              width={600}
              height={600}
              render={({ attrs }) => {
                return (
                  <div {...attrs} className="flex items-center">
                    <div className="mx-auto my-auto max-w-[400px] w-[400px]">
                      <video width="400" height="350" src={url} controls autoPlay muted>
                        Sorry, your browser doesn't support HTML5 <code>video</code>
                      </video>
                    </div>
                  </div>
                )
              }}
            >
              <video width="400" height="350" src={url} autoPlay muted>
                Sorry, your browser doesn't support HTML5 <code>video</code>
              </video>
            </PhotoView>
          ) : (
            <PhotoView src={url}>
              <Image
                src={url}
                alt={work.title}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </PhotoView>
          )}
        </div>
      ))}
    </PhotoProvider>
  )
}
