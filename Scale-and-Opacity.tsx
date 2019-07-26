import { Override, Data, transform, Animatable, animate } from "framer"

const data = Data({
    descriptionBlockOpacity: Animatable(0),
})

export function Hover(): Override {
    return {
        whileHover: {
            scale: 1.1,
        },
        onHoverStart: () => {
            animate.easeOut(data.descriptionBlockOpacity, 1, {
                duration: 0.2,
            })
        },
        onHoverEnd: () => {
            animate.easeOut(data.descriptionBlockOpacity, 0, {
                duration: 0.2,
            })
        },
    }
}

export const Description: Override = props => {
    return {
        opacity: data.descriptionBlockOpacity,
    }
}
