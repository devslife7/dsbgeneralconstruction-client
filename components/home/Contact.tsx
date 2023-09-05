// import FadeIn from "../ui/fadeIn"
// import Translator from "../ui/translator"
// import ContactForm from "./ContactForm"
// import GoogleMap from "./GoogleMap"

import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section id="contact" className="grid my-2 my-container py-14 lg:mb-36 ">

            <div>
                <h2 className="text-3xl font-semibold opacity-70 mb-2">Let's Discuss <br/> Your Next Project</h2>
                <p className="opacity-60 mb-4">Fill out the form, call or text us to <br/> set up a free in-home consultation.</p>
                <p className="opacity-60 text-lg">email@email.com</p>
                <p className="mb-4 opacity-60 text-lg">123-456-7890</p>
                <h3 className="font-medium text-lg opacity-70 ">Service Areas:</h3>
                <p className="opacity-60 mb-4">Northern Virginia, Fairfax, Alexandria, Arlington, Sprinfield, Annandale </p>
            </div>

            <div className="w-full">
                    <ContactForm />
                </div>
           
        </section>
    )
}
