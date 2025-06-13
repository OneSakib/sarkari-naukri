export interface Post {
  id: number;
  slug: string;
  title: string;
  short_info: string;
  content: string;
}
export interface Desktop {
  alerts: Post[];
  latest_jobs: Post[];
  results: Post[];
  admit_cards: Post[];
  answer_keys: Post[];
  syllabus: Post[];
  admission: Post[];
  certificate_verification: Post[];
  importants: Post[];
}
