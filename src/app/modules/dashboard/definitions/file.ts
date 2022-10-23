export interface File {
  id: string,
  key: string,
  name: string,
  link: string,
  expires: Date,
  expiry: string,
  downloads: number,
  maxDownloads: number,
  autoDelete: boolean,
  size: number,
  mimeType: string,
  created: Date,
  modified: Date
}
