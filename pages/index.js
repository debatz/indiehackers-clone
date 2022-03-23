import { useRouter } from "next/router";

import Head from "next/head";
import TitleBar from "@/components/organisms/TitleBar";
import Header from "@/components/organisms/Header";
import Border from "@/components/atoms/Border";
import TimeFilters from "@/components/molecules/PostLoop/TimeFilters";
import PostLoop from "@/components/organisms/PostLoop/PostLoop";
import JobLoop from "@/components/organisms/RemoteJobs/JobLoop";
import PartnerUpLoop from "@/components/organisms/PartnerUp/PartnerUpLoop";
import MeetupsLoop from "@/components/organisms/Meetups/MeetupsLoop";
import Footer from "@/components/organisms/Footer/Footer";

export default function Home() {
  const posts = [
    {
      title: "Where do you hang out online?",
      author: "Tim",
      authorBadge:
        "https://storage.googleapis.com/indie-hackers.appspot.com/avatars/52x52_jOi6X6JsNPQgVBZjk6Qb2fQIPDu1.webp",
      collection: true,
      collectionName: "No-Code",
      collectionBadge:
        "https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/no-code/28x28_no-code.webp",
      upvotes: 7,
      comments: 13,
    },
    {
      title:
        "Household name superstar just endorsed my product in a magazine interview",
      author: "Tom",
      authorBadge:
        "https://storage.googleapis.com/indie-hackers.appspot.com/avatars/52x52_YdZoKFYO86bTRp45KkUBY0pUaCB3.webp",
      collection: true,
      collectionName: "Lessons Learned",
      collectionBadge:
        "https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/lessons-learned/28x28_lessons-learned.webp",
      upvotes: 8,
      comments: 7,
    },
  ];

  const jobInfo = [
    {
      title: "Frontend Engineer (Web&Mobile)",
      company: "Chimpy",
      jobBadge:
        "https://storage.googleapis.com/indie-hackers.appspot.com/product-avatars/chimpy/52x52_chimpy.webp?1647890542403",
      minSalary: "80,000",
      maxSalary: "110,000",
      currency: "$",
      type: "Full Time",
      datePosted: "2022-03-19T23:28:56.782Z",
    },
    {
      title: "Frontend Engineer (Web&Mobile)",
      company: "Chimpy",
      jobBadge:
        "https://storage.googleapis.com/indie-hackers.appspot.com/product-avatars/chimpy/52x52_chimpy.webp?1647890542403",
      minSalary: "80,000",
      maxSalary: "110,000",
      currency: "$",
      type: "Full Time",
      datePosted: "2022-03-19T23:28:56.782Z",
    },
  ];

  const partnerInfo = [
    {
      title: "Software Developer Looking For Email Marketer",
      datePosted: "2022-03-19T23:28:56.782Z",
      icon: "StarIcon",
    },
    {
      title: "Looking for a full-stack dev co-founder for a SaaS startup",
      datePosted: "2022-03-19T23:28:56.782Z",
      icon: "CodeIcon",
    },
  ];

  const meetupInfo = [
    {
      title: "IndieBeers // London Meetup #25",
      location: "London, United Kingdom",
    },
    {
      title:
        "Q&A with Kristin Zhivago: How to put yourself in your customers shoes",
      location: "Remote",
    },
    {
      title:
        "Q&A with Kristin Zhivago: How to put yourself in your customers shoes",
      location: "Remote",
    },
    {
      title:
        "Q&A with Kristin Zhivago: How to put yourself in your customers shoes",
      location: "Remote",
    },
    {
      title:
        "Q&A with Kristin Zhivago: How to put yourself in your customers shoes",
      location: "Remote",
    },
  ];

  const footerColumns = [
    {
      title: "Community",
      links: [
        {
          title: "Groups",
          href: "/",
          icon: "",
        },
        {
          title: "Meetups",
          href: "/",
          icon: "",
        },
        {
          title: "Top Today",
          href: "/",
          icon: "",
        },
        {
          title: "Top This Week",
          href: "/",
          icon: "",
        },
        {
          title: "Top This Month",
          href: "/",
          icon: "",
        },
        {
          title: "Join",
          href: "/",
          icon: "ArrowRightIcon",
        },
      ],
    },
    {
      title: "Products",
      links: [
        {
          title: "All Products",
          href: "/",
          icon: "",
        },
        {
          title: "Highest Revenue",
          href: "/",
          icon: "",
        },
        {
          title: "Side Projects",
          href: "/",
          icon: "",
        },
        {
          title: "Self-Funded",
          href: "/",
          icon: "",
        },
        {
          title: "Add Yours",
          href: "/",
          icon: "ArrowRightIcon",
        },
      ],
    },
    {
      title: "Learn",
      links: [
        {
          title: "Explore",
          href: "/",
          icon: "",
        },
        {
          title: "Starte Here",
          href: "/",
          icon: "",
        },
        {
          title: "Podcasts",
          href: "/",
          icon: "",
        },

        {
          title: "Contribute",
          href: "/",
          icon: "ArrowRightIcon",
        },
      ],
    },
  ];
  
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitleBar />
      <main></main>

      <section className="mx-4">
        <div className="mt-9">
          <Header />
        </div>
        <Border className="my-3" />

        <TimeFilters />
        <Border className="my-3" />
        <PostLoop props={posts} />
      </section>
      <section className="mx-4 mt-9">
        <JobLoop props={jobInfo} />
      </section>
      <section className="mx-4 mt-9">
        <PartnerUpLoop props={partnerInfo} />
      </section>
      <section className="mx-4 mt-9">
        <MeetupsLoop props={meetupInfo} />
      </section>
      <footer className="">
        <Footer props={footerColumns} router={router}></Footer>
      </footer>
    </div>
  );
}
