export class Spell {
  name: string;
  level: number; // 0 is cantrip
  range?: string;
  school?: string;

  verbal?: boolean = false;
  somatic?: boolean = false;
  material?: string;

  castingTime?: string = "1 Action";
  ritual?: boolean = false;
  concentration?: boolean = false;
  duration?: string;
  classes?: string[]; // for filtering

  // source metadata
  source?: string;
  page?: string | number;
}
