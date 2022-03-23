import MeetupDate from "@/components/atoms/Meetups/MeetupDate";
import MeetupsSectionTitle from "@/components/atoms/Meetups/MeetupsSectionTitle";
import MeetupTitle from "@/components/atoms/Meetups/MeetupTitle";
import MeetupsInfo from "@/components/atoms/Meetups/MeetupsInfot";

export default function MeetupCard({ props }) {
  return (
    <div className="flex items-center">
      <div className="w-1/5">
        <div className="w-12 h-12">
          <MeetupDate></MeetupDate>
        </div>
      </div>
      <div className="w-4/5">
        <MeetupTitle className="truncate text-ellipsis">
          {props.title}
        </MeetupTitle>
        <MeetupsInfo>{props.location}</MeetupsInfo>
      </div>
    </div>
  );
}
