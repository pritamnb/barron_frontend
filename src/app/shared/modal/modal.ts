import { ModalContainer } from './modal.container';

export function Modal() {
  return (target) => {
    Object.assign(target.prototype, ModalContainer.prototype);
  };
}
