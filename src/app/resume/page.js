import React from 'react'
import ResumeCTR from '@/containers/resume/ResumeCTR'

export const metadata = {
    title: "Resume",
    description: "Explore Adil's professional resume including experience, skills, and achievements.",
    openGraph: {
        title: "Resume | Adil's Portfolio",
        description: "Check out Adil's detailed resume with skills, projects, and achievements.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Resume | Adil's Portfolio",
        description: "Adil's complete resume showcasing expertise and experience.",
    },
};

const page = () => {
    return (
        <div>
            <ResumeCTR />
        </div>
    )
}

export default page
