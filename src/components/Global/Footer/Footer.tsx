import Image from "next/image"
import { Container } from "../Container"
import { Contacts } from "./Contacts"
import { Socials } from "./Socials"
import { Copyright } from "./Copyright"
import { ItemNav } from "../Header/components/ItemNav"
import { ArrayLinks } from "./ArrayLinks"

export function Footer() {
  return (
    <footer className="bg-blue pt-20 pb-4">
      <Container>
        <div className="flex justify-between items-start">
          <div className="space-y-10">
            <Image
              src={"svg/logo-white.svg"}
              width={72}
              height={61}
              alt="Logo do Hotel Daifa"
            />
            <p className="text-gray-50 max-w-80">
              Profa. Maria Júlia Franco, 294 – Prainha, Florianópolis – SC,
              88020-280
            </p>
            <div className="flex items-center gap-8">
              <Socials />
            </div>
            <div>
              <Contacts />
            </div>
          </div>
          <div className="flex justify-between gap-14">
            {ArrayLinks.map((section) => (
              <div key={section.page} className="space-y-6">
                <ItemNav color="secondary" bold link="/">
                  {section.page}
                </ItemNav>
                {section.links &&
                  section.links.map((item) => (
                    <ItemNav color="secondary" key={item.name} link={item.link}>
                      {item.name}
                    </ItemNav>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <Copyright />
      </Container>
    </footer>
  )
}
