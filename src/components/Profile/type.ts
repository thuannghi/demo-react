export interface IProfile {
    src?: string,
    name?: string,
    age?: number,
    gender?: 'male' | 'female',
    logoComponent?: () => JSX.Element
}

