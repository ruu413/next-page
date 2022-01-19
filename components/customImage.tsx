import styled from "styled-components"
import NextImage from "next/image"
import { ImageProps } from "next/dist/client/image"
import React, { CSSProperties } from "react"

const ImageWrapper = styled.div`
  position: relative !important;
  > span {
    position: unset !important;
    height: 100%;
  }
`

const InnerImage = styled(NextImage)`
  object-fit: contain;
  width: auto !important;
  position: relative !important;
  height: 100% !important;
`
interface StyleProp {
  style: CSSProperties
}
type ImagePropsWithStyle = ImageProps & StyleProp

// https://github.com/vercel/next.js/discussions/18739#discussioncomment-344932
// https://stackoverflow.com/a/65134645/8777320
const CustomImage: React.FC<ImagePropsWithStyle> = ({
  style,
  className,
  ...props
}) => {
  if (props.hasOwnProperty("width") && props.hasOwnProperty("height")) {
    return (
      <NextImage
        className={className}
        {...props}
        width={props.width}
        height={props.height}
      />
    )
  } else {
    return (
      <span className={className}>
        <ImageWrapper>
          <InnerImage {...props} layout="fill" />
        </ImageWrapper>
      </span>
    )
  }
}
export default CustomImage
