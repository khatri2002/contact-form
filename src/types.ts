export interface SnackbarProps {
  title: string;
  description: string;
  show: boolean;
  close: () => void;
  duration?: number;
}

export type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: boolean;
};
