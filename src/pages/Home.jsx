import SEO from '@/components/ui/SEO'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import EngineeringExcellence from '@/components/sections/EngineeringExcellence'
import ManufacturingCapabilities from '@/components/sections/ManufacturingCapabilities'
import IndustriesSection from '@/components/sections/IndustriesSection'
import ManufacturingProcess from '@/components/sections/ManufacturingProcess'
import QualitySection from '@/components/sections/QualitySection'
import ProductsShowcase from '@/components/sections/ProductsShowcase'
import CertificationsMetrics from '@/components/sections/CertificationsMetrics'
import FinalCTA from '@/components/sections/FinalCTA'
import { COMPANY } from '@/lib/siteData'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ManufacturingBusiness',
  name: COMPANY.name,
  description: 'Precision electronics manufacturing: cable harnesses, box builds, and system integration.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address,
    addressCountry: 'IN',
  },
  telephone: COMPANY.phone,
  email: COMPANY.email,
  foundingDate: String(COMPANY.founded),
}

export default function Home() {
  return (
    <>
      <SEO
        title="Precision Electronics Manufacturing"
        description="Ryan Technology India designs and manufactures cable harnesses, box builds, and system assemblies for industrial, medical, automotive, and defense applications."
        path="/"
        structuredData={structuredData}
      />
      <Hero />
      <TrustBar />
      <EngineeringExcellence />
      <ManufacturingCapabilities />
      <IndustriesSection />
      <ManufacturingProcess />
      <QualitySection />
      <ProductsShowcase />
      <CertificationsMetrics />
      <FinalCTA />
    </>
  )
}
