export const Footer = () => {
  return (
    <footer className="bg-small-text w-full mt-auto">
      <div className="text-center container mx-auto flex items-center justify-between text-white gap-2 md:gap-0 p-2 md:py-0 md:h-[54px] flex-col md:flex-row">
        <p>Copyright © 2023 <a className="font-title text-primary font-semibold" href="https://kauani.dev" target="_blank">kauani.dev</a> Todos os direitos reservados.</p>

        <p className="flex items-center gap-4 font-medium">
          Powered by
          <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.536 3.664C7.2 3.664 6.936 3.712 6.744 3.808C6.568 3.904 6.44 4.12 6.36 4.456C6.296 4.792 6.264 5.328 6.264 6.064V8.416C6.264 9.024 6.168 9.552 5.976 10C5.8 10.432 5.592 10.784 5.352 11.056C5.112 11.328 4.888 11.536 4.68 11.68C4.856 11.808 5.064 12.008 5.304 12.28C5.56 12.536 5.784 12.856 5.976 13.24C6.168 13.608 6.264 14.024 6.264 14.488V17.368C6.264 18.088 6.296 18.616 6.36 18.952C6.44 19.288 6.568 19.504 6.744 19.6C6.936 19.696 7.2 19.744 7.536 19.744H8.424V22.672H6.528C6.08 22.672 5.632 22.664 5.184 22.648C4.752 22.632 4.352 22.544 3.984 22.384C3.616 22.24 3.32 21.96 3.096 21.544C2.888 21.144 2.784 20.56 2.784 19.792V15.832C2.784 15.352 2.712 14.904 2.568 14.488C2.424 14.056 2.208 13.704 1.92 13.432C1.632 13.16 1.272 13.024 0.84 13.024V10.24C1.272 10.224 1.632 10.088 1.92 9.832C2.208 9.56 2.424 9.216 2.568 8.8C2.712 8.368 2.784 7.912 2.784 7.432V3.64C2.784 2.872 2.888 2.288 3.096 1.888C3.304 1.488 3.584 1.208 3.936 1.048C4.304 0.888 4.712 0.799999 5.16 0.783998C5.608 0.751999 6.064 0.735999 6.528 0.735999H8.424V3.664H7.536ZM25.4295 11.896C25.4295 13.528 25.2295 15.056 24.8295 16.48C24.4455 17.904 23.9495 19.168 23.3415 20.272C22.7335 21.392 22.0855 22.312 21.3975 23.032L18.6375 21.76C19.2615 21.04 19.8215 20.192 20.3175 19.216C20.8135 18.256 21.2055 17.168 21.4935 15.952C21.7815 14.72 21.9255 13.368 21.9255 11.896C21.9255 10.424 21.7815 9.08 21.4935 7.864C21.2055 6.632 20.8135 5.536 20.3175 4.576C19.8215 3.6 19.2615 2.76 18.6375 2.056L21.3975 0.759999C22.0855 1.48 22.7335 2.4 23.3415 3.52C23.9495 4.64 24.4455 5.912 24.8295 7.336C25.2295 8.744 25.4295 10.264 25.4295 11.896Z" fill="#884FFE"/>
          </svg>
        </p>
      </div>
    </footer>
  )
}