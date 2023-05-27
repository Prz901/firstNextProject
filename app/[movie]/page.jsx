import Image from "next/image"

export default async function MovieDetail({ params }) {
  const { movie } = params
  const imagePath = 'https://image.tmdb.org/t/p/original/'

  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, { next: { revalidate: 60 } })

  const res = await data.json()

  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded text-sm">{res.status}</h2>
        <Image className="my-12 w-full" src={imagePath + res.backdrop_path} width={400} height={400} />
        <p>{res.overview}</p>
      </div>
    </div>
  )

}