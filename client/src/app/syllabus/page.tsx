"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, Filter, ChevronLeft, ChevronRight, Briefcase } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// Mock data for jobs
const allJobs = [
    {
        id: 1,
        title: "UPSC Civil Services 2024",
        organization: "Union Public Service Commission",
        location: "All India",
        posts: 1056,
        category: "Central Government",
        qualification: "Graduate",
        lastDate: "2024-06-15",
        salary: "₹56,100 - ₹2,50,000",
        experience: "Fresher",
        type: "Permanent",
        description: "Recruitment for various Group A and Group B services under Government of India.",
    },
    {
        id: 2,
        title: "SSC CGL 2024",
        organization: "Staff Selection Commission",
        location: "All India",
        posts: 17727,
        category: "Central Government",
        qualification: "Graduate",
        lastDate: "2024-07-01",
        salary: "₹25,500 - ₹81,100",
        experience: "Fresher",
        type: "Permanent",
        description: "Combined Graduate Level Examination for recruitment to various Group B and Group C posts.",
    },
    {
        id: 3,
        title: "IBPS PO Recruitment 2024",
        organization: "Institute of Banking Personnel Selection",
        location: "All India",
        posts: 4135,
        category: "Banking",
        qualification: "Graduate",
        lastDate: "2024-06-20",
        salary: "₹23,700 - ₹42,020",
        experience: "Fresher",
        type: "Permanent",
        description: "Probationary Officer recruitment in various public sector banks.",
    },
    {
        id: 4,
        title: "Railway NTPC 2024",
        organization: "Railway Recruitment Board",
        location: "All India",
        posts: 35281,
        category: "Railway",
        qualification: "Graduate",
        lastDate: "2024-06-25",
        salary: "₹35,400 - ₹1,12,400",
        experience: "Fresher",
        type: "Permanent",
        description: "Non-Technical Popular Categories recruitment in Indian Railways.",
    },
    {
        id: 5,
        title: "SBI Clerk Recruitment",
        organization: "State Bank of India",
        location: "All India",
        posts: 8773,
        category: "Banking",
        qualification: "Graduate",
        lastDate: "2024-06-18",
        salary: "₹17,900 - ₹63,020",
        experience: "Fresher",
        type: "Permanent",
        description: "Junior Associate (Customer Support & Sales) recruitment.",
    },
    {
        id: 6,
        title: "DRDO Scientist Recruitment",
        organization: "Defence Research and Development Organisation",
        location: "Various Cities",
        posts: 1817,
        category: "Defence",
        qualification: "B.Tech/M.Tech",
        lastDate: "2024-07-05",
        salary: "₹56,100 - ₹1,77,500",
        experience: "Fresher",
        type: "Permanent",
        description: "Scientist 'B' recruitment in various disciplines.",
    },
    {
        id: 7,
        title: "Indian Army Technical Entry",
        organization: "Indian Army",
        location: "All India",
        posts: 90,
        category: "Defence",
        qualification: "B.Tech",
        lastDate: "2024-06-30",
        salary: "₹56,100 - ₹1,77,500",
        experience: "Fresher",
        type: "Permanent",
        description: "Technical Entry Scheme for Engineering Graduates.",
    },
    {
        id: 8,
        title: "ISRO Scientist Recruitment",
        organization: "Indian Space Research Organisation",
        location: "Various Cities",
        posts: 55,
        category: "Space/Research",
        qualification: "B.Tech/M.Tech",
        lastDate: "2024-07-10",
        salary: "₹56,100 - ₹1,77,500",
        experience: "Fresher",
        type: "Permanent",
        description: "Scientist/Engineer recruitment in various disciplines.",
    },
    {
        id: 9,
        title: "Delhi Police Constable",
        organization: "Delhi Police",
        location: "Delhi",
        posts: 25271,
        category: "Police",
        qualification: "12th Pass",
        lastDate: "2024-06-22",
        salary: "₹21,700 - ₹69,100",
        experience: "Fresher",
        type: "Permanent",
        description: "Constable (Executive) recruitment in Delhi Police.",
    },
    {
        id: 10,
        title: "NEET UG Counselling 2024",
        organization: "National Testing Agency",
        location: "All India",
        posts: 108940,
        category: "Medical",
        qualification: "12th (PCB)",
        lastDate: "2024-06-28",
        salary: "Variable",
        experience: "Fresher",
        type: "Course",
        description: "MBBS/BDS admission through NEET UG counselling.",
    },
    {
        id: 11,
        title: "UPPSC PCS 2024",
        organization: "Uttar Pradesh Public Service Commission",
        location: "Uttar Pradesh",
        posts: 688,
        category: "State Government",
        qualification: "Graduate",
        lastDate: "2024-07-15",
        salary: "₹9,300 - ₹34,800",
        experience: "Fresher",
        type: "Permanent",
        description: "Provincial Civil Services recruitment in UP.",
    },
    {
        id: 12,
        title: "BPSC 69th CCE",
        organization: "Bihar Public Service Commission",
        location: "Bihar",
        posts: 802,
        category: "State Government",
        qualification: "Graduate",
        lastDate: "2024-07-08",
        salary: "₹9,300 - ₹34,800",
        experience: "Fresher",
        type: "Permanent",
        description: "Combined Competitive Examination for various posts.",
    },
    {
        id: 13,
        title: "MPSC State Service 2024",
        organization: "Maharashtra Public Service Commission",
        location: "Maharashtra",
        posts: 806,
        category: "State Government",
        qualification: "Graduate",
        lastDate: "2024-07-12",
        salary: "₹9,300 - ₹34,800",
        experience: "Fresher",
        type: "Permanent",
        description: "State Services recruitment in Maharashtra.",
    },
    {
        id: 14,
        title: "RPSC RAS 2024",
        organization: "Rajasthan Public Service Commission",
        location: "Rajasthan",
        posts: 905,
        category: "State Government",
        qualification: "Graduate",
        lastDate: "2024-07-18",
        salary: "₹9,300 - ₹34,800",
        experience: "Fresher",
        type: "Permanent",
        description: "Rajasthan Administrative Service recruitment.",
    },
    {
        id: 15,
        title: "WBPSC Civil Service 2024",
        organization: "West Bengal Public Service Commission",
        location: "West Bengal",
        posts: 597,
        category: "State Government",
        qualification: "Graduate",
        lastDate: "2024-07-20",
        salary: "₹9,300 - ₹34,800",
        experience: "Fresher",
        type: "Permanent",
        description: "West Bengal Civil Service recruitment.",
    },
    {
        id: 16,
        title: "TNPSC Group 1 Services",
        organization: "Tamil Nadu Public Service Commission",
        location: "Tamil Nadu",
        posts: 1953,
        category: "State Government",
        qualification: "Graduate",
        lastDate: "2024-07-25",
        salary: "₹9,300 - ₹34,800",
        experience: "Fresher",
        type: "Permanent",
        description: "Group 1 Services recruitment in Tamil Nadu.",
    },
    {
        id: 17,
        title: "KPSC KAS 2024",
        organization: "Karnataka Public Service Commission",
        location: "Karnataka",
        posts: 884,
        category: "State Government",
        qualification: "Graduate",
        lastDate: "2024-07-22",
        salary: "₹9,300 - ₹34,800",
        experience: "Fresher",
        type: "Permanent",
        description: "Karnataka Administrative Service recruitment.",
    },
    {
        id: 18,
        title: "APPSC Group 1 Services",
        organization: "Andhra Pradesh Public Service Commission",
        location: "Andhra Pradesh",
        posts: 1051,
        category: "State Government",
        qualification: "Graduate",
        lastDate: "2024-07-28",
        salary: "₹9,300 - ₹34,800",
        experience: "Fresher",
        type: "Permanent",
        description: "Group 1 Services recruitment in Andhra Pradesh.",
    },
    {
        id: 19,
        title: "HPSC HCS 2024",
        organization: "Haryana Public Service Commission",
        location: "Haryana",
        posts: 465,
        category: "State Government",
        qualification: "Graduate",
        lastDate: "2024-08-01",
        salary: "₹9,300 - ₹34,800",
        experience: "Fresher",
        type: "Permanent",
        description: "Haryana Civil Services recruitment.",
    },
    {
        id: 20,
        title: "JPSC Civil Services 2024",
        organization: "Jharkhand Public Service Commission",
        location: "Jharkhand",
        posts: 230,
        category: "State Government",
        qualification: "Graduate",
        lastDate: "2024-08-05",
        salary: "₹9,300 - ₹34,800",
        experience: "Fresher",
        type: "Permanent",
        description: "Civil Services recruitment in Jharkhand.",
    },
]

