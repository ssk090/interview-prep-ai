import { ReactNode } from 'react'

const InterviewidLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-screen max-w-6xl overflow-hidden">
            {children}
        </div>
    )
}
export default InterviewidLayout
