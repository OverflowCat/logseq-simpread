interface Annote {
  id: number;
  color: string;
  style: number;
  tags: string[];
  note: string;
  type: string;
  html: string;
  text: string;
  annote: string;
  items: {
    str: string;
    root: string;
  }[];
}
