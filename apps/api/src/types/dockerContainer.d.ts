export interface IDockerContainer {
    name: string;
    status: string;
    image: string;
    ports: string[];
    lastCheckedAt: Date;
}