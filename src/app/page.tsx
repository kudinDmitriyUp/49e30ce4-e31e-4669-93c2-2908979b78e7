"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import TeamCardNine from '@/components/sections/team/TeamCardNine';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Linkedin, Facebook, Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="mediumSizeExtraSmallSpacing"
      background="animatedGrid"
      cardStyle="shadow-colored"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765551210312-xrtxntsp.jpg"
          logoAlt="Elite Chiropractic Clinic"
          brandName="Elite Chiropractic"
          button={{
            text: "Book Appointment",
            href: "#contact"
          }}
          className="bg-background/80 backdrop-blur-md"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Elite Chiropractic"
          description="Professional spinal care and wellness solutions to restore your mobility and eliminate pain. Experience healing through expert chiropractic treatment tailored to your needs."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765551211369-4xpjpmuo.jpg"
          imageAlt="Elite Chiropractic Clinic Treatment Room"
          frameStyle="card"
          ariaLabel="Hero section showcasing Elite Chiropractic Clinic"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Our Clinic"
          description="Elite Chiropractic has been serving the community for over 15 years, providing evidence-based spinal health care and rehabilitation services. Our mission is to help patients achieve optimal wellness through professional chiropractic treatment."
          tag="Our Story"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          bulletPoints={[
            {
              title: "Expert Care",
              description: "Board-certified chiropractors with extensive training in spinal manipulation and wellness"
            },
            {
              title: "Patient-Focused",
              description: "Personalized treatment plans designed for your specific health goals and conditions"
            },
            {
              title: "Modern Technology",
              description: "State-of-the-art diagnostic equipment and treatment facilities"
            },
            {
              title: "Holistic Approach",
              description: "Comprehensive wellness strategies combining chiropractic care with lifestyle guidance"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765551212765-2hgrsoqj.jpg"
          imageAlt="Chiropractor examining patient during treatment"
          imagePosition="right"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwelve
          title="Our Treatment Services"
          description="Comprehensive chiropractic and wellness services to address your health needs"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          features={[
            {
              id: "spinal-adjustment",
              label: "Spinal",
              title: "Chiropractic Spinal Adjustments",
              items: [
                "Corrects misalignments",
                "Restores mobility and function",
                "Reduces pain and discomfort",
                "Improves nervous system function"
              ]
            },
            {
              id: "therapeutic-massage",
              label: "Massage",
              title: "Therapeutic Massage Therapy",
              items: [
                "Relieves muscle tension",
                "Enhances circulation",
                "Accelerates healing",
                "Promotes relaxation"
              ]
            },
            {
              id: "rehabilitation",
              label: "Rehab",
              title: "Physical Rehabilitation Programs",
              items: [
                "Injury recovery protocols",
                "Strength and flexibility training",
                "Customized exercise plans",
                "Functional movement restoration"
              ]
            },
            {
              id: "wellness-counseling",
              label: "Wellness",
              title: "Health & Wellness Counseling",
              items: [
                "Ergonomic assessments",
                "Lifestyle recommendations",
                "Nutritional guidance",
                "Preventative care strategies"
              ]
            }
          ]}
          animationType="slide-up"
          variant="border"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardNine
          title="Meet Our Expert Team"
          description="Dedicated healthcare professionals committed to your wellness journey"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          members={[
            {
              id: "1",
              name: "Dr. Michael Johnson",
              role: "Chief Chiropractor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765551213889-fov4xr3i.jpg",
              imageAlt: "Dr. Michael Johnson",
              socialLinks: [
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  ariaLabel: "LinkedIn"
                }
              ]
            },
            {
              id: "2",
              name: "Dr. Sarah Chen",
              role: "Licensed Chiropractor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765551214970-7t8stszf.jpg",
              imageAlt: "Dr. Sarah Chen",
              socialLinks: [
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  ariaLabel: "LinkedIn"
                }
              ]
            },
            {
              id: "3",
              name: "Marcus Williams",
              role: "Therapeutic Massage Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765551216020-sro57scj.jpg",
              imageAlt: "Marcus Williams",
              socialLinks: [
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  ariaLabel: "LinkedIn"
                }
              ]
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          title="Patient Success Stories"
          description="Real results from patients who have experienced relief and healing with our care"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              nameTitle: "Jennifer Martinez, Patient",
              quote: "After years of back pain affecting my work and family life, Dr. Johnson's treatment plan transformed my health. I'm now pain-free and can enjoy activities I thought were behind me.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765551216679-qp3p017g.jpg",
              imageAlt: "Jennifer Martinez"
            },
            {
              id: "2",
              nameTitle: "Robert Thompson, Patient",
              quote: "The combination of chiropractic adjustments and therapeutic massage at Elite Chiropractic resolved my chronic neck pain within weeks. Their professional approach is exceptional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765551218307-jwv2y8uq.jpg",
              imageAlt: "Robert Thompson"
            },
            {
              id: "3",
              nameTitle: "Amanda Foster, Patient",
              quote: "I was skeptical about chiropractic care until I visited Elite. The team's knowledge and caring approach gave me confidence in their treatment plan. Highly recommended.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765551218958-hq40iz8g.jpg",
              imageAlt: "Amanda Foster"
            },
            {
              id: "4",
              nameTitle: "David Kumar, Patient",
              quote: "My sports injury recovery was accelerated thanks to their rehabilitation program. The staff made me feel like more than just a case number.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765551219631-evlg926b.jpg",
              imageAlt: "David Kumar"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and treatment approach"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What conditions do you treat?",
              content: "We treat a wide range of conditions including back pain, neck pain, headaches, sciatica, sports injuries, whiplash, arthritis, and posture-related problems. Our chiropractors perform a thorough assessment to determine the best treatment approach for your specific condition."
            },
            {
              id: "2",
              title: "Is chiropractic care safe?",
              content: "Yes, chiropractic care is a safe and effective treatment when performed by licensed professionals. Our chiropractors are board-certified and use evidence-based techniques. We conduct thorough evaluations and may recommend imaging studies when necessary."
            },
            {
              id: "3",
              title: "How many sessions will I need?",
              content: "The number of sessions varies depending on your condition and response to treatment. During your initial consultation, we'll develop a personalized treatment plan with an estimated timeline. Some patients see results within a few visits, while chronic conditions may require more extended care."
            },
            {
              id: "4",
              title: "Do you accept insurance?",
              content: "Yes, we work with most major insurance providers. We recommend contacting our office to verify your coverage before your first visit. Our billing team can help navigate your insurance benefits."
            },
            {
              id: "5",
              title: "What should I expect on my first visit?",
              content: "Your first visit will include a detailed health history, physical examination, and possibly X-rays or other diagnostic imaging. We'll discuss your symptoms, health goals, and develop a customized treatment plan. Most initial appointments take 45 minutes to an hour."
            },
            {
              id: "6",
              title: "Is chiropractic care covered by insurance?",
              content: "Many insurance plans cover chiropractic care, though coverage varies. We'll verify your benefits and help you understand your out-of-pocket costs. We also offer flexible payment plans for uninsured patients."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Schedule Your Appointment"
          description="Ready to start your healing journey? Contact us today to book your consultation with one of our experienced chiropractors."
          useInvertedBackground="noInvert"
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "condition",
              type: "text",
              placeholder: "Condition or Reason for Visit",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your health concerns and goals...",
            rows: 5,
            required: true
          }}
          buttonText="Book Appointment"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Elite Chiropractic"
          copyrightText="© 2025 Elite Chiropractic Clinic. All rights reserved."
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              ariaLabel: "LinkedIn"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}