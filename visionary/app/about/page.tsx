import Nav from "@/components/nav";
import Image from "next/image";
import MediaTag from "@/components/media-tag";

export default function About() {
  return (
    <main className="w-full flex flex-col gap-20 items-center pt-12 lg:pt-20 pb-24">
      <Nav></Nav>

      <section className="max-w w-full md:grid-cols-2 grid px-6 gap-10 lg:gap-20">
        <div>
          <h1 className="large-title mb-8 max-w-3xl md:hidden">
            Hi, I'm Christina Raganit.
          </h1>
          <Image
            width={1542}
            height={1542}
            src="/me_in_italy.jpg"
            alt="Christina Raganit and a view of the rolling hills of Assisi"
            className="rounded-2xl mb-3"
          ></Image>
          <MediaTag media="IMAGE">
            Christina Raganit, enjoying the summer breeze of Italy and awestruck
            at the sight of the rolling hills of Assisi.
          </MediaTag>
        </div>
        <div>
          <h1 className="title-2 hidden lg:block mb-4 max-w-3xl">
            Hi, I'm Christina Raganit.
          </h1>

          <p className="mb-6">
            I fell in love with design in the lecture halls of my computer
            science classes at BCIT. I initially dreamt of being a software
            developer so that I can build things that'll make the world a better
            place but it turns out, I wanted to design them, too.
          </p>

          <p className="mb-6">
            After graduating with my diploma in Computer Systems Technology, I
            enrolled into the Interactive Arts and Technology program at Simon
            Fraser University, where I am currently sharpening my skills in
            design as a fourth-year student and leading the design team at SFU
            Surge.
          </p>

          <p className="mb-2">
            When I am not tinkering away on Figma, you can usually find me...
          </p>
          <ul className="list-disc list-inside leading-relaxed">
            <li>Eating pizza at hackathons all over the Lower Mainland</li>
            <li>Losing all my League of Legends games</li>
            <li>Jamming to my favorite blink-182 songs, and</li>
            <li>Reading stories about magic and dragons</li>
          </ul>

          <p></p>
        </div>
      </section>
    </main>
  );
}
