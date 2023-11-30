export interface IRoute {
  path: string;
  Component: () => JSX.Element;
}

export interface IDay {
  id: string;
  name: string;
  password: string;
  letterDescription: string;
  status: IStatus;
}

export interface IAttempt {
  letters: string[];
  statuses: ("correct" | "incorrect" | "misplaced")[];
}

export type IStatus = 'Open' | 'Locked' | 'Eliminated' | 'Claimed';
