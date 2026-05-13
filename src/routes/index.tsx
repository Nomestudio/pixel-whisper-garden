import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Studio" },
      { name: "description", content: "Studio." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-3xl aspect-video">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-a-pink-flower-blooming-1573/1080p.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <footer className="pb-10 pt-6 flex justify-center">
        <a
          href="mailto:info@example.com"
          className="text-sm tracking-tight text-black hover:opacity-60 transition-opacity"
        >
          info@example.com
        </a>
      </footer>
    </main>
  );
}
