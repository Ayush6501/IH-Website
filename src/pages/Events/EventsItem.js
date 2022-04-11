import React from "react";
import ItemMaker from "./ItemMaker";
import Cards from "../Gallery/Cards";

let arr = [
  {
    Number: 0,
    Title: "Animatia - 2018",
    // Desc: "Intricate technical topics which are related to engineering fields are introduced, taught and explored under a stipulated time by leading industry experts. Some of our technical workshops include :\n\na)CNN and Artificial Intelligence\nb)Stock market prediction using AI/ML\nc)Git and Github Webinar\nd)Animatia: Workshop on Animation and Designing",
    Desc: "Design Workshop",
    img: "https://i.imgur.com/7IcrQFP.jpg",
    Participants: "100",
  },
  {
    Number: 1,
    Title: "Inception talks",
    // Desc: "Workshops fostering creativity, lateral thinking and promoting social causes are also conducted by us. Some of our major ventures include :\n\na)Take a chance day: The event took up the challenge of encouraging people to take that first important step towards every task to bring about changes right from the roots.\n\nb)Colloquium: The event focused on how to make the most of one’s college experience by offering them a comprehensive overview of the four years of college alongside the much needed career do’s and don'ts.",
    Desc: "Our annual event witnesses founders of various firms and organizations to talk about their journey and experiences. Both Inception talks I and II have been acquiring immense interest and traction with new and exciting speakers tuning in to educate and enlighten interested students to pave a new way to success.",
    // img: "https://i.imgur.com/hNgE2Yq.jpg",
    img: "https://i.imgur.com/F9OZE9N.jpg",
    Participants: "100",
  },
  {
    Number: 2,
    // Title: "Competitions",
    Title: "Inception 2.0",
    // Desc: "a)The “RIP” competition is organized for the first-year students participating in the 'Rural Immersion Program' of MIT. They are asked to list the main challenges faced by the people of the area and plausible solutions for the same. Winners are given prizes and an opportunity to develop a project with the club.\n\nb)We are planning more platforms like annual hackathons and coding contests for everyone to be able to showcase their skills. Stay tuned on our social media for more updates!",
    Desc: "Our annual event witnesses founders of various firms and organizations to talk about their journey and experiences. Both Inception talks I and II have been acquiring immense interest and traction with new and exciting speakers tuning in to educate and enlighten interested students to pave a new way to success.",
    // img: "https://i.imgur.com/1NguEV2.jpg",
    img: "https://i.imgur.com/GQKYOan.jpg",
    Participants: "200",
  },
  {
    Number: 3,
    Title: "C2C (College to Company)",
    Desc: "IH arranged a discussion for college students regarding internships with the best possible speakers and sources on-campus. We sparked a much needed conversation around good placements, available resources alongside procedures for making the best use of our given opportunities.",
    img: "https://i.imgur.com/6ncOfKK.jpg",
    Participants: "350",
  },
  {
    Number: 4,
    Title: "Take a Chance Day",
    Desc: "The event took up the challenge of encouraging people to take that first important step towards every task to bring about changes right from the roots.",
    img: "https://i.imgur.com/hNgE2Yq.jpg",
    Participants: "150",
  },
  {
    Number: 5,
    Title: "Youth Day",
    Desc: "On the eve of International Youth Day, the club decided to collaborate with the Rotaract Club of Bombay Airport (RCBA) for a month-long drive that could garner funds for charities to support frontline COVID workers in this dreadful pandemic by supplementing these groups with the requisite funds all across the country. We started this with the organization of a free webinar with the best collection of speakers ranging from Mr. Harish Uthaya Kumar and Mr. Shreyas Sancheti ( Cofounders of Blue Learn and Huloq.inc ) as well as Ms Radhika Bajoria ( Next Gen Awardee, LinkedIn influencer, TedX Speaker ) as the correct representation of the power of youth all across the world and educated our 150+ attendees on how they can shape themselves as responsible leaders and change makers.",
    img: "https://i.imgur.com/F2cxC8y.jpg",
    Participants: "1000",
  },
  {
    Number: 6,
    Title: "Programmers Day",
    Desc: "On the penultimate day of the one-week long drive of events under programmers week which also saw a LinkedIn workshop and a domain-confusion bootcamp, the club had the privilege of having the very founder of ML India : Ms. Priyanka Kasture as the speaker. She advocated machine learning and its importance and debunked the myths from facts associating to a multitude of topics surrounding the field.The club successfully raised thousands of rupees during the events under Programmers Week while establishing a strong sense of community of like minded individuals.",
    img: "https://i.imgur.com/xvQ1HWr.jpg",
    Participants: "150",
  },
  {
    Number: 7,
    Title: "LinkedIn Workshop",
    Desc: "Our renowned speaker Ms Dhairya Gangwani who happens to be a consulting analyst and an established LinkedIn coach, joined joined us and guided over 150+ students through the intricacies of an underrated app like LinkedIn which could prove to be a game changer in terms of their career by educating them on resume building, public speaking, profile optimization, interview preparation tips etc.",
    img: "https://i.imgur.com/XSDdoU8.jpg",
    Participants: "350",
  },
  {
    Number: 8,
    Title: "Colloqium",
    Desc: "The event focused on how to make the most of one’s college experience by offering them a comprehensive overview of the four years of college alongside the much needed career do’s and don'ts.",
    img: "https://i.imgur.com/ffYDY80.jpg",
    Participants: "150",
  },
  {
    Number: 9,
    Title: "Domain Confusion Bootcamp",
    Desc: "All three of our founders got together on the club's 3 year anniversary to put up a webinar that could illuminate the distinctive domains that engineering tackles. The tri-structured webinar involved guiding university students through various paths that they have to traverse to pave their way as apt engineers which included managing assignments and skill building alongside internships and future prospects in the correct manner.",
    img: "https://i.imgur.com/qmeMuqW.jpg",
  },
  {
    Number: 10,
    Title: "Git and Github Webinar",
    Desc: "Github Webinar conducted by Club's Founder in online mode for all streams of MIT, Pune",
    img: "https://i.imgur.com/hmbJOdu.jpg",
    Participants: "250",
  },
  {
    Number: 11,
    Title: "Research Made Easy",
    Desc: "‘Research Made Easy’ workshop on 22nd January aimed to look further into composing research papers and giving technical presentations with Ms. Neha Agrawal, the founder of WiseUp.",
    img: "https://i.imgur.com/X9F1AbH.jpg",
    Participants: "350",
  },
  {
    Number: 12,
    Title: "Stock Market Prediction",
    Desc: "Seminar on Stock Market Prediction",
    img: "https://i.imgur.com/yKTFLyd.jpg",
    Participants: "150",
  },
  {
    Number: 13,
    Title: "Artificial Intelligence and Image processing",
    Desc: "Seminar on Artificial Intelligence and Image processing",
    img: "https://i.imgur.com/rLyDOZj.jpg",
    Participants: "150",
  },
];

export default function EventsItem() {
  return (
    <div id="Main_Item_Container">
      {arr.map((element, i) => {
        return (
          <>
            <Cards
              key={i}
              img={element.img}
              title={element.Title}
              txt={element.Desc}
              Participants={element.Participants}
            />
          </>
        );
      })}
    </div>
  );
}
