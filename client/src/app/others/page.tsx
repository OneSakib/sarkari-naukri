"use client"

import { useState } from "react"
import { Search, Filter, Calendar, MapPin, Building, Users, Clock, ChevronDown, Grid, List } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Extended job data
const allJobs = [
    {
        id: 1,
        title: "SSC CGL 2024",
        department: "Staff Selection Commission",
        posts: "8000+",
        lastDate: "2024-02-15",
        category: "Central Govt",
        location: "All India",
        qualification: "Graduate",
        experience: "Fresher",
        salary: "₹25,000 - ₹75,000",
        postDate: "2024-01-10",
    },
    {
        id: 2,
        title: "UPSC Civil Services 2024",
        department: "Union Public Service Commission",
        posts: "900+",
        lastDate: "2024-02-20",
        category: "Central Govt",
        location: "All India",
        qualification: "Graduate",
        experience: "Fresher",
        salary: "₹56,100 - ₹2,50,000",
        postDate: "2024-01-08",
    },
    {
        id: 3,
        title: "Railway Group D",
        department: "Indian Railways",
        posts: "50000+",
        lastDate: "2024-02-25",
        category: "Railway",
        location: "All India",
        qualification: "10th Pass",
        experience: "Fresher",
        salary: "₹18,000 - ₹22,000",
        postDate: "2024-01-12",
    },
    {
        id: 4,
        title: "Bank PO Recruitment",
        department: "IBPS",
        posts: "5000+",
        lastDate: "2024-02-18",
        category: "Banking",
        location: "All India",
        qualification: "Graduate",
        experience: "Fresher",
        salary: "₹23,700 - ₹42,020",
        postDate: "2024-01-09",
    },
    {
        id: 5,
        title: "Police Constable",
        department: "State Police",
        posts: "10000+",
        lastDate: "2024-02-22",
        category: "Police",
        location: "Uttar Pradesh",
        qualification: "12th Pass",
        experience: "Fresher",
        salary: "₹21,700 - ₹69,100",
        postDate: "2024-01-11",
    },
    {
        id: 6,
        title: "Teacher Recruitment",
        department: "Education Department",
        posts: "15000+",
        lastDate: "2024-02-28",
        category: "Teaching",
        location: "Bihar",
        qualification: "B.Ed",
        experience: "Fresher",
        salary: "₹31,000 - ₹1,00,000",
        postDate: "2024-01-13",
    },
    {
        id: 7,
        title: "Forest Guard",
        department: "Forest Department",
        posts: "2000+",
        lastDate: "2024-03-01",
        category: "Forest",
        location: "Madhya Pradesh",
        qualification: "10th Pass",
        experience: "Fresher",
        salary: "₹19,500 - ₹62,000",
        postDate: "2024-01-14",
    },
    {
        id: 8,
        title: "High Court Clerk",
        department: "High Court",
        posts: "500+",
        lastDate: "2024-02-26",
        category: "Court",
        location: "Delhi",
        qualification: "Graduate",
        experience: "Fresher",
        salary: "₹25,500 - ₹81,100",
        postDate: "2024-01-15",
    },
    {
        id: 9,
        title: "Junior Engineer",
        department: "PWD",
        posts: "3000+",
        lastDate: "2024-03-05",
        category: "Engineering",
        location: "Rajasthan",
        qualification: "Diploma",
        experience: "Fresher",
        salary: "₹29,200 - ₹92,300",
        postDate: "2024-01-16",
    },
    {
        id: 10,
        title: "Nursing Officer",
        department: "Health Department",
        posts: "1200+",
        lastDate: "2024-02-24",
        category: "Medical",
        location: "Maharashtra",
        qualification: "B.Sc Nursing",
        experience: "Fresher",
        salary: "₹25,500 - ₹81,100",
        postDate: "2024-01-17",
    },
    {
        id: 11,
        title: "UPSSSC PET 2025",
        department: "UPSSSC",
        posts: "Multiple",
        lastDate: "2024-06-17",
        category: "State Govt",
        location: "Uttar Pradesh",
        qualification: "10th Pass",
        experience: "Fresher",
        salary: "₹15,000 - ₹35,000",
        postDate: "2024-05-14",
    },
    {
        id: 12,
        title: "Army Recruitment Rally",
        department: "Indian Army",
        posts: "8000+",
        lastDate: "2024-03-10",
        category: "Defence",
        location: "Punjab",
        qualification: "10th/12th Pass",
        experience: "Fresher",
        salary: "₹17,300 - ₹56,100",
        postDate: "2024-01-18",
    },
    {
        id: 13,
        title: "Postal Assistant",
        department: "India Post",
        posts: "4000+",
        lastDate: "2024-03-15",
        category: "Central Govt",
        location: "All India",
        qualification: "12th Pass",
        experience: "Fresher",
        salary: "₹25,500 - ₹81,100",
        postDate: "2024-01-19",
    },
    {
        id: 14,
        title: "AIIMS Nursing Officer",
        department: "AIIMS",
        posts: "1800+",
        lastDate: "2024-03-20",
        category: "Medical",
        location: "All India",
        qualification: "B.Sc Nursing",
        experience: "Fresher",
        salary: "₹44,900 - ₹1,42,400",
        postDate: "2024-01-20",
    },
    {
        id: 15,
        title: "Income Tax Inspector",
        department: "CBDT",
        posts: "3000+",
        lastDate: "2024-03-25",
        category: "Central Govt",
        location: "All India",
        qualification: "Graduate",
        experience: "Fresher",
        salary: "₹44,900 - ₹1,42,400",
        postDate: "2024-01-21",
    },
]

