import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Bella Saç & Güzellik Salonu",
  description:
    "Saç kesim, boyama, keratin bakımı, fön şekillendirme ve kaynak işlemleri. Premium saç bakım hizmetlerimizi keşfedin.",
}

const services = [
  {
    title: "Saç Kesim & Tasarım",
    price: "250 TL",
    description:
      "Yüz şeklinize, yaşam tarzınıza ve kişisel tercihinize uygun profesyonel saç kesim hizmeti. Uzman stilistlerimiz en son trendleri takip ederek size en uygun modeli belirler. Kadın ve erkek saç kesimi, katmanlı kesim, küt kesim ve daha fazlası için bize danışın.",
    image: "/images/service-haircut.jpg",
    features: [
      "Kişiye özel stil danışmanlığı",
      "Yüz analizi ile model belirleme",
      "Yıkama ve fön dahil",
      "Kadın ve erkek saç kesimi",
    ],
  },
  {
    title: "Saç Boyama",
    price: "400 TL",
    description:
      "Dünyaca ünlü boya markaları kullanarak saçlarınıza istediğiniz rengi veriyoruz. Ombre, balyaj, röfle, dip boya, tekli renk ve özel renk karışımları ile hayalinizdeki saç rengine kavuşun. Renk sonrası bakım danışmanlığı da hizmetimize dahildir.",
    image: "/images/service-coloring.jpg",
    features: [
      "Premium boya ürünleri",
      "Ombre & balyaj uzmanlığı",
      "Renk düzeltme hizmeti",
      "Bakım danışmanlığı dahil",
    ],
  },
  {
    title: "Keratin Bakımı",
    price: "800 TL",
    description:
      "Brezilya keratin bakımı ile saçlarınıza yoğun nem ve beslenme sağlıyoruz. İşlem sonrası saçlarınız ipek gibi pürüzsüz, parlak ve kolay şekil alan bir yapıya kavuşur. Kıvırcık, kabarık ve yıpranmış saçlar için ideal bir çözüm sunar.",
    image: "/images/service-keratin.jpg",
    features: [
      "Brezilya keratin tekniği",
      "4-6 ay etki süresi",
      "Fön süresini kısaltır",
      "Saç sağlığını korur",
    ],
  },
  {
    title: "Fön & Şekillendirme",
    price: "150 TL",
    description:
      "Özel günleriniz veya günlük bakımınız için profesyonel fön ve saç şekillendirme hizmeti. Düz fön, hacimli fön, maşa ile dalgalar veya topuz gibi özel modeller uzman ellerle şekillendirilir. Davet, düğün ve etkinlikler için özel paketlerimiz mevcuttur.",
    image: "/images/service-blowdry.jpg",
    features: [
      "Özel gün şekillendirme",
      "Isıdan koruma uygulaması",
      "Hacimli ve düz fön seçenekleri",
      "Topuz ve örgü modelleri",
    ],
  },
  {
    title: "Kaynak İşlemleri",
    price: "1.500 TL",
    description:
      "Doğal görünümlü kaynak saç uygulamaları ile saçlarınıza istediğiniz uzunluğu ve hacmi kazandırın. Mikro kaynak, boncuk kaynak ve keratin kaynak yöntemlerinden size en uygun olanı uzman ekibimiz belirler. %100 doğal saç kullanılır.",
    image: "/images/service-extensions.jpg",
    features: [
      "%100 doğal insan saçı",
      "Mikro & boncuk kaynak",
      "Doğal görünüm garantisi",
      "Bakım eğitimi dahil",
    ],
  },
]

export default function HizmetlerPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Hizmetlerimiz
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
            Premium Saç Bakım Hizmetleri
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
            Uzman ekibimiz ve kaliteli ürünlerimizle her zaman en iyi sonucu elde etmenizi sağlıyoruz.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-4">
                    <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                      {service.title}
                    </h2>
                    <span className="rounded-sm bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                      {service.price}
                    </span>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-3 w-3"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/randevu"
                    className="mt-8 inline-block rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:opacity-90"
                  >
                    Bu Hizmete Randevu Al
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Hangi Hizmeti Seçeceğinize Karar Veremediniz mi?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Uzman ekibimiz size en uygun hizmeti belirlemek için danışmanlık sunmaktadır. Bizi arayın veya randevu alın.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/randevu"
              className="rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-200 hover:opacity-90"
            >
              Randevu Al
            </Link>
            <a
              href="tel:+902125550088"
              className="rounded-sm border border-border px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground transition-all duration-200 hover:border-accent hover:text-accent"
            >
              +90 (212) 555 00 88
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
