import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { TrophyIcon } from "@heroicons/react/24/outline";

interface Props {
  award: string;
  date: string;
  awardedBy: string;
  type?: string;
  project?: string;
}

export default function Award(props: Props) {
  if (props.type == "school") {
    return (
      <div className="border bg-white/60 p-4 lg:p-6 rounded-2xl border-zinc-200/50">
        <div className="outline outline-1 outline-blue-100 text-white outline-offset-4 shadow-blue-100 shadow-lg w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full">
          <AcademicCapIcon
            width={24}
            height={24}></AcademicCapIcon>
        </div>

        <span className="block mt-4 mb-2 text-xs text-zinc-500">
          {props.date}
        </span>
        <span className="block font-semibold mb-1.5">{props.award}</span>
        <p className="block text-zinc-400 text-sm">
          Awarded by {props.awardedBy}
        </p>
      </div>
    );
  } else {
    return (
      <div className="border bg-white/60 p-4 lg:p-6 rounded-2xl border-zinc-200/50">
        <div className="outline outline-1 outline-yellow-200/60 text-white outline-offset-4 shadow-yellow-100 shadow-lg w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-full">
          <TrophyIcon
            width={24}
            height={24}></TrophyIcon>
        </div>

        <span className="block mt-4 mb-2 text-xs text-zinc-500">
          {props.date}
        </span>
        <span className="block font-semibold mb-1.5">{props.award}</span>
        <p className="block text-zinc-400 text-sm">
          Awarded to project {props.project} by {props.awardedBy}
        </p>
      </div>
    );
  }
}
