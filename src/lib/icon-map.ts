import {
  Home,
  Layers,
  Flame,
  Thermometer,
  Wind,
  Droplet,
  Bath,
  Snowflake,
  Zap,
  Sun,
  Plug,
  ShieldCheck,
  Award,
  Wrench,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Home,
  Layers,
  Flame,
  Thermometer,
  Wind,
  Droplet,
  Bath,
  Snowflake,
  Zap,
  Sun,
  Plug,
  ShieldCheck,
  Award,
  Wrench,
  Sparkles,
};

export function resolveIcon(name: string | undefined): LucideIcon {
  if (!name) return Sparkles;
  return iconMap[name] ?? Sparkles;
}
