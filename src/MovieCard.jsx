export function MovieCard({ image, rating }) {
    return (
        <div className="relative w-[200px] rounded-2xl 
        overflow-hidden bg-neutral-900 
        shadow-lg">

            <img
                src="{image}"
                alt="Movie Poster"
                className="w-full h-auto object-cover"
            />

            <div className="absolute top-2 right-2 z-10">
                <FavoriteButton />
            </div>

            <div className="absolute bottom-0 left-0 
            w-full bg-gradient-to-t from-black/80
            to-transparent p-2 text-sm
            text-white font-semibold">
                IMDb:{rating}
            </div>
        </div>
    )
}