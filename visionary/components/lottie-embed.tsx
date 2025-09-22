// app/components/LottieEmbed.tsx
import Script from 'next/script';

export default function LottieEmbed({ src }: { src: string }) {
    return (
        <>
            <Script
                src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
                strategy="afterInteractive"
            />
            {/* @ts-expect-error custom element */}
            <lottie-player
                src={src}
                autoplay
                loop
                background="transparent"
                speed="1"
                style={{ width: "1440", height: "1024" }}
            />
        </>
    );
}
