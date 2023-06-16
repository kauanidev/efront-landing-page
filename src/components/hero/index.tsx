export const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between mt-10 mb-10 lg:mb-0 lg:mt-28">
      <div className="w-full lg:max-w-[592px]">
        <div className="flex items-center  gap-2 bg-small-text border border-primary-dark rounded-full px-8 py-2.5 w-max">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6V13.5" stroke="#884FFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.08118 20.25C5.83161 19.099 6.85734 18.1534 8.06546 17.4989C9.27357 16.8444 10.6259 16.5016 11.9999 16.5016C13.374 16.5016 14.7263 16.8444 15.9344 17.4989C17.1425 18.1534 18.1682 19.099 18.9187 20.25" stroke="#884FFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 6L12 9L3 6L12 3L21 6Z" stroke="#884FFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.8719 7.70627C16.5599 8.45756 17.0144 9.39278 17.1801 10.3979C17.3458 11.4031 17.2155 12.4347 16.805 13.3671C16.3946 14.2994 15.7218 15.0922 14.8686 15.6488C14.0154 16.2055 13.0187 16.5018 12 16.5018C10.9813 16.5018 9.9846 16.2055 9.13141 15.6488C8.27822 15.0922 7.6054 14.2994 7.19497 13.3671C6.78453 12.4347 6.65422 11.4031 6.81991 10.3979C6.98561 9.39278 7.44015 8.45756 8.12813 7.70627" stroke="#884FFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span className="font-medium text-white">Junte-se a +4.000 membros</span>
        </div>

        <h1 className="font-semibold font-title text-white my-6 sm:my-10 text-4xl sm:text-5xl leading-[133%]">
          Comece a estudar{" "}
          <span className="text-primary">frontend</span> do zero com uma linguagem simples
        </h1>
        <p className="text-gray text-lg sm:text-[26px] w-full lg:max-w-[550px]">
        Trabalhe de casa, usando as tecnologias
        mais requisitadas do mercado frontend.
        </p>
      </div>
      
      <div className="w-full lg:max-w-[520px] bg-white p-6 sm:p-8 sm:pb-10 rounded">
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="rounded px-4 sm:px-7 py-1 sm:py-2 font-title font-semibold sm:text-lg bg-background text-white">85% OFF</span>
          <p className="font-medium text-sm sm:text-lg text-small-text">Por tempo limitado</p>
        </div>

        <div className="font-title font-semibold mt-14 mb-10 lg:mb-[74px]">
          <p className="text-xl sm:text-2xl">de <s>R$ 100,00</s> por</p>
          <p className="text-6xl sm:text-7xl sm:leading-[150%]">R$ 15,00</p>
        </div>

        <button className="bg-primary text-white w-full h-14 sm:h-16 rounded sm:text-xl font-title hover:bg-primary/80 transition-colors">
          GARANTIR EBOOK
        </button>
        <p className="text-small-text font-medium text-sm sm:text-lg text-center mt-6">
          Cartão de crédito, Boleto à vista, PayPal e Pix
        </p>
      </div>
    </section>
  )
}