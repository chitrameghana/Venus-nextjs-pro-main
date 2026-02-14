'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "8897416165"; // WhatsApp number in international format (digits only). If needed, prepend country code (e.g. 91...).

  // Render our own WhatsApp floating button to ensure the icon displays correctly.
  // This is a reliable fallback instead of the external Picky Assist widget.

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-999">
      <div className="flex items-center gap-2.5">
        {/* Custom WhatsApp floating button (reliable display) */}
        <Link
          href={whatsappNumber ? `https://api.whatsapp.com/send?phone=${whatsappNumber}` : "https://web.whatsapp.com/"}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Open WhatsApp"
          className="inline-flex items-center justify-center bg-[#16be45] hover:bg-[#14b444] text-white rounded-full w-14 h-14"
          style={{ boxShadow: '0 18px 50px rgba(22,190,69,0.28)', filter: 'drop-shadow(0 12px 40px rgba(22,190,69,0.28))' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M20.52 3.48A11.93 11.93 0 0012.01.5C6.14.5 1.37 5.27 1.37 11.15c0 1.96.52 3.86 1.51 5.55L.5 23.5l6.97-2.28a11.6 11.6 0 005.54 1.36h.01c5.87 0 10.64-4.77 10.64-10.65 0-2.84-1.1-5.5-3.15-7.45z" fill="#fff" opacity="0.001"/>
            <path d="M17.59 14.37c-.31-.16-1.84-.9-2.12-1-.29-.12-.5-.16-.71.16s-.81 1-.99 1.2c-.18.2-.36.23-.67.08-.31-.16-1.31-.48-2.49-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.15-.63.15-.14.34-.36.51-.54.17-.18.23-.3.35-.5.12-.19.06-.36-.03-.52-.09-.16-.71-1.7-.98-2.33-.26-.61-.53-.53-.71-.54l-.6-.01c-.2 0-.52.07-.79.36-.27.29-1.03 1-1.03 2.45 0 1.45 1.05 2.86 1.2 3.06.15.2 2.06 3.33 5 4.67 2.94 1.34 2.94.89 3.47.84.53-.05 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.13-.27-.2-.58-.36z" fill="#fff"/>
            <path d="M20.52 3.48A11.93 11.93 0 0012.01.5C6.14.5 1.37 5.27 1.37 11.15c0 1.96.52 3.86 1.51 5.55L.5 23.5l6.97-2.28a11.6 11.6 0 005.54 1.36h.01c5.87 0 10.64-4.77 10.64-10.65 0-2.84-1.1-5.5-3.15-7.45z" stroke="rgba(0,0,0,0.08)" strokeWidth="0" fill="none"/>
          </svg>
        </Link>
        {isVisible && (
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="back-to-top flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#102C46] text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
          >
            <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
          </div>
        )}
      </div>
    </div>
  );
}
