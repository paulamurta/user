export interface ModalProps {
  isModalActive?: boolean;
  closeModal: () => void;
  firstPassword?: string;
  keyId?: number | string;
}

export interface IUser {
  user_id?: number;
  user_name: string;
  user_email: string;
  user_status?: boolean;
}

export interface IErrors {
  field: string;
  message: string;
}
