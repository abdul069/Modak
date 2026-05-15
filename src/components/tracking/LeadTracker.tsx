"use client";

import * as React from "react";
import { trackLead } from "@/lib/tracking";
import type { DivisionSlug } from "@/content/divisions";

export function LeadTracker({
  division,
  eventName,
}: {
  division: DivisionSlug;
  eventName: string;
}) {
  React.useEffect(() => {
    trackLead(division, eventName);
  }, [division, eventName]);
  return null;
}
