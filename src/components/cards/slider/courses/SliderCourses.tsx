import "./sliderCourses.scss";
import { CourseCard } from ".";

export interface ICardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  index: number;
}

const food: [string, number, number][] = [
  ["🐙", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];

export default function SliderCourses() {
  return (
    <div className="courses-container">
      {food.map(([emoji, hueA, hueB], index) => (
        <CourseCard emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} index={index}
        />
      ))}
    </div>
  );
}