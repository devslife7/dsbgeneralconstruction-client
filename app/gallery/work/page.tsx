import Image from "next/image"
import aboutPage from "../../../public/images/aboutPage.jpg"
import { IoMdArrowBack } from "react-icons/io"
import Link from "next/link"

export default function work() {
  return (
    <div className="container-custom">
      <div className="my-8 lg:flex space-y-5">
        <div className="flex justify-between">
          <Link href="/gallery" className=" lg:w-[35%] clear-left text-gray-700 lg:hidden items-center">
            <IoMdArrowBack className="inline-block text-lg" />
            <span> gallery</span>
          </Link>

          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
          </div>
        </div>
        <div className=" space-y-2">
          <div className="flex items-center gap-2">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="text-lg">L</span>
              </div>
            </div>

            <div className="text-lg">Leo Messi</div>
          </div>
          <div>
            Muchaaaaaachoooos ahora nos volvimo a ilusinaarr, quieroo gana la MLS yo ya soy campeon
            mundiaaaal...
          </div>
          <div className="text-gray-700">Add comment...</div>
        </div>
        <div className="lg:w-[65%] flex justify-center flex-wrap order-first my-20">
          <Image src={aboutPage} width={350} alt="image" />
          <Image src={aboutPage} width={350} alt="image" />
          <Image src={aboutPage} width={350} alt="image" />
          <Image src={aboutPage} width={350} alt="image" />
          <Image src={aboutPage} width={350} alt="image" />
        </div>
      </div>

      {/* <video
          width="640"
          height="480"
          src="http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBJZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--13d2b14f3b3283d1242125f7781158910ff22c4d/testVideo.mp4"
          controls
          autoPlay
          muted
        >
          Sorry, your browser doesn't support HTML5 <code>video</code>, but you can download this video from
        </video> */}
    </div>
  )
}
