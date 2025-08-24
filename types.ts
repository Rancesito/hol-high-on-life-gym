export interface ClassInfo {
  icon: string;
  title: string;
  description: string;
}

export interface ScheduleItem {
  time: string;
  name: string;
}

export interface ScheduleDay {
  day: string;
  mañana: ScheduleItem[];
  tarde: ScheduleItem[];
  noche: ScheduleItem[];
}

export interface PricePlan {
  title: string;
  price: string;
  period: string;
  saving?: string;
  features: string[];
  notIncluded?: string[];
  highlighted: boolean;
}

export interface GalleryImage {
  title: string;
  imageUrl: string;
}