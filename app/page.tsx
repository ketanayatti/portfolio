import LeftSlider from '@/components/layout/LeftSlider'
import RightSlider from '@/components/layout/RightSlider'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Journey from '@/components/sections/Journey'
import Projects from '@/components/sections/Projects'
import Philosophy from '@/components/sections/Philosophy'
import Interactive from '@/components/sections/Interactive'
import Connect from '@/components/sections/Connect'

export default function Home() {
  return (
    <>
      <LeftSlider />
      <main className="ml-0 mr-0 md:ml-12 lg:mr-12">
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Philosophy />
        <Interactive />
        <Connect />
      </main>
      <RightSlider />
    </>
  )
}
