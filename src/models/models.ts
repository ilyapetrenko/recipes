export interface IRecipe {
    id: number,
    imageUrl: string,
    name: string,
    ingredients: Record<string, any>,
    category: string,
    time: number,
    description: string
}