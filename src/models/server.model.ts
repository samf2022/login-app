export interface iServer {
    routes(): void
    middlewares(): void
    initialized(): void
}