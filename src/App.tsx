export default function App() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-white text-black flex flex-col fixed inset-0">
      <div
        className="flex-1 flex items-center justify-center px-6"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
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

      <footer
        className="absolute inset-x-0 bottom-0 flex justify-center pt-6"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1.5rem)" }}
      >
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
