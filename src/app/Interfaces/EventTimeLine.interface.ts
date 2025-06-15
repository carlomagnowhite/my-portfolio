export interface EventTimeLine {
    date: string;
    icon: string;
    color?: string;
    project?: string;
    position: string;
    place: string;
    responsibilities: string[];
    technologies: { icon: string, tooltip: string, colored: boolean }[];
    iconStyle?: string[];
    tooltip?: string;
}
