import Image from "next/image"

import { ParticleBackground } from "@/components/ParticleBackground"

export default function Home() {
  return (
    <>
      <div id="three-container" className="h-screen w-screen fixed">
        <Image src="/elden-ring.webp" alt="" fill quality={90} sizes="100vw" className="object-cover opacity-60" />
        <ParticleBackground />
      </div>

      <main className="relative"></main>
    </>
  )
}
