import JobTitle from "@/components/atoms/RemoteJobs/JobTitle";
import JobInfo from "@/components/molecules/RemoteJobs/JobInfo";
import JobAge from "@/components/atoms/RemoteJobs/JobAge";
import JobBadge from "@/components/atoms/RemoteJobs/JobBadge";

export default function JobCard({ props }) {
    const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
    const currentDate = new Date();
    return (
        <div className="flex justify-between">
        <div className="flex items-center space-x-2">
            <JobBadge jobBadge={props.jobBadge} />
            <div>
            <JobTitle>{props.title}</JobTitle>
            <JobInfo
                company={props.company}
                minSalary={props.minSalary}
                maxSalary={props.maxSalary}
                currency={props.currency}
                type={props.type}
            />
            </div>
        </div>
        <JobAge>{diffDays(currentDate, new Date(props.datePosted))}d</JobAge>
        </div>
  );
}
