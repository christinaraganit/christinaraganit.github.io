import Image from "next/image";

interface Props {
  imgLink: string;
  children: any;
  name: string;
  title: string;
}

export default function Review(props: Props) {
  return (
    <div className="bg-white/60 border border-zinc-200/60 rounded-2xl p-6">
      <p className="text-zinc-600 lg:leading-6 mb-4">{props.children}</p>
      <div className="flex items-center gap-3.5 pt-1">
        <Image
          src={props.imgLink}
          width={100}
          height={100}
          className="rounded-full w-10 h-10 aspect-square object-cover"
          alt={props.name}
        ></Image>
        <div>
          <p className="text-sm font-semibold text-zinc-700 mb-0.5">
            {props.name}
          </p>
          <p className="text-sm text-zinc-600">{props.title}</p>
        </div>
      </div>
    </div>
  );
}
