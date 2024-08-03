import hero from "@/assets/horse-hero.jpg";

export function HeroImg() {
    return (
        <img src={hero} className="w-full h-[500px] object-cover" />
    );
}