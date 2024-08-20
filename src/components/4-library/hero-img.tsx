export function HeroImg({ hero, heroDiv, heroTitle, heroText }: { hero: string, heroDiv?: boolean, heroTitle?: string, heroText?: string }) {
    return (
        <div className="flex flex-col relative justify-center items-center">
            <img src={hero} className="w-full h-[500px] object-cover" />
            {heroDiv && <div className="w-5/12 h-2/4 absolute bg-slate-500 flex flex-col justify-center border border-white ring-8 ring-slate-500 text-white">
                <div>
                    <h1 className="text-center">{heroTitle}</h1>
                    <p className="text-center">{heroText}</p>
                </div>
            </div>}
        </div>

    );
}