const categories = [
    "All",
    "Central Govt",
    "State Govt",
    "Railway",
    "Banking",
    "Police",
    "Teaching",
    "Medical",
    "Defence",
    "Engineering",
    "Forest",
    "Court",
]
const locations = [
    "All",
    "All India",
    "Uttar Pradesh",
    "Bihar",
    "Maharashtra",
    "Delhi",
    "Rajasthan",
    "Madhya Pradesh",
    "Punjab",
]
const qualifications = ["All", "10th Pass", "12th Pass", "Graduate", "Post Graduate", "Diploma", "B.Ed", "B.Sc Nursing"]

export default function JobsListPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedLocation, setSelectedLocation] = useState("All")
    const [selectedQualification, setSelectedQualification] = useState("All")
    const [sortBy, setSortBy] = useState("latest")
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [currentPage, setCurrentPage] = useState(1)
    const [showFilters, setShowFilters] = useState(false)
    const jobsPerPage = 12

    // Filter jobs based on search and filters
    const filteredJobs = allJobs.filter((job) => {
        const matchesSearch =
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.department.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || job.category === selectedCategory
        const matchesLocation = selectedLocation === "All" || job.location === selectedLocation
        const matchesQualification = selectedQualification === "All" || job.qualification === selectedQualification

        return matchesSearch && matchesCategory && matchesLocation && matchesQualification
    })

    // Sort jobs
    const sortedJobs = [...filteredJobs].sort((a, b) => {
        switch (sortBy) {
            case "latest":
                return new Date(b.postDate).getTime() - new Date(a.postDate).getTime()
            case "deadline":
                return new Date(a.lastDate).getTime() - new Date(b.lastDate).getTime()
            case "posts":
                return Number.parseInt(b.posts.replace(/\D/g, "")) - Number.parseInt(a.posts.replace(/\D/g, ""))
            default:
                return 0
        }
    })

    // Pagination
    const totalPages = Math.ceil(sortedJobs.length / jobsPerPage)
    const startIndex = (currentPage - 1) * jobsPerPage
    const currentJobs = sortedJobs.slice(startIndex, startIndex + jobsPerPage)

    const getDaysLeft = (lastDate: string) => {
        const today = new Date()
        const deadline = new Date(lastDate)
        const diffTime = deadline.getTime() - today.getTime()
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return diffDays
    }

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <nav className="flex mb-6 text-sm text-gray-600">
                    <Link href="/" className="hover:text-blue-600">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">Latest Jobs</span>
                </nav>

                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Latest Government Jobs</h1>
                    <p className="text-gray-600">
                        Find your dream government job from {allJobs.length}+ active job notifications
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                    {/* Search Bar */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <Input
                                placeholder="Search jobs by title, department..."
                                className="pl-10"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="md:w-auto">
                            <Filter className="h-4 w-4 mr-2" />
                            Filters
                            <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                        </Button>
                    </div>

                    {/* Filters */}
                    {showFilters && (
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {locations.map((location) => (
                                            <SelectItem key={location} value={location}>
                                                {location}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Qualification</label>
                                <Select value={selectedQualification} onValueChange={setSelectedQualification}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {qualifications.map((qualification) => (
                                            <SelectItem key={qualification} value={qualification}>
                                                {qualification}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                                <Select value={sortBy} onValueChange={setSortBy}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="latest">Latest First</SelectItem>
                                        <SelectItem value="deadline">Deadline</SelectItem>
                                        <SelectItem value="posts">Most Posts</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    )}
                </div>

                {/* Results Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="text-gray-600">
                        Showing {startIndex + 1}-{Math.min(startIndex + jobsPerPage, sortedJobs.length)} of {sortedJobs.length} jobs
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
                            <Grid className="h-4 w-4" />
                        </Button>
                        <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
                            <List className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Jobs Grid/List */}
                <div
                    className={
                        viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" : "space-y-4 mb-8"
                    }
                >
                    {currentJobs.map((job) => {
                        const daysLeft = getDaysLeft(job.lastDate)
                        return (
                            <Card key={job.id} className={`hover:shadow-lg transition-shadow ${viewMode === "list" ? "flex" : ""}`}>
                                <CardHeader className={`${viewMode === "list" ? "flex-1" : ""} pb-3`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="secondary" className="text-xs">
                                            {job.category}
                                        </Badge>
                                        <Badge
                                            variant={daysLeft <= 7 ? "destructive" : daysLeft <= 15 ? "default" : "secondary"}
                                            className="text-xs"
                                        >
                                            <Clock className="h-3 w-3 mr-1" />
                                            {daysLeft > 0 ? `${daysLeft} days left` : "Expired"}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-lg leading-tight">
                                        <Link
                                            href={`/jobs/${job.title.toLowerCase().replace(/\s+/g, "-")}`}
                                            className="hover:text-blue-600"
                                        >
                                            {job.title}
                                        </Link>
                                    </CardTitle>
                                    <CardDescription className="flex items-center">
                                        <Building className="h-3 w-3 mr-1" />
                                        {job.department}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className={viewMode === "list" ? "flex-1" : ""}>
                                    <div className="space-y-2 text-sm mb-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600 flex items-center">
                                                <Users className="h-3 w-3 mr-1" />
                                                Posts:
                                            </span>
                                            <span className="font-semibold text-green-600">{job.posts}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600 flex items-center">
                                                <MapPin className="h-3 w-3 mr-1" />
                                                Location:
                                            </span>
                                            <span className="font-medium">{job.location}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600 flex items-center">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                Last Date:
                                            </span>
                                            <span className="font-semibold text-red-600">{job.lastDate}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Qualification:</span>
                                            <span className="font-medium">{job.qualification}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Salary:</span>
                                            <span className="font-medium text-blue-600">{job.salary}</span>
                                        </div>
                                    </div>
                                    <div className={`flex gap-2 ${viewMode === "list" ? "flex-col sm:flex-row" : ""}`}>
                                        <Button size="sm" className="flex-1">
                                            View Details
                                        </Button>
                                        <Button size="sm" variant="outline" className="flex-1">
                                            Apply Now
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2">
                        <Button
                            variant="outline"
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </Button>

                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            const pageNum = Math.max(1, Math.min(currentPage - 2 + i, totalPages - 4 + i))
                            return (
                                <Button
                                    key={pageNum}
                                    variant={currentPage === pageNum ? "default" : "outline"}
                                    onClick={() => setCurrentPage(pageNum)}
                                    className="w-10"
                                >
                                    {pageNum}
                                </Button>
                            )
                        })}

                        <Button
                            variant="outline"
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
