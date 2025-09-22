interface Props {
  children: any;
  color: string;
}

export default function Tag(props: Props) {
  if (props.color == "red") {
    return (
      <div className="px-4 py-1.5 rounded-full border border-red-500 w-fit mb-4 block h-fit">
        <h2 className="callout text-red-500">{props.children}</h2>
      </div>
    );
  } else if (props.color == "indigo") {
    return (
      <div className="px-4 py-1.5 rounded-full border border-indigo-500 w-fit mb-4 block h-fit">
        <h2 className="callout text-indigo-500">{props.children}</h2>
      </div>
    );
  }
  else if (props.color == "purple") {
    return (
      <div className="px-4 py-1.5 rounded-full border border-purple-500 w-fit mb-4 block h-fit">
        <h2 className="callout text-purple-500">{props.children}</h2>
      </div>
    );
  }
}
