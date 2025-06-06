import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Calendar, Download, ExternalLink, FileText, Info } from "lucide-react"
interface ResultPageProps {
    params: { id: string };
}

export default function ResultDetailPage({ params }: ResultPageProps) {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h1 className="h3 mb-2">
                                <i className="fas fa-briefcase me-2"></i>
                                Latest Government Jobs
                            </h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="#">
                                            <i className="fas fa-home me-1"></i>Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active">Latest Jobs</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="text-end">
                            <div className="small">Last Updated</div>
                            <div className="fw-bold" id="lastUpdated">Today, 3:45 PM</div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mt-5">
                <div className="container mx-auto px-4 py-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">UPSSSC PET Exam 2025</h1>
                                <p className="text-gray-600 mt-2">Pre Examination Test (PET) 2025 - Uttar Pradesh</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md">
                                    Apply Now
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                                <div>
                                    <p className="text-sm text-gray-500">Posted On</p>
                                    <p className="font-semibold">14/05/2025</p>
                                </div>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg flex items-center">
                                <Calendar className="h-5 w-5 text-red-600 mr-2" />
                                <div>
                                    <p className="text-sm text-gray-500">Last Date</p>
                                    <p className="font-semibold">17/06/2025</p>
                                </div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg flex items-center">
                                <Info className="h-5 w-5 text-green-600 mr-2" />
                                <div>
                                    <p className="text-sm text-gray-500">Status</p>
                                    <Badge className="bg-green-600">Active</Badge>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Important Dates */}
                            <Card>
                                <CardHeader className="bg-gray-50">
                                    <CardTitle className="flex items-center">
                                        <Calendar className="h-5 w-5 mr-2 text-gray-700" />
                                        Important Dates
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <div className="space-y-3">
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="text-gray-600">Application Begin</span>
                                            <span className="font-medium">14/05/2025</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="text-gray-600">Last Date for Registration</span>
                                            <span className="font-medium">17/06/2025</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="text-gray-600">Last Date for Fee Payment</span>
                                            <span className="font-medium">17/06/2025</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="text-gray-600">Correction Last Date</span>
                                            <span className="font-medium">24/06/2025</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="text-gray-600">Exam Date</span>
                                            <span className="font-medium">As per Schedule</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Admit Card Available</span>
                                            <span className="font-medium">Before Exam</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Application Fees */}
                            <Card>
                                <CardHeader className="bg-gray-50">
                                    <CardTitle className="flex items-center">
                                        <FileText className="h-5 w-5 mr-2 text-gray-700" />
                                        Application Fees
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <div className="space-y-3">
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="text-gray-600">General / OBC</span>
                                            <span className="font-medium">₹185/-</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="text-gray-600">SC / ST</span>
                                            <span className="font-medium">₹95/-</span>
                                        </div>
                                        <div className="flex justify-between pb-2">
                                            <span className="text-gray-600">PH (Dviyang)</span>
                                            <span className="font-medium">₹25/-</span>
                                        </div>
                                        <div className="mt-3 p-3 bg-yellow-50 rounded-md text-sm">
                                            <p>
                                                Pay the Examination Fee Through State Bank of India SBI I Collect Fee Mode or Pay the Exam Fee
                                                Through E Challan
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Age Limit */}
                            <Card>
                                <CardHeader className="bg-gray-50">
                                    <CardTitle className="flex items-center">
                                        <Info className="h-5 w-5 mr-2 text-gray-700" />
                                        Age Limit (as on 01/07/2025)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <div className="space-y-3">
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="text-gray-600">Minimum Age</span>
                                            <span className="font-medium">18 Years</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="text-gray-600">Maximum Age</span>
                                            <span className="font-medium">40 Years</span>
                                        </div>
                                        <div className="mt-3 p-3 bg-blue-50 rounded-md text-sm">
                                            <p>Age Relaxation Extra as per UPSSSC PET Exam Recruitment Rules</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Eligibility */}
                            <Card>
                                <CardHeader className="bg-gray-50">
                                    <CardTitle className="flex items-center">
                                        <FileText className="h-5 w-5 mr-2 text-gray-700" />
                                        Eligibility Criteria
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <div className="space-y-3">
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="text-gray-600">Exam Name</span>
                                            <span className="font-medium">UPSSSC PET 2025</span>
                                        </div>
                                        <div className="mt-3 p-3 bg-gray-50 rounded-md">
                                            <p className="font-medium mb-2">Minimum Qualification Required:</p>
                                            <p>
                                                Minimum Class 10 High School Exam in Any Recognized Board OR Any Higher Qualification in Any
                                                Recognized University in India.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* About the Exam */}
                        <Card className="mt-6">
                            <CardHeader className="bg-gray-50">
                                <CardTitle className="flex items-center">
                                    <Info className="h-5 w-5 mr-2 text-gray-700" />
                                    More About UPSSSC PET Form 2025
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <p className="text-gray-700 mb-4">
                                    Uttar Pradesh UPSSSC has released the advertisement for preliminary examination. Those who are eligible
                                    for high school or more, then register for this examination immediately, In future, all types of
                                    government jobs that will be conducted by UPSSSC, it will be necessary to pass this exam.
                                </p>
                            </CardContent>
                        </Card>

                        {/* How to Apply */}
                        <Card className="mt-6">
                            <CardHeader className="bg-gray-50">
                                <CardTitle className="flex items-center">
                                    <FileText className="h-5 w-5 mr-2 text-gray-700" />
                                    How to Fill UPSSSC PET 2025 Online Form
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <p className="text-gray-700 mb-4">
                                    Uttar Pradesh Subordinate Service Selection Commission UPSSSC Are Released PET Exam Form 2025. Candidate
                                    Can Apply Between 14/05/2025 to 17/06/2025.
                                </p>
                                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                                    <li>
                                        Candidate Read the Notification Before Apply the Vacancies Application Form in Apprentice Jobs of UPSSSC
                                        PET 2025 for Upcoming Latest Govt. Vacancies Recruitment Online 2025.
                                    </li>
                                    <li>
                                        Kindly Check and Collect the All Document - Eligibility, ID Proof, Address Details, Basic Details.
                                    </li>
                                    <li>Kindly Ready Scan Document Related to Recruitment Form - Photo, Sign, ID Proof, Etc.</li>
                                    <li>Before Apply Online / Submit Application Form Must Check the Preview and All Column Carefully.</li>
                                    <li>Take A Print Out of Final Submitted Form.</li>
                                    <li>Interested Candidates Can Read the Full Notification Before Apply Online</li>
                                </ol>
                            </CardContent>
                        </Card>

                        {/* Important Links */}
                        <Card className="mt-6">
                            <CardHeader className="bg-gray-50">
                                <CardTitle className="flex items-center">
                                    <ExternalLink className="h-5 w-5 mr-2 text-gray-700" />
                                    Important Links
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Button variant="outline" className="flex items-center justify-center gap-2">
                                        <ExternalLink className="h-4 w-4" />
                                        Apply Online
                                    </Button>
                                    <Button variant="outline" className="flex items-center justify-center gap-2">
                                        <Download className="h-4 w-4" />
                                        Download Notification
                                    </Button>
                                    <Button variant="outline" className="flex items-center justify-center gap-2">
                                        <Download className="h-4 w-4" />
                                        Download Syllabus
                                    </Button>
                                    <Button variant="outline" className="flex items-center justify-center gap-2">
                                        <ExternalLink className="h-4 w-4" />
                                        Official Website
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Join Channels */}
                        <Card className="mt-6">
                            <CardHeader className="bg-gray-50">
                                <CardTitle className="flex items-center">
                                    <AlertCircle className="h-5 w-5 mr-2 text-gray-700" />
                                    Join Sarkari Result Channel
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <div className="flex flex-wrap gap-4">
                                    <Button variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200">
                                        Telegram
                                    </Button>
                                    <Button variant="outline" className="bg-green-50 hover:bg-green-100 text-green-600 border-green-200">
                                        WhatsApp
                                    </Button>
                                    <Button variant="outline" className="bg-red-50 hover:bg-red-100 text-red-600 border-red-200">
                                        Download Android App
                                    </Button>
                                    <Button variant="outline" className="bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-200">
                                        Download iOS App
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Apply Now Button - Bottom */}
                        <div className="mt-8 text-center">
                            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-lg shadow-md text-lg">
                                Apply Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
