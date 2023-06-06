export interface Articles {
    source: Source
    author?: string
    title: string
    description: string
    url: string
    urlToImage?: string
    publishedAt: string
    content: string
    id: string,
    order: string,
    error: string,
    dateError: Date
  }
  
  export interface Source {
    id?: string
    name: string
  }