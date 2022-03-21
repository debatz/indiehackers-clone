import JobInfoSpan from "@/components/atoms/RemoteJobs/JobInfoSpan";

export default function JobInfo({ company, minSalary, maxSalary, currency, type }) {
  return (
    <ul className="flex space-x-1">
      <li className="space-x-1">
        <JobInfoSpan>{company}</JobInfoSpan>
        <span className="text-[#b6cce2] opacity-50">·</span>
        <JobInfoSpan>
          {currency}
          {minSalary} - {currency}
          {maxSalary}
        </JobInfoSpan>
        <span className="text-[#b6cce2] opacity-50">·</span>
        <JobInfoSpan>{type}</JobInfoSpan>
      </li>
    </ul>
  );
}
