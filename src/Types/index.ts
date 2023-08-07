interface IDashboard {
    company: "twitter" | "instagram" | "facebook" | "youtube"
    followers: string
    today: number
    username: string
}

export type { IDashboard }