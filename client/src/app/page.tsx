import { Bell, FileText, Award, BookOpen, ExternalLink, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Sample data
const latestJobs = [
  {
    id: 1,
    title: "SSC CGL 2024",
    department: "Staff Selection Commission",
    posts: "8000+",
    lastDate: "2024-02-15",
    category: "Central Govt",
  },
  {
    id: 2,
    title: "UPSC Civil Services 2024",
    department: "Union Public Service Commission",
    posts: "900+",
    lastDate: "2024-02-20",
    category: "Central Govt",
  },
  {
    id: 3,
    title: "Railway Group D",
    department: "Indian Railways",
    posts: "50000+",
    lastDate: "2024-02-25",
    category: "Railway",
  },
  {
    id: 4,
    title: "Bank PO Recruitment",
    department: "IBPS",
    posts: "5000+",
    lastDate: "2024-02-18",
    category: "Banking",
  },
  {
    id: 5,
    title: "Police Constable",
    department: "State Police",
    posts: "10000+",
    lastDate: "2024-02-22",
    category: "Police",
  },
  {
    id: 6,
    title: "Teacher Recruitment",
    department: "Education Department",
    posts: "15000+",
    lastDate: "2024-02-28",
    category: "Teaching",
  },
  {
    id: 7,
    title: "Forest Guard",
    department: "Forest Department",
    posts: "2000+",
    lastDate: "2024-03-01",
    category: "Forest",
  },
  {
    id: 8,
    title: "Clerk Recruitment",
    department: "High Court",
    posts: "500+",
    lastDate: "2024-02-26",
    category: "Court",
  },
  {
    id: 9,
    title: "Junior Engineer",
    department: "PWD",
    posts: "3000+",
    lastDate: "2024-03-05",
    category: "Engineering",
  },
  {
    id: 10,
    title: "Nursing Officer",
    department: "Health Department",
    posts: "1200+",
    lastDate: "2024-02-24",
    category: "Medical",
  },
]

const admissions = [
  { id: 1, title: "JEE Main 2024", organization: "NTA", examDate: "2024-04-15", category: "Engineering" },
  { id: 2, title: "NEET UG 2024", organization: "NTA", examDate: "2024-05-05", category: "Medical" },
  { id: 3, title: "CAT 2024", organization: "IIM", examDate: "2024-11-24", category: "Management" },
  { id: 4, title: "GATE 2024", organization: "IIT", examDate: "2024-02-03", category: "Engineering" },
  { id: 5, title: "CLAT 2024", organization: "Consortium", examDate: "2024-12-01", category: "Law" },
  { id: 6, title: "AIIMS MBBS", organization: "AIIMS", examDate: "2024-05-20", category: "Medical" },
  { id: 7, title: "UPSC CAPF", organization: "UPSC", examDate: "2024-08-04", category: "Defence" },
  { id: 8, title: "NDA Exam", organization: "UPSC", examDate: "2024-04-21", category: "Defence" },
  { id: 9, title: "CTET 2024", organization: "CBSE", examDate: "2024-07-07", category: "Teaching" },
  { id: 10, title: "UGC NET", organization: "NTA", examDate: "2024-06-18", category: "Research" },
]

const results = [
  { id: 1, title: "SSC CHSL Result 2023", organization: "SSC", publishDate: "2024-01-15", status: "Final Result" },
  { id: 2, title: "IBPS PO Prelims Result", organization: "IBPS", publishDate: "2024-01-20", status: "Prelims" },
  { id: 3, title: "Railway Group D Result", organization: "RRB", publishDate: "2024-01-18", status: "Final Result" },
  { id: 4, title: "UPSC CSE Prelims Result", organization: "UPSC", publishDate: "2024-01-22", status: "Prelims" },
  { id: 5, title: "Bank Clerk Result", organization: "IBPS", publishDate: "2024-01-25", status: "Final Result" },
  {
    id: 6,
    title: "Police Constable Result",
    organization: "State Police",
    publishDate: "2024-01-19",
    status: "Final Result",
  },
  {
    id: 7,
    title: "Teacher Eligibility Result",
    organization: "TET Board",
    publishDate: "2024-01-21",
    status: "Final Result",
  },
  { id: 8, title: "JEE Main Result", organization: "NTA", publishDate: "2024-01-30", status: "Session 1" },
  { id: 9, title: "NEET Result 2023", organization: "NTA", publishDate: "2024-01-17", status: "Final Result" },
  { id: 10, title: "GATE Result", organization: "IIT", publishDate: "2024-01-28", status: "Final Result" },
]
const answerKeys = [
  { id: 1, title: "SSC CHSL Result 2023", organization: "SSC", publishDate: "2024-01-15", status: "Final Result" },
  { id: 2, title: "IBPS PO Prelims Result", organization: "IBPS", publishDate: "2024-01-20", status: "Prelims" },
  { id: 3, title: "Railway Group D Result", organization: "RRB", publishDate: "2024-01-18", status: "Final Result" },
  { id: 4, title: "UPSC CSE Prelims Result", organization: "UPSC", publishDate: "2024-01-22", status: "Prelims" },
  { id: 5, title: "Bank Clerk Result", organization: "IBPS", publishDate: "2024-01-25", status: "Final Result" },
  {
    id: 6,
    title: "Police Constable Result",
    organization: "State Police",
    publishDate: "2024-01-19",
    status: "Final Result",
  },
  {
    id: 7,
    title: "Teacher Eligibility Result",
    organization: "TET Board",
    publishDate: "2024-01-21",
    status: "Final Result",
  },
  { id: 8, title: "JEE Main Result", organization: "NTA", publishDate: "2024-01-30", status: "Session 1" },
  { id: 9, title: "NEET Result 2023", organization: "NTA", publishDate: "2024-01-17", status: "Final Result" },
  { id: 10, title: "GATE Result", organization: "IIT", publishDate: "2024-01-28", status: "Final Result" },
]
const syllabus = [
  { id: 1, title: "SSC CHSL Result 2023", organization: "SSC", publishDate: "2024-01-15", status: "Final Result" },
  { id: 2, title: "IBPS PO Prelims Result", organization: "IBPS", publishDate: "2024-01-20", status: "Prelims" },
  { id: 3, title: "Railway Group D Result", organization: "RRB", publishDate: "2024-01-18", status: "Final Result" },
  { id: 4, title: "UPSC CSE Prelims Result", organization: "UPSC", publishDate: "2024-01-22", status: "Prelims" },
  { id: 5, title: "Bank Clerk Result", organization: "IBPS", publishDate: "2024-01-25", status: "Final Result" },
  {
    id: 6,
    title: "Police Constable Result",
    organization: "State Police",
    publishDate: "2024-01-19",
    status: "Final Result",
  },
  {
    id: 7,
    title: "Teacher Eligibility Result",
    organization: "TET Board",
    publishDate: "2024-01-21",
    status: "Final Result",
  },
  { id: 8, title: "JEE Main Result", organization: "NTA", publishDate: "2024-01-30", status: "Session 1" },
  { id: 9, title: "NEET Result 2023", organization: "NTA", publishDate: "2024-01-17", status: "Final Result" },
  { id: 10, title: "GATE Result", organization: "IIT", publishDate: "2024-01-28", status: "Final Result" },
]
const admitCards = [
  { id: 1, title: "SSC CHSL Result 2023", organization: "SSC", publishDate: "2024-01-15", status: "Final Result" },
  { id: 2, title: "IBPS PO Prelims Result", organization: "IBPS", publishDate: "2024-01-20", status: "Prelims" },
  { id: 3, title: "Railway Group D Result", organization: "RRB", publishDate: "2024-01-18", status: "Final Result" },
  { id: 4, title: "UPSC CSE Prelims Result", organization: "UPSC", publishDate: "2024-01-22", status: "Prelims" },
  { id: 5, title: "Bank Clerk Result", organization: "IBPS", publishDate: "2024-01-25", status: "Final Result" },
  {
    id: 6,
    title: "Police Constable Result",
    organization: "State Police",
    publishDate: "2024-01-19",
    status: "Final Result",
  },
  {
    id: 7,
    title: "Teacher Eligibility Result",
    organization: "TET Board",
    publishDate: "2024-01-21",
    status: "Final Result",
  },
  { id: 8, title: "JEE Main Result", organization: "NTA", publishDate: "2024-01-30", status: "Session 1" },
  { id: 9, title: "NEET Result 2023", organization: "NTA", publishDate: "2024-01-17", status: "Final Result" },
  { id: 10, title: "GATE Result", organization: "IIT", publishDate: "2024-01-28", status: "Final Result" },
]
const certificateVerification = [
  { id: 1, title: "SSC CHSL Result 2023", organization: "SSC", publishDate: "2024-01-15", status: "Final Result" },
  { id: 2, title: "IBPS PO Prelims Result", organization: "IBPS", publishDate: "2024-01-20", status: "Prelims" },
  { id: 3, title: "Railway Group D Result", organization: "RRB", publishDate: "2024-01-18", status: "Final Result" },
  { id: 4, title: "UPSC CSE Prelims Result", organization: "UPSC", publishDate: "2024-01-22", status: "Prelims" },
  { id: 5, title: "Bank Clerk Result", organization: "IBPS", publishDate: "2024-01-25", status: "Final Result" },
  {
    id: 6,
    title: "Police Constable Result",
    organization: "State Police",
    publishDate: "2024-01-19",
    status: "Final Result",
  },
  {
    id: 7,
    title: "Teacher Eligibility Result",
    organization: "TET Board",
    publishDate: "2024-01-21",
    status: "Final Result",
  },
  { id: 8, title: "JEE Main Result", organization: "NTA", publishDate: "2024-01-30", status: "Session 1" },
  { id: 9, title: "NEET Result 2023", organization: "NTA", publishDate: "2024-01-17", status: "Final Result" },
  { id: 10, title: "GATE Result", organization: "IIT", publishDate: "2024-01-28", status: "Final Result" },
]
const others = [
  { id: 1, title: "SSC CHSL Result 2023", organization: "SSC", publishDate: "2024-01-15", status: "Final Result" },
  { id: 2, title: "IBPS PO Prelims Result", organization: "IBPS", publishDate: "2024-01-20", status: "Prelims" },
  { id: 3, title: "Railway Group D Result", organization: "RRB", publishDate: "2024-01-18", status: "Final Result" },
  { id: 4, title: "UPSC CSE Prelims Result", organization: "UPSC", publishDate: "2024-01-22", status: "Prelims" },
  { id: 5, title: "Bank Clerk Result", organization: "IBPS", publishDate: "2024-01-25", status: "Final Result" },
  {
    id: 6,
    title: "Police Constable Result",
    organization: "State Police",
    publishDate: "2024-01-19",
    status: "Final Result",
  },
  {
    id: 7,
    title: "Teacher Eligibility Result",
    organization: "TET Board",
    publishDate: "2024-01-21",
    status: "Final Result",
  },
  { id: 8, title: "JEE Main Result", organization: "NTA", publishDate: "2024-01-30", status: "Session 1" },
  { id: 9, title: "NEET Result 2023", organization: "NTA", publishDate: "2024-01-17", status: "Final Result" },
  { id: 10, title: "GATE Result", organization: "IIT", publishDate: "2024-01-28", status: "Final Result" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Alert Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Alert className="border-red-200 bg-red-50">
          <Bell className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <span className="font-semibold">🔥 Urgent Alert:</span> SSC CGL 2024 application deadline extended till Feb
            15th!
            <Link href="/jobs/ssc-cgl-2024" className="text-red-600 underline ml-2 font-medium">
              Apply Now - Don&apos;t Miss Out!
            </Link>
          </AlertDescription>
        </Alert>
        <Alert className="border-red-200 bg-red-50 mt-2">
          <Bell className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <span className="font-semibold">🔥 Urgent Alert:</span> SSC CGL 2024 application deadline extended till Feb
            15th!
            <Link href="/jobs/ssc-cgl-2024" className="text-red-600 underline ml-2 font-medium">
              Apply Now - Don&apos;t Miss Out!
            </Link>
          </AlertDescription>
        </Alert>
        <Alert className="border-red-200 bg-red-50 mt-2">
          <Bell className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <span className="font-semibold">🔥 Urgent Alert:</span> SSC CGL 2024 application deadline extended till Feb
            15th!
            <Link href="/jobs/ssc-cgl-2024" className="text-red-600 underline ml-2 font-medium">
              Apply Now - Don&apos;t Miss Out!
            </Link>
          </AlertDescription>
        </Alert>
        <Alert className="border-red-200 bg-red-50 mt-2">
          <Bell className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <span className="font-semibold">🔥 Urgent Alert:</span> SSC CGL 2024 application deadline extended till Feb
            15th!
            <Link href="/jobs/ssc-cgl-2024" className="text-red-600 underline ml-2 font-medium">
              Apply Now - Don&apos;t Miss Out!
            </Link>
          </AlertDescription>
        </Alert>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Latest Jobs Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-blue-600" />
              Latest Jobs
            </h2>
            <Link href="/jobs">
              <Button variant="outline" className="flex items-center">
                View All Jobs <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestJobs.slice(0, 9).map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="mb-2">
                      {job.category}
                    </Badge>
                    <Badge variant="destructive" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      Closing Soon
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <CardDescription>{job.department}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Posts:</span>
                      <span className="font-semibold text-green-600">{job.posts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Date:</span>
                      <span className="font-semibold text-red-600">{job.lastDate}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm" >
                    <Link href={`/jobs/${job.id}`}>
                      View Details & Apply
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Admissions Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-green-600" />
              Admissions
            </h2>
            <Link href="/admissions">
              <Button variant="outline" className="flex items-center">
                View All Admissions <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissions.slice(0, 9).map((admission) => (
              <Card key={admission.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Badge variant="outline" className="mb-2 w-fit">
                    {admission.category}
                  </Badge>
                  <CardTitle className="text-lg">{admission.title}</CardTitle>
                  <CardDescription>{admission.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Exam Date:</span>
                      <span className="font-semibold text-blue-600">{admission.examDate}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Award className="h-6 w-6 mr-2 text-purple-600" />
              Results
            </h2>
            <Link href="/results">
              <Button variant="outline" className="flex items-center">
                View All Results <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.slice(0, 9).map((result) => (
              <Card key={result.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Badge variant={result.status === "Final Result" ? "default" : "secondary"} className="mb-2 w-fit">
                    {result.status}
                  </Badge>
                  <CardTitle className="text-lg">{result.title}</CardTitle>
                  <CardDescription>{result.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Published:</span>
                      <span className="font-semibold text-green-600">{result.publishDate}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm" variant="outline">
                    Check Result
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* answerKeys Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Award className="h-6 w-6 mr-2 text-purple-600" />
              Answer Keys
            </h2>
            <Link href="/answer-keys">
              <Button variant="outline" className="flex items-center">
                View All Answer Keys <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {answerKeys.slice(0, 9).map((result) => (
              <Card key={result.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Badge variant={result.status === "Final Result" ? "default" : "secondary"} className="mb-2 w-fit">
                    {result.status}
                  </Badge>
                  <CardTitle className="text-lg">{result.title}</CardTitle>
                  <CardDescription>{result.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Published:</span>
                      <span className="font-semibold text-green-600">{result.publishDate}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm" variant="outline">
                    Check Result
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* syllabus Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Award className="h-6 w-6 mr-2 text-purple-600" />
              Syllabus
            </h2>
            <Link href="/syllabus">
              <Button variant="outline" className="flex items-center">
                View All Syllabus <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {syllabus.slice(0, 9).map((result) => (
              <Card key={result.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Badge variant={result.status === "Final Result" ? "default" : "secondary"} className="mb-2 w-fit">
                    {result.status}
                  </Badge>
                  <CardTitle className="text-lg">{result.title}</CardTitle>
                  <CardDescription>{result.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Published:</span>
                      <span className="font-semibold text-green-600">{result.publishDate}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm" variant="outline">
                    Check Result
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* admitCards Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Award className="h-6 w-6 mr-2 text-purple-600" />
              Admit Cards
            </h2>
            <Link href="/admit-cards">
              <Button variant="outline" className="flex items-center">
                View All Admit Cards <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admitCards.slice(0, 9).map((result) => (
              <Card key={result.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Badge variant={result.status === "Final Result" ? "default" : "secondary"} className="mb-2 w-fit">
                    {result.status}
                  </Badge>
                  <CardTitle className="text-lg">{result.title}</CardTitle>
                  <CardDescription>{result.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Published:</span>
                      <span className="font-semibold text-green-600">{result.publishDate}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm" variant="outline">
                    Check Result
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* certificateVerification Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Award className="h-6 w-6 mr-2 text-purple-600" />
              Certificate Verfification
            </h2>
            <Link href="/certificate-verification">
              <Button variant="outline" className="flex items-center">
                View All Certificate Verfification <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificateVerification.slice(0, 9).map((result) => (
              <Card key={result.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Badge variant={result.status === "Final Result" ? "default" : "secondary"} className="mb-2 w-fit">
                    {result.status}
                  </Badge>
                  <CardTitle className="text-lg">{result.title}</CardTitle>
                  <CardDescription>{result.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Published:</span>
                      <span className="font-semibold text-green-600">{result.publishDate}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm" variant="outline">
                    Check Result
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* others Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Award className="h-6 w-6 mr-2 text-purple-600" />
              Others
            </h2>
            <Link href="/others">
              <Button variant="outline" className="flex items-center">
                View All Others <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.slice(0, 9).map((result) => (
              <Card key={result.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Badge variant={result.status === "Final Result" ? "default" : "secondary"} className="mb-2 w-fit">
                    {result.status}
                  </Badge>
                  <CardTitle className="text-lg">{result.title}</CardTitle>
                  <CardDescription>{result.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Published:</span>
                      <span className="font-semibold text-green-600">{result.publishDate}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm" variant="outline">
                    Check Result
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
