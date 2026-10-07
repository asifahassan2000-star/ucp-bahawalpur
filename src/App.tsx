/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

// Register GSAP ScrollTrigger plugin globally
gsap.registerPlugin(ScrollTrigger);
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { OurLeadershipSection } from './components/OurLeadershipSection';
import { StatisticsSection } from './components/StatisticsSection';
import { FacultiesGrid } from './components/FacultiesGrid';
import { FacultySection } from './components/FacultySection';
import { FacultyPage } from './components/FacultyPage';
import { AcademicProgrammesPage } from './components/AcademicProgrammesPage';
import { OurLegacyPage } from './components/OurLegacyPage';
import { ScholarshipsPage } from './components/ScholarshipsPage';
import { FeeStructurePage } from './components/FeeStructurePage';
import { NewsAndEvents } from './components/NewsAndEvents';
import { CampusLife } from './components/CampusLife';
import { BeyondTheClassroomSection } from './components/BeyondTheClassroomSection';
import { WhatWeOfferAccordion } from './components/WhatWeOfferAccordion';
import { CampusLifePage } from './components/CampusLifePage';
import { CnnAcademyPage } from './components/CnnAcademyPage';
import { AboutCampusSection } from './components/AboutCampusSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AdmissionsExperienceSection } from './components/AdmissionsExperienceSection';
import { ClosingDramaticSection } from './components/ClosingDramaticSection';
import { Footer } from './components/Footer';
import { FloatingSideRibbons } from './components/FloatingSideRibbons';
import { ClickGlowManager } from './components/ClickGlowManager';
import { ScrollRevealManager } from './components/ScrollReveal';
import { ApplyModal } from './components/ApplyModal';
import { FeeCalculatorModal } from './components/FeeCalculatorModal';
import { StudentPortalModal } from './components/StudentPortalModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { UcpInfoModal, InfoModalType } from './components/UcpInfoModal';
import { UcpChatbot } from './components/UcpChatbot';
import { Program, NewsEventItem } from './types';
import { FACULTIES, UCP_CONTACT } from './data/ucpData';

