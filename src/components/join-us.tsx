import { Instagram } from "lucide-react"

export function JoinUs() {
  return (
    <div className="bg-black text-white w-99">
      {/* Blue line at the top */}
      <div className="h-[2px] w-[100vw]"></div>

      <div className="p-4">
        {/* JOIN US text */}
        <h3 className="text-lg font-medium mb-4">JOIN US</h3>

        {/* CONNECT WITH US text */}
        <h3 className="text-lg font-medium mb-3">CONNECT WITH US</h3>

        {/* Social media icons */}
        <div className="flex gap-2">
          {/* Twitter/X icon */}
          <div className="w-10 h-10 border-2 border-[#6b3b6b] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 4L12 10M12 10L6 16M12 10L6 4M12 10L18 16"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Instagram icon */}
          <div className="w-10 h-10 border-2 border-[#6b3b6b] flex items-center justify-center">
            <Instagram className="w-5 h-5" />
          </div>

          {/* Discord icon */}
          <div className="w-10 h-10 border-2 border-[#6b3b6b] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.09 9.15C8.61 9.15 8.25 9.57 8.25 10.05C8.25 10.53 8.61 10.95 9.09 10.95C9.57 10.95 9.93 10.53 9.93 10.05C9.93 9.57 9.57 9.15 9.09 9.15ZM14.91 9.15C14.43 9.15 14.07 9.57 14.07 10.05C14.07 10.53 14.43 10.95 14.91 10.95C15.39 10.95 15.75 10.53 15.75 10.05C15.75 9.57 15.39 9.15 14.91 9.15Z"
                fill="white"
              />
              <path
                d="M19.27 4.68C17.82 4.01 16.24 3.53 14.56 3.27C14.56 3.27 14.39 3.58 14.25 3.84C12.41 3.6 10.59 3.6 8.76 3.84C8.62 3.58 8.44 3.27 8.44 3.27C6.76 3.53 5.18 4.01 3.73 4.68C0.54 9.55 -0.33 14.28 0.1 18.93C2.03 20.43 3.9 21.31 5.74 21.88C6.18 21.26 6.58 20.61 6.92 19.92C6.25 19.69 5.61 19.39 5.01 19.05C5.15 18.95 5.29 18.84 5.42 18.73C9.03 20.42 12.97 20.42 16.54 18.73C16.68 18.84 16.81 18.95 16.95 19.05C16.35 19.39 15.71 19.69 15.04 19.92C15.38 20.61 15.78 21.26 16.22 21.88C18.06 21.31 19.93 20.43 21.86 18.93C22.37 13.53 20.96 8.85 19.27 4.68ZM7.34 16.23C6.26 16.23 5.37 15.22 5.37 13.99C5.37 12.76 6.24 11.75 7.34 11.75C8.44 11.75 9.33 12.76 9.31 13.99C9.31 15.22 8.44 16.23 7.34 16.23ZM16.66 16.23C15.58 16.23 14.69 15.22 14.69 13.99C14.69 12.76 15.56 11.75 16.66 11.75C17.76 11.75 18.65 12.76 18.63 13.99C18.63 15.22 17.76 16.23 16.66 16.23Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

