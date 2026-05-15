import {
  Home,
  Layers,
  Layers3,
  PanelsTopLeft,
  Square,
  Droplet,
  Hammer,
  Bath,
  Utensils,
  Paintbrush,
  Zap,
  Wind,
  Flame,
  Thermometer,
  Snowflake,
  GitBranch,
  Wrench,
  Sun,
  BatteryCharging,
  LineChart,
  PlugZap,
  Building,
  Building2,
  CreditCard,
  DoorOpen,
  MoveHorizontal,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  home: Home,
  layers: Layers,
  "layers-3": Layers3,
  "panels-top-left": PanelsTopLeft,
  square: Square,
  droplet: Droplet,
  hammer: Hammer,
  bath: Bath,
  utensils: Utensils,
  paintbrush: Paintbrush,
  zap: Zap,
  wind: Wind,
  flame: Flame,
  thermometer: Thermometer,
  snowflake: Snowflake,
  "git-branch": GitBranch,
  wrench: Wrench,
  sun: Sun,
  "battery-charging": BatteryCharging,
  "line-chart": LineChart,
  "plug-zap": PlugZap,
  building: Building,
  "building-2": Building2,
  "credit-card": CreditCard,
  "door-open": DoorOpen,
  "move-horizontal": MoveHorizontal,
  warehouse: Warehouse,
  roof: Home,
};

export function DivisionIcon({
  iconKey,
  className,
}: {
  iconKey: string;
  className?: string;
}) {
  const Icon = ICONS[iconKey] ?? Home;
  return <Icon className={className} aria-hidden />;
}
