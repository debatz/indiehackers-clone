import MeetupsSectionTitle from '@/components/atoms/Meetups/MeetupsSectionTitle';
import MeetupCard from "@/components/molecules/Meetups/MeetupCard";

export default function MeetupsLoop({ props }) {
  return (
    <div className='space-y-4'>
      <MeetupsSectionTitle>Meetups</MeetupsSectionTitle>
      <div className="space-y-3">
        {props.map((item, index) => {
          return (
            <div key={index}>
              <MeetupCard props={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
