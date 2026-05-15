"use client";

import * as React from "react";
import { trackViewContent } from "@/lib/tracking";
import type { DivisionSlug } from "@/content/divisions";

export function ViewContentTracker({ division }: { division: DivisionSlug }) {
  React.useEffect(() => {
    trackViewContent(division);
  }, [division]);
  return null;
}
