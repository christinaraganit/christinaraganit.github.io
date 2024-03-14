import NavNotFixed from "@/components/nav-not-fixed";
import Image from "next/image";

export default function WhyHireMe() {
  return (
    <main className="w-full flex justify-center items-center flex-col pt-0 sm:pt-16 pb-20">
      <NavNotFixed></NavNotFixed>

      <section className="grid">
        <div className="grid px-6 lg:grid-cols-2 max-w w-full">
          <div className="max-w-3xl relative top-0 left-0 rounded-3xl">
            <Image
              src="/presenting.png"
              width={1674}
              height={1118}
              alt="Christina, Devon, Matthew, and Ray presenting Watchdog at StormHacks 2023"
              className="aspect-video object-cover relative top-0 left-0 rounded-3xl"></Image>
            <div className="bg-gradient-to-r from-white/0 to-zinc-50 absolute top-0 left-0 max-w-3xl w-full aspect-video"></div>
          </div>
          <div className="p-6 lg:p-12">
            <p className="title-1">Christina Raganit is a UI designer named</p>
          </div>
        </div>

        <div className="grid px-6 lg:grid-cols-3 max-w w-full bg-white">
          <div className="max-w-3xl gradient-mask-r-0 backdrop-blur-lg col-span-2">
            <Image
              src="/presenting.png"
              width={1674}
              height={1118}
              alt="Christina, Devon, Matthew, and Ray presenting Watchdog at StormHacks 2023"
              className="object-cover rounded-tl-3xl rounded-bl-3xl"></Image>
          </div>
          <div className="p-6 lg:p-12 col-span-1">
            <p className="title-1">Christina Raganit is a UI designer named</p>
          </div>
        </div>
      </section>
    </main>
  );
}
