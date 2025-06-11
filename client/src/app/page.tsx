import type React from "react"
import Link from "next/link"
import {
  AlertCircle,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Trophy,
  FileText,
  CreditCard,
  BookOpen,
  Shield,
  ExternalLink,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
        {/* Top Alert */}
        <Alert variant="destructive" className="mb-4 sm:mb-6 shadow-lg border-l-4 border-l-red-500">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle className="text-sm sm:text-base font-semibold">Important Notice!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm mt-1">
            UPSC Civil Services 2024 Application deadline extended to June 15th. Apply now!
          </AlertDescription>
        </Alert>

        {/* Main Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
            Sarkari Naukri
          </h1>
          <p className="text-sm sm:text-base text-gray-600">Government Job Alerts & Updates</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {/* Latest Jobs */}
          <CategoryCard
            title="Latest Jobs"
            icon={<Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />}
            gradient="from-blue-500 to-blue-600"
            items={[
              { title: "UPSC Civil Services 2024", date: "10 Jun 2024" },
              { title: "SSC CGL 2024", date: "08 Jun 2024" },
              { title: "IBPS PO Recruitment 2024", date: "05 Jun 2024" },
              { title: "Railway NTPC 2024", date: "02 Jun 2024" },
              { title: "SBI Clerk Recruitment", date: "01 Jun 2024" },
              { title: "DRDO Scientist Recruitment", date: "29 May 2024" },
              { title: "Indian Army Technical Entry", date: "28 May 2024" },
              { title: "ISRO Scientist Recruitment", date: "25 May 2024" },
              { title: "Delhi Police Constable", date: "22 May 2024" },
              { title: "NEET UG Counselling 2024", date: "20 May 2024" },
            ]}
            viewMoreLink="/jobs"
          />

          {/* Admissions */}
          <CategoryCard
            title="Admissions"
            icon={<GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />}
            gradient="from-green-500 to-green-600"
            items={[
              { title: "IIT JEE Advanced Counselling", date: "09 Jun 2024" },
              { title: "NEET PG Admission 2024", date: "07 Jun 2024" },
              { title: "Delhi University Admission", date: "05 Jun 2024" },
              { title: "AIIMS MBBS Admission", date: "03 Jun 2024" },
              { title: "IIM CAT Admission Process", date: "01 Jun 2024" },
              { title: "NLU Admission through CLAT", date: "30 May 2024" },
              { title: "Kendriya Vidyalaya Admission", date: "28 May 2024" },
              { title: "Navodaya Vidyalaya Admission", date: "26 May 2024" },
              { title: "IGNOU July Session", date: "24 May 2024" },
              { title: "Sainik School Admission", date: "22 May 2024" },
            ]}
            viewMoreLink="/admissions"
          />

          {/* Results */}
          <CategoryCard
            title="Results"
            icon={<Trophy className="h-5 w-5 sm:h-6 sm:w-6" />}
            gradient="from-purple-500 to-purple-600"
            items={[
              { title: "UPSC Prelims Result 2024", date: "08 Jun 2024" },
              { title: "SSC CHSL Tier 1 Result", date: "06 Jun 2024" },
              { title: "IBPS Clerk Final Result", date: "04 Jun 2024" },
              { title: "NEET UG Result 2024", date: "02 Jun 2024" },
              { title: "JEE Main April Session Result", date: "31 May 2024" },
              { title: "CTET Result June 2024", date: "29 May 2024" },
              { title: "RRB NTPC Final Result", date: "27 May 2024" },
              { title: "GATE 2024 Final Result", date: "25 May 2024" },
              { title: "UP Board 10th, 12th Result", date: "23 May 2024" },
              { title: "Bihar Board Matric Result", date: "21 May 2024" },
            ]}
            viewMoreLink="/results"
          />

          {/* Answer Keys */}
          <CategoryCard
            title="Answer Keys"
            icon={<FileText className="h-5 w-5 sm:h-6 sm:w-6" />}
            gradient="from-orange-500 to-orange-600"
            items={[
              { title: "UPSC CSE Prelims Answer Key", date: "09 Jun 2024" },
              { title: "SSC GD Constable Answer Key", date: "07 Jun 2024" },
              { title: "IBPS RRB Answer Key", date: "05 Jun 2024" },
              { title: "CTET June Exam Answer Key", date: "03 Jun 2024" },
              { title: "NEET UG Answer Key 2024", date: "01 Jun 2024" },
              { title: "JEE Advanced Answer Key", date: "30 May 2024" },
              { title: "GATE 2024 Answer Key", date: "28 May 2024" },
              { title: "UGC NET Answer Key", date: "26 May 2024" },
              { title: "RRB Group D Answer Key", date: "24 May 2024" },
              { title: "CSIR NET Answer Key", date: "22 May 2024" },
            ]}
            viewMoreLink="/answer-keys"
          />

          {/* Admit Cards */}
          <CategoryCard
            title="Admit Cards"
            icon={<CreditCard className="h-5 w-5 sm:h-6 sm:w-6" />}
            gradient="from-red-500 to-red-600"
            items={[
              { title: "SSC CGL Tier 2 Admit Card", date: "10 Jun 2024" },
              { title: "IBPS PO Prelims Admit Card", date: "08 Jun 2024" },
              { title: "RRB NTPC CBT 2 Admit Card", date: "06 Jun 2024" },
              { title: "UPSC CAPF Admit Card", date: "04 Jun 2024" },
              { title: "CTET December Admit Card", date: "02 Jun 2024" },
              { title: "JEE Advanced Admit Card", date: "31 May 2024" },
              { title: "NEET PG Admit Card", date: "29 May 2024" },
              { title: "UGC NET June Admit Card", date: "27 May 2024" },
              { title: "SSC CHSL Tier 2 Admit Card", date: "25 May 2024" },
              { title: "IBPS Clerk Prelims Admit Card", date: "23 May 2024" },
            ]}
            viewMoreLink="/admit-cards"
          />

          {/* Syllabus */}
          <CategoryCard
            title="Syllabus"
            icon={<BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />}
            gradient="from-indigo-500 to-indigo-600"
            items={[
              { title: "UPSC CSE 2025 Syllabus", date: "09 Jun 2024" },
              { title: "SSC CGL 2024-25 Syllabus", date: "07 Jun 2024" },
              { title: "IBPS PO 2024 Syllabus", date: "05 Jun 2024" },
              { title: "RRB NTPC Detailed Syllabus", date: "03 Jun 2024" },
              { title: "NEET UG 2025 Syllabus", date: "01 Jun 2024" },
              { title: "JEE Main & Advanced Syllabus", date: "30 May 2024" },
              { title: "GATE 2025 Syllabus", date: "28 May 2024" },
              { title: "UGC NET Syllabus", date: "26 May 2024" },
              { title: "CTET Paper 1 & 2 Syllabus", date: "24 May 2024" },
              { title: "SSC CHSL Syllabus", date: "22 May 2024" },
            ]}
            viewMoreLink="/syllabus"
          />

          {/* Certificate Verification */}
          <CategoryCard
            title="Certificate Verification"
            icon={<Shield className="h-5 w-5 sm:h-6 sm:w-6" />}
            gradient="from-teal-500 to-teal-600"
            items={[
              { title: "UPSC DV Schedule 2024", date: "10 Jun 2024" },
              { title: "SSC CGL Document Verification", date: "08 Jun 2024" },
              { title: "IBPS PO Certificate Verification", date: "06 Jun 2024" },
              { title: "RRB NTPC DV Process", date: "04 Jun 2024" },
              { title: "SBI PO Document Verification", date: "02 Jun 2024" },
              { title: "UPSC Civil Services DV", date: "31 May 2024" },
              { title: "SSC CHSL Document Verification", date: "29 May 2024" },
              { title: "IBPS Clerk Certificate Verification", date: "27 May 2024" },
              { title: "RRB Group D DV Schedule", date: "25 May 2024" },
              { title: "SBI Clerk Document Verification", date: "23 May 2024" },
            ]}
            viewMoreLink="/certificate-verification"
          />

          {/* Other Links */}
          <CategoryCard
            title="Other Links"
            icon={<ExternalLink className="h-5 w-5 sm:h-6 sm:w-6" />}
            gradient="from-pink-500 to-pink-600"
            items={[
              { title: "How to Prepare for UPSC", date: "09 Jun 2024" },
              { title: "SSC Exam Calendar 2024-25", date: "07 Jun 2024" },
              { title: "Banking Exam Tips & Tricks", date: "05 Jun 2024" },
              { title: "Government Job Interview Tips", date: "03 Jun 2024" },
              { title: "Free Study Materials", date: "01 Jun 2024" },
              { title: "Mock Test Series", date: "30 May 2024" },
              { title: "Previous Year Question Papers", date: "28 May 2024" },
              { title: "Scholarship Opportunities", date: "26 May 2024" },
              { title: "Career Counselling Services", date: "24 May 2024" },
              { title: "Government Job Salary Structure", date: "22 May 2024" },
            ]}
            viewMoreLink="/other-links"
          />
        </div>
      </div>
    </div>
  )
}

interface CategoryCardProps {
  title: string
  icon: React.ReactNode
  gradient: string
  items: { title: string; date: string }[]
  viewMoreLink: string
}

function CategoryCard({ title, icon, gradient, items, viewMoreLink }: CategoryCardProps) {
  return (
    <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden p-0">
      <CardHeader className={`bg-gradient-to-r ${gradient} text-white p-3 sm:p-4`}>
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg font-bold">
          {icon}
          <span className="truncate">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-4">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="border-b border-gray-100 pb-2 last:border-0">
              <Link href={"/jobs/" + item.title} className="hover:text-primary block group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <span className="text-xs sm:text-sm font-medium group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </span>
                  <span className="text-xs text-muted-foreground flex-shrink-0">{item.date}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-3 sm:p-4 pt-0">
        <Button
          variant="outline"
          className="w-full text-xs sm:text-sm hover:bg-primary hover:text-white transition-colors"
          asChild
        >
          <Link href={viewMoreLink}>
            View More <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
