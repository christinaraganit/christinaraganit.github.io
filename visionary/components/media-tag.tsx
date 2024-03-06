interface Props {
  media: string;
  children: any;
}

export default function MediaTag(props: Props) {
  return (
    <div className="flex gap-2 lg:items-center flex-row">
      <span className="font-mono block w-fit h-fit text-xs bg-zinc-200/60 px-2 py-1 rounded-md">
        {props.media}
      </span>
      <p className="text-sm text-neutral-600">{props.children}</p>
    </div>
  );
}
