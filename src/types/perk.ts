export type Perk = {
  company_name: string;
  deal_text: string;
  description: string;
  image_src: string;
};

export type PerksData = {
  [category: string]: Perk[];
};