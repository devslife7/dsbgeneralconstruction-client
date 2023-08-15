import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { RiCloseFill } from "react-icons/Ri"

export default function MyModal({
  closeModal,
  isModalOpen,
  title = "Title",
  children = <div>Modal Content</div>,
}: {
  closeModal: () => void
  isModalOpen: boolean
  title?: string
  children?: React.ReactNode
}) {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title className="text-2xl font-medium leading-6 text-gray-900 flex justify-between text-center mb-8">
                  {title}
                  <RiCloseFill
                    className="text-2xl hover:bg-gray-100 hover:cursor-pointer rounded-md hover:text-red-500 text-gray-500"
                    onClick={closeModal}
                  />
                </Dialog.Title>

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
