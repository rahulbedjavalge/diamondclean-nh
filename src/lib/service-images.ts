import hotel from "@/assets/gallery-1.jpg";
import staffing from "@/assets/gallery-2.jpg";
import restaurant from "@/assets/gallery-3.jpg";
import commercial from "@/assets/gallery-4.jpg";
import type { ServiceSlug } from "./translations";

export const SERVICE_IMAGES: Record<ServiceSlug, string> = {
  "hotel-housekeeping": hotel,
  staffing,
  "restaurant-cleaning": restaurant,
  "commercial-cleaning": commercial,
};

export const SERVICE_PATHS = {
  "hotel-housekeeping": "/services/hotel-housekeeping",
  staffing: "/services/staffing",
  "restaurant-cleaning": "/services/restaurant-cleaning",
  "commercial-cleaning": "/services/commercial-cleaning",
} as const;

