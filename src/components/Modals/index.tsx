import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import classNames from 'classnames'

import { IModal } from '../../utils/interface'
import Close from '../Icons/close'
import OkButton from '../Buttons/okButton'
import CancelButton from '../Buttons/cancelButton'

const Modal: React.FC<IModal> = (props) => {
  const {
    className,
    isOpen,
    handleModal,
    title = 'title',
    // icon,
    content,
    okButtonLabel = 'Ok',
    onOk,
    cancelButtonLabel = 'Cancel',
    onCancel,
  } = props

  const onClickOk = () => {
    handleModal(false)
    if (onOk) onOk()
  }

  const onClickCancel = () => {
    handleModal(false)
    if (onCancel) onCancel()
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className={classNames('fixed z-10 inset-0 overflow-y-auto', className)}
        onClose={handleModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg p-4 text-left overflow shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:px-6 sm:py-9">
              <div className="hidden sm:block absolute top-0 right-0 p-4 sm:p-6">
                <button
                  type="button"
                  className="bg-white rounded-full p-3 shadow hover:text-black hover:bg-dark-shade1  focus:outline-none"
                  onClick={() => handleModal(false)}
                >
                  <span className="sr-only">Close</span>
                  <Close className="h-6 w-6" size={12} aria-hidden="true" />
                </button>
              </div>
              <div className="flex mr-14 ml-2" id="modal-header">
                <h6>{title}</h6>
              </div>
              <div id="modal-body">{content}</div>
              <div className="sm:flex sm:flex-row-reverse" id="modal-footer">
                {onOk ? (
                  <OkButton
                    label={okButtonLabel}
                    className={classNames('w-full inline-flex justify-center sm:ml-3 sm:w-auto', {
                      'px-16': !onCancel,
                    })}
                    onClick={onClickOk}
                  />
                ) : null}
                {onCancel ? (
                  <CancelButton
                    label={cancelButtonLabel}
                    className={classNames(
                      'mt-3 w-full inline-flex justify-center sm:mt-0 sm:w-auto',
                      { 'px-16': !onOk }
                    )}
                    onClick={onClickCancel}
                  />
                ) : null}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
