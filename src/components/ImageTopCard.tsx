import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
  details: string;
}

export default function ImageTopCard(props: CardProps) {
  return (
    <>
      <a
        className="flex flex-col group bg-white border shadow-md rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        href="#"
      >
        <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
          <Image
            className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
            src={props.image}
            alt="Image Description"
            width={300}
            height={0}
          />
        </div>
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {props.title}
          </h3>
          <p className="mt-1 text-gray-800 dark:text-gray-400">
            {props.details}
          </p>
        </div>
      </a>
    </>
  );
}
