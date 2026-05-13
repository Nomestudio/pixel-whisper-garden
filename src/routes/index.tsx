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
        <div className="w-full max-w-3xl aspect-video scale-[1.3] md:scale-100">
          <video
            className="w-full h-full object-contain"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/animazione-logo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <footer className="pb-10 pt-6 flex justify-center">
        <a
          href="mailto:info@nomestudio.eu"
          className="text-sm tracking-tight text-black/50 hover:text-black transition-colors"
        >
          info@nomestudio.eu
        </a>
      </footer>
    </main>
  );
}
