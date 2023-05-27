// https://api.themoviedb.org/3/movie/popular
//Todas as paginas do next sao server side page para utilizar o onclick ou useState ou useEffect precisa colocar o 'use client' no topo do seu jsx

import Movie from "./Movie"

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)

  const res = await data.json(data)
  res.results.map((movie) => {
    movie: toString(movie.id)
  })

  return (
    <main className="bg-gray-900 text-white" >
      <div className="mx-32 py-12 ">
        <div className="grid gap-16 grid-cols-fluid">
          {res.results.map((movie) => {
            return (
              <Movie
                title={movie.title}
                id={movie.id}
                key={movie.id}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}
