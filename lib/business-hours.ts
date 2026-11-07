"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export interface BusinessStatus {
  /** Dentro do horário de atendimento agora. */
  online: boolean;
  /** Hora atual no fuso do atendimento, "14:32". */
  time: string;
}

/** Calcula o status no fuso configurado, independente do fuso do visitante. */
export function getBusinessStatus(date = new Date()): BusinessStatus {
  const { timeZone, days, open, close } = siteConfig.hours;

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = WEEKDAYS.indexOf(get("weekday"));
  const hour = Number(get("hour"));
  const time = `${get("hour")}:${get("minute")}`;

  return {
    online: days.includes(day) && hour >= open && hour < close,
    time,
  };
}

/**
 * Status ao vivo (atualiza a cada 30s). Começa como null no servidor para
 * não haver diferença de hidratação; os componentes tratam null como
 * "ainda calculando".
 */
export function useBusinessStatus() {
  const [status, setStatus] = useState<BusinessStatus | null>(null);

  useEffect(() => {
    const tick = () => setStatus(getBusinessStatus());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return status;
}
