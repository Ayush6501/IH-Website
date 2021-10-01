import React from "react";
import Item_maker from "./Item_maker";

let arr = [
  {
    Number: 0,
    Title: "Technical Workshops",
    Desc: "Intricate technical topics which are related to engineering fields are introduced, taught and explored under a stipulated time by leading industry experts. Some of our technical workshops include :\n\na)CNN and Artificial Intelligence\nb)Stock market prediction using AI/ML\nc)Git and Github Webinar\nd)Animatia: Workshop on Animation and Designing",
    Img: "https://firebasestorage.googleapis.com/v0/b/ihwebsite.appspot.com/o/events%2F1.png?alt=media&token=f7ec909d-f7ed-4524-b7cd-bf188503c42b",
  },
  {
    Number: 1,
    Title: "Non-Technical Workshops",
    Desc: "Workshops fostering creativity, lateral thinking and promoting social causes are also conducted by us. Some of our major ventures include :\n\na)Take a chance day: The event took up the challenge of encouraging people to take that first important step towards every task to bring about changes right from the roots.\n\nb)Colloquium: The event focused on how to make the most of one’s college experience by offering them a comprehensive overview of the four years of college alongside the much needed career do’s and don'ts.",
    Img: "https://firebasestorage.googleapis.com/v0/b/ihwebsite.appspot.com/o/events%2F2.png?alt=media&token=8017dbb7-4180-4055-93cb-82d4718439ee",
  },
  {
    Number: 2,
    Title: "Competitions",
    Desc: "a)The “RIP” competition is organized for the first-year students participating in the 'Rural Immersion Program' of MIT. They are asked to list the main challenges faced by the people of the area and plausible solutions for the same. Winners are given prizes and an opportunity to develop a project with the club.\n\nb)We are planning more platforms like annual hackathons and coding contests for everyone to be able to showcase their skills. Stay tuned on our social media for more updates!",
    Img: "https://firebasestorage.googleapis.com/v0/b/ihwebsite.appspot.com/o/events%2F3.png?alt=media&token=c0bdd434-06c4-4c5b-8b43-17c8ba46a391",
  },
  {
    Number: 3,
    Title: "Inception talks",
    Desc: "Our annual event witnesses founders of various firms and organizations to talk about their journey and experiences. Both Inception talks I and II have been acquiring immense interest and traction with new and exciting speakers tuning in to educate and enlighten interested students to pave a new way to success.",
    Img: "https://firebasestorage.googleapis.com/v0/b/ihwebsite.appspot.com/o/events%2F4.png?alt=media&token=c070b647-d137-46b7-a843-b6ea089a481e",
  },
  {
    Number: 4,
    Title: "Surveys",
    Desc: "The club conducts surveys on-campus as well as around the city to understand the problems faced by students and people. We analyze this data and come up with helpful projects to tackle the same. More and more ways to conduct these are being undertaken by us to ensure continued learning.",
    Img: "https://firebasestorage.googleapis.com/v0/b/ihwebsite.appspot.com/o/events%2F5.png?alt=media&token=66f11da0-86a6-4b5b-bc9e-a49eb116620b",
  },
  {
    Number: 5,
    Title: "C2C (College to Company)",
    Desc: "IH arranged a discussion for college students regarding internships with the best possible speakers and sources on-campus. We sparked a much needed conversation around good placements, available resources alongside procedures for making the best use of our given opportunities.",
    Img: "https://firebasestorage.googleapis.com/v0/b/ihwebsite.appspot.com/o/events%2F6.png?alt=media&token=8a6c41a0-b11e-4b18-8dd2-3877327a6365",
  },
  {
    Number: 6,
    Title: "Youth Day",
    Desc: "On the eve of International Youth Day, the club decided to collaborate with the Rotaract Club of Bombay Airport (RCBA) for a month-long drive that could garner funds for charities to support frontline COVID workers in this dreadful pandemic by supplementing these groups with the requisite funds all across the country. We started this with the organization of a free webinar with the best collection of speakers ranging from Mr. Harish Uthaya Kumar and Mr. Shreyas Sancheti ( Cofounders of Blue Learn and Huloq.inc ) as well as Ms Radhika Bajoria ( Next Gen Awardee, LinkedIn influencer, TedX Speaker ) as the correct representation of the power of youth all across the world and educated our 150+ attendees on how they can shape themselves as responsible leaders and change makers.",
    Img: "https://firebasestorage.googleapis.com/v0/b/ihwebsite.appspot.com/o/events%2F7.png?alt=media&token=5b4ac7ff-c7e8-4833-8bfc-e507bd315ee0",
  },
  {
    Number: 7,
    Title: "LinkedIn Workshop",
    Desc: "Our renowned speaker Ms Dhairya Gangwani who happens to be a consulting analyst and an established LinkedIn coach, joined joined us and guided over 150+ students through the intricacies of an underrated app like LinkedIn which could prove to be a game changer in terms of their career by educating them on resume building, public speaking, profile optimization, interview preparation tips etc.",
    Img: "https://firebasestorage.googleapis.com/v0/b/ihwebsite.appspot.com/o/events%2F8.png?alt=media&token=6f96c3d2-8e8e-4700-90d0-fb06b31de341",
  },
  {
    Number: 8,
    Title: "Domain Confusion Bootcamp",
    Desc: "All three of our founders got together on the club's 3 year anniversary to put up a webinar that could illuminate the distinctive domains that engineering tackles. The tri-structured webinar involved guiding university students through various paths that they have to traverse to pave their way as apt engineers which included managing assignments and skill building alongside internships and future prospects in the correct manner.",
    Img: "https://firebasestorage.googleapis.com/v0/b/ihwebsite.appspot.com/o/events%2F9.png?alt=media&token=f4e67468-4856-457d-b8c9-f12c359f3831",
  },
  {
    Number: 9,
    Title: "Programmers Day",
    Desc: "On the penultimate day of the one-week long drive of events under programmers week which also saw a LinkedIn workshop and a domain-confusion bootcamp, the club had the privilege of having the very founder of ML India : Ms. Priyanka Kasture as the speaker. She advocated machine learning and its importance and debunked the myths from facts associating to a multitude of topics surrounding the field.The club successfully raised thousands of rupees during the events under Programmers Week while establishing a strong sense of community of like minded individuals.",
    Img: "https://firebasestorage.googleapis.com/v0/b/ihwebsite.appspot.com/o/events%2F10.png?alt=media&token=dce02bec-74bb-4a68-b2fa-d2b23e45bfb0",
  },
];

export default function Events_item() {
  return (
    <div id="Main_Item_Container">
      {arr.map((element) => {
        return <Item_maker arg={element} />;
      })}
    </div>
  );
}
