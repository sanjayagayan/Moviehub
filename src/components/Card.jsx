import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="grid rounded-3xl max-w-[370px] shadow-sm bg-black flex-col hover:border-2 border-[#ffa31a]">
      <Link href={`/movie/${result.id}`}>
          <div className="group p-[2px] grid z-10">
            <div className="p-3">
            <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            width={500}
            height={300}
            className="rounded-t-3xl justify-center grid h-72 object-cover"
            alt="Movie Image"
            priority
          />
            <div className="pt-3">
              <h2 className="group-hover:text-[#ffa31a] font-bold sm:text-2xl line-clamp-2">
                {result.title || result.name}
              </h2>
              <div className="h-10">
                <div className="line-clamp-4 py-2 text-sm font-light leading-relaxed">
                  <div className="line-clamp-2 text-md">{result.overview}</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-6">
              <span className="text-white font-semibold">
                {result.release_date || result.first_air_date}
              </span>
              <span className="flex">
                <FiThumbsUp className="h-5 mr-1 ml-3" />
                {result.vote_count}
              </span>
            </div>
            </div>
          </div>
      </Link>
    </div>
  );
}
