export interface IGameCardContent {
  id: string;
  gameName: string;
  posterImg: string;
  date: string;
  site: string;
  description?: string; // Make optional if not always needed
}
// export interface IGameCardContent {
//   id: number | string;
//   posterImg: string;
//   gameName: string;
//   date: string;
//   site: string;
// }
export interface IBlogCardContent {
  id: number | string;
  posterImg: string;
  title: string;
  description: string;
  date: string;
  site: string;
}
