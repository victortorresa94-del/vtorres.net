"use client";

interface GumletVideoProps {
    videoId: string;
    title?: string;
    className?: string;
}

export default function GumletVideo({ videoId, title = "Video", className = "" }: GumletVideoProps) {
    // Extract ID if a full URL is passed
    const cleanId = videoId.split("/").pop()?.split("?")[0] || videoId;
    const embedUrl = `https://play.gumlet.io/embed/${cleanId}`;

    return (
        <div className={`relative w-full h-full overflow-hidden rounded-2xl ${className}`}>
            <iframe
                src={`${embedUrl}?autoplay=0&loop=1&muted=0&preload=auto&captions=0&text_track=none&time=0`}
                className="w-full h-full saturate-[1.3]"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title={title}
                style={{ border: "none", backgroundColor: "black" }}
            />
        </div>
    );
}
