import { Clock, Home, People } from "@/public/svgs"

export default function KeyPoints() {
    return (
        <div className="my-container">
            <div className="flex flex-wrap justify-center gap-12 my-20 md:gap-0 lg:justify-evenly">
                <div className="max-w-sm p-2 text-center">
                    <Home className="mx-auto mb-6 text-4xl md:text-5xl text-primary" />
                    <h1 className="mb-2 text-2xl font-medium md:text-2xl">Expertise and Experience</h1>
                    <p className="text-[1.35rem] opacity-60 md:text-lg">
                        Our craftsmanship ensures that the final outcome is not only visually appealing but
                        also structurally sound and durable.
                    </p>
                </div>
                <div className="max-w-sm p-2 text-center">
                    <People className="mx-auto mb-6 text-5xl md:text-5xl text-primary" />
                    <h1 className="mb-2 text-2xl font-medium md:text-2xl">Portfolio and References</h1>
                    <p className="text-[1.35rem] opacity-60 md:text-lg">
                        Our proven track record is a strong indicator of our reliability, craftsmanship, and
                        ability to consistently deliver outstanding results.
                    </p>
                </div>
                <div className="max-w-sm p-2 text-center">
                    <Clock className="mx-auto mb-6 text-4xl md:text-5xl text-primary" />
                    <h1 className="mb-2 text-2xl font-medium md:text-2xl">Commitment to Timelines</h1>
                    <p className="text-[1.35rem] opacity-60 md:text-lg">
                        We prioritize punctuality and create a realistic project schedule with clear deadlines
                        for each phase of the renovation.
                    </p>
                </div>
            </div>
        </div>
    )
}
