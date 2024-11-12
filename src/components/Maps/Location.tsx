import { Container } from "../Global/Container"
import { TagSpan } from "../Global/TagSpan"
import { Maps } from "./Maps"

export function Location() {
  return (
    <>
      <Container>
        <div className="text-center space-y-6">
          <TagSpan>LOCALIZAÇÃO</TagSpan>
          <h3 className="max-w-sm mx-auto text-gray-700">
            Perto de tudo o que Florianópolis oferece
          </h3>
        </div>
        <div>
          <Maps />
        </div>
      </Container>
    </>
  )
}
