import { notFound } from "next/navigation"
import { getProjectBySlug, projects } from "@/lib/data"
import ProjectDetailPage from "@/components/pages/project-detail-page"

interface Props {
    params: { slug: string }
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export default function Page({ params }: Props) {
    const project = getProjectBySlug(params.slug)

    if (!project) {
        notFound()
    }

    return <ProjectDetailPage project={project} />
}
