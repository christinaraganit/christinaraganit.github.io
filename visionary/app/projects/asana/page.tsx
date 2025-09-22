import PasswordDialog from "@/components/password/password-dialog";
import { cookies } from "next/headers";
import NavNotFixed from "@/components/nav-not-fixed";
import Spacer from "@/components/spacer";
import MediaTag from "@/components/media-tag";
import LottieEmbed from "@/components/lottie-embed";
import Image from "next/image";


export default async function Asana() {

    const cookieJar = await cookies();
    const hasPassword = cookieJar.get("secret")?.value === process.env.COOKIE_SECRET;

    return (
        <main className="max-w-[100vw] w-full flex flex-col items-center gap-4 lg:gap-8 pt-40 pb-32">
            <NavNotFixed></NavNotFixed>

            {hasPassword ? (
                <div>
                    <section className="px-6 max-w w-full grid grid-cols-1 lg:grid-cols-3 mb-12 gap-6 lg:gap-40">
                        <div className="col-span-2">
                            <h1 className="large-title mb-6">Empowering internal teams at Asana to drive user adoption with Custom Onboarding</h1>
                            <p className="p-lg font-light mb-4">
                                As a product design intern at Asana, I led the design direction for a feature within an internal tool that would enable our Customer Success team to create customized onboarding flows for the organizations they work with, making it easier for new users to adopt Asana and start using the platform effectively.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:flex sm:grid-cols-2 md:grid-cols-3 lg:flex-col gap-6">
                            <div>
                                <h2 className="callout mb-1">Team</h2>
                                <p>Christina Raganit (Lead Designer)<br></br>Chuiee Yang (Design Mentor)</p>
                            </div>

                            <div>
                                <h2 className="callout mb-1">Status</h2>
                                <p>Handed Off<br></br>In Development</p>
                            </div>


                            <div>
                                <h2 className="callout mb-1">Duration</h2>
                                <p>
                                    June–July 2025<br></br>(6 Weeks)
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="px-6 max-w w-full flex flex-col gap-2">
                        <Image src="/otto/current-otto.png" blurDataURL="/otto/current-otto.png" width={1440} height={1024} placeholder="blur" alt="Current version of OTTO" className="rounded-lg w-full"></Image>
                        <MediaTag media="Image">
                            Custom Onboarding tab in current version of OTTO
                        </MediaTag>
                    </section>
                </div>
            ) : (
                <div className="h-full">
                    <PasswordDialog url="/projects/asana" />
                </div>
            )}
        </main>
    );
}