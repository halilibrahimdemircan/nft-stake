import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import boostImage from "../../images/boostImage.svg";
import tensorIcon from "../../images/icons/tensorIcon.svg";

export default function InfoModal({ open, setOpen, type }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* // ekranda görünen bölüm */}
              <Dialog.Panel
                style={{
                  background:
                    "linear-gradient(277deg, #A81AFF -5.35%, #FC1C6D 125.47%)",
                  boxShadow: "0px 4px 32px 0px #000",
                }}
                className="flex flex-col gap-6 min-w-[840px] h-[413px] border border-[#FF7FBE] relative transform overflow-hidden rounded-[16px]  px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6  "
              >
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block ">
                  <button
                    type="button"
                    className="rounded-md   hover:text-gray-500 focus:outline-none  "
                    onClick={() => setOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M0.569378 17C0.406699 17 0.271132 16.9514 0.162679 16.8543C0.0542265 16.7571 0 16.6357 0 16.49C0 16.4414 0.00903775 16.3929 0.0271132 16.3443C0.027554 16.3431 0.0279947 16.3419 0.0284355 16.3407C0.0635043 16.2465 0.112585 16.1581 0.174022 16.0785L5.68786 8.93483C5.96347 8.57776 5.96592 8.08038 5.69383 7.72061L0.460925 0.801428C0.406699 0.704286 0.379585 0.607143 0.379585 0.510001C0.379585 0.364286 0.433812 0.242858 0.542265 0.145715C0.650718 0.0485718 0.777246 0 0.92185 0L3.71451 0C3.93142 0 4.10314 0.0485718 4.22966 0.145715C4.35619 0.242858 4.46465 0.348096 4.55502 0.461428L7.74712 4.66272C8.14648 5.18833 8.93655 5.18962 9.33763 4.66531L12.5534 0.461428C12.6257 0.348096 12.7251 0.242858 12.8517 0.145715C12.9963 0.0485718 13.177 0 13.3939 0L16.0239 0C16.1866 0 16.3222 0.0485718 16.4306 0.145715C16.5391 0.242858 16.5933 0.364286 16.5933 0.510001C16.5933 0.607143 16.5571 0.704286 16.4848 0.801428L11.2766 7.72101C11.0058 8.08071 11.0088 8.57699 11.2839 8.93339L16.8915 16.1986C16.9277 16.2471 16.9548 16.2957 16.9729 16.3443C16.991 16.3929 17 16.4414 17 16.49C17 16.6357 16.9367 16.7571 16.8102 16.8543C16.7018 16.9514 16.5752 17 16.4306 17H13.5566C13.3397 17 13.168 16.9514 13.0415 16.8543C12.9149 16.7571 12.8155 16.66 12.7432 16.5629L9.19709 12.0763C8.79437 11.5668 8.02038 11.5703 7.62236 12.0835L4.14832 16.5629C4.07602 16.66 3.97661 16.7571 3.85008 16.8543C3.72355 16.9514 3.5428 17 3.30781 17H0.569378Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex w-full justify-center">
                  <img src={boostImage} alt="" />
                </div>
                <div
                  style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.64)" }}
                  className="px-[60px] text-center text-[21px] text-white font-medium leading-6"
                >
                  Ethereum Mushboomers automatically pair with Solana
                  Mushboomers if you have both of them when you connect your
                  wallet and start generating 150% Shrooms on each instead of
                  100%
                </div>
                <div className="w-full flex justify-center items-center gap-3 pt-4">
                  <button
                    style={{
                      background:
                        "linear-gradient(92deg, #38005A -0.77%, #2C151E 100.54%)",
                    }}
                    type="button"
                    className="inline-flex w-full justify-center items-center gap-2 rounded-lg  px-3 py-2 text-[18px] leading-[32px] font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto"
                    onClick={() => {
                      if (type === "ETH") {
                        window?.open(
                          "https://blur.io/collection/mushboomers",
                          "_blank"
                        );
                      } else if (type === "SOL") {
                        window?.open(
                          "https://www.tensor.trade/trade/mushboomers",
                          "_blank"
                        );
                      }
                    }}
                  >
                    <img src={tensorIcon} alt="" />
                    <span>GET MUSHBOOMERS</span>
                  </button>
                  <button
                    style={{
                      background:
                        "linear-gradient(91deg, #9AFF1A -0.78%, #FCE61C 101.55%)",
                    }}
                    type="button"
                    className="min-w-[247px] inline-flex justify-center items-center gap-2 rounded-lg  px-3 py-2 text-[18px] leading-[32px] font-semibold text-[#252525] shadow-sm sm:ml-3 sm:w-auto"
                    onClick={() => {
                      if (type === "ETH") {
                        window?.open("https://blur.io/portfolio", "_blank");
                      } else if (type === "SOL") {
                        window?.open(
                          "https://www.tensor.trade/portfolio",
                          "_blank"
                        );
                      }
                    }}
                  >
                    <span>UNLISTED</span>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
