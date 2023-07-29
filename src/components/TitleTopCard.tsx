import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
  details: string;
  time: number;
}

export default function TitleTopCard(props: CardProps) {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {props.title}
        </h3>
        <p className="mt-1 text-gray-800 dark:text-gray-400">{props.details}</p>
        <p className="mt-5 text-xs text-gray-500 dark:text-gray-500">
          Last updated {props.time} mins ago
        </p>
      </div>
      <Image
        className="w-full h-auto rounded-b-xl"
        src={props.image}
        alt="Image Description"
        width={300}
        height={0}
      />
    </div>
  );
}
