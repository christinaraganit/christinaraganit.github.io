interface Props {
  variant: string;
  link: string;
  text: string;
}

export default function Button(props: Props) {
  if (props.variant == "primary") {
    return (
      <a
        href={props.link}
        className="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 transition-colors h-10 rounded-full text-white flex items-center text-sm font-medium px-4"
      >
        {props.text}
      </a>
    );
  }
  return (
    <a
      href={props.link}
      className="bg-transparent hover:bg-blue-200/30 focus:bg-blue-200/30 transition-colors h-10 rounded-full text-zinc-800 hover:text-blue-600 focus:text-blue-600 flex items-center text-sm font-medium px-4"
    >
      {props.text}
    </a>
  );
}
