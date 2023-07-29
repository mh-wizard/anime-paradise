import ImageTopCard from "@/components/ImageTopCard";
import TitleTopCard from "@/components/TitleTopCard";
import Image from "next/image";

//TODO: set device and Based on the device show many list will be shown
export default function Home() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main className="mx-auto p-4">
      <div className="mt-8 flex justify-around">
        <Image
          src="/hero-image.jpg"
          alt="hero image"
          className="w-4/5 rounded-xl shadow-2xl shadow-yellow-400"
          width={1920}
          height={1080}
        />
      </div>

      <div className="mt-24" id="trending">
        <p className="font-extrabold text-sky-700 text-2xl mb-3">Trending</p>
        <div className="text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {arr.map((item, index) => {
            return (
              <TitleTopCard
                key={index}
                title="Attack on titan"
                image="/aot.jpg"
                details="Attack on titan is the best anime every existed"
                time={3}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-16" id="upcoming">
        <p className="font-extrabold text-purple-800 text-2xl mb-3">Upcoming</p>
        <div className="text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {arr.map((item, index) => {
            return (
              <ImageTopCard
                key={index}
                title="Attack on titan"
                image="/aot.jpg"
                details="Attack on titan is the best anime every existed"
              />
            );
          })}
        </div>
      </div>

      <div className="mt-16" id="most-rated">
        <p className="font-extrabold text-pink-700 text-2xl mb-3">Most Rated</p>
        <div className="text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {arr.map((item, index) => {
            return (
              <ImageTopCard
                key={index}
                title="Attack on titan"
                image="/aot.jpg"
                details="Attack on titan is the best anime every existed"
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
