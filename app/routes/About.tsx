export default function About() {
    return <main className="max-w-6xl min-h-screen mx-auto">
        {/* Hero */}
        <div className="pt-14 px-6 text-center">
            <p className="mb-3.5 font-semibold tracking-widest uppercase text-black/40">ABOUT</p>
            <h1 className="mb-4.5 text-3xl font-medium">
                A kitchen worth remembering
            </h1>
            <p className="max-w-105 mx-auto text-black/80">
                A place to keep Mom's recipes and all-time favourites safe. So nothing gets lost, forgotten, or left on a scrap of paper.
            </p>
        </div>

        {/* Divider */}
        <div className="max-w-140 my-10 mx-auto px-6 flex items-center gap-3.5">
            <div className="h-px flex-1 bg-black/20" />
            <div className="w-2 h-2 shrink-0 rounded-full bg-[#ba7517]" />
            <div className="h-px flex-1 bg-black/20" />
        </div>

        {/* Story */}
        <div className="max-w-125 mx-auto px-6">
            <p className="mb-5">
                Mom has always been the heart of our kitchen. These are the recipes I grew up with and never want to forget.
            </p>
            <p className="text-black/80">
                MomsFood is where I'm saving all of them, her classics, the family favourites we keep coming back to, and the ones I've picked up along the way. One place, always there, nothing lost.
            </p>
        </div>
    </main>;
}