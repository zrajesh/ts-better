// Good ✅
interface CardProps extends React.ComponentProps<"div"> {}

// Bad ❌
interface CardProps {
    className?: string;
    children: React.ReactNode[];
    title?: string;
    onClick?: (e: React.MouseEvent) => void;
}

export function Card(props:CardProps) {
    return (
        <div className={`someclass ${props?.className}`}>
            {props.children}
        </div>
    )
}
