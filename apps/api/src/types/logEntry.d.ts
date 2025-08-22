export interface ILogEntry {
  service: string;
  message: string;
  level: "info" | "warning" | "error";
  timestamp: Date;
}
