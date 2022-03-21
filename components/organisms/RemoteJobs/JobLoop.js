import SectionTitle from '@/components/atoms/RemoteJobs/SectionTitle';
import JobCard from '@/components/organisms/RemoteJobs/JobCard';

export default function JobLoop({props}) {
  return (
    <div className='space-y-5'>
      <SectionTitle>Remote Jobs</SectionTitle>
      {props.map((item, index) => {
        return <JobCard props={item} key={index} />;
      })}
    </div>
  );
}
