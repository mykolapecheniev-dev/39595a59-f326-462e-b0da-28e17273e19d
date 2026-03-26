"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmall"
        background="circleGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "About", id: "about" },
        { name: "Classes", id: "classes" },
        { name: "Team", id: "team" },
        { name: "Contact", id: "contact" }
      ]}
      brandName="Gladiator"
      button={{ text: "Register", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      title="Unleash Your Inner Gladiator"
      description="Experience professional dance training that challenges your limits and celebrates your movement. Join Gladiator Dance School today."
      background={{ variant: "plain" }}
      avatars={[
        { src: "https://pixabay.com/get/gf9f0f86e6bfa92f5604a1721b54a45577f419ae3adb1f75b3d1cef7742b69c68e238a77612de067309646534f3c834150410dfdc128c7161de6f84a88998bbe3_1280.jpg", alt: "Coach Alex" },
        { src: "https://pixabay.com/get/gb2f994b68a13a97dd8c58955b0b629773ed93b8ec78925821431fa57766a9fa0228d1fe28c65d6a860634f528be940ca78d18fe3995fa1c8fb3ca848270b32b4_1280.jpg", alt: "Coach Sam" },
        { src: "https://pixabay.com/get/g22c0bb0f2cc2c04c46e606dfce97bd8e4a5dbc11aef7a08f4a305f40cd69f9b0480530f61311d8915aca0e755dbc81ca165825c8b86d72f3d569cf5e31387463_1280.jpg", alt: "Coach Taylor" }
      ]}
      avatarText="Join our elite instructors"
      buttons={[{ text: "Book a Trial", href: "#contact" }]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      title="Professional Excellence in Every Step"
      description="Gladiator Dance School is founded on the principles of discipline, creativity, and strength. We provide a rigorous yet supportive environment for dancers of all levels to hone their craft."
      imageSrc="https://pixabay.com/get/g2da23cde03d7ad782ea07ff753806800d2e22472da2e8614c56e969bd5eb9b0d7a77f9dcde216565a3eb12e57d85425bf36b4f932fd570f7822f5a5bdcbb35bb_1280.jpg"
      mediaAnimation="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      bulletPoints={[
        { title: "Expert Instruction", description: "Learn from professionals with years of industry experience." },
        { title: "Comprehensive Programs", description: "From foundation basics to advanced technical masterclasses." },
        { title: "Studio Community", description: "Become part of a supportive, performance-driven family." }
      ]}
    />
  </div>

  <div id="classes" data-section="classes">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { id: "c1", title: "Contemporary", author: "Level: All", description: "Master expression and fluid movement through our contemporary syllabus.", tags: ["Modern", "Expressive"], imageSrc: "https://pixabay.com/get/ge6bc1e4b7cfa4108b5a097797558b167abf4000df89ee12db60a11dba169093d32114b45416c7ea275b94fea937f666644340bd6cc48851fb2886474d6bc120c_1280.jpg" },
        { id: "c2", title: "Classical Ballet", author: "Level: Intermediate+", description: "Build the technical foundation that powers every professional dancer.", tags: ["Ballet", "Foundational"], imageSrc: "https://pixabay.com/get/gaa3326cb232b919acfdc9ff5416e20a53dd348766ee183dcc5618ee19476d0d89e5615070be0c16ed9ac60b3225f4a3b4ab48a9a056446ca7d737810be68265b_1280.jpg" },
        { id: "c3", title: "Hip Hop & Urban", author: "Level: All", description: "Develop rhythm, precision, and personal style in our urban classes.", tags: ["Street", "Dynamic"], imageSrc: "https://pixabay.com/get/g9276b8aaa224a5a6e8e24b8a79d364a97dd9b0dd350a308b48a6ccb502ef3506e01af183dbf6612989f43281349456a2880069b7026ffeb332a4740fc0f3718d_1280.jpg" }
      ]}
      title="Our Dance Programs"
      description="Tailored training for every skill set and dance ambition."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      members={[
        { id: "m1", name: "Alex Riviera", role: "Artistic Director", imageSrc: "https://pixabay.com/get/gf9f0f86e6bfa92f5604a1721b54a45577f419ae3adb1f75b3d1cef7742b69c68e238a77612de067309646534f3c834150410dfdc128c7161de6f84a88998bbe3_1280.jpg" },
        { id: "m2", name: "Sam Thorne", role: "Lead Ballet Instructor", imageSrc: "https://pixabay.com/get/gb2f994b68a13a97dd8c58955b0b629773ed93b8ec78925821431fa57766a9fa0228d1fe28c65d6a860634f528be940ca78d18fe3995fa1c8fb3ca848270b32b4_1280.jpg" },
        { id: "m3", name: "Taylor Voss", role: "Contemporary Specialist", imageSrc: "https://pixabay.com/get/g22c0bb0f2cc2c04c46e606dfce97bd8e4a5dbc11aef7a08f4a305f40cd69f9b0480530f61311d8915aca0e755dbc81ca165825c8b86d72f3d569cf5e31387463_1280.jpg" }
      ]}
      title="Meet Your Mentors"
      description="Our team of seasoned professionals is dedicated to your growth."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="blur-reveal"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Sarah Miller", handle: "Student", testimonial: "Gladiator challenged my movement and gave me the confidence to audition professionally.", imageSrc: "https://pixabay.com/get/g7c00cdc14a5a2cb0746bef0275c8e636af461224aebc8373b00bd58576e28de631f086604d6c1163d52e66bda99e24e5b1768e8217b3a4d473e659ab58437ad2_1280.jpg" },
        { id: "t2", name: "Mark Jenkins", handle: "Parent", testimonial: "The community and support system here is unparalleled. My child has thrived since joining.", imageSrc: "https://pixabay.com/get/g5eac8956709ec10d78ef6cc7533739405ef4aba35dea465e10f92e7c8feb716f2a4317f739c0ad21a943f58bb6946d5e4b06c3cce7b1a393d5513b8f74df6b32_1280.jpg" },
        { id: "t3", name: "Emily Chen", handle: "Advanced Student", testimonial: "Professional technique meet artistic soul. This is truly the best place to develop.", imageSrc: "https://pixabay.com/get/g3dbd16d2927c0b9a49089c20f39a2045b547719bb1daa64cdd91735e498c7a6eb3e5e8f0d563178c7e744c61a41717e04bba4c651f974b11d7e932664a516502_1280.jpg" },
        { id: "t4", name: "Jason Doe", handle: "Alumni", testimonial: "I wouldn't be where I am today without the dedicated mentoring at Gladiator.", imageSrc: "https://pixabay.com/get/g3f89f5a4eb4a2519994a918f6b8e4ff7b6428e2f12b466df7a6a8948ae3dc29a476025f985f95255067f8f5b322b8bd353461a1dad479971926f75ac74dc7420_1280.jpg" }
      ]}
      title="Dancer Success Stories"
      description="See what our community has to say about their growth at Gladiator."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      tag="Get Started"
      title="Ready to Join the Arena?"
      description="Schedule your first trial class and start your dance journey today. Limited spots available."
      buttons={[{ text: "Contact Us", href: "mailto:hello@gladiator.dance" }]}
      background={{ variant: "radial-gradient" }}
      useInvertedBackground={true}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoText="GLADIATOR"
      columns={[
        { items: [{ label: "About Us", href: "#about" }, { label: "Classes", href: "#classes" }, { label: "Team", href: "#team" }] },
        { items: [{ label: "Register", href: "#contact" }, { label: "Contact", href: "mailto:hello@gladiator.dance" }] },
        { items: [{ label: "Terms of Service", href: "#" }, { label: "Privacy Policy", href: "#" }] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
