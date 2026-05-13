import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Welcome" },
      { name: "description", content: "A simple landing page." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-between py-16 px-6">
      <div className="flex-1" />

      <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-neutral-100">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1200&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-pink-flower-blooming-1573/1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="flex-1 flex items-end pt-12">
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center justify-center rounded-full bg-black text-white px-8 py-4 text-base font-medium tracking-tight transition-transform hover:scale-105 active:scale-95"
        >
          Get in touch
        </a>
      </div>
    </main>
  );
}
