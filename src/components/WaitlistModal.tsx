import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// App Colors - matching the ones from page.tsx
const MODAL_COLORS = {
  primary: "#FF4B6E",
  primaryDark: "#E63F61",
  primaryLight: "#FF6B8A",
  dark: "#1A202C",
  gray: "#64748B",
  grayLight: "#94A3B8",
  border: "#E2E8F0",
  white: "#FFFFFF",
};

interface WaitlistModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function WaitlistModal({
  isOpen,
  setIsOpen,
}: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission

    const data = {
      email: email,
      product: "fliq | dating",
    };

    fetch(
      "https://asia-south1-zap-dev-384118.cloudfunctions.net/feedback-service",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then(() => {
        console.log("Form submitted successfully");
        setEmail("");
      })
      .catch((error) => console.error(error));

    setSubmitted(true);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-xl bg-white px-5 pb-6 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-8 mx-4'>
                <div className='absolute right-0 top-0 pr-4 pt-4'>
                  <button
                    type='button'
                    className='rounded-full bg-[#FFF5F7] p-1.5 text-[#64748B] hover:text-[#1A202C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4B6E]'
                    onClick={() => setIsOpen(false)}
                  >
                    <span className='sr-only'>Close</span>
                    <XMarkIcon className='h-5 w-5' aria-hidden='true' />
                  </button>
                </div>
                <div>
                  <div className='mt-1 text-center sm:mt-0 sm:text-left w-full'>
                    <div className='w-10 h-10 rounded-full bg-[#FFF5F7] flex items-center justify-center mb-4 sm:mb-6 mx-auto sm:mx-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-5 h-5 text-[#FF4B6E]'
                      >
                        <path d='M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z' />
                      </svg>
                    </div>
                    <Dialog.Title
                      as='h3'
                      className='text-2xl font-semibold leading-6 text-[#1A202C] mb-3 sm:mb-1'
                    >
                      Join the Waitlist
                    </Dialog.Title>
                    <p className='text-sm text-[#64748B] mb-6'>
                      Get early access to Fliq when we launch.
                    </p>
                    {!submitted ? (
                      <form onSubmit={handleSubmit} className='space-y-5'>
                        <div>
                          <label
                            htmlFor='email'
                            className='block text-sm font-medium text-[#1A202C] mb-1'
                          >
                            Email
                          </label>
                          <input
                            type='email'
                            name='email'
                            id='email'
                            className='block w-full rounded-lg border border-[#E2E8F0] px-3 py-2.5 shadow-sm focus:border-[#FF4B6E] focus:ring-[#FF4B6E] sm:text-sm'
                            placeholder='you@example.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>

                        <button
                          type='submit'
                          className='w-full rounded-lg bg-[#FF4B6E] px-4 py-3 mt-2 text-sm font-semibold text-white shadow-sm hover:bg-[#E63F61] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4B6E] focus:ring-offset-2'
                        >
                          Join Waitlist
                        </button>
                        <p className='text-xs text-[#94A3B8] text-center mt-4'>
                          By joining, you agree to receive updates about Fliq.
                        </p>
                      </form>
                    ) : (
                      <div className='text-center py-8 sm:py-10'>
                        <div className='w-16 h-16 bg-[#FFF5F7] rounded-full flex items-center justify-center mx-auto mb-4'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-8 h-8 text-[#FF4B6E]'
                          >
                            <path
                              fillRule='evenodd'
                              d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </div>
                        <h4 className='text-xl font-semibold text-[#1A202C] mb-2'>
                          Thanks for joining!
                        </h4>
                        <p className='text-[#64748B] mb-6'>
                          We'll notify you when Fliq launches at an airport near
                          you.
                        </p>
                        <button
                          type='button'
                          onClick={() => setIsOpen(false)}
                          className='inline-flex justify-center rounded-md bg-[#FFF5F7] px-4 py-2 text-sm font-medium text-[#FF4B6E] hover:bg-[#FFE5EC] transition-colors'
                        >
                          Close
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
