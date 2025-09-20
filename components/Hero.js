import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-28 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Reliable technical repairs and installations
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            We handle electrical works, appliance repair, home network setup and
            fast maintenance for homes and businesses. Honest pricing and a
            workmanship guarantee.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="#contact" className="btn w-full sm:w-auto text-center">
              Request a quote
            </a>
            <div className="text-sm sm:text-base text-slate-600 text-center sm:text-left">
              or call{" "}
              <a
                href="tel:+97145761731"
                className="text-primary font-medium whitespace-nowrap"
              >
                +971 4 576 1731
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="w-full max-w-md rounded-xl overflow-hidden">
            <Image
              src="/services.png"
              alt="Rustamjonovich services"
              width={500}
              height={400}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
