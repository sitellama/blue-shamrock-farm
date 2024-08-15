import hero from "@/assets/hero-horse.webp";

export function HeroImg() {
    return (
        <img src={hero} className="w-full h-[500px] object-cover" />
    );
}