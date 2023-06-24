import img1 from './images/image-tanya.jpg';
import img2 from './images/image-john.jpg';

interface DataInterface {
  id: number;
  img: string;
  text: string;
  name: string;
  job: string;
}

//DataInterface[]
export const data: Array<DataInterface> = [
  {
    id: 0,
    img: img1,
    name: 'Tanya Sinclair',
    job: 'UX Engineer',
    text: "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
  },
  // {
  //   id: 1,
  //   img: img2,
  //   name: 'John Tarkpor',
  //   job: 'Junior Front-end Developer',
  //   text: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer",
  // },
];
