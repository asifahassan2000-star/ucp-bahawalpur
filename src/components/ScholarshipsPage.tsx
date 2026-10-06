import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, GraduationCap, Users, ShieldCheck, ArrowLeft, ArrowRight,
  CheckCircle2, Calculator, Info, ExternalLink, Sparkles, AlertCircle,
  Building2, Percent, HelpCircle, PhoneCall, ChevronRight, BookOpen
} from 'lucide-react';
import { UCP_CONTACT } from '../data/ucpData';

interface ScholarshipsPageProps {
  onBackToHome: () => void;
  onOpenApply: () => void;
  onOpenProgrammesPage: (progId?: string) => void;
  onOpenFee: () => void;
}

export const ScholarshipsPage: React.FC<ScholarshipsPageProps> = ({
  onBackToHome,
  onOpenApply,
  onOpenProgrammesPage,
  onOpenFee,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'bs' | 'kinship' | 'adp' | 'cgpa'>('all');

  // Interactive Calculator State
  const [calcDegreeType, setCalcDegreeType] = useState<'bs' | 'adp'>('bs');
  const [calcGroup, setCalcGroup] = useState<'groupA' | 'groupB'>('groupA');
  const [calcMarks, setCalcMarks] = useState<number>(82);
  const [calcCgpa, setCalcCgpa] = useState<number>(3.6);
  const [isOldStudent, setIsOldStudent] = useState<boolean>(false);
  const [isKinshipOrArmed, setIsKinshipOrArmed] = useState<boolean>(false);
  const [calcSemesterType, setCalcSemesterType] = useState<'admission' | 'subsequent'>('admission');

  // Calculate scholarship estimate
  const computeEstimatedScholarship = (): { percent: number; rationale: string; tierTitle: string } => {
    let bestPercent = 0;
    let rationale = '';
    let tierTitle = 'Standard Admission (No Concession)';

    if (calcSemesterType === 'admission') {
      if (calcDegreeType === 'bs') {
        // BS Merit
        if (calcGroup === 'groupA') {
          if (calcMarks >= 80) {
            bestPercent = Math.max(bestPercent, 50);
            tierTitle = '50% Merit Scholarship (At Admission)';
            rationale = 'Marks ≥ 80% in intermediate for BS (Computing, BBA, Natural Sciences)';
          }
        } else {
          if (calcMarks >= 75) {
            bestPercent = Math.max(bestPercent, 50);
            tierTitle = '50% Merit Scholarship (At Admission)';
            rationale = 'Marks ≥ 75% in intermediate for BS (Accounting, Psychology, English, Economics)';
          }
        }

        // Old student at admission (BS: 25%)
        if (isOldStudent && bestPercent < 25) {
          bestPercent = 25;
          tierTitle = '25% Old Student Concession';
          rationale = 'Punjab Group of Colleges / UCP Alumni Privilege';
        }

        // Kinship or Armed Forces (BS: 25%)
        if (isKinshipOrArmed && bestPercent < 25) {
          bestPercent = 25;
          tierTitle = '25% Kinship / Defense / Govt Employee Concession';
          rationale = 'Eligible under Kinship or Public Service criteria';
        }
      } else {
        // ADP Merit
        if (calcMarks >= 75) {
          bestPercent = Math.max(bestPercent, 50);
          tierTitle = '50% Merit Scholarship (At Admission)';
          rationale = 'Marks ≥ 75% in intermediate for ADP Degrees';
        }

        // ADP Old Student
        if (isOldStudent) {
          if (calcMarks >= 60) {
            if (50 > bestPercent) {
              bestPercent = 50;
              tierTitle = '50% Old Student ADP Concession';
              rationale = 'PGC Alumni with ≥ 60% Intermediate marks in ADP';
            }
          } else {
            if (25 > bestPercent) {
              bestPercent = 25;
              tierTitle = '25% Old Student ADP Concession';
              rationale = 'PGC Alumni with < 60% Intermediate marks in ADP';
            }
          }
        }

        // ADP Kinship / Armed Forces / Teacher child (25%)
        if (isKinshipOrArmed && bestPercent < 25) {
          bestPercent = 25;
          tierTitle = '25% Kinship / Service Concession';
          rationale = 'Kinship / Armed Forces / Teacher child privilege';
        }
      }
    } else {
      // Subsequent Semesters (CGPA based)
      if (calcCgpa >= 3.5) {
        bestPercent = Math.max(bestPercent, 50);
        tierTitle = '50% Performance / Merit Scholarship';
        rationale = 'CGPA ≥ 3.50 in subsequent semester';
      } else if (calcCgpa >= 3.25) {
        bestPercent = Math.max(bestPercent, 25);
        tierTitle = '25% Performance / Merit Scholarship';
        rationale = 'CGPA 3.25 to 3.49 in subsequent semester';
      }

      // Old student / Kinship subsequent discount
      if (calcDegreeType === 'bs') {
        if ((isOldStudent || isKinshipOrArmed) && bestPercent < 25) {
          if (calcCgpa >= 2.75) {
            bestPercent = Math.max(bestPercent, 25);
            tierTitle = '25% Subsequent Concession';
            rationale = 'Old Student / Kinship maintaining CGPA ≥ 2.75';
          } else if (calcCgpa >= 2.5) {
            bestPercent = Math.max(bestPercent, 12.5);
            tierTitle = '12.5% Subsequent Concession';
            rationale = 'Old Student / Kinship maintaining CGPA 2.50 - 2.74';
          }
        }
      } else {
        // ADP Subsequent
        if (isOldStudent && bestPercent < 50) {
          if (calcCgpa >= 2.75) {
            bestPercent = Math.max(bestPercent, 50);
            tierTitle = '50% Old Student Subsequent Concession';
            rationale = 'ADP Old Student maintaining CGPA ≥ 2.75';
          } else if (calcCgpa >= 2.5) {
            bestPercent = Math.max(bestPercent, 25);
            tierTitle = '25% Old Student Subsequent Concession';
            rationale = 'ADP Old Student maintaining CGPA 2.50 - 2.74';
          }
        } else if (isKinshipOrArmed && bestPercent < 25) {
          if (calcCgpa >= 2.75) {
            bestPercent = Math.max(bestPercent, 25);
            tierTitle = '25% Kinship Subsequent Concession';
            rationale = 'ADP Kinship / Public Service maintaining CGPA ≥ 2.75';
          } else if (calcCgpa >= 2.5) {
            bestPercent = Math.max(bestPercent, 12.5);
            tierTitle = '12.5% Kinship Subsequent Concession';
            rationale = 'ADP Kinship / Public Service maintaining CGPA 2.50 - 2.74';
          }
        }
      }
    }

    if (bestPercent === 0) {
      rationale = 'Score below concession thresholds. Inquire at Admissions for need-based evaluation.';
    }

    return { percent: bestPercent, rationale, tierTitle };
  };

  const calculatedResult = computeEstimatedScholarship();

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1F2937] font-['Inter',sans-serif] selection:bg-[#0F2C52] selection:text-white">
      
      {/* =========================================================================
          1. HERO HEADER SECTION — CLEAN OFFICIAL WORDPRESS ELEMENTOR STYLE
          Section bg #FFFFFF not dark blue, padding 80px 0. Container max 1200px.
          ========================================================================= */}
      <section className="bg-[#FFFFFF] py-16 sm:py-20 border-b border-[#E5E7EB]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Back */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E5E7EB]">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#4B5563] hover:text-[#0F2C52] transition-colors cursor-pointer group"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1 text-[#6B7280]" />
              <span>Back to Campus Home</span>
            </button>

            <div className="flex items-center gap-2 text-xs text-[#6B7280] font-normal">
              <span>Home</span>
              <span className="text-[#9CA3AF]">/</span>
              <span className="text-[#0F2C52] font-semibold">Scholarships & Concessions</span>
            </div>
          </div>

          {/* Badge: bg #FFF7ED text #9A3412 border 1px #FED7AA font 11px uppercase 600 Inter letter-spacing 0.5px radius 20px padding 6px 14px */}
          <div className="inline-block bg-[#FFF7ED] text-[#9A3412] border border-[#FED7AA] text-[11px] uppercase font-[600] tracking-[0.5px] rounded-[20px] px-[14px] py-[6px] mb-5">
            Official Financial Aid & Merit Policies — Fall 2026
          </div>

          {/* Title: font 36px font-weight 700 color #111827 font-family Inter, line 1.2, no cursive, no italic. First word "Scholarships" color #0F2C52. */}
          <h1 className="text-[36px] font-[700] text-[#111827] leading-[1.2] tracking-tight">
            <span className="text-[#0F2C52]">Scholarships</span> & Concessions
          </h1>

          {/* Paragraph: font 15px color #4B5563 line 1.7 max-width 760px. */}
          <p className="mt-4 text-[15px] text-[#4B5563] leading-[1.7] max-w-[760px] font-normal">
            At the University of Central Punjab, education is an investment in human potential. 
            With over <strong className="text-[#0F2C52] font-semibold">PKR 1.3 Billion</strong> disbursed annually 
            across the Punjab Group network, we ensure financial constraints never hinder academic excellence.
          </p>

          {/* 4 Cards: bg #F9FAFB border 1px solid #E5E7EB border-radius 12px padding 20px, no glow, no dark bg. 
              Label top 10px uppercase 600 color #6B7280 tracking 0.6px. Big number 22px bold color #0F2C52. 
              Small desc 12px color #6B7280. On hover border #0F2C52/20 shadow 0 4px 12px rgba(0,0,0,0.04) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            
            {/* Box 1: Merit Tier */}
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[12px] p-[20px] transition-all hover:border-[#0F2C52]/20 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
              <span className="text-[10px] uppercase font-[600] text-[#6B7280] tracking-[0.6px] block">
                Merit Tier
              </span>
              <span className="text-[22px] font-bold text-[#0F2C52] mt-1 block">
                Up to 50%
              </span>
              <span className="text-[12px] text-[#6B7280] mt-0.5 block font-normal">
                At Admission & Later
              </span>
            </div>

            {/* Box 2: PGC Alumni */}
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[12px] p-[20px] transition-all hover:border-[#0F2C52]/20 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
              <span className="text-[10px] uppercase font-[600] text-[#6B7280] tracking-[0.6px] block">
                PGC Alumni
              </span>
              <span className="text-[22px] font-bold text-[#0F2C52] mt-1 block">
                Up to 50%
              </span>
              <span className="text-[12px] text-[#6B7280] mt-0.5 block font-normal">
                Old Student Privilege
              </span>
            </div>

            {/* Box 3: Kinship / Govt */}
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[12px] p-[20px] transition-all hover:border-[#0F2C52]/20 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
              <span className="text-[10px] uppercase font-[600] text-[#6B7280] tracking-[0.6px] block">
                Kinship / Govt
              </span>
              <span className="text-[22px] font-bold text-[#0F2C52] mt-1 block">
                25%
              </span>
              <span className="text-[12px] text-[#6B7280] mt-0.5 block font-normal">
                Sibling & Armed Forces
              </span>
            </div>

            {/* Box 4: Annual Fund */}
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[12px] p-[20px] transition-all hover:border-[#0F2C52]/20 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
              <span className="text-[10px] uppercase font-[600] text-[#6B7280] tracking-[0.6px] block">
                Annual Fund
              </span>
              <span className="text-[22px] font-bold text-[#0F2C52] mt-1 block">
                1.3B+ PKR
              </span>
              <span className="text-[12px] text-[#6B7280] mt-0.5 block font-normal">
                Total Concessions
              </span>
            </div>

          </div>

          {/* 3 Buttons: Primary bg #0F2C52 text white 14px 500 padding 10px 20px radius 8px, 
              Secondary bg white border 1px #D1D5DB text #374151. No red, no yellow. */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <button
              onClick={onOpenApply}
              className="bg-[#0F2C52] hover:bg-[#0a1e38] text-white text-[14px] font-[500] px-[20px] py-[10px] rounded-[8px] transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Apply for Admission</span>
              <ArrowRight size={14} />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('scholarship-calculator');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white border border-[#D1D5DB] hover:bg-[#F9FAFB] text-[#374151] text-[14px] font-[500] px-[20px] py-[10px] rounded-[8px] transition-colors cursor-pointer flex items-center gap-2"
            >
              <Calculator size={15} className="text-[#4B5563]" />
              <span>Check Your Eligibility</span>
            </button>

            <button
              onClick={onOpenFee}
              className="bg-white border border-[#D1D5DB] hover:bg-[#F9FAFB] text-[#374151] text-[14px] font-[500] px-[20px] py-[10px] rounded-[8px] transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>View Fee Structure</span>
              <ExternalLink size={14} className="text-[#6B7280]" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. ESTIMATOR BAR BELOW — WORDPRESS CLEAN CARD
          bg #F3F4F6 border 1px #E5E7EB radius 12px padding 18px, title 14px bold #111827
          ========================================================================= */}
      <section id="scholarship-calculator" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[12px] shadow-xs overflow-hidden">
          
          {/* Estimator top bar: bg #F3F4F6 border 1px #E5E7EB radius 12px padding 18px, title 14px bold #111827 */}
          <div className="bg-[#F3F4F6] border-b border-[#E5E7EB] p-[18px] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-[14px] font-bold text-[#111827]">
                Interactive Scholarship Eligibility Estimator
              </h3>
              <p className="text-[12px] text-[#6B7280] mt-0.5">
                Preview your applicable concession tier by selecting program level and score.
              </p>
            </div>

            <div className="inline-flex rounded-[8px] bg-white p-1 border border-[#D1D5DB]">
              <button
                onClick={() => setCalcSemesterType('admission')}
                className={`px-3 py-1.5 rounded-[6px] text-xs font-[500] transition-colors cursor-pointer ${
                  calcSemesterType === 'admission' ? 'bg-[#0F2C52] text-white' : 'text-[#4B5563] hover:text-[#111827]'
                }`}
              >
                At Admission (Intermediate Marks)
              </button>
              <button
                onClick={() => setCalcSemesterType('subsequent')}
                className={`px-3 py-1.5 rounded-[6px] text-xs font-[500] transition-colors cursor-pointer ${
                  calcSemesterType === 'subsequent' ? 'bg-[#0F2C52] text-white' : 'text-[#4B5563] hover:text-[#111827]'
                }`}
              >
                Subsequent Semester (CGPA)
              </button>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Program Selector */}
              <div>
                <label className="text-[11px] font-[600] text-[#374151] uppercase tracking-[0.5px] block mb-2">
                  1. Degree Program Level
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setCalcDegreeType('bs')}
                    className={`p-3 rounded-[8px] border text-left flex items-center gap-3 transition-colors cursor-pointer ${
                      calcDegreeType === 'bs' 
                        ? 'border-[#0F2C52] bg-[#0F2C52]/5 text-[#0F2C52] font-semibold' 
                        : 'border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#4B5563]'
                    }`}
                  >
                    <GraduationCap className={calcDegreeType === 'bs' ? 'text-[#0F2C52]' : 'text-[#9CA3AF]'} size={18} />
                    <div>
                      <span className="text-sm block">BS Programs (4 Years)</span>
                      <span className="text-[11px] text-[#6B7280] font-normal">CS, BBA, Sciences, Arts</span>
                    </div>
                  </button>

                  <button
                    onClick={() => setCalcDegreeType('adp')}
                    className={`p-3 rounded-[8px] border text-left flex items-center gap-3 transition-colors cursor-pointer ${
                      calcDegreeType === 'adp' 
                        ? 'border-[#0F2C52] bg-[#0F2C52]/5 text-[#0F2C52] font-semibold' 
                        : 'border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#4B5563]'
                    }`}
                  >
                    <BookOpen className={calcDegreeType === 'adp' ? 'text-[#0F2C52]' : 'text-[#9CA3AF]'} size={18} />
                    <div>
                      <span className="text-sm block">ADP Programs (2 Years)</span>
                      <span className="text-[11px] text-[#6B7280] font-normal">Associate Degrees</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Sub-discipline group for BS */}
              {calcDegreeType === 'bs' && calcSemesterType === 'admission' && (
                <div>
                  <label className="text-[11px] font-[600] text-[#374151] uppercase tracking-[0.5px] block mb-2">
                    2. Academic Discipline Group
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <button
                      onClick={() => setCalcGroup('groupA')}
                      className={`p-2.5 rounded-[8px] border text-left transition-colors cursor-pointer ${
                        calcGroup === 'groupA'
                          ? 'border-[#0F2C52] bg-[#0F2C52]/5 text-[#0F2C52] font-semibold'
                          : 'border-[#E5E7EB] text-[#4B5563] hover:bg-[#F9FAFB]'
                      }`}
                    >
                      <span className="block font-medium">Group A: BSCS, BBA, Natural Sciences</span>
                      <span className="text-[11px] text-[#6B7280]">Phy, Chem, Math, Zoology (≥80% for 50%)</span>
                    </button>

                    <button
                      onClick={() => setCalcGroup('groupB')}
                      className={`p-2.5 rounded-[8px] border text-left transition-colors cursor-pointer ${
                        calcGroup === 'groupB'
                          ? 'border-[#0F2C52] bg-[#0F2C52]/5 text-[#0F2C52] font-semibold'
                          : 'border-[#E5E7EB] text-[#4B5563] hover:bg-[#F9FAFB]'
                      }`}
                    >
                      <span className="block font-medium">Group B: BS Accounting, PSY, ENG, ECO</span>
                      <span className="text-[11px] text-[#6B7280]">Psychology, English, Econ (≥75% for 50%)</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Score Slider */}
              {calcSemesterType === 'admission' ? (
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[11px] font-[600] text-[#374151] uppercase tracking-[0.5px]">
                      Intermediate / HSSC Marks Percentage:
                    </label>
                    <span className="text-base font-bold text-[#0F2C52]">{calcMarks}%</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={100}
                    step={1}
                    value={calcMarks}
                    onChange={(e) => setCalcMarks(Number(e.target.value))}
                    className="w-full h-2 bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer accent-[#0F2C52]"
                  />
                  <div className="flex justify-between text-[11px] text-[#9CA3AF] mt-1 font-mono">
                    <span>50%</span>
                    <span>60% (ADP Old Student)</span>
                    <span>75% (Group B / ADP)</span>
                    <span>80% (Group A)</span>
                    <span>100%</span>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[11px] font-[600] text-[#374151] uppercase tracking-[0.5px]">
                      University CGPA in Semester:
                    </label>
                    <span className="text-base font-bold text-[#0F2C52]">{calcCgpa.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min={2.0}
                    max={4.0}
                    step={0.05}
                    value={calcCgpa}
                    onChange={(e) => setCalcCgpa(Number(e.target.value))}
                    className="w-full h-2 bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer accent-[#0F2C52]"
                  />
                  <div className="flex justify-between text-[11px] text-[#9CA3AF] mt-1 font-mono">
                    <span>2.00</span>
                    <span>2.50 (Concession)</span>
                    <span>2.75 (Concession)</span>
                    <span>3.25 (25% Merit)</span>
                    <span>3.50 (50% Merit)</span>
                    <span>4.00</span>
                  </div>
                </div>
              )}

              {/* Special Privilege Checkboxes */}
              <div className="pt-2 border-t border-[#F3F4F6] flex flex-wrap gap-4 text-xs">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isOldStudent}
                    onChange={(e) => setIsOldStudent(e.target.checked)}
                    className="w-4 h-4 rounded text-[#0F2C52] focus:ring-[#0F2C52]"
                  />
                  <span className="font-medium text-[#374151]">Punjab Group of Colleges / UCP Old Student</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isKinshipOrArmed}
                    onChange={(e) => setIsKinshipOrArmed(e.target.checked)}
                    className="w-4 h-4 rounded text-[#0F2C52] focus:ring-[#0F2C52]"
                  />
                  <span className="font-medium text-[#374151]">Kinship / Armed Forces / Govt Employee / Teacher Child</span>
                </label>
              </div>

            </div>

            {/* Calculated Result Card */}
            <div className="lg:col-span-5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[12px] p-6 flex flex-col justify-between h-full min-h-[280px]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-[600] uppercase tracking-[0.5px] text-[#6B7280]">
                    Estimated Scholarship
                  </span>
                  <span className="text-[11px] bg-[#E5E7EB] px-2.5 py-0.5 rounded-[4px] text-[#374151] font-medium">
                    {calcSemesterType === 'admission' ? 'Admission Tier' : 'Subsequent Semester'}
                  </span>
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-[#0F2C52] tracking-tight">
                    {calculatedResult.percent}%
                  </span>
                  <span className="text-sm text-[#4B5563] font-semibold">Tuition Fee Off</span>
                </div>

                <div className="mt-3 py-2 px-3 rounded-[8px] bg-white border border-[#E5E7EB]">
                  <h4 className="text-xs font-bold text-[#111827] flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#0F2C52] shrink-0" />
                    <span>{calculatedResult.tierTitle}</span>
                  </h4>
                  <p className="text-[11px] text-[#4B5563] mt-0.5 leading-snug font-normal">
                    {calculatedResult.rationale}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E5E7EB] space-y-2">
                <button
                  onClick={onOpenApply}
                  className="w-full py-[10px] px-[20px] bg-[#0F2C52] hover:bg-[#0a1e38] text-white text-[14px] font-[500] rounded-[8px] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply Now & Claim Scholarship</span>
                  <ArrowRight size={14} />
                </button>
                <p className="text-[10px] text-center text-[#9CA3AF]">
                  * Subject to official verification by UCP Admissions Office. Single concession policy applies.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CATEGORY FILTER TABS
          ========================================================================= */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E5E7EB]">
          <div>
            <h2 className="text-[20px] font-bold text-[#111827]">
              Official Concession Schedules & Policies
            </h2>
            <p className="text-xs text-[#6B7280] mt-0.5">
              Verified criteria for Undergraduate BS Degrees, Associate Degrees, Kinship, and Alumni.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Schemes' },
              { id: 'bs', label: 'BS Merit' },
              { id: 'kinship', label: 'Old Student & Kinship' },
              { id: 'adp', label: 'ADP Programs' },
              { id: 'cgpa', label: 'CGPA Performance' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-1.5 rounded-[8px] text-xs font-[500] transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0F2C52] text-white'
                    : 'bg-white text-[#4B5563] hover:bg-[#F9FAFB] border border-[#E5E7EB]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. DETAILED TABLES — WORDPRESS ELEMENTOR CLEAN STYLE
          ========================================================================= */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">

        {/* -----------------------------------------------------------------------
            SECTION 1: MERIT SCHOLARSHIPS — BS PROGRAMS
            ----------------------------------------------------------------------- */}
        {(activeTab === 'all' || activeTab === 'bs') && (
          <div className="bg-[#FFFFFF] rounded-[12px] border border-[#E5E7EB] shadow-xs overflow-hidden">
            
            {/* Header: Clean UCP Navy */}
            <div className="bg-[#0F2C52] text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-[600] uppercase tracking-[0.5px] text-slate-300 block">
                  Category 01 • Undergraduate Degrees
                </span>
                <h3 className="text-[18px] font-bold text-white">
                  Merit Scholarships for BS Programs
                </h3>
              </div>
              <span className="text-[11px] bg-white/10 text-slate-200 px-3 py-1 rounded-[4px] self-start sm:self-auto font-medium">
                4-Year Degree Programs
              </span>
            </div>

            <div className="p-6 space-y-6">
              
              {/* Group 1: BS(Phy/Chem/Math/Zoology), BSCS & BBA */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0F2C52]" />
                  <h4 className="text-[14px] font-bold text-[#111827]">
                    BS(Phy/Chem/Math/Zoology), BSCS & BBA
                  </h4>
                </div>

                {/* At Admission Table */}
                <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden">
                  <div className="bg-[#F9FAFB] px-4 py-2 border-b border-[#E5E7EB] flex items-center justify-between">
                    <span className="text-xs font-[600] text-[#374151]">
                      • Merit Based Scholarship at the time of admission
                    </span>
                    <span className="text-[11px] text-[#6B7280]">First Semester</span>
                  </div>
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#F3F4F6] text-[#374151] text-xs font-semibold uppercase border-b border-[#E5E7EB]">
                        <th className="py-2.5 px-4">Students having CGPA / Percentage</th>
                        <th className="py-2.5 px-4 text-center">Scholarship Percentage Offered</th>
                        <th className="py-2.5 px-4 text-right">Applicability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB]">
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">80% and above</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#EFF6FF] text-[#0F2C52] font-bold border border-[#BFDBFE]">
                            50%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">At Admission</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Subsequent Semester Table */}
                <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden">
                  <div className="bg-[#F9FAFB] px-4 py-2 border-b border-[#E5E7EB] flex items-center justify-between">
                    <span className="text-xs font-[600] text-[#374151]">
                      • Merit Based Scholarship for Subsequent Semester(s)
                    </span>
                    <span className="text-[11px] text-[#6B7280]">Semester 2 Onwards</span>
                  </div>
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#F3F4F6] text-[#374151] text-xs font-semibold uppercase border-b border-[#E5E7EB]">
                        <th className="py-2.5 px-4">Students having CGPA</th>
                        <th className="py-2.5 px-4 text-center">Scholarship Percentage Offered</th>
                        <th className="py-2.5 px-4 text-right">Requirement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB]">
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">Greater than or equal to 3.5</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#EFF6FF] text-[#0F2C52] font-bold border border-[#BFDBFE]">
                            50%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">CGPA ≥ 3.50</td>
                      </tr>
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">3.25 to less than 3.5</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#F3F4F6] text-[#374151] font-bold border border-[#D1D5DB]">
                            25%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">CGPA 3.25 - 3.49</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>

              {/* Group 2: BS-ACC & Fin, BS PSY, BS ENG, BS ECO */}
              <div className="space-y-4 pt-5 border-t border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0F2C52]" />
                  <h4 className="text-[14px] font-bold text-[#111827]">
                    BS-ACC & Fin, BS PSY, BS ENG, BS ECO
                  </h4>
                  <span className="text-xs text-[#6B7280]">
                    (Accounting & Finance, Psychology, English, Economics)
                  </span>
                </div>

                {/* At Admission Table */}
                <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden">
                  <div className="bg-[#F9FAFB] px-4 py-2 border-b border-[#E5E7EB] flex items-center justify-between">
                    <span className="text-xs font-[600] text-[#374151]">
                      • Merit Based Scholarship at the time of admission
                    </span>
                    <span className="text-[11px] text-[#6B7280]">First Semester</span>
                  </div>
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#F3F4F6] text-[#374151] text-xs font-semibold uppercase border-b border-[#E5E7EB]">
                        <th className="py-2.5 px-4">Students having Percentage Score</th>
                        <th className="py-2.5 px-4 text-center">Scholarship Percentage Offered</th>
                        <th className="py-2.5 px-4 text-right">Applicability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB]">
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">75% and above</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#EFF6FF] text-[#0F2C52] font-bold border border-[#BFDBFE]">
                            50%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">At Admission</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Subsequent Semester Table */}
                <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden">
                  <div className="bg-[#F9FAFB] px-4 py-2 border-b border-[#E5E7EB] flex items-center justify-between">
                    <span className="text-xs font-[600] text-[#374151]">
                      • Merit Based Scholarship for Subsequent Semester(s)
                    </span>
                    <span className="text-[11px] text-[#6B7280]">Semester 2 Onwards</span>
                  </div>
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#F3F4F6] text-[#374151] text-xs font-semibold uppercase border-b border-[#E5E7EB]">
                        <th className="py-2.5 px-4">Students having CGPA</th>
                        <th className="py-2.5 px-4 text-center">Scholarship Percentage Offered</th>
                        <th className="py-2.5 px-4 text-right">Requirement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB]">
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">Greater than or equal to 3.5</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#EFF6FF] text-[#0F2C52] font-bold border border-[#BFDBFE]">
                            50%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">CGPA ≥ 3.50</td>
                      </tr>
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">3.25 to less than 3.5</td>
                        <td className="py-3.5 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#F3F4F6] text-[#374151] font-bold border border-[#D1D5DB]">
                            25%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">CGPA 3.25 - 3.49</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------------
            SECTION 2: OLD STUDENT & KINSHIP CONCESSIONS — ALL BS PROGRAMS
            ----------------------------------------------------------------------- */}
        {(activeTab === 'all' || activeTab === 'kinship') && (
          <div className="bg-[#FFFFFF] rounded-[12px] border border-[#E5E7EB] shadow-xs overflow-hidden">
            
            {/* Header */}
            <div className="bg-[#0F2C52] text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-[600] uppercase tracking-[0.5px] text-slate-300 block">
                  Category 02 • Institutional Affiliation & Kinship
                </span>
                <h3 className="text-[18px] font-bold text-white">
                  Scholarship & Concession Detail for all BS Programs
                </h3>
              </div>
              <span className="text-[11px] bg-white/10 text-slate-200 px-3 py-1 rounded-[4px] self-start sm:self-auto font-medium">
                Alumni & Family Concessions
              </span>
            </div>

            <div className="p-6 space-y-6">

              {/* At Admission */}
              <div className="space-y-3">
                <h4 className="text-[14px] font-bold text-[#111827] flex items-center gap-2">
                  <Users size={16} className="text-[#0F2C52]" />
                  <span>At the time of admissions</span>
                </h4>

                <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#F3F4F6] text-[#374151] text-xs font-semibold uppercase border-b border-[#E5E7EB]">
                        <th className="py-2.5 px-4">Old Student (PGC / UCP Alumni)</th>
                        <th className="py-2.5 px-4 text-center">Kinship (Sibling / Family)</th>
                        <th className="py-2.5 px-4 text-right">Applicability</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-bold text-[#0F2C52] text-base">25%</td>
                        <td className="py-3 px-4 text-center font-bold text-[#0F2C52] text-base">25%</td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">First Semester</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Subsequent Semesters */}
              <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
                <h4 className="text-[14px] font-bold text-[#111827] flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#0F2C52]" />
                  <span>Discount for subsequent semester(s)</span>
                </h4>

                <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#F3F4F6] text-[#374151] text-xs font-semibold uppercase border-b border-[#E5E7EB]">
                        <th className="py-2.5 px-4">Old Students & Kinship (CGPA Criteria)</th>
                        <th className="py-2.5 px-4 text-center">Discount Percentage Offered</th>
                        <th className="py-2.5 px-4 text-right">Retention Rule</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB]">
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">CGPA greater than or equal to 2.75</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#EFF6FF] text-[#0F2C52] font-bold border border-[#BFDBFE]">
                            25%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">CGPA ≥ 2.75</td>
                      </tr>
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">CGPA 2.5 to less than 2.75</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#F3F4F6] text-[#374151] font-bold border border-[#D1D5DB]">
                            12.5%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">CGPA 2.50 - 2.74</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------------
            SECTION 3: CGPA BASED PERFORMANCE SCHOLARSHIP (ALL PROGRAMS)
            ----------------------------------------------------------------------- */}
        {(activeTab === 'all' || activeTab === 'cgpa') && (
          <div className="bg-[#FFFFFF] rounded-[12px] border border-[#E5E7EB] shadow-xs overflow-hidden">
            
            {/* Header */}
            <div className="bg-[#0F2C52] text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-[600] uppercase tracking-[0.5px] text-slate-300 block">
                  Category 03 • University Academic Honors
                </span>
                <h3 className="text-[18px] font-bold text-white">
                  CGPA Based Performance Scholarship
                </h3>
              </div>
              <span className="text-[11px] bg-white/10 text-slate-200 px-3 py-1 rounded-[4px] self-start sm:self-auto font-medium">
                Available to All Programs
              </span>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-[14px] text-[#4B5563]">
                Students of <strong>all programs</strong> can avail the following CGPA based Performance Scholarship after completing their <strong>1<sup>st</sup> semester</strong>:
              </p>

              <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#F3F4F6] text-[#374151] text-xs font-semibold uppercase border-b border-[#E5E7EB]">
                      <th className="py-2.5 px-4">Students having CGPA</th>
                      <th className="py-2.5 px-4 text-center">Discount Percentage Offered</th>
                      <th className="py-2.5 px-4 text-right">Academic Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E7EB]">
                    <tr className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="py-3 px-4 font-medium text-[#111827]">Greater than or equal to 3.5</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-block px-3 py-1 rounded-[6px] bg-[#EFF6FF] text-[#0F2C52] font-bold border border-[#BFDBFE]">
                          50%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right text-xs text-[#6B7280]">Deans Honor List</td>
                    </tr>
                    <tr className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="py-3 px-4 font-medium text-[#111827]">3.25 to less than 3.5</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-block px-3 py-1 rounded-[6px] bg-[#F3F4F6] text-[#374151] font-bold border border-[#D1D5DB]">
                          25%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right text-xs text-[#6B7280]">Merit Honor List</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------------
            SECTION 4: ASSOCIATE DEGREE PROGRAMS (ADP)
            ----------------------------------------------------------------------- */}
        {(activeTab === 'all' || activeTab === 'adp') && (
          <div className="bg-[#FFFFFF] rounded-[12px] border border-[#E5E7EB] shadow-xs overflow-hidden">
            
            {/* Header */}
            <div className="bg-[#0F2C52] text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-[600] uppercase tracking-[0.5px] text-slate-300 block">
                  Category 04 • 2-Year Associate Degree Programs
                </span>
                <h3 className="text-[18px] font-bold text-white">
                  Associate Degree Program (ADP-BA, ADP-AF, ADP-CS, ADP-BZC & ADP-MP)
                </h3>
              </div>
              <span className="text-[11px] bg-white/10 text-slate-200 px-3 py-1 rounded-[4px] self-start sm:self-auto font-medium">
                13 Accredited ADP Degrees
              </span>
            </div>

            <div className="p-6 space-y-6">
              
              {/* ADP Merit Section */}
              <div className="space-y-4">
                <h4 className="text-[14px] font-bold text-[#111827]">
                  1. Merit Based Scholarship for ADP
                </h4>

                {/* At Admission */}
                <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden">
                  <div className="bg-[#F9FAFB] px-4 py-2 border-b border-[#E5E7EB]">
                    <span className="text-xs font-[600] text-[#374151]">At the time of admissions</span>
                  </div>
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#F3F4F6] text-[#374151] text-xs font-semibold uppercase border-b border-[#E5E7EB]">
                        <th className="py-2.5 px-4">Students having Percentage score</th>
                        <th className="py-2.5 px-4 text-center">Scholarship Percentage Offered</th>
                        <th className="py-2.5 px-4 text-right">Applicability</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">75% and above</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#EFF6FF] text-[#0F2C52] font-bold border border-[#BFDBFE]">
                            50%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">1st Semester</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Subsequent Semester */}
                <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden">
                  <div className="bg-[#F9FAFB] px-4 py-2 border-b border-[#E5E7EB]">
                    <span className="text-xs font-[600] text-[#374151]">Merit Based Scholarship for Subsequent Semester(s)</span>
                  </div>
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#F3F4F6] text-[#374151] text-xs font-semibold uppercase border-b border-[#E5E7EB]">
                        <th className="py-2.5 px-4">Students having CGPA</th>
                        <th className="py-2.5 px-4 text-center">Scholarship Percentage Offered</th>
                        <th className="py-2.5 px-4 text-right">Criteria</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB]">
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">Greater than or equal to 3.5</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#EFF6FF] text-[#0F2C52] font-bold border border-[#BFDBFE]">
                            50%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">CGPA ≥ 3.50</td>
                      </tr>
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">3.25 to less than 3.5</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#F3F4F6] text-[#374151] font-bold border border-[#D1D5DB]">
                            25%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">CGPA 3.25 - 3.49</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ADP Old Student Discounts */}
              <div className="space-y-4 pt-5 border-t border-[#E5E7EB]">
                <h4 className="text-[14px] font-bold text-[#111827]">
                  2. Old Student Discounts for All ADP Programs
                </h4>

                {/* At Admission */}
                <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden">
                  <div className="bg-[#F9FAFB] px-4 py-2 border-b border-[#E5E7EB]">
                    <span className="text-xs font-[600] text-[#374151]">Old Student — At the time of admissions</span>
                  </div>
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#F3F4F6] text-[#374151] text-xs font-semibold uppercase border-b border-[#E5E7EB]">
                        <th className="py-2.5 px-4">Old Student Marks Tier</th>
                        <th className="py-2.5 px-4 text-center">Scholarship Percentage Offered</th>
                        <th className="py-2.5 px-4 text-right">Applicability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB]">
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">60% and above marks</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#EFF6FF] text-[#0F2C52] font-bold border border-[#BFDBFE]">
                            50%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">1st Semester</td>
                      </tr>
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">Less than 60% marks</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#F3F4F6] text-[#374151] font-bold border border-[#D1D5DB]">
                            25%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">1st Semester</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Subsequent Semester */}
                <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden">
                  <div className="bg-[#F9FAFB] px-4 py-2 border-b border-[#E5E7EB]">
                    <span className="text-xs font-[600] text-[#374151]">Old Student — Discount for subsequent semester(s)</span>
                  </div>
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#F3F4F6] text-[#374151] text-xs font-semibold uppercase border-b border-[#E5E7EB]">
                        <th className="py-2.5 px-4">Old Student Performance (CGPA)</th>
                        <th className="py-2.5 px-4 text-center">Discount Percentage Offered</th>
                        <th className="py-2.5 px-4 text-right">Criteria</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB]">
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">CGPA greater than or equal to 2.75</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#EFF6FF] text-[#0F2C52] font-bold border border-[#BFDBFE]">
                            50%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">CGPA ≥ 2.75</td>
                      </tr>
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">CGPA 2.5 to less than 2.75</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#F3F4F6] text-[#374151] font-bold border border-[#D1D5DB]">
                            25%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">CGPA 2.50 - 2.74</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ADP Kinship, Govt, Armed Forces & Teachers Child */}
              <div className="space-y-4 pt-5 border-t border-[#E5E7EB]">
                <h4 className="text-[14px] font-bold text-[#111827]">
                  3. Kinship / Government / Civil / Armed Forces Employees / Teachers Child (ADP)
                </h4>

                {/* At Admission */}
                <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden">
                  <div className="bg-[#F9FAFB] px-4 py-2 border-b border-[#E5E7EB]">
                    <span className="text-xs font-[600] text-[#374151]">At the time of admissions</span>
                  </div>
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#F3F4F6] text-[#374151] text-xs font-semibold uppercase border-b border-[#E5E7EB]">
                        <th className="py-2.5 px-4">Beneficiary Category</th>
                        <th className="py-2.5 px-4 text-center">Discount Percentage Offered</th>
                        <th className="py-2.5 px-4 text-right">Applicability</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">
                          Kinship / Government / Civil / Armed Forces Employees / Teachers Child
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#F3F4F6] text-[#374151] font-bold border border-[#D1D5DB]">
                            25%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">1st Semester</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Subsequent Semester */}
                <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden">
                  <div className="bg-[#F9FAFB] px-4 py-2 border-b border-[#E5E7EB]">
                    <span className="text-xs font-[600] text-[#374151]">Discount for Subsequent Semester(s)</span>
                  </div>
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#F3F4F6] text-[#374151] text-xs font-semibold uppercase border-b border-[#E5E7EB]">
                        <th className="py-2.5 px-4">Kinship / Govt / Civil / Armed Forces / Teachers Child (CGPA)</th>
                        <th className="py-2.5 px-4 text-center">Discount Percentage Offered</th>
                        <th className="py-2.5 px-4 text-right">Requirement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB]">
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">CGPA greater than or equal to 2.75</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#EFF6FF] text-[#0F2C52] font-bold border border-[#BFDBFE]">
                            25%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">CGPA ≥ 2.75</td>
                      </tr>
                      <tr className="hover:bg-[#F9FAFB] transition-colors">
                        <td className="py-3 px-4 font-medium text-[#111827]">CGPA 2.5 to less than 2.75</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#F3F4F6] text-[#374151] font-bold border border-[#D1D5DB]">
                            12.5%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-[#6B7280]">CGPA 2.50 - 2.74</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------------
            5. IMPORTANT OFFICIAL POLICY GUIDELINE BANNER
            ----------------------------------------------------------------------- */}
        <div className="bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E] rounded-[12px] p-5 flex items-start gap-3">
          <AlertCircle size={20} className="text-[#B45309] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-[14px] font-bold text-[#92400E]">
              Official University Concession Clause:
            </h4>
            <p className="text-[13px] text-[#92400E] leading-relaxed">
              <strong>NOTE:</strong> Multiple concessions <strong>cannot</strong> be availed simultaneously. 
              If a candidate qualifies for more than one concession category (such as Merit alongside Kinship or PGC Alumni), 
              the candidate will be awarded the highest single applicable percentage concession.
            </p>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            6. ADMISSIONS & FINANCIAL AID CONTACT OFFICE
            ----------------------------------------------------------------------- */}
        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[12px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] uppercase font-[600] tracking-[0.5px] text-[#6B7280] block">
              Financial Aid & Concessions Helpdesk
            </span>
            <h3 className="text-[20px] font-bold text-[#0F2C52]">
              Connect with UCP Bahawalpur Financial Aid Cell
            </h3>
            <p className="text-[13px] text-[#4B5563] leading-relaxed">
              Visit our Admissions Office at {UCP_CONTACT.address}. 
              Our counselors will review your academic transcripts and guide you through fee voucher adjustments.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#6B7280]">
              <span className="flex items-center gap-1.5">
                <PhoneCall size={14} className="text-[#0F2C52]" />
                Helpline: <strong className="text-[#111827]">(+92) 800-00827</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 size={14} className="text-[#0F2C52]" />
                Office Hours: <strong className="text-[#111827]">9:00 AM – 5:00 PM (Mon–Sat)</strong>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenApply}
              className="py-[10px] px-[20px] rounded-[8px] bg-[#0F2C52] hover:bg-[#0a1e38] text-white text-[14px] font-[500] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Apply for Fall 2026</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => onOpenProgrammesPage()}
              className="py-[10px] px-[20px] rounded-[8px] bg-white border border-[#D1D5DB] hover:bg-[#F9FAFB] text-[#374151] text-[14px] font-[500] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Explore All 25 Programs</span>
            </button>
          </div>
        </div>

      </main>

    </div>
  );
};
