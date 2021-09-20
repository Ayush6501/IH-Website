import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Meet Our Team",
      image: "/assets/images/team.jpg",
      aspect: 1.91,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula rutrum dapibus. Vestibulum aliquam, " +
          "est id accumsan condimentum, nisi nibh luctus elit, vitae feugiat dolor. "
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Who are we?",
      image: "/assets/images/us.jpg",
      aspect: 1.5,
      text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula rutrum dapibus. Vestibulum aliquam, " +
          "est id accumsan condimentum, nisi nibh luctus elit, vitae feugiat dolor. "
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Our Projects",
      image: "/assets/images/project.jpg",
      aspect: 1.5037,
      text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula rutrum dapibus. Vestibulum aliquam, " +
          "est id accumsan condimentum, nisi nibh luctus elit, vitae feugiat dolor. "
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Pitch us your Idea",
      image: "/assets/images/idea.jpg",
      aspect: 0.665,
      text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula rutrum dapibus. Vestibulum aliquam, " +
          "est id accumsan condimentum, nisi nibh luctus elit, vitae feugiat dolor. "
    },
    {
      offset: 5,
      factor: 1.75,
      header: "We are recruiting!",
      image: "/assets/images/recruit.jpg",
      aspect: 1.55,
      text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula rutrum dapibus. Vestibulum aliquam, " +
          "est id accumsan condimentum, nisi nibh luctus elit, vitae feugiat dolor. "
    },
    {
      offset: 7,
      factor: 1.05,
      header: "Gallery/Achievements",
      image: "/assets/images/us.jpg",
      aspect: 1.77,
      text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula rutrum dapibus. Vestibulum aliquam, " +
          "est id accumsan condimentum, nisi nibh luctus elit, vitae feugiat dolor. "
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
    { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 }
  ],
  top: createRef()
}

export default state