const ITEMS_PER_PAGE = 10

export default function LatestJobsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("all")
    const [locationFilter, setLocationFilter] = useState("all")
    const [qualificationFilter, setQualificationFilter] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)

    // Get unique values for filters
    const categories = [...new Set(allJobs.map((job) => job.category))]
    const locations = [...new Set(allJobs.map((job) => job.location))]
    const qualifications = [...new Set(allJobs.map((job) => job.qualification))]

    // Filter jobs based on search and filters
    const filteredJobs = useMemo(() => {
        return allJobs.filter((job) => {
            const matchesSearch =
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.organization.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesCategory = categoryFilter === "all" || job.category === categoryFilter
            const matchesLocation = locationFilter === "all" || job.location === locationFilter
            const matchesQualification = qualificationFilter === "all" || job.qualification === qualificationFilter

            return matchesSearch && matchesCategory && matchesLocation && matchesQualification
        })
    }, [searchTerm, categoryFilter, locationFilter, qualificationFilter])

    // Pagination
    const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const paginatedJobs = filteredJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    // Reset to first page when filters change
    const handleFilterChange = (filterType: string, value: string) => {
        setCurrentPage(1)
        switch (filterType) {
            case "category":
                setCategoryFilter(value)
                break
            case "location":
                setLocationFilter(value)
                break
            case "qualification":
                setQualificationFilter(value)
                break
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
            <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
                {/* Breadcrumb */}
                <nav className="flex mb-6 text-sm text-gray-600">
                    <Link href="/" className="hover:text-blue-600">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">Latest Jobs</span>
                </nav>

                {/* Search and Filters */}
                <Card className="mb-6 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Filter className="h-5 w-5" />
                            Search & Filter Jobs
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {/* Search Box */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                                placeholder="Search jobs by title or organization..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value)
                                    setCurrentPage(1)
                                }}
                                className="pl-10"
                            />
                        </div>

                        {/* Filters */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                                <label className="text-sm font-medium mb-2 block">Category</label>
                                <Select value={categoryFilter} onValueChange={(value) => handleFilterChange("category", value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Categories</SelectItem>
                                        {categories.map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">Location</label>
                                <Select value={locationFilter} onValueChange={(value) => handleFilterChange("location", value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select location" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Locations</SelectItem>
                                        {locations.map((location) => (
                                            <SelectItem key={location} value={location}>
                                                {location}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">Qualification</label>
                                <Select
                                    value={qualificationFilter}
                                    onValueChange={(value) => handleFilterChange("qualification", value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select qualification" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Qualifications</SelectItem>
                                        {qualifications.map((qualification) => (
                                            <SelectItem key={qualification} value={qualification}>
                                                {qualification}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Results Count */}
                <div className="mb-4">
                    <p className="text-sm text-gray-600">
                        Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredJobs.length)} of{" "}
                        {filteredJobs.length} jobs
                    </p>
                </div>

                {/* Jobs List */}
                <Card className="shadow-lg mb-8 p-0">
                    <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg py-2">
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Briefcase className="h-6 w-6" />
                            Latest Government Jobs ({filteredJobs.length})
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                        {paginatedJobs.length > 0 ? (
                            <ul className="space-y-3">
                                {paginatedJobs.map((job) => {
                                    const isUrgent = new Date(job.lastDate) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                                    return (
                                        <li key={job.id} className="border-b border-gray-100 pb-3 last:border-0">
                                            <Link href={`/jobs/${job.id}`} className="hover:text-primary block group">
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                                    <div className="flex-1">
                                                        <div className="flex items-start gap-2 mb-1">
                                                            <span className="text-sm sm:text-base font-semibold group-hover:text-blue-600 transition-colors line-clamp-1">
                                                                {job.title}
                                                            </span>
                                                            {isUrgent && (
                                                                <Badge variant="destructive" className="text-xs">
                                                                    Urgent
                                                                </Badge>
                                                            )}
                                                        </div>
                                                        <div className="text-xs sm:text-sm text-gray-600 mb-2">
                                                            <span className="font-medium">{job.organization}</span>
                                                            <span className="mx-2">•</span>
                                                            <span>{job.location}</span>
                                                            <span className="mx-2">•</span>
                                                            <span>{job.posts} Posts</span>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2 mb-2">
                                                            <Badge variant="secondary" className="text-xs">
                                                                {job.category}
                                                            </Badge>
                                                            <Badge variant="outline" className="text-xs">
                                                                {job.qualification}
                                                            </Badge>
                                                            <span className="text-xs text-green-600 font-medium">Salary: {job.salary}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-end gap-1">
                                                        <span className="text-xs text-muted-foreground">
                                                            Last Date: {new Date(job.lastDate).toLocaleDateString()}
                                                        </span>
                                                        <Button size="sm" className="text-xs">
                                                            View Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        ) : (
                            <div className="text-center py-12">
                                <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-600 mb-2">No jobs found</h3>
                                <p className="text-gray-500">Try adjusting your search criteria or filters</p>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="h-4 w-4" />
                            Previous
                        </Button>

                        <div className="flex gap-1">
                            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                let page
                                if (totalPages <= 5) {
                                    page = i + 1
                                } else if (currentPage <= 3) {
                                    page = i + 1
                                } else if (currentPage >= totalPages - 2) {
                                    page = totalPages - 4 + i
                                } else {
                                    page = currentPage - 2 + i
                                }
                                return (
                                    <Button
                                        key={page}
                                        variant={currentPage === page ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setCurrentPage(page)}
                                        className="w-10"
                                    >
                                        {page}
                                    </Button>
                                )
                            })}
                        </div>

                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
