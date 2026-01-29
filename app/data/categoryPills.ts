
import { AlertCircle, Brain, Droplet, FileText, HeartPulse, Pill, Scale, ScanFace, Thermometer, Video } from "lucide-react";

export const categoryPills = [
  { label: "Antykoncepcja", icon: Pill, url: "/antykoncepcja" },
  { label: "Depresja i zaburzenia lękowe", icon: Brain, url: "/depresja-i-zaburzenia-lekowe" },
  { label: "Otyłość", icon: Scale, url: "/otylosc" },
  { label: "Tabletka Dzień Po", icon: AlertCircle, url: "/tabletka-dzien-po" },
  { label: "Telekonsultacja", icon: Video, url: "/telekonsultacja" },
  { label: "Skierowanie", icon: FileText, url: "/skierowanie" },
  { label: "Cukrzyca", icon: Droplet, url: "/cukrzyca" },
  { label: "Grypa", icon: Thermometer, url: "/grypa" },
  { label: "Dermatologia", icon: ScanFace, url: "/dermatologia" },
  { label: "Nadciśnienie", icon: HeartPulse, url: "/nadcisnienie" },
];