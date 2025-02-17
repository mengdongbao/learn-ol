export const httpEvents = [
  'http:200',
  'http:201',
  'http:301',
  'http:400',
  'http:401',
  'http:404',
  'http:405',
  'http:500',
] as const

export type IHttpEvents = (typeof httpEvents)[number]
