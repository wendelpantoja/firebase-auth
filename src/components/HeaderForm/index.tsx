import { Header } from "./styles"

interface TypeHeaderForm {
    text: string;
    image?: string;
    description?: string;
}

export function HeaderForm({ text, image, description }: TypeHeaderForm) {
    return (
        <Header>
            <div>
                {image && <img src={image} alt="" />}
                <p>{ text }</p>
            </div>
            {description && <p>{ description }</p>}
        </Header>
    )
}