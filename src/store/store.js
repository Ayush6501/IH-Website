import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 9,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Who are we ?",
      image: "/assets/images/team.jpg",
      aspect: 1.91,
      text: "Inaugurated in 2018 at Dr Vishwanath Karad MIT World Peace University, Innovators Hub aims towards establishing an atmosphere where individuals can explore their complete technical and non-technical potential in order to make them and their ideas market ready in today’s landscape."
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Pitch us your idea!",
      image: "/assets/images/us.jpg",
      aspect: 1.5,
      text: "Got an industrial proposal that could potentially revolutionize people’s everyday lives? Need the aid to make your dream a reality? If yes, then you are at the right place. Hit us up with your propositions now to unlock the ins and outs of the industrial potential and feasibility of your ideas."

    },
    {
      offset: 3,
      factor: 2.25,
      header: "Our Projects",
      image: "/assets/images/project.jpg",
      aspect: 1.5037,
      text: "Over the past few years, we have managed to innovate and incubate multiple inter-disciplinary projects and ideas through the collective effort of our driven team members who have managed to bring these major ideas to life."
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Our events",
      image: "/assets/images/project.jpg",
      aspect: 1.55,
      text: "Innovators hub hosts numerous workshops and events across the year. Previously, we have conducted many technical workshops on a multitude of topics like : CNN & AI, Stock market Prediction using AI/ML, Github, Animatia and many more. Our non-technical events foster a creative and social spirit via workshops and events surrounding the same theme. Check out our previous events and stay tuned for more..."
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Down Memory Lane",
      image: "/assets/images/recruit.jpg",
      aspect: 1.55,
      text: "Take a trip with us down the memory lane through our major accomplishments and milestones. This is but a gist of the exponential growth we have been striving towards in this short span of being. We have stuck by our motto of tackling each bit with perfection to unlock the impossible and here we are..."
    },
    {
      offset: 7,
      factor: 1.05,
      header: "Meet Our Team",
      image: "/assets/images/us.jpg",
      aspect: 2.4,
      text: "We are constantly tinkered by a team which questions, challenges and unlocks creativity on every turn. The brightest minds from backgrounds of Computer Science, Electronics, Mechanics, Design, and many other exciting non-technical avenues build our identity as a collective."
    },
    {
      offset: 8,
      factor: 1.75,
      header: "We are recruiting!",
      image: "/assets/images/recruit.jpg",
      aspect: 1.55,
      text: "Wanna join the hustlers to unlock your true potential as an innovator, engineer, coder, developer, designer, content writer, manager or literally anything you could imagine? Apply to become a part of the most exclusive pioneers in engineering and its expanded sectors with IH!"
    }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [

  ],
  bulbs: [
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 1.8, factor: 2.1 },
    { x: 2, offset: 0, pos: new Vector3(), scale: 11, factor: 6 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 2.25, factor: 0.85 },
    // { x: -5, offset: 7, pos: new Vector3(), scale: 12, factor: 2 },
    // { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 }
  ],
  top: createRef()
}

export default state