export default function App() {
  // Navigation / Page state
  const [currentPage, setCurrentPage] = useState<'home' | 'faculty' | 'programmes' | 'legacy' | 'campus-life' | 'scholarships' | 'fee-structure' | 'cnn-academy'>('home');
  const [facultyCategory, setFacultyCategory] = useState<string>('all');
  const [selectedProgrammeId, setSelectedProgrammeId] = useState<string | null>(null);
  const [selectedProgrammeCategory, setSelectedProgrammeCategory] = useState<string | null>(null);

  // Modal states
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isFeeOpen, setIsFeeOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [selectedInfoModal, setSelectedInfoModal] = useState<InfoModalType | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsEventItem | null>(null);
  const [preselectedProgramName, setPreselectedProgramName] = useState<string>('');

  // Lenis ref to programmatically control smooth scrolling during route transitions
  const lenisRef = useRef<Lenis | null>(null);

  // 1. Lenis Smooth Scroll Initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    (window as any).__appLenis = lenis;

    // Synchronize Lenis scroll with GSAP ScrollTrigger globally
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as any).__appLenis;
    };
  }, []);

  // Universal Instant Scroll-To-Top Helper for Seamless Page Transitions
  const scrollToTopInstant = () => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true, force: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  // Crucial: Whenever currentPage switches (e.g. to 'campus-life'), strictly force scroll to top (0)
  useEffect(() => {
    scrollToTopInstant();
    const rAF = requestAnimationFrame(() => {
      scrollToTopInstant();
    });
    const timer = setTimeout(() => {
      scrollToTopInstant();
    }, 60);

    return () => {
      cancelAnimationFrame(rAF);
      clearTimeout(timer);
    };
  }, [currentPage]);

  const handleOpenProgrammesPage = (progId?: string, category?: string) => {
    scrollToTopInstant();
    setSelectedProgrammeId(progId || null);
    setSelectedProgrammeCategory(category || null);
    setCurrentPage('programmes');
    requestAnimationFrame(() => scrollToTopInstant());
  };

  const handleOpenProgrammesFromFaculty = (facultyId?: string) => {
    let cat: string | undefined;
    if (facultyId === 'foit') cat = 'Computing & Technology';
    else if (facultyId === 'fms') cat = 'Business';
    else if (facultyId === 'fost') cat = 'Science';
    else if (facultyId === 'fhss') cat = 'Humanities & Social Sciences';

    handleOpenProgrammesPage(undefined, cat);
  };

  const handleOpenCampusLifePage = () => {
    scrollToTopInstant();
    setSelectedProgrammeId(null);
    setCurrentPage('campus-life');
    requestAnimationFrame(() => scrollToTopInstant());
  };

  const handleOpenScholarshipsPage = () => {
    scrollToTopInstant();
    setSelectedProgrammeId(null);
    setCurrentPage('scholarships');
    requestAnimationFrame(() => scrollToTopInstant());
  };

  const handleOpenFeeStructurePage = () => {
    scrollToTopInstant();
    setSelectedProgrammeId(null);
    setCurrentPage('fee-structure');
    requestAnimationFrame(() => scrollToTopInstant());
  };

  const handleOpenCnnAcademyPage = () => {
    scrollToTopInstant();
    setSelectedProgrammeId(null);
    setCurrentPage('cnn-academy');
    requestAnimationFrame(() => scrollToTopInstant());
  };

  const handleOpenApply = (progName?: string) => {
    if (progName) {
      setPreselectedProgramName(progName);
    }
    window.open(
      'https://admissions.ucpcolleges.pgc.edu/login?returnUrl=%2Flogin%3FreturnUrl%3D%252F',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleOpenFee = () => {
    handleOpenFeeStructurePage();
  };

  const handleOpenInfo = (type: InfoModalType) => {
    if (type === 'academic-calendar') {
      window.open('https://ucp.edu.pk/academic-calendar/', '_blank', 'noopener,noreferrer');
      return;
    }
    if (type === 'fee-structure') {
      handleOpenFeeStructurePage();
      return;
    }
    if (type === 'rules-regulations') {
      window.open('https://ucp.edu.pk/rules-regulations/', '_blank', 'noopener,noreferrer');
      return;
    }
    if (type === 'exam-office') {
      window.open('https://ucp.edu.pk/exam-office/', '_blank', 'noopener,noreferrer');
      return;
    }
    if (type === 'harassment-policy') {
      window.open('https://ucp.edu.pk/inc/uploads/2019/01/SEXUALHARASSMENT-POLICY.pdf', '_blank', 'noopener,noreferrer');
      return;
    }
    if (type === 'scholarships') {
      handleOpenScholarshipsPage();
      return;
    }
    if (type === 'jobs') {
      window.open('https://ucp.edu.pk/jobs/career-opportunities/', '_blank', 'noopener,noreferrer');
      return;
    }
    if (type === 'verify-student') {
      window.open('https://horizon.ucp.edu.pk/verify?_gl=1*1jdpsum*_gcl_au*MTgzMjA3ODQ4MC4xNzkwMDEyMzQ5*_ga*MTk1MTM4Njg4MS4xNzkwMDEyMzQ5*_ga_9BBZL6TFYQ*czE3OTAxNzk2OTYkbzYkZzEkdDE3OTAxODAxMjQkajU5JGwwJGg0NzM0NDM5MzA.', '_blank', 'noopener,noreferrer');
      return;
    }
    if (type === 'faqs') {
      window.open('https://ucp.edu.pk/faqs/', '_blank', 'noopener,noreferrer');
      return;
    }
    if (type === 'blog') {
      window.open(
        'https://ucp.edu.pk/blog/?_gl=1*g7icau*_gcl_au*mtgzmja3odq4mc4xnzkwmdeymzq5li0uls4xnzkwmtgwndm0ljy0mta5mdayni4xnzkwmtgwndm0lje3otaxoda0mzq.*_ga*mtk1mtm4njg4ms4xnzkwmdeymzq5*_ga_9bbzl6tfyq*cze3otaxnzk2otykbzykzzekdde3otaxoda0otckajywjgwwjgg0nzm0ndm5mza.',
        '_blank',
        'noopener,noreferrer'
      );
      return;
    }
    if (type === 'oric') {
      window.open(
        'https://oric.ucp.edu.pk/?_gl=1%2A1038nq8%2A_gcl_au%2AMTgzMjA3ODQ4MC4xNzkwMDEyMzQ5Li0uLS4xNzkwMTgwNDM0LjY0MTA5MDAyNi4xNzkwMTgwNDM0LjE3OTAxODA0MzQ.%2A_ga%2AMTk1MTM4Njg4MS4xNzkwMDEyMzQ5%2A_ga_9BBZL6TFYQ%2AczE3OTAxNzk2OTYkbzYkZzEkdDE3OTAxODA1MTUkajQyJGwwJGg0NzM0NDM5MzA.',
        '_blank',
        'noopener,noreferrer'
      );
      return;
    }
    setSelectedInfoModal(type);
  };

  const handleOpenFacultyPage = (cat: string = 'all') => {
    scrollToTopInstant();
    setFacultyCategory(cat);
    setCurrentPage('faculty');
    requestAnimationFrame(() => scrollToTopInstant());
  };

  const handleOpenLegacyPage = () => {
    scrollToTopInstant();
    setCurrentPage('legacy');
    setSelectedProgrammeId(null);
    requestAnimationFrame(() => scrollToTopInstant());
  };

  const handleBackToHome = () => {
    scrollToTopInstant();
    setCurrentPage('home');
    setSelectedProgrammeId(null);
    requestAnimationFrame(() => scrollToTopInstant());
  };

  const handleScrollTo = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setSelectedProgrammeId(null);
      setTimeout(() => {
        if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFaculty = (facultyId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setSelectedProgrammeId(null);
    }
    setTimeout(() => {
      handleScrollTo('faculties-section');
      const facElem = document.getElementById(`faculty-card-${facultyId}`);
      if (facElem) {
        facElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        facElem.classList.add('ring-4', 'ring-[#a30f16]', 'transition-all');
        setTimeout(() => {
          facElem.classList.remove('ring-4', 'ring-[#a30f16]');
        }, 2500);
      }
    }, 150);
  };

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#a30f16] selection:text-white">
      {/* Interactive Click Glow & Highlight Manager for all text and images */}
      <ClickGlowManager />
      
      {/* High-Performance Institutional Scroll Reveal Animation Manager */}
      <ScrollRevealManager />
      
      {/* 1. Official Top Emergency Ticker & Contact Strip */}
      <TopBar 
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenFee={handleOpenFee}
        onOpenApply={() => handleOpenApply()}
        onOpenCnnAcademyPage={handleOpenCnnAcademyPage}
      />

      {/* 2. Main Navigation Bar */}
      <Navbar
        onOpenApply={() => handleOpenApply()}
        onOpenFee={handleOpenFee}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenInfo={handleOpenInfo}
        onSelectFaculty={handleSelectFaculty}
        onScrollTo={handleScrollTo}
        onOpenFacultyPage={() => handleOpenFacultyPage('all')}
        onOpenProgrammesPage={handleOpenProgrammesPage}
        onOpenLegacyPage={handleOpenLegacyPage}
        onOpenCampusLifePage={handleOpenCampusLifePage}
        onOpenScholarshipsPage={handleOpenScholarshipsPage}
        onOpenCnnAcademyPage={handleOpenCnnAcademyPage}
        onBackToHome={handleBackToHome}
        currentPage={currentPage}
      />

      <main>
        {currentPage === 'programmes' ? (
          /* Official UCP Bahawalpur Academic Programmes Experience */
          <AcademicProgrammesPage 
            onBackToHome={handleBackToHome}
            onOpenApply={handleOpenApply}
            onOpenFee={handleOpenFee}
            initialSelectedId={selectedProgrammeId}
            initialCategory={selectedProgrammeCategory}
          />
        ) : currentPage === 'faculty' ? (
          /* Separate Dedicated Faculty Page with 20 Slots & Department Views */
          <FacultyPage 
            onBackToHome={handleBackToHome}
            initialCategory={facultyCategory}
          />
        ) : currentPage === 'legacy' ? (
          /* Dedicated Official Our Legacy Page */
          <OurLegacyPage
            onBackToHome={handleBackToHome}
            onOpenApply={handleOpenApply}
            onOpenProgrammesPage={handleOpenProgrammesPage}
            onOpenFee={handleOpenFee}
          />
        ) : currentPage === 'campus-life' ? (
          /* Dedicated Official Premium Campus Life Page — “Life Beyond the Classroom” */
          <CampusLifePage
            onBackToHome={handleBackToHome}
            onOpenApply={() => handleOpenApply()}
            onOpenProgrammesPage={handleOpenProgrammesPage}
            onOpenFee={handleOpenFee}
          />
        ) : currentPage === 'scholarships' ? (
          /* Dedicated Official Scholarships & Concessions Page */
          <ScholarshipsPage
            onBackToHome={handleBackToHome}
            onOpenApply={() => handleOpenApply()}
            onOpenProgrammesPage={handleOpenProgrammesPage}
            onOpenFee={handleOpenFee}
          />
        ) : currentPage === 'fee-structure' ? (
          /* Dedicated Official Fee Structure & Tuition Schedules Page */
          <FeeStructurePage
            onBackToHome={handleBackToHome}
            onOpenApply={(progName?: string) => handleOpenApply(progName)}
            onOpenProgrammesPage={handleOpenProgrammesPage}
            onOpenScholarshipsPage={handleOpenScholarshipsPage}
          />
        ) : currentPage === 'cnn-academy' ? (
          /* Dedicated Official CNN Academy Strategic Collaboration & Guidance Page */
          <CnnAcademyPage
            onBackToHome={handleBackToHome}
            onOpenPortal={() => setIsPortalOpen(true)}
            onOpenProgrammesPage={handleOpenProgrammesPage}
          />
        ) : (
          /* Main Homepage Sections following World-Class SEO and Institutional Information Architecture */
          <>
            {/* 1. HERO — Flagship Sunset Campus Photograph (IMAGE 13) */}
            <HeroSlider
              onOpenApply={() => handleOpenApply()}
              onOpenFee={handleOpenFee}
              onScrollTo={handleScrollTo}
              onSelectFaculty={handleSelectFaculty}
              onOpenProgrammesPage={handleOpenProgrammesPage}
              onOpenLegacyPage={handleOpenLegacyPage}
              onOpenCampusLifePage={handleOpenCampusLifePage}
            />

            {/* 2. INSTITUTIONAL METRICS & ACCREDITATIONS — Immediate Proof & Quantitative Authority */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <StatisticsSection onOpenScholarshipsPage={handleOpenScholarshipsPage} />
            </motion.div>

            {/* 3. ACADEMIC FACULTIES & DISCIPLINES — Core Educational Search Intent */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <FacultiesGrid
                onSelectFaculty={handleSelectFaculty}
                onExploreFacultyPrograms={handleOpenProgrammesFromFaculty}
              />
            </motion.div>

            {/* 4. WHAT WE OFFER FOR YOU — Expanding Interactive Academic Offerings */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <WhatWeOfferAccordion
                onOpenApply={() => handleOpenApply()}
                onOpenProgrammesPage={() => handleOpenProgrammesPage()}
                onOpenCampusLifePage={handleOpenCampusLifePage}
                onOpenScholarshipsPage={handleOpenScholarshipsPage}
                onOpenLegacyPage={handleOpenLegacyPage}
                onOpenFacultyPage={() => handleOpenFacultyPage('all')}
                onScrollTo={handleScrollTo}
              />
            </motion.div>

            {/* 5. DISTINGUISHED FACULTY SHOWCASE — Faculty Profiles, Mentors & PhD Researchers */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <FacultySection 
                onViewAllFaculty={handleOpenFacultyPage}
              />
            </motion.div>

            {/* 6. OUR CAMPUS — Architectural Presence & Scholarly Roots */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <AboutCampusSection
                onOpenApply={() => handleOpenApply()}
                onOpenLegacyPage={handleOpenLegacyPage}
                onScrollTo={handleScrollTo}
              />
            </motion.div>

            {/* 7. WORLD-CLASS FACILITIES — Purpose-Built Laboratories & Learning Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <FacilitiesSection 
                onOpenApply={() => handleOpenApply()}
                onOpenCampusLifePage={handleOpenCampusLifePage}
              />
            </motion.div>

            {/* 8. INSTITUTIONAL LEADERSHIP — Vision, Governance & Executive Guidance */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <OurLeadershipSection 
                onOpenApply={() => handleOpenApply()}
                onScrollTo={handleScrollTo}
              />
            </motion.div>

            {/* 9. CAMPUS LIFE — Student Life, Courtyard Gathering & Campus Culture */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <CampusLife 
                onOpenCampusLifePage={handleOpenCampusLifePage}
              />
            </motion.div>

            {/* 10. BEYOND THE CLASSROOM — Student Societies & Experiential Learning */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <BeyondTheClassroomSection
                onScrollToCampusLife={() => handleScrollTo('campus-section')}
                onOpenCampusLifePage={handleOpenCampusLifePage}
              />
            </motion.div>

            {/* 11. NEWS & EVENTS — Timely Updates, Academic Symposia & Campus Happenings */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <NewsAndEvents
                onSelectArticle={(article) => setSelectedArticle(article)}
              />
            </motion.div>

            {/* 12. ADMISSIONS EXPERIENCE — Red Carpet Welcome & Campus Visit Guidance */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <AdmissionsExperienceSection
                onOpenApply={() => handleOpenApply()}
                onOpenFee={handleOpenFee}
              />
            </motion.div>

            {/* 13. CLOSING DRAMATIC FINALE — Strategic Perspective & Application Anchors */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <ClosingDramaticSection
                onOpenApply={() => handleOpenApply()}
                onOpenProgrammesPage={() => handleOpenProgrammesPage()}
                onScrollTo={handleScrollTo}
              />
            </motion.div>
          </>
        )}
      </main>

      {/* 10. Official Comprehensive Footer */}
      <Footer
        onOpenApply={() => handleOpenApply()}
        onOpenFee={handleOpenFee}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenInfo={handleOpenInfo}
        onScrollTo={handleScrollTo}
        onSelectFaculty={handleSelectFaculty}
        onOpenLegacyPage={handleOpenLegacyPage}
      />

      {/* Right Edge Floating Ribbons & WhatsApp Button */}
      <FloatingSideRibbons
        onOpenApply={() => handleOpenApply()}
        onOpenInfo={handleOpenInfo}
        onOpenLegacyPage={handleOpenLegacyPage}
        onOpenCampusLifePage={handleOpenCampusLifePage}
        onOpenProgrammesPage={() => handleOpenProgrammesPage()}
        onOpenScholarshipsPage={handleOpenScholarshipsPage}
        onOpenFeeStructurePage={handleOpenFeeStructurePage}
      />

      {/* Official 24/7 UCP Bot (Instant Knowledge + Gemini AI) */}
      <UcpChatbot />

      {/* Modal Dialogs */}
      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        preselectedProgram={preselectedProgramName}
      />

      <FeeCalculatorModal
        isOpen={isFeeOpen}
        onClose={() => setIsFeeOpen(false)}
        onOpenApply={() => handleOpenApply()}
      />

      <StudentPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

      <UcpInfoModal
        type={selectedInfoModal}
        onClose={() => setSelectedInfoModal(null)}
        onOpenApply={() => handleOpenApply()}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenProgrammesPage={() => handleOpenProgrammesPage()}
      />

      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onApply={(progName?: string) => handleOpenApply(progName)}
        onOpenFee={handleOpenFee}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

    </div>
  );
}
