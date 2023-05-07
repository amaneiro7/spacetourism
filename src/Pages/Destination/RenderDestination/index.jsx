import { Article, BodyText, Image, Section, WrapperInfo } from './style'

export const RenderDestintaion = ({ name, images, description, distance, travel, children }) => {
  return (
    <Section>
      <Image src={images.png} alt={name} />
      <Article>
        {children}
        <h2>{name}</h2>
        <BodyText>{description}</BodyText>
        <WrapperInfo>
          <div>
            <small>AVG. DISTANCE</small>
            <h6>{distance}</h6>
          </div>
          <div>
            <small>EST. TRAVEL TIME</small>
            <h6>{travel}</h6>
          </div>
        </WrapperInfo>
      </Article>
    </Section>
  )
}
