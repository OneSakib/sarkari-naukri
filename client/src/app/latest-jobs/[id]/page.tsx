import {
    Calendar,
    Clock,
    DollarSign,
    FileText,
    Users,
    Download,
    ExternalLink,
    Bell,
    AlertTriangle,
    CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

export default function JobDetailPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <nav className="flex mb-6 text-sm text-gray-600">
                    <Link href="/" className="hover:text-blue-600">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <Link href="/jobs" className="hover:text-blue-600">
                        Latest Jobs
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">UPSSSC PET 2025</span>
                </nav>

                {/* Job Title Section */}
                <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <Badge className="mb-3 bg-green-100 text-green-800 hover:bg-green-100">Active Recruitment</Badge>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                UPSSSC UP Preliminary Examination Test PET Advt No 01-Exam/2025 Apply Online Form
                            </h1>
                            <div className="flex items-center text-gray-600 mb-4">
                                <Clock className="h-4 w-4 mr-2" />
                                <span>Post Date / Update: 14 May 2025 | 10:32 AM</span>
                            </div>
                        </div>
                        <div className="ml-4">
                            <Badge variant="destructive" className="text-sm">
                                <AlertTriangle className="h-3 w-3 mr-1" />
                                Closing Soon
                            </Badge>
                        </div>
                    </div>

                    <Alert className="border-blue-200 bg-blue-50 mb-4">
                        <Bell className="h-4 w-4 text-blue-600" />
                        <AlertDescription className="text-blue-800">
                            <span className="font-semibold">Short Information:</span> Uttar Pradesh Subordinate Service Selection
                            Commission (UPSSSC) has released Preliminary Examination Test PET Advt No. 01-Exam/2025 Recruitment
                            Notification. Those candidates who are interested in this UPSSSC Preliminary Examination Test PET 2025 can
                            Apply Online from 14/05/2025 to 17/06/2025.
                        </AlertDescription>
                    </Alert>

                    <div className="flex flex-wrap gap-3">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Apply Online Now
                        </Button>
                        <Button variant="outline" size="lg">
                            <Download className="h-4 w-4 mr-2" />
                            Download Notification
                        </Button>
                        <Button variant="outline" size="lg">
                            <FileText className="h-4 w-4 mr-2" />
                            Download Syllabus
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Important Dates */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                                    Important Dates
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Application Begin</TableCell>
                                            <TableCell className="text-green-600 font-semibold">14/05/2025</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Last Date for Registration</TableCell>
                                            <TableCell className="text-red-600 font-semibold">17/06/2025</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Last Date for Fee Payment</TableCell>
                                            <TableCell className="text-red-600 font-semibold">17/06/2025</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Correction Last Date</TableCell>
                                            <TableCell className="text-orange-600 font-semibold">24/06/2025</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Exam Date</TableCell>
                                            <TableCell className="text-blue-600 font-semibold">As per Schedule</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Admit Card Available</TableCell>
                                            <TableCell className="text-purple-600 font-semibold">Before Exam</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>

                        {/* Application Fee */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                                    Application Fee
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-gray-900">₹185</div>
                                        <div className="text-sm text-gray-600">General / OBC</div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-gray-900">₹95</div>
                                        <div className="text-sm text-gray-600">SC / ST</div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-gray-900">₹25</div>
                                        <div className="text-sm text-gray-600">PH (Divyang)</div>
                                    </div>
                                </div>
                                <Alert className="border-yellow-200 bg-yellow-50">
                                    <AlertDescription className="text-yellow-800">
                                        <span className="font-semibold">Payment Mode:</span> Pay the Examination Fee Through State Bank of
                                        India SBI I Collect Fee Mode or Pay the Exam Fee Through E Challan
                                    </AlertDescription>
                                </Alert>
                            </CardContent>
                        </Card>

                        {/* Age Limit */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Users className="h-5 w-5 mr-2 text-purple-600" />
                                    Age Limit (as on 01/07/2025)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <div className="text-lg font-semibold text-green-800">Minimum Age</div>
                                        <div className="text-2xl font-bold text-green-900">18 Years</div>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <div className="text-lg font-semibold text-red-800">Maximum Age</div>
                                        <div className="text-2xl font-bold text-red-900">40 Years</div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">Note:</span> Age Relaxation Extra as per UPSSSC PET Exam Recruitment
                                    Rules
                                </p>
                            </CardContent>
                        </Card>

                        {/* Eligibility */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                                    UPSSSC PET 2025 Eligibility
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-900 mb-2">Educational Qualification:</h4>
                                    <p className="text-blue-800">
                                        Minimum Class 10 High School Exam in Any Recognized Board OR Any Higher Qualification in Any
                                        Recognized University in India.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* How to Apply */}
                        <Card>
                            <CardHeader>
                                <CardTitle>How to Fill UPSSSC PET 2025 Online Form</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Uttar Pradesh Subordinate Service Selection Commission UPSSSC has released PET Exam Form 2025.
                                        Candidates can apply between 14/05/2025 to 17/06/2025.
                                    </p>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-3">Application Process:</h4>
                                        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                                            <li>Read the Notification Before Apply the Vacancies Application Form</li>
                                            <li>Check and Collect All Documents - Eligibility, ID Proof, Address Details, Basic Details</li>
                                            <li>Ready Scan Documents - Photo, Sign, ID Proof, etc.</li>
                                            <li>Before Apply Online, Check the Preview and All Columns Carefully</li>
                                            <li>Take A Print Out of Final Submitted Form</li>
                                        </ol>
                                    </div>

                                    <Alert className="border-green-200 bg-green-50">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <AlertDescription className="text-green-800">
                                            <span className="font-semibold">Important:</span> In future, all types of government jobs that
                                            will be conducted by UPSSSC, it will be necessary to pass this exam.
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Actions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Apply Online
                                </Button>
                                <Button variant="outline" className="w-full">
                                    <Download className="h-4 w-4 mr-2" />
                                    Download Notification
                                </Button>
                                <Button variant="outline" className="w-full">
                                    <FileText className="h-4 w-4 mr-2" />
                                    Download Syllabus
                                </Button>
                                <Button variant="outline" className="w-full">
                                    <Bell className="h-4 w-4 mr-2" />
                                    Set Job Alert
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Job Summary */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Job Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Organization:</span>
                                    <span className="font-semibold">UPSSSC</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Exam Name:</span>
                                    <span className="font-semibold">PET 2025</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Advertisement No:</span>
                                    <span className="font-semibold">01-Exam/2025</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Application Mode:</span>
                                    <span className="font-semibold text-green-600">Online</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Status:</span>
                                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Important Links */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Important Links</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Link href="#" className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                                    <ExternalLink className="h-3 w-3 mr-2" />
                                    UPSSSC Official Website
                                </Link>
                                <Link href="#" className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                                    <ExternalLink className="h-3 w-3 mr-2" />
                                    Join Telegram Channel
                                </Link>
                                <Link href="#" className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                                    <ExternalLink className="h-3 w-3 mr-2" />
                                    Join WhatsApp Group
                                </Link>
                                <Link href="#" className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                                    <ExternalLink className="h-3 w-3 mr-2" />
                                    Download Mobile App
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Share */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Share This Job</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex space-x-2">
                                    <Button size="sm" variant="outline" className="flex-1">
                                        WhatsApp
                                    </Button>
                                    <Button size="sm" variant="outline" className="flex-1">
                                        Telegram
                                    </Button>
                                    <Button size="sm" variant="outline" className="flex-1">
                                        Copy Link
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
