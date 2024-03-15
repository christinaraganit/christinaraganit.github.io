interface Props {
  link: string;
  text: string;
  color: string;
  size: string;
}

export default function Link(props: Props) {
  let classes = "";

  switch (props.color) {
    case "indigo":
      classes = "hover:text-indigo-500 focus:text-indigo-500";
      break;
    case "green":
      classes = "hover:text-green-500 focus:text-green-500";
      break;
    case "blue":
      classes = "hover:text-blue-500 focus:text-blue-500";
      break;
    case "orange":
      classes = "hover:text-orange-500 focus:text-orange-500";
      break;
    case "fuchsia":
      classes = "hover:text-fuchsia-500 focus:text-fuchsia-500";
      break;
    case "purple":
      classes = "hover:text-purple-500 focus:text-purple-500";
      break;
  }

  if (props.size == "medium") {
    return (
      <a
        href={props.link}
        className={`inline flex-wrap ${classes} group/link underline-offset-4`}
      >
        <span className="underline">{props.text}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="inline w-4 h-4 -translate-y-1.5 group-hover/link:-translate-y-2 group-hover/link:translate-x-0.5 transition-transform"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    );
  } else if (props.size == "large") {
    return (
      <a
        href={props.link}
        className={`inline flex-wrap ${classes} group/link underline-offset-4`}
      >
        <span className="underline">{props.text}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="inline w-6 h-6 -translate-y-1.5 group-hover/link:-translate-y-2 group-hover/link:translate-x-0.5 transition-transform"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    );
  }
}
