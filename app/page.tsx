import Image from "next/image"

import { ParticleBackground } from "@/components/ParticleBackground"

export default function Home() {
  return (
    <>
      <div id="three-container" className="h-screen w-screen fixed">
        <Image src="/elden-ring.webp" alt="" fill quality={90} sizes="100vw" className="object-cover" />
        <span className="fixed bg-black inset-0 bg-opacity-50" />
        <ParticleBackground />
      </div>

      <main className="relative py-8 px-6">
        <h1 className="font-eldenring text-2xl lg:text-5xl text-eldenring text-center" aria-label="Shadow of the Erdtree">Shadow of the erdtreE</h1>
      </main>
    </>
  )
}
