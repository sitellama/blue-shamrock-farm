import homeschool from "@/assets/outdoor-classes.jpg";

export function ImgText() {
    return (
        <section className="mt-36 flex bg-blue-light">
            <div className="flex-1">
                <img src={homeschool} />
            </div>

            <div className="p-4 flex-1 text-white">
                <h2>Homeschool Classes</h2>
                <p>There’s lots to learn on the farm!</p>
                <p>Classes include 1st - 12th grade courses on farm animal studies, stable management and animal care. All classes are taught by licensed professionals.</p>
                <a href="#" className="subheading">Click for homeschool class details</a>
            </div>
        </section>
    );
}