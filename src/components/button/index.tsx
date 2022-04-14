import {ContainerButton} from './styles';

interface IButtonProps {
    value: string;
    onClick: () => void;
    top?: string;
}

export function Button(properties: IButtonProps) {
    const { value, onClick, top } = properties;
    return (
        <>
            <ContainerButton
                onClick={onClick}
                top={top}
            >
                <strong>
                    {value}
                </strong>
            </ContainerButton>
        </>
    );
}