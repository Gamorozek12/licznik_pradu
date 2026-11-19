export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  apiUrl: string;
  state: string;
}
