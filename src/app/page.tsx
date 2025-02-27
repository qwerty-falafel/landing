'use client'

import { useState } from 'react'
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Lead } from '@/components/text'

export default function Home() {
  const [userType, setUserType] = useState<'photojournalist' | 'editor'>('photojournalist')

  return (
    <div className="overflow-hidden">
      <Hero userType={userType} setUserType={setUserType} />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection userType={userType} />
          <BentoSection userType={userType} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

function Hero({
  userType,
  setUserType,
}: {
  userType: string
  setUserType: (type: 'photojournalist' | 'editor') => void
}) {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            {userType === 'photojournalist'
              ? 'Own Your Story.'
              : 'Reliable, Flexible Licensing'}
          </h1>
          <p className="mt-8 max-w-220 text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {userType === 'photojournalist'
              ? 'Fair, Fast Photojournalism for a Changing World'
              : 'ShutterLedger provides our subscribers with direct access to licensed, authentic visual content from our global network of compliant, vetted photojournalists.'}
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button
              onClick={() => setUserType('photojournalist')}
              variant={userType === 'photojournalist' ? 'primary' : 'secondary'}
            >
              For Photojournalists
            </Button>
            <Button
              onClick={() => setUserType('editor')}
              variant={userType === 'editor' ? 'primary' : 'secondary'}
            >
              For Photo Editors
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * Provide different description copy based on userType, inlined
 * so it stays within 'use client' constraints.
 */
function FeatureSection({ userType }: { userType: string }) {
  const description = getDescriptionText(userType)

  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        {/* Our dynamic description block */}
        <Lead className="mt-6 max-w-3xl text-gray-950/90">
          {description}
        </Lead>

        <Heading as="h2" className="max-w-3xl mt-12">
          {userType === 'photojournalist'
            ? 'Direct-to-Editor Sales'
            : 'Instant Content Access'}
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

/**
 * A helper function returning user-specific text.
 */
function getDescriptionText(userType: string) {
  switch (userType) {
    case 'photojournalist':
      return `ShutterLedger is the new marketplace for photojournalists, offering the transparency and revenue you deserve. We connect you directly with media outlets, ensuring proper compliance and vetting. Our AI streamlines metadata creation, making your images instantly searchable globally. By providing configurable licensing options and direct job opportunities, we empower you to stay in control and gain a competitive edge.`

    case 'editor':
      return `ShutterLedger gives editors direct, real-time access to licensed, authentic visuals from a global network of vetted photojournalists. Our AI-driven search functionality and flawless metadata guarantee you find the right image fast. With flexible on-the-spot licensing options and transparent, competitive terms, your newsroom can publish confidently and streamline your editorial operation.`

    default:
      return ''
  }
}

function BentoSection({ userType }: { userType: string }) {
  return (
    <Container>
      <Heading as="h2" className="max-w-3xl">
        {userType === 'photojournalist'
          ? 'Your Image Rights'
          : 'Streamlined Content Acquisition'}
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Integrity"
          title={
            userType === 'photojournalist'
              ? 'Ownership & Copyright Control'
              : 'Verified & Licensed Content'
          }
          description={
            userType === 'photojournalist'
              ? 'Retain full ownership of your work while licensing it on your terms. With clear contract terms and NFT-backed authentication, your images stay protected and profitable.'
              : 'Access fully licensed, high-quality photojournalistic content with clear usage rights. Every image is verified for authenticity and sourced directly from professionals.'
          }
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Opportunity"
          title={
            userType === 'photojournalist'
              ? 'Assignment & Job Matching'
              : 'Search & Discover'
          }
          description={
            userType === 'photojournalist'
              ? 'Connect with media outlets, agencies, and corporate clients looking for high-quality images. Receive real-time assignment requests and get paid securely through our platform.'
              : 'Our AI search capabilities and impeccable metadata help you easily search and discover photos by subject, event, location, or photographer.'
          }
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed & Visibility"
          title="AI-Assisted Metadata & Captioning"
          description="Let AI handle the heavy lifting: auto-generate captions, recognize faces and locations, and streamline metadata tagging, ensuring your photos are discoverable and usable."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Direct"
          title={
            userType === 'photojournalist'
              ? 'Global Distribution'
              : 'Exclusive Access'
          }
          description={
            userType === 'photojournalist'
              ? 'Distribute your work directly to editors and publishers worldwide, bypassing traditional gatekeepers.'
              : 'Tap into our network of trusted photographers, gaining direct access to photojournalism that supports exclusive breaking news coverage.'
          }
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title={
            userType === 'photojournalist'
              ? 'Sell Globally'
              : 'License with Confidence'
          }
          description={
            userType === 'photojournalist'
              ? 'License your images to buyers across international markets with pricing you control.'
              : 'License high-quality images from a worldwide network of professionals who respond in realtime, keeping your publication ahead of the competition.'
          }
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}
