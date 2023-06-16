export const Header = () => {
  return (
    <section>
      <div className='bg-primary w-full h-[50px] flex items-center justify-center'>
        <p className="text-white text-center sm:text-lg">
          Aproveite os últimos dias de promoção
        </p>
      </div>
      <header className="container mx-auto flex justify-between py-8">
        <img src="/logo.svg" alt="Logo" />
        <button className="text-white font-semibold border border-primary py-3.5 px-4 sm:px-6 rounded hover:bg-primary transition-colors">
          GARANTIR EBOOK
        </button>
      </header>
    </section>
  )
}