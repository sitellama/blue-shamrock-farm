import homeschool from "@/assets/outdoor-classes.webp";

export function ImgText() {
    return (
        <section className="max-content mt-36 md:flex bg-blue-light">
            <div className="flex-1 max-h-[200px] md:max-h-full">
                <img src={homeschool} className="object-cover h-full w-full max-h-[250px] md:max-h-full" alt="a class of kids gathered outside listening to a woman holding a animal crate" />
            </div>

            <div className="p-8 flex-1 text-white">
                <h2>Educational Classes</h2>
                <p>There’s lots to learn on the farm!</p>
                <p>In-person or virtual classes available. Classes include 1st - 12th grade courses on farm animal studies, stable management and animal care. All classes are taught by licensed professionals.</p>
                <a href="https://bsf.simpletix.com/" className="subheading">Upcoming classes</a>
                <a href="https://sites.google.com/view/blueshamrockfarm/ova" className="subheading block" target="_blank">Oxford Virtual Academy</a>
            </div>
        </section>
    );
}