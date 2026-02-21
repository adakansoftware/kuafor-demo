import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Saç Kesim & Tasarım",
    price: "250 TL'den başlayan",
    description:
      "Yüz şeklinize ve tarzınıza uygun profesyonel saç kesim ve tasarım hizmeti.",
    image: "/images/service-haircut.jpg",
  },
  {
    title: "Saç Boyama",
    price: "400 TL'den başlayan",
    description:
      "Ombre, balyaj, röfle ve tekli renk uygulamalarıyla istediğiniz tona kavuşun.",
    image: "/images/service-coloring.jpg",
  },
  {
    title: "Keratin Bakımı",
    price: "800 TL'den başlayan",
    description:
      "Saçlarınıza derinlemesine beslenme ve pürüzsüz bir görünüm kazandırın.",
    image: "/images/service-keratin.jpg",
  },
]

export function FeaturedServices() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Hizmetlerimiz
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Öne Çıkan Hizmetler
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            En çok tercih edilen hizmetlerimizle tanışın.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <span className="text-sm font-medium text-accent">
                    {service.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href="/randevu"
                  className="mt-4 inline-block rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:opacity-90"
                >
                  Randevu Al
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/hizmetler"
            className="inline-block rounded-sm border border-border px-8 py-3 text-sm font-medium uppercase tracking-wider text-foreground transition-all duration-200 hover:border-accent hover:text-accent"
          >
            Tüm Hizmetleri Gör
          </Link>
        </div>
      </div>
    </section>
  )
}
