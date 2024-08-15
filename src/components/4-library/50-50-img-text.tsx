import homeschool from "@/assets/outdoor-classes.jpg";

export function ImgText() {
    return (
        <section className="max-content mt-36 md:flex bg-blue-light">
            <div className="flex-1">
                <img src={homeschool} className="object-cover h-full" />
            </div>

            <div className="p-8 flex-1 text-white">
                <h2>Homeschool Classes</h2>
                <p>There’s lots to learn on the farm!</p>
                <p>Classes include 1st - 12th grade courses on farm animal studies, stable management and animal care. All classes are taught by licensed professionals.</p>
                <a href="#" className="subheading">Click for homeschool class details</a>
            </div>
        </section>
    );
}