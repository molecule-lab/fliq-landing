"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WaitlistModal from "@/components/WaitlistModal";
import MobileMockup from "@/components/MobileMockup";
import {
  PaperAirplaneIcon,
  UserGroupIcon,
  MapPinIcon,
  ShieldCheckIcon,
  ClockIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  IdentificationIcon,
  BuildingStorefrontIcon,
  TagIcon,
  BriefcaseIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

// App Colors
const APP_COLORS = {
  primary: "#FF4B6E",
  primaryDark: "#E63F61",
  primaryLight: "#FF6B8A",
  primaryLighter: "#FFE5EC",
  primaryLightest: "#FFF5F7",
  dark: "#1A202C",
  gray: "#64748B",
  grayLight: "#94A3B8",
  grayLightest: "#F8FAFC",
  white: "#FFFFFF",
  success: "#38A169",
  yellow: "#FBBF24",
  border: "#E2E8F0",
};

// Now, let's update all the icons and elements to use the consistent color palette
const APP_DATA = {
  name: "Fliq",
  tagline: "Turn Layovers into Connections",
  description:
    "Meet new people at airports, explore cities together, and make your travels more exciting.",
  features: [
    {
      title: "Airport-Only Activation",
      description:
        "App only works within major airports, ensuring genuine traveler connections.",
      icon: <MapPinIcon className="h-6 w-6 text-[#FF4B6E]" />,
    },
    {
      title: "Flight Schedule Matching",
      description:
        "Connect with travelers based on compatible flight times and layover duration.",
      icon: <ClockIcon className="h-6 w-6 text-[#FF4B6E]" />,
    },
    {
      title: "Traveler Profiles",
      description:
        "Find like-minded travelers with tags like Business, Solo, or Adventure seeker.",
      icon: <TagIcon className="h-6 w-6 text-[#FF4B6E]" />,
    },
    {
      title: "Destination Connections",
      description: "Connect with people traveling to or from your destination.",
      icon: <GlobeAltIcon className="h-6 w-6 text-[#FF4B6E]" />,
    },
  ],
  meetingOptions: [
    {
      title: "Layover Meetups",
      description:
        "Discover ideal spots in the airport to connect over coffee or a meal.",
      icon: <BuildingStorefrontIcon className="h-6 w-6 text-white" />,
    },
    {
      title: "Group Hangouts",
      description: "Join travel groups with similar interests or itineraries.",
      icon: <UserGroupIcon className="h-6 w-6 text-white" />,
    },
    {
      title: "Smart Conversation Starters",
      description:
        "Break the ice with AI-suggested topics based on shared interests.",
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />,
    },
  ],
  safetyFeatures: [
    {
      title: "Airport Verification",
      description: "Users verify their location through airport WiFi or GPS.",
      icon: <MapPinIcon className="h-6 w-6 text-white" />,
    },
    {
      title: "Identity Confirmation",
      description:
        "Secure sign-up with passport or airline ticket verification.",
      icon: <IdentificationIcon className="h-6 w-6 text-white" />,
    },
    {
      title: "Traveler Safety Tools",
      description:
        "Easy reporting system and privacy controls for a secure experience.",
      icon: <ShieldCheckIcon className="h-6 w-6 text-white" />,
    },
  ],
  howItWorks: [
    {
      step: "1",
      title: "Check In",
      description: "Activate the app when you arrive at the airport.",
      icon: <PaperAirplaneIcon className="h-6 w-6 text-white" />,
    },
    {
      step: "2",
      title: "Connect",
      description:
        "Match with travelers who share your interests or destination.",
      icon: <ArrowPathIcon className="h-6 w-6 text-white" />,
    },
    {
      step: "3",
      title: "Meet",
      description:
        "Meet for coffee, conversation, or explore a new city together.",
      icon: <BriefcaseIcon className="h-6 w-6 text-white" />,
    },
  ],
  testimonials: [
    {
      quote:
        "Made a great business connection during my layover in Dubai. We ended up collaborating on a project!",
      author: "Alex, 31",
      location: "Business Traveler",
      rating: 5,
    },
    {
      quote:
        "Found a travel buddy for exploring Tokyo during my 12-hour layover. It made the experience so much better!",
      author: "Emma, 27",
      location: "Solo Traveler",
      rating: 5,
    },
  ],
  stats: [
    { value: "30M+", label: "Travelers Connected" },
    { value: "120+", label: "Major Airports" },
    { value: "8hrs", label: "Average Meetup Duration" },
  ],
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    fetch(
      "https://asia-south1-zap-dev-384118.cloudfunctions.net/feedback-service?product=fliq|dating",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(() => {
        console.log("Form submitted successfully");
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden pt-16 md:pt-20">
      {/* Header */}
      <header className="w-full px-4 md:px-6 py-3 fixed top-0 left-0 z-20 bg-white/90 backdrop-blur-sm border-b border-[#E2E8F0] shadow-sm">
        <div className="container mx-auto flex items-center justify-start">
          <a href="/" className="flex items-center group">
            <div className="relative flex items-center">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-[#FF4B6E] to-[#FF6B8A] flex items-center justify-center mr-2 shadow-sm group-hover:shadow-md transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-white transform -rotate-12 group-hover:scale-110 transition-transform"
                >
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </div>
              <span className="text-2xl font-extrabold text-[#1A202C] group-hover:tracking-wide transition-all">
                <span className="text-[#FF4B6E]">fli</span>q
                <span className="absolute top-0 right-0 translate-x-1 -translate-y-1 h-1.5 w-1.5 rounded-full bg-[#FF4B6E] group-hover:bg-[#FF6B8A] transition-colors"></span>
              </span>
            </div>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[650px] flex items-center justify-center bg-white overflow-hidden pt-12 md:pt-20 pb-12 sm:pb-8">
        <div className="container mx-auto px-4 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="w-full md:w-1/2 z-10 text-center md:text-left mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A202C] mb-4 md:mb-5">
                  Meet. Connect.
                  <span className="text-[#FF4B6E] block mt-1 md:mt-2">
                    Fly Together.
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-[#64748B] mb-6 md:mb-10 max-w-lg mx-auto md:mx-0">
                  The exclusive dating app that connects travelers during
                  layovers and airport waits. Turn waiting time into meaningful
                  connections.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-[#FF4B6E] text-white font-medium rounded-md shadow-sm hover:shadow-md hover:bg-[#E63F61] transition-all w-full sm:w-auto"
                  >
                    Join the Waitlist
                  </button>
                  <div className="flex items-center justify-center md:justify-start mt-4 sm:mt-0">
                    <div className="flex -space-x-3 mr-3">
                      {[1, 2, 3, 2, 1].map((i, index) => (
                        <div
                          key={index}
                          className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white overflow-hidden"
                          style={{ zIndex: 5 - index }}
                        >
                          <Image
                            src={`/images/profile-${i}.jpg`}
                            alt={`User ${i}`}
                            width={32}
                            height={32}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-[#64748B]">
                      <span className="font-semibold">2M+</span> travelers
                      waiting
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mobile Mockup */}
            <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto relative"
              >
                <MobileMockup />
                <div className="block md:hidden text-center mt-4 text-xs text-[#64748B] bg-white shadow-sm py-1.5 px-4 rounded-full mx-auto w-max border border-[#E2E8F0]">
                  <span>Swipe cards or tap indicators below</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-3 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Hearts Pattern */}
            <g className="hearts-pattern">
              <path
                d="M120,150 C120,130 140,110 160,110 C180,110 200,125 200,150 C200,175 180,190 160,210 C140,190 120,175 120,150 Z"
                fill="#FF4B6E"
                opacity="0.4"
                transform="rotate(10, 160, 160)"
              />
              <path
                d="M820,250 C820,230 840,210 860,210 C880,210 900,225 900,250 C900,275 880,290 860,310 C840,290 820,275 820,250 Z"
                fill="#FF4B6E"
                opacity="0.3"
                transform="rotate(-15, 860, 260)"
              />
              <path
                d="M220,550 C220,530 240,510 260,510 C280,510 300,525 300,550 C300,575 280,590 260,610 C240,590 220,575 220,550 Z"
                fill="#FF4B6E"
                opacity="0.25"
                transform="rotate(20, 260, 560)"
              />
              <path
                d="M920,650 C920,630 940,610 960,610 C980,610 1000,625 1000,650 C1000,675 980,690 960,710 C940,690 920,675 920,650 Z"
                fill="#FF4B6E"
                opacity="0.2"
                transform="rotate(-10, 960, 660)"
              />
            </g>

            {/* Connection Lines */}
            <g
              className="connection-lines"
              opacity="0.15"
              strokeWidth="1"
              stroke="#FF4B6E"
            >
              <path
                d="M100,400 C300,350 500,450 700,150"
                strokeDasharray="5,5"
              />
              <path
                d="M700,150 C800,300 900,200 1100,450"
                strokeDasharray="5,5"
              />
              <path
                d="M1100,450 C900,550 700,500 450,620"
                strokeDasharray="5,5"
              />
              <path
                d="M100,400 C200,500 300,450 450,620"
                strokeDasharray="5,5"
              />
            </g>
          </svg>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A202C] mb-3 md:mb-5">
                Transforming Airport Wait Time
              </h2>
              <p className="text-base md:text-lg text-[#64748B]">
                Airports are filled with interesting people from around the
                world, but traditional dating apps don't cater to the unique
                needs of travelers. Fliq creates meaningful connections that fit
                your travel schedule.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {APP_DATA.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-8 rounded-lg border border-[#E2E8F0] hover:shadow-sm transition-shadow"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FFF5F7] rounded-full flex items-center justify-center mb-4 md:mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#1A202C] mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-5 text-[#1A202C]">
                How Fliq Works
              </h2>
              <p className="text-base md:text-lg text-[#64748B]">
                Our app activates only when you're at the airport, making it
                easy to connect with fellow travelers.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
            {APP_DATA.howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 md:p-8 bg-white rounded-lg shadow-sm"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FFF5F7] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  {index === 0 && (
                    <PaperAirplaneIcon className="h-6 w-6 md:h-7 md:w-7 text-[#FF4B6E]" />
                  )}
                  {index === 1 && (
                    <ArrowPathIcon className="h-6 w-6 md:h-7 md:w-7 text-[#FF4B6E]" />
                  )}
                  {index === 2 && (
                    <BriefcaseIcon className="h-6 w-6 md:h-7 md:w-7 text-[#FF4B6E]" />
                  )}
                </div>
                <div className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#FF4B6E]">
                  Step {step.step}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#1A202C]">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A202C] mb-3 md:mb-5">
                Connect Your Way
              </h2>
              <p className="text-base md:text-lg text-[#64748B]">
                Whether you're looking for a quick coffee, a travel buddy, or
                meaningful conversation, Fliq helps you connect in a way that
                fits your travel plans.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
            {APP_DATA.meetingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-8 rounded-lg border border-[#E2E8F0] hover:shadow-sm transition-shadow"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FFF5F7] rounded-full flex items-center justify-center mb-4 md:mb-5">
                  {index === 0 && (
                    <BuildingStorefrontIcon className="h-6 w-6 md:h-7 md:w-7 text-[#FF4B6E]" />
                  )}
                  {index === 1 && (
                    <UserGroupIcon className="h-6 w-6 md:h-7 md:w-7 text-[#FF4B6E]" />
                  )}
                  {index === 2 && (
                    <ChatBubbleLeftRightIcon className="h-6 w-6 md:h-7 md:w-7 text-[#FF4B6E]" />
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#1A202C]">
                  {option.title}
                </h3>
                <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 md:py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            {APP_DATA.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center mb-6 sm:mb-0"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF4B6E] mb-2 md:mb-3">
                  {stat.value}
                </div>
                <div className="text-base md:text-lg text-[#64748B]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A202C] mb-3 md:mb-5">
                Success Stories
              </h2>
              <p className="text-base md:text-lg text-[#64748B]">
                See how travelers are transforming their airport experiences
                with Fliq.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
            {APP_DATA.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#E2E8F0]"
              >
                <div className="flex mb-3 md:mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#FBBF24]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm md:text-base text-[#64748B] mb-5 md:mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4 overflow-hidden">
                    <Image
                      src={`/images/testimonial-${index + 1}.jpg`}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1A202C] text-sm md:text-base">
                      {testimonial.author}
                    </div>
                    <div className="text-[#94A3B8] text-xs md:text-sm">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features Section */}
      <section className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-5 text-[#1A202C]">
                Your Safety is Our Priority
              </h2>
              <p className="text-base md:text-lg text-[#64748B]">
                We've built Fliq with multiple layers of security to ensure a
                safe experience.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
            {APP_DATA.safetyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 md:p-8 bg-white rounded-lg shadow-sm"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FFF5F7] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  {index === 0 && (
                    <MapPinIcon className="h-6 w-6 md:h-7 md:w-7 text-[#FF4B6E]" />
                  )}
                  {index === 1 && (
                    <IdentificationIcon className="h-6 w-6 md:h-7 md:w-7 text-[#FF4B6E]" />
                  )}
                  {index === 2 && (
                    <ShieldCheckIcon className="h-6 w-6 md:h-7 md:w-7 text-[#FF4B6E]" />
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#1A202C]">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-6 sm:p-8 md:p-10 bg-[#FAFAFA] rounded-lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A202C] mb-3 md:mb-5">
                Ready for More Meaningful Travel?
              </h2>
              <p className="text-base md:text-lg text-[#64748B] mb-6 md:mb-10">
                Join our waitlist to be one of the first to experience Fliq when
                we launch.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-[#FF4B6E] text-white font-semibold rounded-md shadow-sm hover:shadow-md hover:bg-[#E63F61] transition-all"
              >
                Join the Waitlist
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 bg-white border-t border-[#E2E8F0]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#1A202C]">
              {APP_DATA.name}
            </div>
            <p className="text-xs md:text-sm text-[#64748B] mb-4 md:mb-6">
              {APP_DATA.tagline}
            </p>
            <p className="text-xs md:text-sm text-[#94A3B8]">
              © 2024 {APP_DATA.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <WaitlistModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </main>
  );
}
