export interface IAlert {
  service: string;
  message: string;
  severity: "info" | "warning" | "critical";
  status: "active" | "resolved";
  createdAt: Date;
  resolvedAt?: Date;
}
