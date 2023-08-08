type Company = "twitter" | "instagram" | "facebook" | "youtube"


interface IDashboard {
    company: Company
    followers: string
    today: number
    username: string
}


interface IOverview {
    type: "Retweets" | "Likes" | "Page Views" | "Profile Views" | "Total Views"
    platformSpecificValue: string
    company: Company
    percentage: number
}


export type { IDashboard, IOverview }