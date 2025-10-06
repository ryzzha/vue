interface INote {
    id: string
    text: string
    priority: "low" | "medium" | "high"
    date: string
}

export type { INote }