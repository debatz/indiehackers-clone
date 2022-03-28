import JobTitle from "@/components/atoms/Index/RemoteJobs/JobTitle";
import JobInfo from "@/components/molecules/Index/RemoteJobs/JobInfo";
import JobAge from "@/components/atoms/Index/RemoteJobs/JobAge";
import JobBadge from "@/components/atoms/Index/RemoteJobs/JobBadge";
import { diffDays } from 'utils/dateDifference';

export default function JobCard({ props }) {
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
